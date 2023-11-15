import mongoose from "mongoose"


export async function connect(){
    try {
        mongoose.connect("mongodb://0.0.0.0:27017/portfolio", {})
        .then(() => console.log("successfully connected to database"))
        .catch((err) => console.log(err));
    } catch (error) {
        console.log(error);
    }
}




