interface FunctionSignature {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}


export function generateJavaCode(
    solutionCode: string,
    signature: FunctionSignature,
    input: any
) {


    const params = signature.parameters;


    let parameterDeclaration = "";
    let methodArguments = "";


    for (const param of params) {

        parameterDeclaration += generateVariable(
            param.type,
            param.name,
            input[param.name]
        );


        methodArguments += param.name + ",";

    }


    methodArguments =
        methodArguments.slice(0, -1);



    const mainCode = `

public class Main {

    public static void main(String[] args) {


        Solution solution = new Solution();


        ${parameterDeclaration}


        ${signature.return_type} result =
        solution.${signature.method_name}(
            ${methodArguments}
        );


        System.out.println(
            java.util.Arrays.toString(result)
        );


    }

}

`;


    return solutionCode + mainCode;

}



function generateVariable(
    type:string,
    name:string,
    value:any
){


    switch(type){

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
                ${value.map((x:string)=>`"${x}"`).join(",")}
            };
            `;


        default:
            throw new Error(
                `Unsupported type ${type}`
            );
    }

}