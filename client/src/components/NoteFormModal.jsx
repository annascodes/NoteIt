import React, { useEffect, useState } from 'react'
import BasicIcons from './BasicIcons'
import { AppNoteTags } from '../../lib/hardData'
import useApiReq from '../hooks/useApiReq'
import ErrorDiv from './ErrorDiv'
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'

const NoteFormModal = ({ btnClass = 'btn btn-outline text-xs tracking-widest', id = '', prebuilt = null, setMyNotes = null }) => {
    const modalId = `${id} ${prebuilt?._id}noteFormModal`
    const { user } = useSelector(state => state.user);
    const [tag, setTag] = useState(AppNoteTags[0])
    const [text, setText] = useState('')
    const [heading, setHeading] = useState('')
    const { request, data, loading, error } = useApiReq()
    const { request: updReq, data: updData, loading: updLoading, error: updError } = useApiReq()

    const handleAddNote = () => {
        console.log(heading, text, tag)
        console.log(`${import.meta.env.VITE_BACKEND_URL}/api/note/create/${user._id}`)
        request(`${import.meta.env.VITE_BACKEND_URL}/api/note/create/${user._id}`, 'POST', { heading, text, tag })
    }
    useEffect(() => {
        if (data ) {
            toast.success('Note created.')
           if(setMyNotes) setMyNotes(prev=>[ data, ...prev])
        }
    }, [data])


    const handleSetPrebuilt = () => {
        if (prebuilt) {
            setHeading(prebuilt.heading)
            setText(prebuilt.text)
            setTag(prebuilt.tag)
        }
    }

    const handleUpdateNote = () => {
        if (!prebuilt) return toast.error('Nothing in preBuilt.')
        console.log(heading)
        console.log(text)
        console.log(tag)
        updReq(`${import.meta.env.VITE_BACKEND_URL}/api/note/update/${prebuilt._id}`, 'PUT', { heading, text, tag })

    }

    useEffect(() => {
        if (updData && setMyNotes) {
            setMyNotes(prev => prev.map(n => n._id === updData._id ? updData : n))
            toast(
                <div className='flex items-center gap-3'>
                    <BasicIcons icon='check' className='text-base' />
                    <h1>Note updated.</h1>
                </div>
            )
        }
    }, [updData])


    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className={!prebuilt && btnClass}
                onClick={() => {
                    handleSetPrebuilt()
                    document.getElementById(modalId).showModal()
                }}>
                {
                    prebuilt ? <BasicIcons icon='pencil' className='text-lg cursor-pointer' />
                        : <>
                            <BasicIcons icon='plus' className='text-base' />
                            Note
                        </>

                }

            </button>
            <dialog id={modalId} className="modal ">
                <div className="modal-box w-lg rounded-xl border-4 border-neutral-600 bg-stone-900">
                    <h3 className="font-bold text-lg">Write your note.</h3>
                    <div className='mt-0'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Heading</legend>
                            <input value={heading} onChange={(e) => setHeading(e.target.value)} type="text" className="input w-full input-neutral" placeholder="Heading" />
                            {/* <p className="label">Optional</p> */}
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Your note</legend>
                            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Your Note" className="textarea w-full h-64 textarea-neutral"></textarea>

                        </fieldset>

                    </div>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Tag</legend>
                        <select
                            value={prebuilt ? tag : "Pick a browser"}
                            onChange={(e) => setTag(e.target.value)}
                            // defaultValue="Pick a browser" 
                            className="select w-full select-neutral">
                            <option disabled={true}>Pick a tag</option>
                            {AppNoteTags.map(t => {
                                return (
                                    <option key={t} value={t} >{t}</option>
                                )
                            })}

                        </select>
                    </fieldset>

                    {error && <ErrorDiv error={error} />}

                    {/* {data &&
                        <pre className='text-xs'>
                            {JSON.stringify(data, null, 10)}
                        </pre>
                    }
                    {updData &&
                        <pre className='text-xs'>
                            {JSON.stringify(updData, null, 10)}
                        </pre>
                    } */}

                    <div className='mt-3 flex items-center justify-center'>
                        {
                            prebuilt
                                ? <button disabled={loading}
                                    onClick={handleUpdateNote}
                                    className='btn btn-outline text-xs tracking-widest'>
                                    {updLoading
                                        ? <span className='loading loading-dots '></span>
                                        : 'Update'
                                    }
                                </button>
                                :
                                <button disabled={loading} onClick={handleAddNote} className='btn btn-outline text-xs tracking-widest'>
                                    {loading
                                        ? <span className='loading loading-dots '></span>
                                        : 'Add this note'
                                    }
                                </button>
                        }
                    </div>




                    <Toaster />

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}

export default NoteFormModal
