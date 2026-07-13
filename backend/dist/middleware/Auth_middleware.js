import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
import logger from "../logging/logger.js";
const JWT_SECRET = process.env.JWT_SECRET;
const Authentication_token = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        logger.warn('Authentication failed: token not found', { path: req.path });
        return res.status(401).json({
            message: "Unauthorized : Token Not found.."
        });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (!decoded) {
            logger.warn('Authentication failed: invalid token payload', { path: req.path });
            return res.status(401).json({
                message: "Invalid Token payload."
            });
        }
        req.user = decoded;
        logger.info('Authentication successful', { userId: decoded.user_id, path: req.path });
        next();
    }
    catch (er) {
        logger.error('Authentication error', { error: er, path: req.path });
        return res.status(401).json({
            message: "Invalid Token",
            error: er
        });
    }
};
export default Authentication_token;
//# sourceMappingURL=Auth_middleware.js.map