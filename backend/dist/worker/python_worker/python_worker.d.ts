interface ExecutionResult {
    stdout: string;
    stderr: string;
    exitCode: number;
    status: "accepted" | "time_limit_exceeded" | "runtime_error" | "memory_limit_exceeded";
}
export declare function executePython(code: string, time_limit: number, space_limit: number): Promise<ExecutionResult>;
export {};
//# sourceMappingURL=python_worker.d.ts.map