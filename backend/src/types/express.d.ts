import type { UserPayload } from "../types/jwt";

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

export {};