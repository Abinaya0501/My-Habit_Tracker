import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        category: { type: String, required: true, trim: true },
        duration: { type: String, default: "" },
        schedule: { type: String, default: "Daily" },
        streak: { type: Number, default: 0 },
        completed: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.model("Habit", habitSchema);
