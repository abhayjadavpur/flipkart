
import mongoose from "mongoose";

export const Connection = async()=>{
try{
    await mongoose.connect('mongodb://localhost:27017/flipkart');
    console.log("database connected");
}
catch(e){
    console.log(e);
}
}