import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const Authentication_token = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized : Token Not found.."
        });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid Token payload."
            });
        }
        req.user = decoded;
        next();
    }
    catch (er) {
        return res.status(401).json({
            message: "Invalid Token",
            error: er
        });
    }
};
export default Authentication_token;
//# sourceMappingURL=Auth_middleware.js.map