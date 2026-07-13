function normalizeCppType(type) {
    switch (type) {
        case "int[]":
            return "vector<int>";
        case "String[]":
            return "vector<string>";
        case "boolean[]":
            return "vector<bool>";
        case "char[]":
            return "vector<char>";
        case "long[]":
            return "vector<long long>";
        default:
            return type;
    }
}
export function generateCPPCode(solutionCode, signature, input) {
    let parameterDeclaration = "";
    let methodArguments = "";
    for (const param of signature.parameters) {
        const cppType = normalizeCppType(param.type);
        parameterDeclaration += generateVariable(cppType, param.name, input[param.name]);
        methodArguments += param.name + ",";
    }
    if (methodArguments.length > 0) {
        methodArguments = methodArguments.slice(0, -1);
    }
    const cppReturnType = normalizeCppType(signature.return_type);
    const printStatement = generatePrintStatement(cppReturnType);
    const mainCode = `

#include <bits/stdc++.h>
using namespace std;

${solutionCode}


int main() {


${parameterDeclaration}


    Solution solution;


    ${cppReturnType} result =
        solution.${signature.method_name}(${methodArguments});


${printStatement}


    return 0;

}

`;
    return mainCode;
}
function generateVariable(type, name, value) {
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
    vector<int> ${name} = {
        ${value.join(",")}
    };
`;
        case "vector<long long>":
            return `
    vector<long long> ${name} = {
        ${value.join(",")}
    };
`;
        case "vector<double>":
            return `
    vector<double> ${name} = {
        ${value.join(",")}
    };
`;
        case "vector<string>":
            return `
    vector<string> ${name} = {
        ${value.map((x) => `"${x}"`).join(",")}
    };
`;
        case "vector<char>":
            return `
    vector<char> ${name} = {
        ${value.map((x) => `'${x}'`).join(",")}
    };
`;
        case "vector<bool>":
            return `
    vector<bool> ${name} = {
        ${value.join(",")}
    };
`;
        default:
            throw new Error(`Unsupported type ${type}`);
    }
}
function generatePrintStatement(returnType) {
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
        case "vector<double>":
        case "vector<bool>":
            return `
    cout << "[";

    for(int i = 0; i < result.size(); i++) {

        cout << result[i];

        if(i != result.size() - 1)
            cout << ",";
    }

    cout << "]";
`;
        case "vector<string>":
            return `
    cout << "[";

    for(int i = 0; i < result.size(); i++) {

        cout << "\\\"" << result[i] << "\\\"";

        if(i != result.size() - 1)
            cout << ",";
    }

    cout << "]";
`;
        case "vector<char>":
            return `
    cout << "[";

    for(int i = 0; i < result.size(); i++) {

        cout << "\\'" << result[i] << "\\'";

        if(i != result.size() - 1)
            cout << ",";
    }

    cout << "]";
`;
        default:
            throw new Error(`Unsupported return type ${returnType}`);
    }
}
//# sourceMappingURL=generateCPPCode.js.map