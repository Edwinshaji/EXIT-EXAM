import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose
    .connect(
      'mongodb+srv://edwinshajioffical:Edwin1520@cluster0.elnjngs.mongodb.net/blogapp?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log(error);
    });
}
