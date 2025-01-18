import { registerUser, loginUser } from "../controllers/user.controller.js";
import express from "express";
import cors from "cors";

const router = express.Router();
router.use(cors());//currenly accept requests from any server but will configure only for our specific url

router.post("/register", registerUser);
router.post("/login", loginUser);
export default router;