import mongoose from "mongoose";

const userSchema= new mongoose.schema({
    name : {
        type : String
    }, 
    password: {
        type : Number, 
    },
    email : {
        type : String,
        unique : true
    }, 
    password: {
        type : Number
    }
});

const user = mongoose.schema("user", userSchema);

export default user;