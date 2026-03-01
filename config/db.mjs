import mongoose from 'mongoose';

const connectDB = async (req, res) => {
  try{
    await mongoose.connect("mongodb://localhost:27017/bestbuy");
    console.log("Mongoose running succesfully ✅");
  }catch(err){
    console.log(err);
    process.exit(1);
  }
}

export default connectDB;