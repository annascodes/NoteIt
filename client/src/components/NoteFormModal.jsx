import React, { useState } from 'react'
import BasicIcons from './BasicIcons'
import { AppNoteTags } from '../../lib/hardData'

const NoteFormModal = () => {
    const [tag, setTag] = useState(AppNoteTags[0])
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn btn-outline text-xs tracking-widest"
                onClick={() => document.getElementById('my_modal_2').showModal()}>
                <BasicIcons icon='plus' className='text-base' />
                Note
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-sm rounded-xl">
                    <h3 className="font-bold text-lg">Write your note.</h3>
                    <div className='mt-5'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Heading</legend>
                            <input type="text" className="input w-full input-neutral" placeholder="Heading" />
                            {/* <p className="label">Optional</p> */}
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Your note</legend>
                            <textarea placeholder="Your Note" className="textarea w-full textarea-neutral"></textarea>

                        </fieldset>

                    </div>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Tags</legend>
                        <select defaultValue="Pick a browser" className="select w-full select-neutral">
                            <option disabled={true}>Pick a tag</option>
                            {AppNoteTags.map(t=>{
                                return(
                                     <option key={t} value={t} >{t}</option>
                                )
                            })}
                        
                        </select>
                    </fieldset>


                    {/* <div className='flex items-center flex-wrap gap-1 mt-3 border h-56 overflow-auto p-2'>

                        {AppNoteTags.map(t => {
                            return (
                                <div
                                    key={t}
                                    className={`flex items-center gap-2 ${tag===t ? 'border': 'border-0'}  border border-stone-300 rounded-lg p-2`}
                                    >
                                    {
                                        tag === t && <BasicIcons icon='check' className='text-xl' />
                                    }
                                    <button onClick={() => setTag(t)}
                                        className="badge rounded-sm text-xs tracking-widest badge-primary">{t}</button>

                                </div>
                            )
                        })}
                    </div> */}
                    <div className='mt-3 flex items-center justify-center'>
                        <button className='btn btn-outline text-xs tracking-widest'>Add this note</button>
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
