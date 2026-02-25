import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bestbuy");
    console.log("MongoDB Connected ✅");
    } catch (err) {
    console.log(err);
    process.exit(1);
  }
};


export default connectDB;