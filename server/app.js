import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import userRouter from "./Routes/user.route.js"
const app = express();


connectDB();
app.use(cors());
app.use(express.json())

app.use("/api/v1/users", userRouter);

export default app;
