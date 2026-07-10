interface FunctionSignature {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}

export function generatePythonCode(
    solutionCode: string,
    signature: FunctionSignature,
    input: any
) {

    let parameterDeclaration = "";
    let methodArguments = "";

    for (const param of signature.parameters) {

        parameterDeclaration += generatePythonVariable(
            param.type,
            param.name,
            input[param.name]
        );

        methodArguments += `${param.name}, `;
    }

    methodArguments = methodArguments.replace(/, $/, "");

    const printStatement = generatePythonPrintStatement(
        signature.return_type
    );

    return `
${solutionCode}

solution = Solution()

${parameterDeclaration}

result = solution.${signature.method_name}(
    ${methodArguments}
)

${printStatement}
`;
}


function generatePythonVariable(
    type: string,
    name: string,
    value: any
) {

    switch (type) {

        case "int":
            return `${name} = ${value}\n`;

        case "String":
            return `${name} = "${value}"\n`;

        case "boolean":
            return `${name} = ${value ? "True" : "False"}\n`;

        case "int[]":
            return `${name} = [${value.join(", ")}]\n`;

        case "String[]":
            return `${name} = [${value.map((x: string) => `"${x}"`).join(", ")}]\n`;

        default:
            throw new Error(`Unsupported type ${type}`);
    }

}


function generatePythonPrintStatement(
    returnType: string
) {

    switch (returnType) {

        case "boolean":

            return `
print(str(result).lower())
`;

        default:

            return `
print(result)
`;
    }

}