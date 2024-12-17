// import mongoose from "mongoose";
// import { connectDB } from "../db/mongodb";

// const userSchema = new mongoose.Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     profilePic: {
//       type: String, // Type is string cuz it wil be passed as a url
//       default: "",
//     },
//     coverPic: {
//       type: String, // Type is string cuz it wil be passed as a url
//       default: "",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const User =  mongoose.models.User || mongoose.model("User", userSchema);

// export default User
