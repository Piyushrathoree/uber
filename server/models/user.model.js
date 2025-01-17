import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    firstName: {
        type: "string",
        required: true,
        minlength: [2, "the name must be of atleast 2 characters"],
    },
    lastName: {
        type: "string",
        required: true,
        minlength: [2, "the name must be of atleast 2 characters"],
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    socketID: { type: String },
});

userSchema.method.generateToken = () => {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });
    return token;
};

userSchema.method.comparePass = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPass = async (password) => {
    return await bcrypt.hash(password, 10);
};


const User = mongoose.model("user", userSchema);

export { User };
