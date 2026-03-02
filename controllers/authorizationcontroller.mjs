import User from '../models/usermodel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req, res) => {
    console.log("Hit register ✅");
    try{
        const {name , email , password} = req.body;
        const existing = await User.findOne({email});
        if(existing) return res.status(409).json({error: "User already exists."});

    }
}