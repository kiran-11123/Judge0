import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import mongoose from 'mongoose'
import code_model from "../../db_connection/user_programs.js";

interface ExecutionResult {
  stdout: string;
  stderr: string;
  exitCode: number;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// temp folder will be created in the same folder as this file
const tempRootDir = path.join(__dirname, "temp");


async function cleanup(tempDir: string) {
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
  } catch (err) {
    console.error("Cleanup failed:", err);
  }
}


export async function executeJava(
  code: string,
): Promise<ExecutionResult> {

  let tempDir = "";



  try {

    const jobId = crypto.randomUUID();

    tempDir = path.join(tempRootDir, jobId);


    // create job directory
    await fs.mkdir(tempDir, {
      recursive: true,
    });

    console.log(
      "Created temp directory:",
      tempDir
    );


    // create Main.java
    const sourceFile = path.join(
      tempDir,
      "Main.java"
    );


    await fs.writeFile(
      sourceFile,
      code,
      "utf-8"
    );


    console.log(
      "Created Java file:",
      sourceFile
    );


    return await new Promise((resolve, reject) => {

const docker = spawn("docker",[
    "run",
    "--rm",

    "--memory",
    "256m",

    "--cpus",
    "1",

    "--network",
    "none",

    "--mount",
    `type=bind,source=${tempDir},target=/code`,

    "judge-java"
]);

      let stdout = "";
      let stderr = "";


      const timeout=setTimeout(()=>{

    docker.kill();

},5000);

      docker.stdout.on(
        "data",
        (data) => {
          stdout += data.toString();
        }
      );


      docker.stderr.on(
        "data",
        (data) => {
          stderr += data.toString();
        }
      );


      docker.on(
        "error",
        async(err) => {

          console.error(
            "Docker spawn error:",
            err
          );


          await cleanup(tempDir);

          reject(err);
        }
      );


      docker.on(
        "close",
        async(exitCode) => {

clearTimeout(timeout);
        
    console.log("Docker exit code:", exitCode);
    console.log("Docker stdout:", stdout);
    console.log("Docker stderr:", stderr);

    await cleanup(tempDir);



          resolve({
            stdout,
            stderr,
            exitCode: exitCode ?? 1,
          });
        }
      );

    });


  } catch(err) {


    console.error(
      "Java execution failed:",
      err
    );


    if(tempDir){
      await cleanup(tempDir);
    }


    throw err;
  }
}