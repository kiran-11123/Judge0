import mongoose from "mongoose";
export declare const Code_Submission_Service: (user_id: string, problem_id: string, title: string, language: string, code: string) => Promise<void>;
export declare const Get_User_Codes_Service: (user_id: string) => Promise<(mongoose.Document<unknown, {}, {
    problem_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    codes_saved: mongoose.Types.DocumentArray<{
        status: string;
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        status: string;
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, {}, {}> & {
        status: string;
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }>;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    problem_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    codes_saved: mongoose.Types.DocumentArray<{
        status: string;
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        status: string;
        created_at: NativeDate;
        title?: string | null;
        language?: string | null;
        code?: string | null;
    }, {}, {}> & {
        status: string;
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
}>) | null>;
export declare const UploadProblemTemplateService: (problem_id: string, javaTemplate?: string, pythonTemplate?: string, cppTemplate?: string, javascriptTemplate?: string) => Promise<boolean>;
//# sourceMappingURL=user_code_service.d.ts.map