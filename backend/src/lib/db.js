import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/new");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
