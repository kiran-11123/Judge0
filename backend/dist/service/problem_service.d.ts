import mongoose from "mongoose";
export declare const CreateProblem: (problem_title: string, problem_description: string, problem_difficulty: string, constraints: string, time_limit?: Number, memory_limit?: Number) => Promise<boolean>;
export declare const GetAllProblems: () => Promise<(mongoose.Document<unknown, {}, {
    problem_title: string;
    problem_description: string;
    problem_difficulty: "easy" | "medium" | "hard";
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: mongoose.Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    problem_title: string;
    problem_description: string;
    problem_difficulty: "easy" | "medium" | "hard";
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: mongoose.Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>)[]>;
export declare const GetProblemById: (problem_id: string) => Promise<mongoose.Document<unknown, {}, {
    problem_title: string;
    problem_description: string;
    problem_difficulty: "easy" | "medium" | "hard";
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: mongoose.Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    problem_title: string;
    problem_description: string;
    problem_difficulty: "easy" | "medium" | "hard";
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: mongoose.Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>>;
export declare const AddTestCaseToProblem: (problem_id: string, input: string, output: string, isHidden?: boolean) => Promise<mongoose.Document<unknown, {}, {
    problem_title: string;
    problem_description: string;
    problem_difficulty: "easy" | "medium" | "hard";
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: mongoose.Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    problem_title: string;
    problem_description: string;
    problem_difficulty: "easy" | "medium" | "hard";
    constraints: string;
    time_limit: number;
    memory_limit: number;
    testcases: mongoose.Types.DocumentArray<{
        input: string;
        output: string;
        isHidden: boolean;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        input: string;
        output: string;
        isHidden: boolean;
    }, {}, {}> & {
        input: string;
        output: string;
        isHidden: boolean;
    }>;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>>;
//# sourceMappingURL=problem_service.d.ts.map