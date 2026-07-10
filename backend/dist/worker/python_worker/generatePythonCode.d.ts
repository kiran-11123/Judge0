interface FunctionSignature {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}
export declare function generatePythonCode(solutionCode: string, signature: FunctionSignature, input: any): void;
export {};
//# sourceMappingURL=generatePythonCode.d.ts.map