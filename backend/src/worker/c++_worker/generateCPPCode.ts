interface FunctionSignature {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}

export function generateCPPCode(
    solutionCode: string,
    signature: FunctionSignature,
    input: any
) {

    let parameterDeclaration = "";
    let methodArguments = "";

    for (const param of signature.parameters) {

        parameterDeclaration += generateVariable(
            param.type,
            param.name,
            input[param.name]
        );

        methodArguments += param.name + ",";
    }

    if (methodArguments.length > 0) {
        methodArguments = methodArguments.slice(0, -1);
    }

    const printStatement = generatePrintStatement(
        signature.return_type
    );

    return `
#include <bits/stdc++.h>
using namespace std;

${solutionCode}

int main() {

${parameterDeclaration}

    Solution solution;

    ${signature.return_type} result =
        solution.${signature.method_name}(${methodArguments});

${printStatement}

    return 0;
}
`;
}


function generateVariable(
    type: string,
    name: string,
    value: any
) {

    switch (type) {

        case "int":
            return `
    int ${name} = ${value};
`;

        case "long long":
            return `
    long long ${name} = ${value};
`;

        case "double":
            return `
    double ${name} = ${value};
`;

        case "bool":
            return `
    bool ${name} = ${value};
`;

        case "char":
            return `
    char ${name} = '${value}';
`;

        case "string":
            return `
    string ${name} = "${value}";
`;

        case "vector<int>":
            return `
    vector<int> ${name} = {${value.join(",")}};
`;

        case "vector<long long>":
            return `
    vector<long long> ${name} = {${value.join(",")}};
`;

        case "vector<string>":
            return `
    vector<string> ${name} = {
        ${value.map((x: string) => `"${x}"`).join(",")}
    };
`;

        default:
            throw new Error(`Unsupported type ${type}`);
    }

}



function generatePrintStatement(returnType: string) {

    switch (returnType) {

        case "int":
        case "long long":
        case "double":
        case "bool":
        case "char":
        case "string":

            return `
    cout << result;
`;

        case "vector<int>":
        case "vector<long long>":

            return `
    for (auto &x : result)
        cout << x << " ";
`;

        case "vector<string>":

            return `
    for (auto &x : result)
        cout << x << " ";
`;

        default:
            throw new Error(
                `Unsupported return type ${returnType}`
            );
    }

}