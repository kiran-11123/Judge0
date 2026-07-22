import cron from "node-cron";
import path from "path";
import fs from "fs";
import logger from "./logger.js";

export default function RunLogRetentionJob() {

    cron.schedule("* * * * *", () => {

        logger.info("Log retention job started");

        try {

            const logPath = path.join(process.cwd(), "src", "logs");

            const files = fs.readdirSync(logPath);

            logger.info(`Found ${files.length} log files`);

            const retentionDays = 7;
            const now = Date.now();

            files.forEach((file) => {

                const filePath = path.join(logPath, file);

                const stats = fs.statSync(filePath);

                const age =
                    (now - stats.mtime.getTime()) /
                    (1000 * 60 * 60 * 24);

                if (stats.isFile() && age > retentionDays) {

                    fs.unlinkSync(filePath);

                    logger.info(`Deleted ${file}`);
                }

            });

        } catch (error) {

            logger.error("Log retention job failed", {
                error: error instanceof Error ? error.message : String(error)
            });

        }

    });

}