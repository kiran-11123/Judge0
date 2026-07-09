export declare function Judge_Java(problem_id: string, user_id: string, submission_id: string, code: string): Promise<{
    status: "accepted" | "time_limit_exceeded" | "runtime_error" | "memory_limit_exceeded";
    stderr: string;
    passed: number;
    total: number;
    expected?: never;
    actual?: never;
} | {
    status: string;
    expected: string;
    actual: string;
    passed: number;
    total: number;
    stderr?: never;
} | {
    status: string;
    passed: number;
    total: number;
    stderr?: never;
    expected?: never;
    actual?: never;
}>;
//# sourceMappingURL=Judge_Java.d.ts.map