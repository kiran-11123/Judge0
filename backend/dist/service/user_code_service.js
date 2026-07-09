import code_model from "../db_connection/user_programs.js";
import mongoose from "mongoose";
import { codeQueue } from "../worker/bullMQ_consumer.js";
export const Code_Submission_Service = async (user_id, problem_id, title, language, code) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            throw new Error("Invalid User ID");
        }
        if (!mongoose.Types.ObjectId.isValid(problem_id)) {
            throw new Error("Invalid Problem ID");
        }
        const new_user_id = new mongoose.Types.ObjectId(user_id);
        const new_problem_id = new mongoose.Types.ObjectId(problem_id);
        let saved_code = await code_model.findOne({
            user_id: new_user_id,
            problem_id: new_problem_id
        });
        if (!saved_code) {
            saved_code = new code_model({
                user_id: new_user_id,
                problem_id: new_problem_id,
                codes_saved: [],
            });
        }
        saved_code.codes_saved.push({
            title,
            language,
            code
        });
        await saved_code.save();
        const lastSavedCode = saved_code.codes_saved.at(-1);
        if (!lastSavedCode || !lastSavedCode._id) {
            throw new Error("Failed to determine submission ID");
        }
        const submission_id = lastSavedCode._id.toString();
        await codeQueue.add("execute-code", {
            problem_id: new_problem_id,
            user_id: new_user_id,
            submission_id,
            language,
            title,
            code,
        }, {
            attempts: 3,
            backoff: {
                type: "exponential",
                delay: 2000,
            },
        });
    }
    catch (er) {
        throw er;
    }
};
export const Get_User_Codes_Service = async (user_id) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            throw new Error("Invalid User ID");
        }
        const user_id_new = new mongoose.Types.ObjectId(user_id);
        const get_data = await code_model.findOne({
            user_id: user_id_new
        });
        return get_data;
    }
    catch (er) {
        throw er;
    }
};
//# sourceMappingURL=user_code_service.js.map