import { log } from "console";
import {User} from "../models/user.model.js";

const registerUser = async (req, res) => {
    const {firstName, lastName, email, password}  = req.body;

    console.log(req.body); // Add this before destructuring

    
    
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ msg: "Please fill all fields" });
    }
    // check if email is already registered
    const duplicateEmail = await User.findOne ({ email });
    if (duplicateEmail) {
        return res.status(400).json({ msg: "Email already registered" });
    }
    //hash the password
    const hashPassword = await User.hashPass(password);

    //create a new user
    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashPassword, 
    });
    try {
        await newUser.save();
        res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ msg: "Server Error" });
    }
};

const sample = (req , res )=>{
    res.json({message: "sample endpoint"})
}

export {
    registerUser,
    sample
}