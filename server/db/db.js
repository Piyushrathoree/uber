import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  const URL = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`; // Ensures you're connecting to the correct DB.

  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Adjust timeout to avoid hanging
    });
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    if (error.name === "MongoNetworkError") {
      console.error("Possible causes: Incorrect URI, cluster is unreachable, or IP is not whitelisted.");
    }
  }
}

export default connectDB;
