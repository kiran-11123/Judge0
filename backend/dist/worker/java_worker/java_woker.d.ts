interface ExecutionResult {
    stdout: string;
    stderr: string;
    exitCode: number;
}
export declare function executeJava(code: string, user_id: string, submission_id: string, project_id: string): Promise<ExecutionResult>;
export {};
//# sourceMappingURL=java_woker.d.ts.map