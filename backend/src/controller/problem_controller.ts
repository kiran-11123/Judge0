import { CreateProblem , AddTestCaseToProblem , GetAllProblems , GetProblemById } from "../service/problem_service.js";
import type {Request , Response} from "express";


export const createProblemController = async (
    req: Request,
    res: Response
) => {

    try {

        let {
            problem_title,
            problem_description,
            function_signature,
            problem_difficulty,
            constraints,
            time_limit,
            memory_limit,
            testcases
        } = req.body;

        if (
            !problem_title ||
            !problem_description ||
            !function_signature ||
            !problem_difficulty ||
            !constraints ||
            !testcases
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        problem_title = problem_title.trim();
        problem_description = problem_description.trim();
        constraints = constraints.trim();
        problem_difficulty = problem_difficulty.trim().toLowerCase();

        if (!["easy", "medium", "hard"].includes(problem_difficulty)) {
            return res.status(400).json({
                message: "Invalid problem difficulty"
            });
        }

        if (
            !function_signature.method_name ||
            !function_signature.return_type
        ) {
            return res.status(400).json({
                message: "Invalid function signature"
            });
        }

        if (
            !Array.isArray(function_signature.parameters)
        ) {
            return res.status(400).json({
                message: "Parameters must be an array"
            });
        }

        for (const parameter of function_signature.parameters) {

            if (!parameter.name || !parameter.type) {

                return res.status(400).json({
                    message: "Every parameter must contain name and type"
                });

            }

        }

        if (!Array.isArray(testcases) || testcases.length === 0) {
            return res.status(400).json({
                message: "At least one testcase is required"
            });
        }

        const newProblem = await CreateProblem(
            problem_title,
            problem_description,
            function_signature,
            problem_difficulty,
            constraints,
            time_limit,
            memory_limit,
            testcases
        );

        return res.status(201).json({
            message: "Problem created successfully",
            problem: newProblem
        });

    } catch (err: any) {

        if (
            err.message === "duplicate key error" ||
            err.message === "Problem with this title already exists"
        ) {
            return res.status(400).json({
                message: "Problem title already exists"
            });
        }

        console.error(err);

        return res.status(500).json({
            message: "Internal server error"
        });

    }

};


export const GetAllProblemsController = async(req :Request , res :Response) =>{

    try{

        const problems = await GetAllProblems();

        return res.status(200).json({
            message : "Problems fetched successfully",
            problems : problems
        });
    }

    catch(er :any){
        return res.status(500).json({
            message :'Internal server error'
        })
    }
}


export const GetProblemByIdController = async(req :Request , res :Response) =>{

    try{

        const { problem_id } : any = req.params;

       

        const problem = await GetProblemById(problem_id);

        return res.status(200).json({
            message : "Problem fetched successfully",
            problem : problem
        });
    }

    catch(er :any){
        if(er.message === "Problem not found"){
            return res.status(404).json({
                message : "Problem not found"
            });
        }

        return res.status(500).json({
            message :'Internal server error'
        })
    }
}


export const AddTestCaseToProblemController = async(req :Request , res :Response) =>{

    try{

        const { problem_id } : any = req.params;

        const { input , output , isHidden } = req.body;

        const updated_problem = await AddTestCaseToProblem(problem_id , input , output , isHidden);

        return res.status(200).json({
            message : "Test case added successfully",
            problem : updated_problem
        });
    }
    catch(er:any){
         
        if(er.message === "Problem not found"){
            return res.status(404).json({
                message : "Problem not found"
            });
        }

        return res.status(500).json({
            message :'Internal server error'
        })
    }
}