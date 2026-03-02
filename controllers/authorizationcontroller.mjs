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
        const hashedPass = bcrypt.hash(password , 10);
        const createdUser = await User.create({
            name, 
            email, 
            password: hashedPass
        });
      const token = jwt.sign(
        {id: createdUser._id},
        process.env.JWT_SECRET,
        {expiresIn : "7d"}
      );

    }
}