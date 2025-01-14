import mongoose from "mongoose";

function connectDB() {
    const URL = process.env.MONGODB_URI;
    mongoose
        .connect(URL, { useNewUrlParser: true, useCreateIndex: true })
        .then(() => console.log("MongoDB Connected"))
        .catch((error) => console.log(error));
}

module.exports = connectDB