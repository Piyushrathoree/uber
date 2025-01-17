import mongoose from "mongoose";

function connectDB() {
    const URL = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`;
    mongoose.connection.on("connected", () => console.log("Database connected successfully!"));
    mongoose.connection.on("error", (err) => console.error("Database connection error:", err.message));
    mongoose.connection.on("disconnected", () => console.log("Database disconnected!"));

    mongoose
        .connect(URL)
        .then(() => console.log("MongoDB Connected"))
        .catch((error) => console.error("Initial connection error:", error.message));
}

export default connectDB;
