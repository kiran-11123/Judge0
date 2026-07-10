import express from 'express'
import Authentication_token from '../middleware/Auth_middleware.js';
import { Code_Submission_Controller , Get_User_Codes_Controller ,UploadTemplateController } from '../controller/user_code_controller.js';
const Code_Router = express.Router();


Code_Router.post('/submit' , Authentication_token , Code_Submission_Controller );
Code_Router.get('/get_data' , Authentication_token , Get_User_Codes_Controller);
Code_Router.post('/upload_template' , Authentication_token , UploadTemplateController );








export default Code_Router;