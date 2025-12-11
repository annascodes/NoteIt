import React, { useCallback, useEffect, useState } from 'react'
import { AppDummyNotes, AppFeatures } from '../../lib/hardData'
import BasicIcons from '../components/BasicIcons'
import moment from 'moment'
import { Link } from 'react-router-dom'
import NoteFormModal from '../components/NoteFormModal'
import useApiReq from '../hooks/useApiReq'
import ShowNoteInFull from '../components/ShowNoteInFull'
import Deleteit from '../components/Deleteit'
const Notes = () => {
    const [myNotes, setMyNotes] = useState([])
    const { request, data, loading, error } = useApiReq()
    useEffect(() => {
        request(`${import.meta.env.VITE_BACKEND_URL}/api/note/mynotes`, 'GET')
    }, [])

    useEffect(() => {
        if (data) {
            setMyNotes(data)
        }
    }, [data])
    // const handleDeleteNote = (id)=>{
    //     console.log('delete this note: ', id)

    // }
    const handleDeleteNote = useCallback((id)=>{
        console.log('deleting this note: ', id)
    },[])
    return (


        <div className=' border-0 border-red-500 pb-5'>
            <div className='flex justify-between px-5 py-2'>
                <div className='flex items-center gap-2 '>
                    <h1 className='text-2xl font-semibold tracking-wider '>Your notes</h1>
                    {loading && <span className='loading loading-dots'></span>}
                </div>

                <NoteFormModal setMyNotes={setMyNotes} />

            </div>
            {
                loading && <div className='flex justify-center items-center gap-3 border-0'>

                    {[...Array(2)].map(n => {
                        return (
                            
                             <div className='skeleton h-56 w-sm'>

                             </div>
                            
                        )
                    })}
                </div>
            }

            <div className='flex items-center justify-center gap-2 flex-wrap mt-5'>
                {myNotes && myNotes.map(n => {
                    return (
                        <div className="card bg-base-100  w-96 h-64 shadow-sm border border-neutral-700  ">
                            <div className="card-body p-5 ">
                                <div className='flex justify-between mb-2 '>
                                    <span className='text-xs tracking-widest'>
                                        {moment(n.createdAt).format(' Do MMM YYYY')}
                                    </span>
                                    <div className='flex items-center gap-4 '>
                                        <NoteFormModal id='Edit' prebuilt={n} setMyNotes={setMyNotes} />
                                        <Deleteit key={n._id} id={n._id} onDelete={handleDeleteNote}  />
                                    </div>

                                </div>
                                <div className="card-title">
                                    <ShowNoteInFull note={n} />
                                    <div className="badge badge-secondary badge-sm tracking-wider">{n.tag}</div>
                                </div>
                                <p className='overflow-auto border-0 h-28 whitespace-pre-line '>
                                    {n.text}</p>

                            </div>

                        </div>
                    )
                })}
            </div>

        </div>

    )
}

export default Notes
