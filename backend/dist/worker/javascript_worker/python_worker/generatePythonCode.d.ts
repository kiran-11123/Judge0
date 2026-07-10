interface FunctionSignature {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}
export declare function generatePythonCode(solutionCode: string, signature: FunctionSignature, input: any): string;
export {};
//# sourceMappingURL=generatePythonCode.d.ts.map