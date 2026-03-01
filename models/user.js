import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
    name : {
        type : String
    },
    age : {
        type : Number
    },
    email : {
        type : String
    },
    password : {
        type : Number
    }
});

const User = mongoose.model("User", userSchema);

export default User;