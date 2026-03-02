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
        const hashedPass = await bcrypt.hash(password , 10);
        const user = await User.create({
            name, 
            email, 
            password: hashedPass
        });
      const token = jwt.sign(
        {id: createdUser._id},
        process.env.JWT_SECRET,
        {expiresIn : "7d"}
      );
      res.status(200).json({user , token});

    }catch(err){
        console.log(err);
        res.status(500).json({err: err.message});
    }
}

export const login = async(req,res) => {
    console.log("HIT login ✅");
    try{
        const {email , password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(409).json({error: "Invalid credentials. Please try again."});
        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(404).json({error: "Invalid credentials. Please try again."});
        
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn :"7d"}
        );
        res.json({user , token});
    }catch(err){
        res.status(500).json({error: "Internal sevrer error"});
    }
}