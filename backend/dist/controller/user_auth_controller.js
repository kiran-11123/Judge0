import { SignIn_Service, SignUp_Service } from "../service/user_auth_service.js";
export const SignIn_Controller = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password) {
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
        return res.status(200).json({
            message: 'User Signed In Successfully',
            token: token
        });
    }
    catch (er) {
        if (er.message === 'User Not Found') {
            return res.status(400).json({
                message: 'User Not Found'
            });
        }
        else if (er.message === 'Credentials Wrong') {
            return res.status(400).json({
                message: 'Credentials Wrong'
            });
        }
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};
export const SignUp_Controller = async (req, res) => {
    try {
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        if (!email || !username || !password) {
            return res.status(400).json({
                message: 'All Fields Required'
            });
        }
        const token = await SignUp_Service(email, username, password);
        return res.status(201).json({
            message: 'User Registered Successfully',
            token: token
        });
    }
    catch (er) {
        if (er.message === 'User Already Registered') {
            return res.status(400).json({
                message: 'User Already Registered'
            });
        }
        else if (er.message === 'Username Already Taken') {
            return res.status(400).json({
                message: 'Username Already Taken'
            });
        }
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};
//# sourceMappingURL=user_auth_controller.js.map