import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
const connectDB  = async (req, res)=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose succesfully running ✅");
  }catch(err){
    console.log(err);
    process.exit(1);
    }
}

export default connectDB;