import mongoose from "mongoose";
export declare const Code_Submission_Service: (user_id: string, title: string, language: string, code: string) => Promise<mongoose.Document<unknown, {}, {
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
}>>;
export declare const Get_User_Codes_Service: (user_id: string) => Promise<mongoose.Types.DocumentArray<{
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
}> | never[]>;
//# sourceMappingURL=user_code_service.d.ts.map