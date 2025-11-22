import React from 'react'

const ThreeDImgs = () => {
    return (

        <figure className="hover-gallery w-60 h-52 border">
            <div className='w-60 h-52 overflow-hidden'>
                <img src="https://i.pinimg.com/1200x/9a/1b/6e/9a1b6eef5c7c633efb7eeb3a343a3202.jpg"
                    className='w-full h-full object-cover' alt="" />
            </div>
            <div className='w-60 h-52 overflow-hidden'>
                <img src="https://i.pinimg.com/1200x/c1/f3/d5/c1f3d5f71f4128ce02d4fc744d25527a.jpg"
                    className='w-full h-full object-cover' alt="" />
            </div>
            <div className='w-60 h-52 overflow-hidden'>
                <img src="https://i.pinimg.com/1200x/0a/45/7b/0a457b32a9c43c06ab134846f4f9dc9d.jpg"
                    className='w-full h-full object-cover' alt="" />
            </div>
           
            
        </figure>


    )
}

export default ThreeDImgs
