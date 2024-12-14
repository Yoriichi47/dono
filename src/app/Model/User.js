// import mongoose, { model, Schema } from "mongoose";

// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now,
//     },
//     profilePic: {
//         type: String, // Type is string cuz it wil be passed as a url
//         default: "",
//     },
//     coverPic: {
//         type: String, // Type is string cuz it wil be passed as a url
//         default: "",
//     },
// })

// // var User = model("User", userSchema)

// // export default User

// export default mongoose.models.User || model("User", userSchema)