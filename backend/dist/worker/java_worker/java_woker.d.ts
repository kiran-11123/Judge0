interface ExecutionResult {
    stdout: string;
    stderr: string;
    exitCode: number;
}
export declare function executeJava(code: string): Promise<ExecutionResult>;
export {};
//# sourceMappingURL=java_woker.d.ts.map