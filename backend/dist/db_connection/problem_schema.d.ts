import mongoose from 'mongoose';
declare const problem_model: mongoose.Model<{
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
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
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
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
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
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
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
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
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
}>, unknown, {
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
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
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
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default problem_model;
//# sourceMappingURL=problem_schema.d.ts.map