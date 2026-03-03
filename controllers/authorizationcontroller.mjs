import User from '../controllers/usercontroller';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();

export const register = async (req, res) => {
    try{
        const {name , email , password} = req.body;
        const user = await User.findOne({email});
        if(existing) return res.json({error: "User already exists"});
        const hashedPassword = bcrypt.hash(password, 10);
        const userCreated= await User.create({
            name, 
            email,
            password : hashedPassword
    });
        const token = jwt.sign(
            {id : userCreated._id },
            process.env.JWT_SECRET,
            {expiresIn: "7d"});
        res.json({userCreated, token});
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