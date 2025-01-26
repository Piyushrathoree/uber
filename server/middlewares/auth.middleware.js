import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

export default authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.header.authorization?.split(" ")[1];
    
        if (!token) {
           return res.send({ msg: "unauthorized" });
        }

        const isBlacklisted = await blackListUser.findOne({ token });
        if(isBlacklisted) {
            return res.status(401).json({ msg: "unauthorized" });
        }
    
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
        if (!decodedToken) {
            return res.send({ msg: "something went wrong" });
        }
    
        const user = await User.findOne({ _id: decodedToken._id });
        if (!user) {
            return res.status(400).json({ msg: "something went wrong" });
        }
        req.user = user;
    
        return next();
    } catch (error) {
        return res.status(400).json({ msg: "unauthorized" });
    }
};
