import fs from "fs/promises";
import crypto from 'crypto';
import { spawn } from "child_process";
import path from 'path';
import { fileURLToPath } from "url";
import { mkdir } from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// temp folder will be created in the same folder as this file
const tempRootDir = path.join(__dirname, "temp");
async function cleanup(tempDir) {
    if (process.env.KEEP_TEMP_FILES === "true") {
        console.log(`Preserved temp directory: ${tempDir}`);
        return;
    }
    try {
        await fs.rm(tempDir, {
            recursive: true,
            force: true
        });
        console.log('Temp files are deleted for python');
    }
    catch (er) {
        console.error('Getting error while cleaning the temp in python');
    }
}
//@ts-ignore
export async function executePython(code, time_limit, space_limit) {
    let tempDir = "";
    try {
        const jobId = crypto.randomUUID();
        tempDir = path.join(tempRootDir, jobId);
        // create job directory
        await fs.mkdir(tempDir, {
            recursive: true,
        });
        console.log("Created temp directory:", tempDir);
        // create Main.py
        const sourceFile = path.join(tempDir, "Main.py");
        await fs.writeFile(sourceFile, code, "utf-8");
        console.log("Created Python file:", sourceFile);
        return await new Promise((resolve, reject) => {
            const docker = spawn('docker', [
                "run",
                "--rm",
                "--memory",
                `${space_limit}m`,
                "--memory-swap",
                `${space_limit}m`,
                "--cpus",
                "1",
                "--network",
                "none",
                "--mount",
                `type=bind,source=${tempDir},target=/code`,
                "judge-python",
            ]);
            let stdout = "";
            let stderr = "";
            let timedOut = false;
            const timeout = setTimeout(() => {
                timedOut = true;
                console.log("Execution timeout");
                docker.kill("SIGKILL");
            }, time_limit * 1000);
            docker.stdout.on("data", (data) => {
                stdout += data.toString();
            });
            docker.stderr.on("data", (data) => {
                stderr += data.toString();
            });
            docker.on("error", async (err) => {
                console.error("Docker spawn error:", err);
                await cleanup(tempDir);
                reject(err);
            });
            docker.on("close", async (exitCode) => {
                clearTimeout(timeout);
                await cleanup(tempDir);
                if (timedOut) {
                    resolve({
                        stdout,
                        stderr,
                        exitCode: exitCode ?? 1,
                        status: "time_limit_exceeded"
                    });
                    return;
                }
                if (exitCode !== 0) {
                    if (stderr.includes("OutOfMemoryError") ||
                        stderr.includes("Killed")) {
                        resolve({
                            stdout,
                            stderr,
                            exitCode: exitCode ?? 1,
                            status: "memory_limit_exceeded"
                        });
                        return;
                    }
                    resolve({
                        stdout,
                        stderr,
                        exitCode: exitCode ?? 1,
                        status: "runtime_error"
                    });
                    return;
                }
                resolve({
                    stdout,
                    stderr,
                    exitCode: 0,
                    status: "accepted"
                });
            });
        });
    }
    catch (err) {
        console.error("Python execution failed:", err);
        if (tempDir) {
            await cleanup(tempDir);
        }
        throw err;
    }
}
//# sourceMappingURL=python_worker.js.map