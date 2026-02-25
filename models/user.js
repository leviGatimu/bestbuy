import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    }
}, { 
    timestamps: true
}); 

const User = mongoose.model("User", userschema);

export default User;