import React from 'react'
import { Link } from 'react-router-dom'
import NoteFormModal from './NoteFormModal'
import { useSelector } from 'react-redux'
import LogoutModal from './LogoutModal'
import TestModal from './TestModal'

const Navlinks = () => {
    const { user } = useSelector(state => state.user)
    return (
        <>
            <li>  <Link to={'/'} >Home</Link> </li>






            {
                user
                    ? <>
                        <li>  <Link to={'/notes'} >Notes</Link> </li>
                        <li> <LogoutModal id='fromLinks' /> </li>
                        <li>  <NoteFormModal btnClass={'btn btn-neutral btn-xs text-xs tracking-widest'} id='fromLinks' /> </li>
                    </>
                    : <>
                        <li> <Link to={'/signup'} >SignUp</Link></li>
                        <li>  <Link to={'/login'} >Login</Link> </li>
                    </>
            }


        </>
    )
}

export default Navlinks
