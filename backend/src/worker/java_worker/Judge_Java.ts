import mongoose from "mongoose";
import problem_model from "../../db_connection/problem_schema.js";
import { executeJava } from "./java_woker.js";
import { generateJavaCode } from "./generateJavaCode.js";


function normalize(output?: string) {
    return (output ?? "")
        .trim()
        .replace(/\s+/g, "");
}


function compareOutputs(actual: string, expected: string) {
    try {
        return JSON.stringify(JSON.parse(actual.trim())) ===
               JSON.stringify(JSON.parse(expected.trim()));
    } catch {
        return normalize(actual) === normalize(expected);
    }
}


export async function Judge_Java(
    problem_id:string,
    user_id:string,
    submission_id:string,
    code:string,
){


    const problem =
    await problem_model.findById(
        new mongoose.Types.ObjectId(problem_id)
    );


    if(!problem){
        throw new Error("Problem not found");
    }



    const testcases = problem.testcases;
    const time_limit = problem.time_limit;
    const space_limit = problem.memory_limit;







    if(!testcases.length){
        throw new Error("No testcases found");
    }

    

    let test_cases_passed =0;
    let total_testcases = testcases.length;

    for(const testcase of testcases){


        const input = JSON.parse(testcase.input);

        const generatedCode = generateJavaCode(code , problem.function_signature , input);


        const result =
        await executeJava(
            generatedCode,
            time_limit,
            space_limit
        );



        // compilation/runtime error

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