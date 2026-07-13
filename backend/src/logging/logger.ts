import winston from 'winston'
import path from 'path';
import fs from 'fs'

const date = new Date().toISOString().split("T")[0];
const logsDir = path.join(process.cwd(), "src", "logs");
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    defaultMeta: { service: 'judge0-backend' },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        }),
        new winston.transports.File({
            filename: path.join(logsDir, "error.log"),
            level: "error"
        }),
        new winston.transports.File({
            filename: path.join(logsDir, `backend_${date}.log`)
        })
    ]
})

export default logger