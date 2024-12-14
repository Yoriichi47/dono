// import mongoose from "mongoose";
// const { Schema, model } = mongoose

// const paymentSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     to_user: {
//         type: String,
//         required: true,
//     },
//     orderID: {
//         type: String,
//         required: true,
//     },
//     message: {
//         type: String,
//         required: true
//     },
//     amount: {
//         type: Number,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now,
//     },
//     done: {
//         type: Boolean,
//         default: false,
//     }
// })

// export default mongoose.model.Payment || model("Payment", paymentSchema)