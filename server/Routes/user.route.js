import { registerUser, loginUser, logoutUser } from "../controllers/user.controller.js";
import express from "express";
import cors from "cors";
import { body } from "express-validator";

const router = express.Router();
router.use(cors()); //currenly accept requests from any server but will configure only for our specific url

router.post(
    "/register",
    [
        body("email").isEmail().withMessage("invalid email"),
        body("firstName")
            .isLength({ min: 3 })
            .withMessage("first name should be 2 characters long"),
        body("password")
            .isLength({min:6})
            .isLength({max:20})
            .withMessage("password is not strong enough"),
    ],
    registerUser
);
router.post(
    "/login",
    [body("email").isEmail().withMessage("invalid email")],
    loginUser
);
router.post('/logout' , logoutUser)
export default router;
