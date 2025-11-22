import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ onlyBranding = false, noBtn = false }) => {
    return (
        <div className={`${onlyBranding ? '' : 'md:h-svh h-96 p-5 border-0 flex justify-center items-center'}`}>
            <div>
                <div className='text-3xl md:text-6xl  font-extrabold tracking-wider flex flex-col items-start  '>
                    <h1 className='flex items-center gap-1'>
                        <span className='text-sm tracking-widest'>your</span> Note<span className='text-yellow-300 mx-0.5'>it.</span>
                    </h1>
                    <h1 >
                        Take Notes.
                    </h1>
                    <h1 >
                        Stay Organized.
                    </h1>
                </div>
                {
                    !onlyBranding &&
                    <>
                        <p className='md:w-lg   mx-auto mt-2' >Note-It is your simple, fast, and secure note-taking app built to help you capture ideas, organize tasks, and keep your life on track — anytime, anywhere.</p>

                        {
                            !noBtn &&
                            <>
                                <div className='flex items-center gap-3 mt-5'>
                                    <Link to={'/signup'} className='btn btn-outline tracking-widest text-xs' >Create you account now</Link>

                                    <Link to={'/login'} className='btn btn-neutral tracking-widest text-xs'>Login</Link>
                                </div>

                            </>
                        }
                    </>
                }

            </div>
        </div>
    )
}

export default Hero
