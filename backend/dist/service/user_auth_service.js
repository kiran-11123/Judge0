import user_model from "../db_connection/users_schema.js";
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import logger from "../logging/logger.js";
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is missing");
}
export const SignIn_Service = async (email, password) => {
    try {
        logger.info('Authenticating user', { email });
        const check_user = await user_model.findOne({ email });
        if (!check_user) {
            logger.warn('Sign in failed: user not found', { email });
            throw new Error('User Not Found');
        }
        const password_check = await bcrypt.compare(password, check_user.password);
        if (!password_check) {
            logger.warn('Sign in failed: incorrect password', { email });
            throw new Error('Credentials Wrong');
        }
        const user_details = { email: check_user.email, user_id: check_user._id };
        const token = jwt.sign(user_details, JWT_SECRET, { expiresIn: '1h' });
        logger.info('User authenticated successfully', { email });
        return token;
    }
    catch (er) {
        logger.error('Error during sign in', { error: er });
        throw er;
    }
};
export const SignUp_Service = async (email, username, password) => {
    try {
        logger.info('Registering new user', { email, username });
        const existing_user = await user_model.findOne({
            $or: [
                { email },
                { username }
            ]
        });
        if (existing_user) {
            if (existing_user.email === email) {
                logger.warn('Sign up failed: user already registered', { email });
                throw new Error("User Already Registered");
            }
            if (existing_user.username === username) {
                logger.warn('Sign up failed: username already taken', { username });
                throw new Error("Username Already Taken");
            }
        }
        const hash_password = await bcrypt.hash(password, 10);
        const new_user = new user_model({
            email,
            username,
            password: hash_password
        });
        await new_user.save();
        logger.info('User registered successfully', { email, username });
        return true;
    }
    catch (er) {
        logger.error('Error during sign up', { error: er });
        throw er;
    }
};
//# sourceMappingURL=user_auth_service.js.map