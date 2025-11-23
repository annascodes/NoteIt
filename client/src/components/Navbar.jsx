import React from 'react'
import Navlinks from './Navlinks'
import { useSelector } from 'react-redux'
import LogoutModal from './LogoutModal'

const Navbar = () => {

    const { user } = useSelector(state => state.user)
    console.log('navbar user: ', user)
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50 ">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div> */}
                    <a className="btn btn-ghost text-xl">Note<span className='text-yellow-300'>it.</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Navlinks />
                    </ul>
                </div>
                <div className="navbar-end">
                    {user &&
                        <div className='w-10 h-10 overflow-hidden rounded-xl '>
                            <img src={user.profileImg} className='w-12 h-12 object-cover' alt="" />
                        </div>
                    }
                    
                </div>
            </div>

        </div>
    )
}

export default Navbar
