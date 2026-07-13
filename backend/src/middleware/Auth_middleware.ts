import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config();
import type { Request, Response, NextFunction } from 'express';
import type { JwtPayload } from "jsonwebtoken";
import logger from "../logging/logger.js";

interface UserPayload extends JwtPayload {
    email: string;
    user_id: string;
}

const JWT_SECRET = process.env.JWT_SECRET as string;

const Authentication_token = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.token;

    if (!token) {
        logger.warn('Authentication failed: token not found', { path: req.path });
        return res.status(401).json({
            message: "Unauthorized : Token Not found.."
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;

        if (!decoded) {
            logger.warn('Authentication failed: invalid token payload', { path: req.path });
            return res.status(401).json({
                message: "Invalid Token payload."
            });
        }

        req.user = decoded;
        logger.info('Authentication successful', { userId: decoded.user_id, path: req.path });
        next();
    } catch (er) {
        logger.error('Authentication error', { error: er, path: req.path });
        return res.status(401).json({
            message: "Invalid Token",
            error: er
        });
    }
}

export default Authentication_token;


