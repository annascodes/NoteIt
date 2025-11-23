import React, { useEffect, useState } from 'react'
import BasicIcons from './BasicIcons'
import { AppNoteTags } from '../../lib/hardData'
import useApiReq from '../hooks/useApiReq'
import ErrorDiv from './ErrorDiv'

const NoteFormModal = ({ btnClass = 'btn btn-outline text-xs tracking-widest', id = '' }) => {
    const modalId = `${id}noteFormModal`
    const [tag, setTag] = useState(AppNoteTags[0])
    const [text, setText] = useState('')
    const [heading, setHeading] = useState('')
    const { request, data, loading, error } = useApiReq()

    const handleAddNote = () => {
        console.log(heading, text, tag)
        request(`${import.meta.env.VITE_BACKEND_URL}/api/note/create`, 'POST', { heading, text, tag })
    }
    useEffect(() => {
        if (data) {

        }
    }, [data])

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className={btnClass}
                onClick={() => document.getElementById(modalId).showModal()}>
                <BasicIcons icon='plus' className='text-base' />
                Note
            </button>
            <dialog id={modalId} className="modal">
                <div className="modal-box w-sm rounded-xl">
                    <h3 className="font-bold text-lg">Write your note.</h3>
                    <div className='mt-5'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Heading</legend>
                            <input onChange={(e) => setHeading(e.target.value)} type="text" className="input w-full input-neutral" placeholder="Heading" />
                            {/* <p className="label">Optional</p> */}
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Your note</legend>
                            <textarea onChange={(e) => setText(e.target.value)} placeholder="Your Note" className="textarea w-full textarea-neutral"></textarea>

                        </fieldset>

                    </div>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Tag</legend>
                        <select
                            onChange={(e) => setTag(e.target.value)}
                            defaultValue="Pick a browser" className="select w-full select-neutral">
                            <option disabled={true}>Pick a tag</option>
                            {AppNoteTags.map(t => {
                                return (
                                    <option key={t} value={t} >{t}</option>
                                )
                            })}

                        </select>
                    </fieldset>

                    {error && <ErrorDiv error={error} />}

                    {data &

                        <pre className='text-xs'>
                            {JSON.stringify(data, null, 10)}
                        </pre>
                    }



                    <div className='mt-3 flex items-center justify-center'>
                        <button disabled={loading} onClick={handleAddNote} className='btn btn-outline text-xs tracking-widest'>
                            {loading
                                ? <span className='loading loading-dots '></span>
                                : 'Add this note'
                            }
                        </button>
                    </div>



                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}

export default NoteFormModal
