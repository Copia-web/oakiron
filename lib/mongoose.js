import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
/* 
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
} */

async function connectDB() {
  mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('DB connected'))
  .catch((err)=>console.log(err));

}
 
export default connectDB;
