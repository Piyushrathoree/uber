import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    firstName: {
        type: "string",
        required: true,
        minlength: [2, "the name must be of atleast 2 characters"],
    },
    lastName: {
        type: "string",
        minlength: [2, "the name must be of atleast 2 characters"],
    },

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    socketID: { type: String },
});

userSchema.methods.generateToken = function(){
    return jwt.sign({ _id:this._id , email : this.email }, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });
   
};

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}
userSchema.statics.hashPass = async (password) => {
    return await bcrypt.hash(password, 10);
};

const User = mongoose.model("user", userSchema);

export { User };