import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to mongoDB");
  } catch (err) {
    console.log("Error while connecting to MongoDB", err.message);
  }
};
export default connectToMongoDB;
