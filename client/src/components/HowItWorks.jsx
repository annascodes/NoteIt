import React from 'react'
import { AppFeatures, AppHowItWorks } from '../../lib/hardData'
import BasicIcons from './BasicIcons'

const HowItWorks = () => {
    return (
        <div className='md:h-svh flex items-center justify-center'>
            <div>
                <h1 className='text-5xl font-semibold md:mx-25 mx-3 text-center '>How it Works</h1>
                <div className='flex items-center justify-center gap-4 flex-wrap my-5'>
                    {
                        AppHowItWorks.map((f) => {
                            return (
                                <div key={f.title} className="card bg-neutral-900 text-neutral-content w-96 rounded-2xl">
                                    <div className="card-body">
                                        <div className='flex items-center gap-3'>
                                            <BasicIcons icon={f.step} className={`text-7xl`} />
                                            <h2 className="card-title text-4xl"> {f.title} </h2>
                                        </div>
                                        <p className=' mt-2'>{f.description}</p>
                                        {/* <div className="card-actions justify-end">
                                        <button className="btn">Buy Now</button>
                                    </div> */}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default HowItWorks
