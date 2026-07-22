import { Get_User_Codes_Service, Code_Submission_Service, UploadProblemTemplateService } from "../service/user_code_service.js";
import type { Request, Response } from "express";
import logger from "../logging/logger.js";

export const Code_Submission_Controller = async (req: Request, res: Response) => {
    logger.info('Code submission request received', { problemId: req.body.problem_id, language: req.body.language });

    try {
        if (!req.user) {
            logger.warn('Code submission rejected: unauthorized');
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const problem_id = req.body.problem_id as string;
        const user_id = req.user.user_id as string;
        const title = req.body.title;
        let code = req.body.code;

        code  = JSON.stringify(code);

        const language = req.body.language;

        if (!title || !code || !language) {
            logger.warn('Code submission rejected: missing fields');
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }

        const result = await Code_Submission_Service(user_id, problem_id, title, language, code);
        logger.info('Code submission service completed', { userId: user_id, problemId: problem_id, language });

        return res.status(200).json({
            message: 'Code Saved Successfully',
            data: result
        });
    } catch (er: any) {
        logger.error('Error while submitting the code', { error: er.message, stack: er.stack });

        if (er.message === 'Invalid User ID') {
            return res.status(403).json({
                message: 'Invalid User ID'
            });
        }

        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

export const Get_User_Codes_Controller = async (req: Request, res: Response) => {
    logger.info('Get user codes request received', { userId: req.user?.user_id });

    try {
        if (!req.user) {
            logger.warn('Get user codes rejected: unauthorized');
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const user_id = req.user.user_id as string;
        const result = await Get_User_Codes_Service(user_id);
        logger.info('User codes fetched successfully', { userId: user_id, count: result?.codes_saved?.length ?? 0 });

        return res.status(200).json({
            message: "Data Fetched Successfully"
        });
    } catch (er: any) {
        if (er.message === 'Invalid User ID') {
            return res.status(403).json({
                message: 'Invalid User ID'
            });
        }

        logger.error('Failed to fetch user codes', { error: er.message, stack: er.stack });
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

export const UploadTemplateController = async (req: Request, res: Response) => {
    logger.info('Upload template request received', { body: req.body });

    try {
        const { problem_id, java, python, cpp, javascript } = req.body;

        if (!problem_id) {
            logger.warn('Template upload failed: problem id missing');
            return res.status(400).json({
                message: 'Problem Id is required'
            });
        }

        await UploadProblemTemplateService(
            problem_id,
            java,
            python,
            cpp,
            javascript
        );
        logger.info('Templates uploaded successfully', { problemId: problem_id });

        return res.status(201).json({
            message: 'Templates created successfully'
        });
    } catch (er: any) {
        if (er.message === 'Problem Not found') {
            logger.warn('Template upload failed: problem not found', { problemId: req.body.problem_id });
            return res.status(400).json({
                message: 'Problem Not found'
            });
        } else if (er.message === 'Java template already exists for this problem.') {
            logger.warn('Template upload failed: java template already exists', { problemId: req.body.problem_id });
            return res.status(400).json({
                message: 'Java template already exists for this problem.'
            });
        } else if (er.message === 'Python template already exists for this problem.') {
            logger.warn('Template upload failed: python template already exists', { problemId: req.body.problem_id });
            return res.status(400).json({
                message: 'Python template already exists for this problem.'
            });
        } else if (er.message === 'C++ template already exists for this problem.') {
            logger.warn('Template upload failed: cpp template already exists', { problemId: req.body.problem_id });
            return res.status(400).json({
                message: 'C++ template already exists for this problem.'
            });
        } else if (er.message === 'JavaScript template already exists for this problem.') {
            logger.warn('Template upload failed: javascript template already exists', { problemId: req.body.problem_id });
            return res.status(400).json({
                message: 'JavaScript template already exists for this problem.'
            });
        }

        logger.error('Template upload error', { error: er.message, stack: er.stack });
        return res.status(500).json({
            message: 'Internal server Error'
        });
    }
}