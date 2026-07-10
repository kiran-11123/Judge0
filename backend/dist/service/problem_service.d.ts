import mongoose from "mongoose";
export declare const CreateProblem: (problem_title: string, problem_description: string, function_signature: {
    method_name: string;
    return_type: string;
    parameters: {
        name: string;
        type: string;
    }[];
}, problem_difficulty: string, constraints: string, time_limit?: number, memory_limit?: number, test_cases?: any[]) => Promise<mongoose.Document<unknown, {}, {
    problem_title: string;
    problem_description: string;
    function_signature: {
        method_name: string;
        return_type: string;
        parameters: mongoose.Types.DocumentArray<{
            type: string;
            name: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            type: string;
            name: string;
        }, {}, {}> & {
            type: string;
            name: string;
        }>;
    };
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
    function_signature: {
        method_name: string;
        return_type: string;
        parameters: mongoose.Types.DocumentArray<{
            type: string;
            name: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            type: string;
            name: string;
        }, {}, {}> & {
            type: string;
            name: string;
        }>;
    };
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
export declare const GetAllProblems: () => Promise<(mongoose.Document<unknown, {}, {
    problem_title: string;
    problem_description: string;
    function_signature: {
        method_name: string;
        return_type: string;
        parameters: mongoose.Types.DocumentArray<{
            type: string;
            name: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            type: string;
            name: string;
        }, {}, {}> & {
            type: string;
            name: string;
        }>;
    };
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
    function_signature: {
        method_name: string;
        return_type: string;
        parameters: mongoose.Types.DocumentArray<{
            type: string;
            name: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            type: string;
            name: string;
        }, {}, {}> & {
            type: string;
            name: string;
        }>;
    };
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
    function_signature: {
        method_name: string;
        return_type: string;
        parameters: mongoose.Types.DocumentArray<{
            type: string;
            name: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            type: string;
            name: string;
        }, {}, {}> & {
            type: string;
            name: string;
        }>;
    };
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
    function_signature: {
        method_name: string;
        return_type: string;
        parameters: mongoose.Types.DocumentArray<{
            type: string;
            name: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            type: string;
            name: string;
        }, {}, {}> & {
            type: string;
            name: string;
        }>;
    };
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
    function_signature: {
        method_name: string;
        return_type: string;
        parameters: mongoose.Types.DocumentArray<{
            type: string;
            name: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            type: string;
            name: string;
        }, {}, {}> & {
            type: string;
            name: string;
        }>;
    };
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
    function_signature: {
        method_name: string;
        return_type: string;
        parameters: mongoose.Types.DocumentArray<{
            type: string;
            name: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            type: string;
            name: string;
        }, {}, {}> & {
            type: string;
            name: string;
        }>;
    };
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