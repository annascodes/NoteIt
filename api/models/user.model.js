import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique: true,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    profileImg: {
        type:String,
        default: 'https://i.pinimg.com/1200x/0c/4a/4d/0c4a4d859e667c7a7dae9a96ae3872f9.jpg'
    }

},{timestamps: true})


const User = mongoose.model('User', userSchema)

export default User;