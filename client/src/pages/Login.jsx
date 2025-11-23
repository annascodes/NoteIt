import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import useApiReq from '../hooks/useApiReq'
import ErrorDiv from '../components/ErrorDiv'
import { useDispatch } from 'react-redux'
import { signInMethod } from '../redux/user/userSlice'

const Login = () => {
    
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const [data, setData] = useState({})
    const { request, data: loginData, loading, error } = useApiReq()
    const OnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleLogin = () => {
        console.log(data)
        request(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, 'POST', data)
    }
    useEffect(() => {
        if (loginData) {
            console.log('dispatching user data')
            dispatch(signInMethod(loginData))
            navigate('/')
        }
    }, [loginData])
    return (
        <div>
            <h1 className='text-center font-bold text-4xl my-5'>Login</h1>
            <div className=' w-sm mx-auto p-5 border shadow-2xl border-neutral-800 rounded-2xl '>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input name='email' onChange={OnChange} type="text" className="input w-full" placeholder="email" />
                </fieldset>
                <fieldset className="fieldset mb-2">
                    <legend className="fieldset-legend">Password</legend>
                    <input name='password' onChange={OnChange} type="password" className="input w-full" placeholder="password" />
                </fieldset>

                {error && <ErrorDiv error={error} />}

                <div className='flex items-center justify-center mt-5'>
                    <button onClick={handleLogin} className='btn btn-outline   text-xs tracking-widest'>Login</button>
                </div>

                {/* {loginData &&
                    <pre className='text-xs tracking-widest'>
                        {JSON.stringify(loginData, null, 10)}
                    </pre>
                } */}
                <p className='text-xs tracking-wider mt-5'>Do not have an account?
                    <Link className='text-blue-500 underline-offset-2 underline mx-2 hover:no-underline' to={'/signup'}>SignUp</Link> </p>
            </div>
        </div>
    )
}

export default Login
