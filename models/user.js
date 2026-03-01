import { type } from 'firebase/firestore/pipelines';
import mongoose from 'mongoose';

const userSchema = mongoose.Schema ({
    name : {
        type : String
    },
    age : {
        type : Number
    },
    email : {
        type : String ,
        unique: true
    },
    password : {
     type : String,
     required: true
    }
},{
    timestamps: true
});

const User = mongoose.model("User", userSchema);


export default User;