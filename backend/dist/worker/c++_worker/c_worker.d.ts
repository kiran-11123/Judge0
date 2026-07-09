interface ExecutionResult {
    stdout: string;
    stderr: string;
    exitCode: number;
}
export declare function executeCpp(code: string, user_id: string, submission_id: string): Promise<ExecutionResult>;
export {};
//# sourceMappingURL=c_worker.d.ts.map