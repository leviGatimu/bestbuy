import mongoose from "mongoose";

const DBconnect = async () => {
  try{
    await mongoose.connect("mongodb://localhost:27017/bestbuy");
    console.log("Mongoose is connected");
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
}
