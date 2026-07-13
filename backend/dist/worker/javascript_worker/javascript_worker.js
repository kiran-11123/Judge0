import logger from "../../logging/logger.js";
export const executeJavaScript = async (code, user_id, submission_id) => {
    logger.info('JavaScript execution requested', { user_id, submission_id });
};
//# sourceMappingURL=javascript_worker.js.map