import User from '../models/usermodel.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { pass } from 'three/tsl';

dotenv.config();

export const register = async(req, res) => {
    try{
        const {name , email , password} = req.body;
        const existing = await User.findOne({email});
        if(existing) return res.status(409).json({Error: "User already exists"});
        const passwordHashed = await bcrypt.hash(password, 10);
        const createdUser = await User.create({
            name, 
            email, 
            password: passwordHashed
        }
        );

    }catch(err){
        res.status(500).json({error: err.message});
    }
}
export const login = async (req, res) => {
    try{
        const {email ,password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.json({error: "Invalid credentials"});
        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch) return res.json({error: "Invalid credentials"});
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );
        res.json({user ,token});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

export const auth = async (req, res, next) => {
    try{
        const Token= req.header.authorized.split("")[1];
        if(!Token) return res.status(409).json({Error: "Token not found"});
        const decoded = jwt.decode(Token, process.env.JWT_SECRET);
        if(!decoded) return res.status(409).json({Error: "You are not authorized"})
        const foundUser = User.findById(decoded.id);
        if(!foundUser) return res.status(409).json({Error: "User not found"});
        res.User = foundUser;
        next();
    }catch(err){
        res.status(500).json("Internal server error");
    }
}
