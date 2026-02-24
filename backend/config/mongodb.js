import mongoose, { mongo } from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log('DB Connected')
    })

    await mongoose.connect(`${process.env.MONGDB_URL}/e-commerce`)

}

export default connectDB;