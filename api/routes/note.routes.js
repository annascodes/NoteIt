import express from 'express'
import { createNote, myNotes, updateNote } from '../controllers/note.controllers.js';
import { verifyToken } from '../utility/verifyToken.js';

const router = express.Router()

router.post('/create/:userId', verifyToken ,createNote)
router.get('/mynotes', verifyToken, myNotes)
router.put('/update/:noteId', verifyToken, updateNote)

export default router;