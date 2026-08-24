import express from "express";
import Habit from "./models/Habit.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const habit = await Habit.create(req.body);
        res.status(201).json(habit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/", async (_req, res) => {
    try {
        res.json(await Habit.find().sort({ createdAt: 1 }));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!habit) return res.status(404).json({ message: "Habit not found" });
        res.json(habit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const habit = await Habit.findByIdAndDelete(req.params.id);
        if (!habit) return res.status(404).json({ message: "Habit not found" });
        res.json({ message: "Habit deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
