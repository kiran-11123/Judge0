import problem_model from "../../db_connection/problem_schema.js";
import mongoose from "mongoose";
import { executePython } from "./python_worker.js";
import { generatePythonCode } from "./generatePythonCode.js";
function normalize(output) {
    return (output ?? "").trim().replace(/\s+/g, "");
}
function compareOutputs(actual, expected) {
    try {
        return JSON.stringify(JSON.parse(actual.trim())) ===
            JSON.stringify(JSON.parse(expected.trim()));
    }
    catch (er) {
        return normalize(actual) === normalize(expected);
    }
}
export async function Python_Judge(problem_id, user_id, submission_id, code) {
    const problem = await problem_model.findOne({
        _id: new mongoose.Types.ObjectId(problem_id)
    });
    if (!problem) {
        throw new Error("Problem not found");
    }
    const testcases = problem.testcases;
    const time_limit = problem.time_limit;
    const space_limit = problem.memory_limit;
    if (testcases.length === 0) {
        throw new Error('No testcases found');
    }
    let test_cases_passed = 0;
    let total_testcases = testcases.length;
    for (const testcase of testcases) {
        console.log("TEST CASE INPUT:", testcase.input);
        const input = JSON.parse(testcase.input);
        const generated_code = generatePythonCode(code, problem.function_signature, input);
        //@ts-ignore
        const result = await executePython(generated_code, time_limit, space_limit);
        console.log("RAW OUTPUT:", JSON.stringify(result.stdout));
        if (result.exitCode !== 0) {
            return {
                status: result.status,
                stderr: result.stderr,
                passed: test_cases_passed,
                total: total_testcases
            };
        }
        if (!compareOutputs(result.stdout, testcase.output)) {
            return {
                status: "wrong_answer",
                expected: testcase.output,
                actual: result.stdout,
                passed: test_cases_passed,
                total: total_testcases
            };
        }
        test_cases_passed += 1;
    }
    return {
        status: "accepted",
        passed: test_cases_passed,
        total: total_testcases
    };
}
//# sourceMappingURL=python_judge.js.map