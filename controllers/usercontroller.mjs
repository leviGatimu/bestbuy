import User from '../models/user.js';

// GET all users
export const getAllUsers = async (req, res) => {
    try{
        const user = await User.find();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({error: err.message0});
    }
}

// GET single user
export const getUserById = async (req, res) => {
    try{
        const user = await user.findById(req.params.id);
        if(!user) return res.status(404).json({error: "User not found"});
        res.json(user);
    }
    catch(err){
        res.satus(501).json({error: err.message});
    }
}

// POST create user
export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// PUT update user
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE user
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};