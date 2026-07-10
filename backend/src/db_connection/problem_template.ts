import mongoose from "mongoose";
const templateSchema = new mongoose.Schema({
    problem_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "problems",
        required: true,
        unique: true
    },

    java: String,
    python: String,
    cpp: String,
    javascript: String
});

const template_model = mongoose.model("code_templates" , templateSchema);


export default template_model;