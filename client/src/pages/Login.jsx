import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [data, setData] = useState({})
    const OnChange = (e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    const handleLogin = ()=>{
        console.log(data)
    }
    return (
        <div>
            <h1 className='text-center font-bold text-4xl my-5'>Login</h1>
            <div className=' w-sm mx-auto p-5 border shadow-2xl border-neutral-800 rounded-2xl '>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input name='email' onChange={OnChange} type="text" className="input w-full" placeholder="email" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input name='password' onChange={OnChange} type="password" className="input w-full" placeholder="password" />
                </fieldset>

                <div className='flex items-center justify-center mt-5'>
                    <button onClick={handleLogin} className='btn btn-outline   text-xs tracking-widest'>Login</button>
                </div>
                <p className='text-xs tracking-wider mt-5'>Do not have an account? 
                    <Link className='text-blue-500 underline-offset-2 underline mx-2 hover:no-underline' to={'/signup'}>SignUp</Link> </p>
            </div>
        </div>
    )
}

export default Login
