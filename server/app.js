import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import userRouter from "./Routes/user.route.js"
import cookieParser from "cookie-parser";
const app = express();


connectDB()
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(cors());
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/users", userRouter);

export default app;
