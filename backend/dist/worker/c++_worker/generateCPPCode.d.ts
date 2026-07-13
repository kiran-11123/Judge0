interface FunctionSignature {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}
export declare function generateCPPCode(solutionCode: string, signature: FunctionSignature, input: any): string;
export {};
//# sourceMappingURL=generateCPPCode.d.ts.map