import React from 'react'
import BasicIcons from './BasicIcons'

const Deleteit = ({id, onDelete}) => {
    const modalId = `${id}-deleteit.`
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById(modalId).showModal()}>
                <BasicIcons icon='trash' className='text-lg' />
            </button>
            <dialog id={modalId} className="modal">
                <div className="modal-box border-4 border-red-950 rounded-xl">

                    
                    {/* <h3 className="font-bold text-lg text-center">Delete it</h3> */}
                   <div className='flex items-center justify-center'>
                     <BasicIcons icon='trash' className='text-2xl text-red-500 ' />
                   </div>
                    <p className="py-4 text-center">Do you really want to delete it.</p>
                    <div className="modal-action">
                        <form method="dialog" className='w-full flex justify-around'>
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={()=>onDelete(id)} className="btn btn-error btn-outline">Yes, delete it.</button>
                            <button className="btn">No.</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default React.memo(Deleteit)
