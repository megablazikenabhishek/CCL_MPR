import mongoose from "mongoose";
const url:string = process.env.MONGO_URI!;

const connect = async() => {
    const conn = await mongoose.connect(url)
        .catch((err)=>console.log(err));
    return conn;
}

export default connect;