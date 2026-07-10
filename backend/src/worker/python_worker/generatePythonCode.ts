interface FunctionSignature {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}
export function generatePythonCode( solutionCode: string,
    signature: FunctionSignature,
    input: any){
         
    }


