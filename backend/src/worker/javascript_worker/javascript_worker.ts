
import logger from "../../logging/logger.js";

export const executeJavaScript = async(code : string, user_id: string, submission_id: string)=>{
    logger.info('JavaScript execution requested', { user_id, submission_id });
}