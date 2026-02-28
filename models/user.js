import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String, 
        require : true
    },
    age : {
        type : String, 
    }, 
    email : {
        type : String,
        unique : true 
    },
    password : {
        type : String,
    },
},{
    timestamps: true
});

const user = mongoose.Schema("user". userSchema);

export default user;