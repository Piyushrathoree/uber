import mongoose from "mongoose";
import { Schema } from "mongoose";


const blackListSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt:{
        type: Date,
        default:Date.now,
        expire: 86400 // date in seconds
    }
});

const blackListUser = mongoose.model("blackListUser", blackListSchema);

export { blackListUser };
