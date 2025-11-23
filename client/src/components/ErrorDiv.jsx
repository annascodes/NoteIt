import React from 'react'
import BasicIcons from './BasicIcons'

const ErrorDiv = ({error='Something went wrong!!!'}) => {
    return (
        <div role="alert" className="alert alert-error text-xs tracking-widest p-1">
           <BasicIcons icon='cancel' className='text-xl' />
            <span>   {error}</span>
        </div>
    )
}

export default ErrorDiv
