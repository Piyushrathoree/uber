import mongoose from "mongoose";

function connectDB() {
    const URL = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`;
    mongoose.set("debug", true); // Enable debugging
    mongoose
        .connect(URL)
        .then(() => console.log("MongoDB Connected"))
        .catch((error) => {
            console.error("Database connection error:", error.message);
        });
}

export default connectDB;
