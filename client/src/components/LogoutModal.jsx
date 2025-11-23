import React, { useEffect } from 'react'
import useApiReq from '../hooks/useApiReq'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOutMethod } from '../redux/user/userSlice'
import ErrorDiv from './ErrorDiv'

const LogoutModal = ({id=''}) => {
    const modalId = `logoutModal${id}`
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { request, data, loading, error } = useApiReq()
    const handleLogout = () => {
        console.log(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`)
        request(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, 'POST', {})
    }
    useEffect(() => {
        if (data) {
            dispatch(logOutMethod())
            navigate('/login')
        }

    }, [data])
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button disabled={loading} className="btn btn-outline btn-error btn-xs text-xs tracking-widest" onClick={() => document.getElementById(modalId).showModal()}>
                {loading
                    ? <span className='loading loading-dots loading-sm'></span>
                    : 'logout'
                }
            </button>
            <dialog id={modalId} className="modal">
                <div className="modal-box w-sm rounded-xl">
                    <h3 className="font-bold text-lg text-center">Do you want to logout?</h3>
                    {error && <ErrorDiv error={error} />}
                    <div className="modal-action">
                        <form method="dialog" className='flex justify-around w-full'>
                            {/* if there is a button in form, it will close the modal */}
                            <button disabled={loading} onClick={handleLogout} className="btn btn-error">logout</button>
                            <button className="btn">No</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default LogoutModal
