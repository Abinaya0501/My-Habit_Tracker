import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import trackerRoutes from "./trackerroutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/habits", trackerRoutes);

app.get("/", (req, res) => {
    res.send("Habit Tracker Backend is running");
});

try {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
} catch {
    process.exitCode = 1;
}
