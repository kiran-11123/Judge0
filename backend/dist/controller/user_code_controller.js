import { Get_User_Codes_Service, Code_Submission_Service } from "../service/user_code_service.js";
export const Code_Submission_Controller = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
        const problem_id = req.body.problem_id;
        const user_id = req.user.user_id;
        const title = req.body.title;
        const code = req.body.code;
        const language = req.body.language;
        if (!title || !code || !language) {
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }
        const result = await Code_Submission_Service(user_id, problem_id, title, language, code);
        return res.status(200).json({
            message: 'Code Saved Successfully',
            data: result
        });
    }
    catch (er) {
        if (er.message === 'Invalid User ID') {
            return res.status(403).json({
                message: 'Invalid User ID'
            });
        }
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};
export const Get_User_Codes_Controller = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
        const user_id = req.user.user_id;
        const result = await Get_User_Codes_Service(user_id);
        return res.status(200).json({
            message: "Data Fetched Successfully"
        });
    }
    catch (er) {
        if (er.message === 'Invalid User ID') {
            return res.status(403).json({
                message: 'Invalid User ID'
            });
        }
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};
//# sourceMappingURL=user_code_controller.js.map