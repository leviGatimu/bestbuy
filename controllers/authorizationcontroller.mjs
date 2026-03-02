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
        const token = jwt.sign({id: createdUser.id}, process.env.jwt_secret || "Secret code", {expireIn : "1d"});
        res.status(201).json({user: createdUser, token});
    }catch(err){
        console.log(err);
        res.status(500).json({error : err.message});
    }
}
export const login = async (req, res) => {
    try{
        const {email , password} = req.body;
        const existing = await User.findOne();
        if(!existing) return res.status(404).json({error: "Invalid credentials"});
        const isPasMatch = bcrypt.compare(password, existing.password);
        if(!isPasMatch) return res.status(404).json({error: "Invalid credentials"});
        const token = jwt.sign({id: createdUser.id}, process.env.jwt_secret || "Secret code", {expireIn : "1d"});
        res.status(200).json({user: createdUser, token});
    }
}