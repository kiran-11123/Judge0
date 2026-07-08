import mongoose from "mongoose";
declare const code_model: mongoose.Model<{
    user_id: mongoose.Types.ObjectId;
    Codes_Saved: mongoose.Types.DocumentArray<{
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, {}, {}> & {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }>;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    user_id: mongoose.Types.ObjectId;
    Codes_Saved: mongoose.Types.DocumentArray<{
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, {}, {}> & {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }>;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    user_id: mongoose.Types.ObjectId;
    Codes_Saved: mongoose.Types.DocumentArray<{
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, {}, {}> & {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    user_id: mongoose.Types.ObjectId;
    Codes_Saved: mongoose.Types.DocumentArray<{
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, {}, {}> & {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }>;
}, mongoose.Document<unknown, {}, {
    user_id: mongoose.Types.ObjectId;
    Codes_Saved: mongoose.Types.DocumentArray<{
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, {}, {}> & {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }>;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    user_id: mongoose.Types.ObjectId;
    Codes_Saved: mongoose.Types.DocumentArray<{
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, {}, {}> & {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    user_id: mongoose.Types.ObjectId;
    Codes_Saved: mongoose.Types.DocumentArray<{
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, {}, {}> & {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    user_id: mongoose.Types.ObjectId;
    Codes_Saved: mongoose.Types.DocumentArray<{
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, {}, {}> & {
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default code_model;
//# sourceMappingURL=user_programs.d.ts.map