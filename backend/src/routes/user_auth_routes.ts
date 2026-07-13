import express from 'express'
import { SignIn_Controller, SignUp_Controller } from '../controller/user_auth_controller.js';
import logger from '../logging/logger.js';

const Auth_Router = express.Router();
logger.info('Auth routes initialized');

Auth_Router.post('/signin' , SignIn_Controller);
Auth_Router.post('/signup' , SignUp_Controller);

export default Auth_Router;