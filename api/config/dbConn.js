import mongoose from "mongoose"

export const dbConnection = async()=>{
    try {
        console.log(`uri string: ${process.env.MONGO_URI}`.bgCyan)
        await mongoose.connect(process.env.MONGO_URI)
         console.log(` -- DB CONNECTED OK --`.bgGreen)
    } catch (error) {
        console.log(`--- error in DB conn start ---`.bgRed)
        console.log(error)
        console.log(`--- error in DB conn ends ---`.bgRed)
        
    }
} 