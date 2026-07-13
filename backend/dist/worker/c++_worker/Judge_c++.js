import problem_model from "../../db_connection/problem_schema.js";
import mongoose from "mongoose";
import GenerateCPPCode from "./generateCPPCode.js";
function normalize(output) {
    return (output ?? "")
        .trim()
        .replace(/\s+/g, "");
}
function compareOutputs(actual, expected) {
    try {
        return JSON.stringify(JSON.parse(actual.trim())) ===
            JSON.stringify(JSON.parse(expected.trim()));
    }
    catch (er) {
        return normalize(actual) == normalize(expected);
    }
}
export async function Judge_C(problem_id, user_id, submission_id, code) {
    const problem = await problem_model.findOne({ _id: new mongoose.Types.ObjectId(problem_id) });
    if (!problem) {
        throw new Error('Problem not found');
    }
    const testcases = problem.testcases;
    const time_limit = problem.time_limit;
    const space_limit = problem.memory_limit;
    if (!testcases || testcases.length === 0) {
        throw new Error('Testcases not found');
    }
    let test_cases_passed = 0;
    let total_testcases = testcases.length;
    for (const testcase of testcases) {
        const input = JSON.parse(testcase.input);
        const generateCode = await GenerateCPPCode(code, problem.function_signature, input);
    }
}
//# sourceMappingURL=Judge_c++.js.map