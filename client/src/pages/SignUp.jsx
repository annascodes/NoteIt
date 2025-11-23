import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterOpt from '../components/RegisterOpt'
import Hero from '../components/Hero'
import useApiReq from '../hooks/useApiReq'
import toast, { Toaster } from 'react-hot-toast';
import BasicIcons from '../components/BasicIcons'
import ErrorDiv from '../components/ErrorDiv'

const SignUp = () => {
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    const [data, setData] = useState({})
    const { request, data: signupData, loading, error } = useApiReq()
    const OnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSignUp = () => {
        console.log(data)
        console.log('apiUrl: ', apiUrl)
        request(`${apiUrl}/api/auth/signup`, 'POST', data)
    }
    useEffect(() => {
        if (signupData) {
            toast(<div className='flex items-center gap-2'>
                <BasicIcons icon='check' className='text-xl'  />
                <h1>User created</h1>
            </div>)
        }
    }, [signupData])
    console.log(error)
    return (

        <div className='flex items-center justify-center gap-2 border-0 p-2 flex-wrap'>

            <div className=' border-0 '>
                <div className='md:hidden block'>
                    <Hero onlyBranding={true} noBtn={true} />
                </div>
                <div className='md:block hidden'>
                    <Hero noBtn={true} />
                </div>
            </div>
            <div className=' w-sm    p-5 border-2 mt-5 shadow-2xl border-neutral-800 rounded-2xl  '>
                <h1 className='text-center font-bold text-4xl mb-5'>SignUp</h1>

                <RegisterOpt/>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input name='email' onChange={OnChange} type="text" className="input w-full" placeholder="email" />
                </fieldset>

                <fieldset className="fieldset mb-2">
                    <legend className="fieldset-legend">Password</legend>
                    <input name='password' onChange={OnChange} type="password" className="input w-full" placeholder="password" />
                </fieldset>

                 {
                    error && <ErrorDiv error={error} />
                }

                <div className='flex items-center justify-center mt-5'>
                    <button disabled={loading} onClick={handleSignUp} className='btn btn-outline   text-xs tracking-widest'>
                        {loading
                            ? <span className='loading loading-dots '></span>
                            : 'SignUp'
                        }
                    </button>
                </div>

                <p className='text-xs tracking-wider mt-5'>Already have an account?
                    <Link className='text-blue-500 underline-offset-2 underline mx-2 hover:no-underline' to={'/login'}>Login</Link> </p>
                    {/* {
                        signupData && <pre className='text-xs tracking-widest'>
                            {JSON.stringify(signupData, null, 10)}
                        </pre>
                    } */}
               
            </div>
            <Toaster position="top-center"
                reverseOrder={false} />
        </div>

    )
}

export default SignUp
