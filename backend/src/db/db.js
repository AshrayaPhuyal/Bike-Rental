import mongoose from "mongoose";


export async function connectDb(){
    try {
        const connectionInstance=await mongoose.connect(process.env.MONGO_URI)
        if(!connectionInstance){
            console.log("Error in connecting to the database")}
        else{
            console.log("Connected to the database",connectionInstance.connection.host)
        }

    } catch (error) {
        console.log("Error in connecting to the database",error.message)
    }
}