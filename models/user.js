import mongoose from "mongoose";

const userSchema = new mongoose.schema({
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
    timestamp: true
});

const user = mongoose.schema("user". userSchema);

export default user;