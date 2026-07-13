export default async function GenerateCPPCode(solutionCode, signature, input) {
    const params = signature.parameters;
    let parameterDeclaration = "";
    let methodArguments = "";
    for (const param of params) {
        parameterDeclaration += generateVariable(param.type, param.name, input[param.name]);
        methodArguments += param.name + ",";
    }
}
function generateVariable(type, name, value) {
}
//# sourceMappingURL=generateCPPCode.js.map