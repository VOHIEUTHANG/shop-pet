import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connectMongoDB(cb: (err?: any) => void) {
  return mongoose
    .connect(process.env.MONGODB_CONNECT_URL ?? "")
    .then(() => {
      console.log("Connect Databse successfully !");
      cb();
    })
    .catch((err) => {
      cb(err);
    });
}
