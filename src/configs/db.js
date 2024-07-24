import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`Connected to Mongo DB`);
  } catch (error) {
    console.error(`Mongo DB connection failed - ${error}`);
    process.exit(1);
  }
}