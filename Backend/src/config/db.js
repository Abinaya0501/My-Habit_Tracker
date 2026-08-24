import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";

dotenv.config({ path: fileURLToPath(new URL("../../.env", import.meta.url)) });

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.error("Error connecting to MongoDB", error.message);
        throw error;
    }
};
