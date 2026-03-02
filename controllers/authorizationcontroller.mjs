import User from '../models/user.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const register = async (req, res) => {
    try{
        const {name , email , password} = req.body;
        const existing = await User.findOne({email});
        if(existing) return res.status(404).json({erorr : "User already exists"});
        const hashedPass = bcrypt.hash(password,10);
        const createdUser = await User.create({
            name,
            email,
            password: hashedPass,
        });
    }catch(err){
        console.log(err);
        res.json(500).json({error: err.message});
    }
}