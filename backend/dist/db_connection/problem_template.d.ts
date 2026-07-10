import mongoose from "mongoose";
declare const template_model: mongoose.Model<{
    problem_id: mongoose.Types.ObjectId;
    java?: string | null;
    python?: string | null;
    cpp?: string | null;
    javascript?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    problem_id: mongoose.Types.ObjectId;
    java?: string | null;
    python?: string | null;
    cpp?: string | null;
    javascript?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    problem_id: mongoose.Types.ObjectId;
    java?: string | null;
    python?: string | null;
    cpp?: string | null;
    javascript?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    problem_id: mongoose.Types.ObjectId;
    java?: string | null;
    python?: string | null;
    cpp?: string | null;
    javascript?: string | null;
}, mongoose.Document<unknown, {}, {
    problem_id: mongoose.Types.ObjectId;
    java?: string | null;
    python?: string | null;
    cpp?: string | null;
    javascript?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    problem_id: mongoose.Types.ObjectId;
    java?: string | null;
    python?: string | null;
    cpp?: string | null;
    javascript?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    problem_id: mongoose.Types.ObjectId;
    java?: string | null;
    python?: string | null;
    cpp?: string | null;
    javascript?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    problem_id: mongoose.Types.ObjectId;
    java?: string | null;
    python?: string | null;
    cpp?: string | null;
    javascript?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default template_model;
//# sourceMappingURL=problem_template.d.ts.map