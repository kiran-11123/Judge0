import express from 'express';
import { SignIn_Controller, SignUp_Controller } from '../controller/user_auth_controller.js';
const Auth_Router = express.Router();
Auth_Router.post('/signin', SignIn_Controller);
Auth_Router.post('/signup', SignUp_Controller);
export default Auth_Router;
//# sourceMappingURL=user_auth_routes.js.map