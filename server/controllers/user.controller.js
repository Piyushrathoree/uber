import { User } from "../models/user.model.js";


const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !email || !password) {
        return res.status(400).json({ msg: "Please fill all fields" });
    }

    // check if email is already registered
    const duplicateEmail = await User.findOne({ email });
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
        res.status(201).json({
            user: newUser,
            msg: "User registered successfully",
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ msg: "Server Error" });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!(email || password)) {
        return res.status(400).json({ msg: "Please fill all fields" });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return res.status(400).json({ msg: "invalid username or password" });
    }

   const correctPass = await user.isPasswordCorrect(password)
    

    if (!correctPass) {
        return res.status(400).json({ msg: "invalid username or password" });
    }

    const token = await user.generateToken();
    console.log(token);

    res.status(200).json({ token, user });
};

export { registerUser, loginUser };
