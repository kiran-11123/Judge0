import mongoose from 'mongoose';
const TestCaseSchema = new mongoose.Schema({
    input: {
        type: String,
        required: true,
    },
    output: {
        type: String,
        required: true,
    },
    isHidden: {
        type: Boolean,
        default: false,
    },
}, { _id: false });
const Problem_Schema = new mongoose.Schema({
    problem_title: { type: String, required: true, unique: true, trim: true },
    problem_description: { type: String, required: true },
    problem_difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    constraints: { type: String, required: true },
    time_limit: {
        type: Number,
        default: 1000
    },
    memory_limit: {
        type: Number,
        default: 256
    },
    testcases: {
        type: [TestCaseSchema],
        default: []
    }
}, {
    timestamps: true
});
const problem_model = mongoose.model("problems", Problem_Schema);
export default problem_model;
//# sourceMappingURL=problem_schema.js.map