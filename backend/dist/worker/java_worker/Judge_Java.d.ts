export declare function Judge_Java(problem_id: string, user_id: string, submission_id: string, code: string): Promise<{
    status: string;
    stderr: string;
    expected?: never;
    actual?: never;
} | {
    status: string;
    expected: string;
    actual: string;
    stderr?: never;
} | {
    status: string;
    stderr?: never;
    expected?: never;
    actual?: never;
}>;
//# sourceMappingURL=Judge_Java.d.ts.map