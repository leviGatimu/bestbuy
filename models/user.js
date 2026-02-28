import mongoose from "mongoose";

const userSchema = new mongoose.schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;