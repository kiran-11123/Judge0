import problem_model from "../db_connection/problem_schema.js";
import mongoose from "mongoose";
export const CreateProblem = async (problem_title, problem_description, template_code, function_signature, problem_difficulty, constraints, time_limit, memory_limit, test_cases) => {
    try {
        const check_problem = await problem_model.findOne({
            problem_title
        });
        if (check_problem) {
            throw new Error("Problem with this title already exists");
        }
        const new_problem = new problem_model({
            problem_title,
            problem_description,
            template_code,
            function_signature,
            problem_difficulty,
            constraints,
            time_limit: time_limit ?? 1000,
            memory_limit: memory_limit ?? 256,
            testcases: test_cases ?? []
        });
        await new_problem.save();
        return new_problem;
    }
    catch (err) {
        throw err;
    }
};
export const GetAllProblems = async () => {
    try {
        const problems = await problem_model.find({}).select("-testcases");
        return problems;
    }
    catch (er) {
        throw er;
    }
};
export const GetProblemById = async (problem_id) => {
    try {
        const problem = await problem_model.findById(problem_id);
        if (!problem) {
            throw new Error("Problem not found");
        }
        return problem;
    }
    catch (er) {
        throw er;
    }
};
export const AddTestCaseToProblem = async (problem_id, input, output, isHidden) => {
    try {
        const problem_id_new = new mongoose.Types.ObjectId(problem_id);
        const problem = await problem_model.findById(problem_id_new);
        if (!problem) {
            throw new Error("Problem not found");
        }
        problem.testcases.push({
            input,
            output,
            isHidden: isHidden ?? false
        });
        await problem.save();
        return problem;
    }
    catch (er) {
        throw er;
    }
};
//# sourceMappingURL=problem_service.js.map