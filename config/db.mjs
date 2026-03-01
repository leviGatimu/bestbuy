import mongoose from 'mongoose';

const connectDB = async () => {
  try{
    await mongoose.connect("mongodb://localhost:27017/bestbuy");
    console.log("Mongoose is running succesfully ✅");
  }catch(err){
    console.log(err);
    process.exit(1);
  }
}