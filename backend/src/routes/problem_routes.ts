import express from 'express'
import { AddTestCaseToProblemController , createProblemController , GetAllProblemsController , GetProblemByIdController } from '../controller/problem_controller.js';
import Authentication_token from '../middleware/Auth_middleware.js';
const Problem_Router = express.Router();



Problem_Router.post("/create" , Authentication_token , createProblemController);
Problem_Router.get("/all_problems",Authentication_token , GetAllProblemsController);
Problem_Router.get("/problem/:problem_id" ,Authentication_token , GetProblemByIdController )
Problem_Router.post("/test_case/:problem_id" , Authentication_token , AddTestCaseToProblemController);















export default Problem_Router;