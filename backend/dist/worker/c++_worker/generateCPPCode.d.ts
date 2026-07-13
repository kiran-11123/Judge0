interface FunctionSignature {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}
export default function GenerateCPPCode(solutionCode: string, signature: FunctionSignature, input: any): Promise<void>;
export {};
//# sourceMappingURL=generateCPPCode.d.ts.map