import { spawn } from "child_process";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

interface ExecutionResult {
  stdout: string;
  stderr: string;
  exitCode: number;
}

export async function executeCpp(code: string , user_id: string, submission_id: string): Promise<ExecutionResult> {


    try{

    
  const jobId = crypto.randomUUID();

  const tempDir = path.join(process.cwd(), "temp", jobId);

  await fs.mkdir(tempDir, { recursive: true });

  const sourceFile = path.join(tempDir, "main.cpp");

  await fs.writeFile(sourceFile, code);

  return new Promise((resolve, reject) => {
     const docker = spawn("docker", [

            "run",

            "--rm",

            "-v",

            `${tempDir}:/app`,

            "judge-c"

        ]);

    let stdout = "";
    let stderr = "";

    docker.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    docker.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    docker.on("close", async (code) => {
      try {
        await fs.rm(tempDir, {
          recursive: true,
          force: true,
        });
      } catch {
        console.error("Failed to remove temp directory:", tempDir);
      }

      resolve({
        stdout,
        stderr,
        exitCode: code ?? -1,
      });
    });

    docker.on("error", async (err) => {
      try {
        await fs.rm(tempDir, {
          recursive: true,
          force: true,
        });
      } catch {}

      reject(err);
    });
  });

}

catch(err){

    console.log('Error while executing C++ code' , err);
    throw err;

}
}