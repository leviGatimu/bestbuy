import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export const register = async(req, res) => {
    try{
        const {name , email , password} = req.body;
        const existing = await User.findOne();
        if(existing) return res.status(404).json({error: "Credentials already exist. Please try again."});
        const hashedPass= bcrypt.hash(password, 10);
        const createdUser= await User.create({
            name, 
            email, 
            password: hashedPass,
        });
        const token = jwt.token({id: createdUser.id}, process.env.jwt_secret || "Secret code", {expireIn : "1d"});
    }catch(err){
        console.log(err);
        res.status(500).json({error : err.message});
    }
}