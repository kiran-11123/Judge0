import mongoose from "mongoose";
import { ref } from "node:process";
const Code_Schema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    Codes_Saved: [{
            title: String,
            language: String,
            code: String,
            created_at: {
                type: Date,
                default: Date.now
            }
        }]
});
const code_model = mongoose.model('code', Code_Schema);
export default code_model;
//# sourceMappingURL=user_programs.js.map