import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RegisterOpt = () => {
    return (
        <div className=' flex gap-0.5 mb-10  '>
            <button className='w-1/2 text-center btn btn-neutral tracking-widest text-xs  '>
                <FaGoogle className='text-xl ' />
                {/* Google */}
            </button>
            <button className='w-1/2 text-center btn btn-neutral tracking-widest text-xs '>
                <FaGithub className='text-xl ' />
                {/* Github */}
            </button>
        </div>
    )
}

export default RegisterOpt
