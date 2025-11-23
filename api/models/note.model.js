import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    heading:{
        type: String,
        required: true,
    },
    text: {
        type:String,
        required: true,
    },
    tag: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})

const Note = mongoose.model('Note', noteSchema);
export default Note;