import User from '../models/user.js';
//CRUD: 
// Create (post) : No ID needed
// Read : By ID or all users (No ID needed)
// Update : Using ID
// Delete : Using ID

export const createUser = async(req, res) => {
    try{
        const user = new User(req.body);
        await user.save()
        res.json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

export const getAllUsers = async (req, res) => {
    try{
        const user = await User.find();
        res.json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}
export const getUserByID = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({error : "User not found"});
        res.json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

export const updateUser = async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new : true , runvalidators: true});
        if(!user) return res.status(404).json({error : "User not found"});
        res.json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

export const deleteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({error: "User not found"});
        res.json({message : "User deleted succesfully."});
    }catch(err){
    console.log(err);
     res.status(500).json({error: err.message});   
    }
}