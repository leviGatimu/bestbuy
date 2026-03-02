import Usser from '../models/usermodel.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/usermodel.js';

dotenv.config();

export const register = async(req, res) => {
    try{
        const {name , email , password} = req.body;
        const user = await User.findOne({email});
        if(user) return res.json({error: "User already exists"});
        const hashedPass = bcrypt.hash(password, 10);
        const createdUser = await User.create({
            name,
            email,
            password: hashedPass
        })
        const token = jwt.sign(
            {id: createdUser._id}, 
            process.env.JWT_SECRET,
            {expiresIn : "7d"}
        );
        res.json({createdUser , token});
    }catch(err){
        res.status(500).json({error: err.message})   
        }
}

export const login = async(req, res) => {
    try{
        const {email , password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.json({error: "Invalid credentials"});
        const passMatch = bcrypt.compare(password, user.password);
        if(!passMatch) return res.json({error: "Invalid credentials"});
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );
        res.json({user , token});
    }catch(err){
        res.satus(404).json({error: err.message});
    }
}