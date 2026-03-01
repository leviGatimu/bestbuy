import User from '../models/user.js';

//CRUD: 
// Create (post) : No ID needed
// Read : By ID or all users (No ID needed)
// Update : Using ID
// Delete : Using ID

//Create user
export const createUser = async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

//Get all users
export const getAllusers = async (req, res) => {
    try{
        const user = await User.find()
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

//Get user by ID
export const getUserByID = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({err : "User not found ❌."});
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

//Update User
export const updateUser = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true , runvalidators: true});
            if(!user) return req.status(404).json({error : "User not found"});
            res.json(user);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

//Delete User 
export const deleteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json("User not found.");
        res.status(200).json({message : "User succesfully deleted"});
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}