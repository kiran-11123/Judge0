export function generateJavaCode(solutionCode, signature, input) {
    const params = signature.parameters;
    let parameterDeclaration = "";
    let methodArguments = "";
    for (const param of params) {
        parameterDeclaration += generateVariable(param.type, param.name, input[param.name]);
        methodArguments += param.name + ",";
    }
    if (methodArguments.length > 0) {
        methodArguments = methodArguments.slice(0, -1);
    }
    const printStatement = generatePrintStatement(signature.return_type);
    const mainCode = `

public class Main {

    public static void main(String[] args) {


        Solution solution = new Solution();


        ${parameterDeclaration}


        ${signature.return_type} result =
        solution.${signature.method_name}(
            ${methodArguments}
        );


        ${printStatement}


    }

}

`;
    return solutionCode + mainCode;
}
function generatePrintStatement(returnType) {
    switch (returnType) {
        case "int[]":
        case "String[]":
        case "char[]":
        case "boolean[]":
        case "double[]":
            return `
            System.out.println(
                java.util.Arrays.toString(result)
            );
            `;
        default:
            return `
            System.out.println(result);
            `;
    }
}
function generateVariable(type, name, value) {
    switch (type) {
        case "int":
            return `
            int ${name} = ${value};
            `;
        case "int[]":
            return `
            int[] ${name} = new int[]{
                ${value.join(",")}
            };
            `;
        case "String":
            return `
            String ${name} = "${value}";
            `;
        case "String[]":
            return `
            String[] ${name} = new String[]{
                ${value.map((x) => `"${x}"`).join(",")}
            };
            `;
        default:
            throw new Error(`Unsupported type ${type}`);
    }
}
//# sourceMappingURL=generateJavaCode.js.map