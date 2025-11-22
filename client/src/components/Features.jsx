import React from 'react'
import { AppFeatures } from '../../lib/hardData'
import BasicIcons from './BasicIcons'

const Features = () => {
    return (
      <div className='md:h-svh flex items-center justify-center'>
          <div className=''>
            <h1 className='text-5xl font-semibold md:mx-25 mx-3 text-center '>Features</h1>
            <div className='flex items-center justify-center gap-4 flex-wrap my-5'>
                {
                    AppFeatures.map((f) => {
                        return (
                            <div key={f.title} className="hover:scale-125 duration-500 transition ease-in-out hover:z-40  hover:duration-200 card bg-neutral-900 hover:bg-neutral-800 text-neutral-content w-96 rounded-2xl">
                                <div className="card-body">
                                  <div className='flex items-center gap-3'>
                                      <BasicIcons icon={f.icon} />
                                    <h2 className="card-title"> {f.title} </h2>
                                  </div>
                                    <p className='mt-2'>{f.description}</p>
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

export default Features
