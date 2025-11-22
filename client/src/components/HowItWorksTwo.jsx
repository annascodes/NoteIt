import React from 'react'
import { AppHowItWorks } from '../../lib/hardData'

const HowItWorksTwo = () => {
    return (
        <div>
            {/* <h1 className='text-5xl font-semibold md:mx-25 mx-3 text-center '>How it Works</h1> */}
            <div className='flex items-center justify-center gap-4 flex-wrap my-5'>
                {
                    AppHowItWorks.map((f) => {
                        return (
                            <div key={f.title} className="card bg-white text-neutral-700 w-96 rounded-2xl">
                                <div className="card-body">
                                    <div className='flex items-center gap-2'>
                                        <div className='w-32 h-32 overflow-hidden mx-auto rounded-4xl '>
                                            <img src={f.img}
                                                className='w-full h-full object-cover'
                                                alt="" />
                                        </div>
                                        <h1 className='font-bold text-5xl '>{f.title}</h1>
                                    </div>
                                    <div >

                                        <h1>{f.description}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default HowItWorksTwo
