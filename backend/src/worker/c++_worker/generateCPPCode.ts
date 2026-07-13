
interface FunctionSignature {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}

export default async function GenerateCPPCode( solutionCode  :string  , signature : FunctionSignature ,  input :any){


    const params = signature.parameters;

      let parameterDeclaration = "";
      let methodArguments = "";


    for(const param of params){

          parameterDeclaration += generateVariable(
            param.type,
            param.name,
            input[param.name]
        );

         methodArguments += param.name + ",";
    }

     
}



function generateVariable(
    type:string,
    name:string,
    value:any
){
     

}