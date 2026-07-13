import { CreateProblem, AddTestCaseToProblem, GetAllProblems, GetProblemById } from "../service/problem_service.js";
import type { Request, Response } from "express";
import logger from "../logging/logger.js";

export const createProblemController = async (
    req: Request,
    res: Response
) => {
    logger.info('Create problem request received', { body: req.body });

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
            logger.warn('Create problem validation failed: missing required fields');
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        problem_title = problem_title.trim();
        problem_description = problem_description.trim();
        constraints = constraints.trim();
        problem_difficulty = problem_difficulty.trim().toLowerCase();

        if (!["easy", "medium", "hard"].includes(problem_difficulty)) {
            logger.warn('Invalid problem difficulty', { difficulty: problem_difficulty });
            return res.status(400).json({
                message: "Invalid problem difficulty"
            });
        }

        if (
            !function_signature.method_name ||
            !function_signature.return_type
        ) {
            logger.warn('Invalid function signature');
            return res.status(400).json({
                message: "Invalid function signature"
            });
        }

        if (!Array.isArray(function_signature.parameters)) {
            logger.warn('Parameters must be an array');
            return res.status(400).json({
                message: "Parameters must be an array"
            });
        }

        for (const parameter of function_signature.parameters) {
            if (!parameter.name || !parameter.type) {
                logger.warn('Every parameter must contain name and type');
                return res.status(400).json({
                    message: "Every parameter must contain name and type"
                });
            }
        }

        if (!Array.isArray(testcases) || testcases.length === 0) {
            logger.error('Create problem failed: at least one testcase is required');
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

        logger.info('Problem created successfully', { problemTitle: problem_title });

        return res.status(201).json({
            message: "Problem created successfully",
            problem: newProblem
        });
    } catch (err: any) {
        if (
            err.message === "duplicate key error" ||
            err.message === "Problem with this title already exists"
        ) {
            logger.warn('Problem creation failed because title already exists', { title: req.body.problem_title });
            return res.status(400).json({
                message: "Problem title already exists"
            });
        }

        logger.error('Failed to create problem', { error: err.message, stack: err.stack });
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const GetAllProblemsController = async (req: Request, res: Response) => {
    logger.info('Get all problems request received', { path: req.path });

    try {
        const problems = await GetAllProblems();
        logger.info('Problems fetched successfully', { count: problems?.length ?? 0 });

        return res.status(200).json({
            message: "Problems fetched successfully",
            problems: problems
        });
    } catch (er: any) {
        logger.error('Failed to fetch problems', { error: er.message, stack: er.stack });
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}

export const GetProblemByIdController = async (req: Request, res: Response) => {
    logger.info('Get problem by id request received', { problemId: req.params.problem_id });

    try {
        const { problem_id }: any = req.params;
        const problem = await GetProblemById(problem_id);
        logger.info('Problem fetched successfully', { problemId: problem_id });

        return res.status(200).json({
            message: "Problem fetched successfully",
            problem: problem
        });
    } catch (er: any) {
        if (er.message === "Problem not found") {
            logger.warn('Problem not found', { problemId: req.params.problem_id });
            return res.status(404).json({
                message: "Problem not found"
            });
        }

        logger.error('Failed to fetch problem by id', { error: er.message, stack: er.stack });
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}

export const AddTestCaseToProblemController = async (req: Request, res: Response) => {
    logger.info('Add test case request received', { problemId: req.params.problem_id });

    try {
        const { problem_id }: any = req.params;
        const { input, output, isHidden } = req.body;

        const updated_problem = await AddTestCaseToProblem(problem_id, input, output, isHidden);
        logger.info('Test case added successfully', { problemId: problem_id });

        return res.status(200).json({
            message: "Test case added successfully",
            problem: updated_problem
        });
    } catch (er: any) {
        if (er.message === "Problem not found") {
            logger.warn('Unable to add test case: problem not found', { problemId: req.params.problem_id });
            return res.status(404).json({
                message: "Problem not found"
            });
        }

        logger.error('Failed to add test case', { error: er.message, stack: er.stack });
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}