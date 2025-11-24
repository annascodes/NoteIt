import Note from "../models/note.model.js"
import { errHandler } from "../utility/error.js"

export const createNote = async (req, res, next) => {
    if (req.user.id !== req.params.userId)
        return next(errHandler(403, 'Authentication error ID conflict/mismatch.'))
    console.log(req.body)
    if (!req.body.heading || !req.body.text || !req.body.tag || req.body.heading.trim() === '' || req.body.text.trim() === '')
        return next(errHandler(400, 'Need all fields'))

    try {
        const newNote = await Note(
            {
                heading: req.body.heading,
                text: req.body.text,
                tag: req.body.tag,
                user: req.user.id
            }
        )

        if (newNote) await newNote.save();
        const populatedNote = await Note.findOne({ _id: newNote._id }).populate('user', 'username email');
        res.status(200).json(populatedNote)

    } catch (error) {
        next(error)

    }
}

export const myNotes = async (req, res, next) => {
    try {
        const userNotes = await Note.find({ user: req.user.id }).sort({createdAt: -1})
        res.status(200).json(userNotes)
    } catch (error) {
        next(error)
    }
}

export const updateNote = async (req, res, next) => {
    try {
        const updNote = await Note.findOneAndUpdate(
            { _id: req.params.noteId, user: req.user.id },
            {
                $set: {
                    heading: req.body.heading,
                    text: req.body.text,
                    tag: req.body.tag
                }
            },
            { new: true }

        )
        if (!updNote) return next(errHandler(404, 'Note not found or unauthorized.'))
        res.status(200).json(updNote)

    } catch (error) {
        next(error)
    }
}