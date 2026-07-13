import problem_model from "../../db_connection/problem_schema.js";
import mongoose from "mongoose";
import { executeCPP } from "./c_worker.js";
import { generateCPPCode } from "./generateCPPCode.js";
import logger from "../../logging/logger.js";

function normalize(output? : string){

    return (output ?? "")
        .trim()
        .replace(/\s+/g, "");
     
}

function compareOutputs(actual :string , expected : string){

    try{

         return JSON.stringify(JSON.parse(actual.trim())) ===
               JSON.stringify(JSON.parse(expected.trim()));

    }
    catch(er){
           
        return normalize(actual ) == normalize(expected);
    }
     
}

export async function Judge_C(problem_id :string , 
    user_id : string,
    submission_id  : string,
    code : string
){
    logger.info('Starting C++ judge run', { problemId: problem_id, submissionId: submission_id, userId: user_id });


    const problem = await problem_model.findOne({_id : new mongoose.Types.ObjectId(problem_id)});

    if(!problem) {
        throw new Error('Problem not found');
    }

    const testcases = problem.testcases;
    const time_limit = problem.time_limit;
    const space_limit = problem.memory_limit;

    if(!testcases || testcases.length===0) {
        throw new Error('Testcases not found')
    }

    let test_cases_passed =0;
    let total_testcases = testcases.length;
       

    for(const testcase of testcases){

        const input = JSON.parse(testcase.input);

        const generateCode =await  generateCPPCode(code , problem.function_signature , input);

        const result = await executeCPP(generateCode , time_limit ,space_limit);



         if(result.exitCode !== 0){

            return {
                status: result.status,
                stderr:result.stderr,
                    passed : test_cases_passed,
                    total : total_testcases
            };

        }



 if (!compareOutputs(result.stdout, testcase.output)) {
    return {
        status: "wrong_answer",
        expected: testcase.output,
        actual: result.stdout,
        passed : test_cases_passed,
        total : total_testcases

    };
}



       test_cases_passed+=1;




           

    }
   
     return {
        status:"accepted",
        passed : test_cases_passed,
        total : total_testcases
    };
}