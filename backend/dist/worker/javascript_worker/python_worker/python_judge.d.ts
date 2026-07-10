export declare function Python_Judge(problem_id: string, user_id: string, submission_id: string, code: string): Promise<{
    status: "accepted" | "time_limit_exceeded" | "runtime_error" | "memory_limit_exceeded";
    stderr: string;
    passed: number;
    total: any;
    expected?: never;
    actual?: never;
} | {
    status: string;
    expected: any;
    actual: string;
    passed: number;
    total: any;
    stderr?: never;
} | {
    status: string;
    passed: number;
    total: any;
    stderr?: never;
    expected?: never;
    actual?: never;
}>;
//# sourceMappingURL=python_judge.d.ts.map