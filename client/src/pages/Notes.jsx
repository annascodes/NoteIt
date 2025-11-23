import React from 'react'
import { AppDummyNotes, AppFeatures } from '../../lib/hardData'
import BasicIcons from '../components/BasicIcons'
import moment from 'moment'
import { Link } from 'react-router-dom'
import NoteFormModal from '../components/NoteFormModal'
const Notes = () => {

    return (
        <div className='flex  p-1 border-0 border-yellow-300 '>
            <div className='w-1/12 h-svh  border-0 border-e-blue-600 flex justify-center items-center sticky top-16 '>
                <div className='border-2 border-stone-400 p-3   rounded-3xl flex flex-col gap-9 '>
                    {AppFeatures.map(f => {
                        return (
                            <div className='hover:text-white'>
                                <Link to={''} className=''>
                                    <BasicIcons icon={f.icon} className='text-2xl' />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className=' w-11/12 border-0 border-red-500 pb-5'>
                <div className='flex justify-between px-5 py-2'>
                    <h1 className='text-5xl font-extrabold '>Your notes</h1>

                    <NoteFormModal />

                </div>

                <div className='flex items-center justify-center gap-2 flex-wrap mt-5'>
                    {AppDummyNotes.map(n => {
                        return (
                            <div className="card bg-base-100 w-96 h-64 shadow-sm border border-neutral-700  ">

                                <div className="card-body p-5 ">
                                    <div className='flex justify-end '>
                                        <span className='text-xs tracking-widest'>
                                            {moment(n.createdAt).format('ddd, Do MMMM YYYY')}

                                        </span>
                                    </div>
                                    <h2 className="card-title">
                                        {n.heading}
                                        <div className="badge badge-secondary">{n.tag}</div>
                                    </h2>
                                    <p className='overflow-auto border-0 h-28 '>{n.text}</p>

                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Notes
