import mongoose from "mongoose";
const Code_Schema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    problem_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "problems",
        required: true
    },
    codes_saved: [
        {
            title: String,
            language: String,
            code: String,
            status: {
                type: String,
                default: "pending"
            },
            created_at: {
                type: Date,
                default: Date.now
            }
        }
    ]
});
const code_model = mongoose.model('code', Code_Schema);
export default code_model;
//# sourceMappingURL=user_programs.js.map