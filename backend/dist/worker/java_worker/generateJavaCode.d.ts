interface FunctionSignature {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}
interface FunctionSignature {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}
export declare function generateJavaCode(solutionCode: string, signature: FunctionSignature, input: any): string;
export {};
//# sourceMappingURL=generateJavaCode.d.ts.map