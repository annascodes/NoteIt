import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = () => {
    return (
        <>
            <li>  <Link to={'/'} >Home</Link> </li>

            <li> <Link to={'/signup'} >SignUp</Link></li>

            <li>  <Link to={'/login'} >Login</Link> </li>
            
        </>
    )
}

export default Navlinks
