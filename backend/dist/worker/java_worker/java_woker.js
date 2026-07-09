import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
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
            force: true,
        });
        console.log(`Removed temp directory: ${tempDir}`);
    }
    catch (err) {
        console.error("Cleanup failed:", err);
    }
}
export async function executeJava(code, time_limit, space_limit) {
    let tempDir = "";
    try {
        const jobId = crypto.randomUUID();
        tempDir = path.join(tempRootDir, jobId);
        // create job directory
        await fs.mkdir(tempDir, {
            recursive: true,
        });
        console.log("Created temp directory:", tempDir);
        // create Main.java
        const sourceFile = path.join(tempDir, "Main.java");
        await fs.writeFile(sourceFile, code, "utf-8");
        console.log("Created Java file:", sourceFile);
        return await new Promise((resolve, reject) => {
            const docker = spawn("docker", [
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
                "judge-java",
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
        console.error("Java execution failed:", err);
        if (tempDir) {
            await cleanup(tempDir);
        }
        throw err;
    }
}
//# sourceMappingURL=java_woker.js.map