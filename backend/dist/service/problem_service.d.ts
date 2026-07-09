export declare const CreateProblem: (problem_title: string, problem_description: string, problem_difficulty: string, constraints: string, time_limit?: Number, memory_limit?: Number) => Promise<import("mongoose").Document<unknown, {}, {
    problem_title: string;
    problem_description: string;
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: import("mongoose").Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
    problem_difficulty?: "easy" | "medium" | "hard" | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    problem_title: string;
    problem_description: string;
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: import("mongoose").Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
    problem_difficulty?: "easy" | "medium" | "hard" | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>>;
export declare const GetAllProblems: () => Promise<(import("mongoose").Document<unknown, {}, {
    problem_title: string;
    problem_description: string;
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: import("mongoose").Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
    problem_difficulty?: "easy" | "medium" | "hard" | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    problem_title: string;
    problem_description: string;
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: import("mongoose").Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
    problem_difficulty?: "easy" | "medium" | "hard" | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>)[]>;
export declare const GetProblemById: (problem_id: string) => Promise<import("mongoose").Document<unknown, {}, {
    problem_title: string;
    problem_description: string;
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: import("mongoose").Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
    problem_difficulty?: "easy" | "medium" | "hard" | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    problem_title: string;
    problem_description: string;
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: import("mongoose").Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
    problem_difficulty?: "easy" | "medium" | "hard" | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>>;
export declare const AddTestCaseToProblem: (problem_id: string, input: string, output: string, isHidden?: boolean) => Promise<import("mongoose").Document<unknown, {}, {
    problem_title: string;
    problem_description: string;
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: import("mongoose").Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
    problem_difficulty?: "easy" | "medium" | "hard" | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    problem_title: string;
    problem_description: string;
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: import("mongoose").Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
    problem_difficulty?: "easy" | "medium" | "hard" | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>>;
//# sourceMappingURL=problem_service.d.ts.map