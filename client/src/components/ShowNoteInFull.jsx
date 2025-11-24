import moment from 'moment'
import React, { useEffect, useState } from 'react'

const ShowNoteInFull = ({ note }) => {
    const modalId = `${note._id}-showNoteModal`

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="underline underline-offset-4 text-start" onClick={() => document.getElementById(modalId).showModal()}>
                {note.heading.length > 49 ? `${note.heading.slice(0, 50)} ...` : note.heading}
            </button>
            <dialog id={modalId} className="modal">
                <div className="modal-box max-w-2xl">
                   <div className='flex justify-between mb-3 w-full'>
                     <span className='badge badge-secondary'> {note.tag} </span>
                     <span className='text-xs tracking-widest'>
                        {moment(note.createdAt).format('ddd, Do MMMM YYYY')}

                    </span>
                   </div>
                    <h3 className="font-bold text-xl     mb-2">{note.heading}</h3>
                    <p className="py-4 text-base font-normal whitespace-pre-wrap max-h-96 overflow-auto ">{note.text} </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default ShowNoteInFull
