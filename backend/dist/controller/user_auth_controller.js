import { SignIn_Service, SignUp_Service } from "../service/user_auth_service.js";
import logger from "../logging/logger.js";
export const SignIn_Controller = async (req, res) => {
    logger.info('Sign in request received', { email: req.body.email });
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password) {
            logger.warn('Sign in failed: missing credentials');
            return res.status(400).json({
                message: "All Fields Required"
            });
        }
        const token = await SignIn_Service(email, password);
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 3600000
        });
        logger.info('User signed in successfully', { email });
        return res.status(200).json({
            message: 'User Signed In Successfully',
            token: token
        });
    }
    catch (er) {
        if (er.message === 'User Not Found') {
            logger.warn('Sign in failed: user not found', { email: req.body.email });
            return res.status(400).json({
                message: 'User Not Found'
            });
        }
        else if (er.message === 'Credentials Wrong') {
            logger.warn('Sign in failed: invalid credentials', { email: req.body.email });
            return res.status(400).json({
                message: 'Credentials Wrong'
            });
        }
        logger.error('Sign in error', { error: er.message, stack: er.stack });
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};
export const SignUp_Controller = async (req, res) => {
    logger.info('Sign up request received', { email: req.body.email, username: req.body.username });
    try {
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        if (!email || !username || !password) {
            logger.warn('Sign up failed: missing required fields');
            return res.status(400).json({
                message: 'All Fields Required'
            });
        }
        const token = await SignUp_Service(email, username, password);
        logger.info('User registered successfully', { email, username });
        return res.status(201).json({
            message: 'User Registered Successfully',
            token: token
        });
    }
    catch (er) {
        if (er.message === 'User Already Registered') {
            logger.warn('Sign up failed: user already registered', { email: req.body.email });
            return res.status(400).json({
                message: 'User Already Registered'
            });
        }
        else if (er.message === 'Username Already Taken') {
            logger.warn('Sign up failed: username already taken', { username: req.body.username });
            return res.status(400).json({
                message: 'Username Already Taken'
            });
        }
        logger.error('Sign up error', { error: er.message, stack: er.stack });
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};
//# sourceMappingURL=user_auth_controller.js.map