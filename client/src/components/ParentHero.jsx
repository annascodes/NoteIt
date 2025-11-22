import React from 'react'
import Hero from './Hero'

const ParentHero = () => {
  return (
   <div className=' h-96 m-20 flex justify-around items-center  rounded-4xl '>
        <div className=' '>
          <Hero />
        </div>
        <div className='w-sm h-full border-0 border-black overflow-hidden rounded-xl '>
          <img src="https://i.pinimg.com/736x/3b/b2/a6/3bb2a6b536138f60b797cc5e08523880.jpg"
            className='w-full h-full object-cover'
            alt="" />
        </div>
      </div>
  )
}

export default ParentHero
