import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from './pages/About'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Notes from './pages/Notes'
import { useSelector } from 'react-redux'
import Footer from './components/Footer'
import { ToastBar } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)
  const { user } = useSelector(state => state.user)

  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Navbar />
        <div className='border-2 border-transparent mt-18'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={user ? <Navigate to={'/'} /> : <SignUp />} />
            <Route path='/notes' element={user? <Notes />: <Navigate to={'/login'} />} />
            <Route path='/login' element={user ? <Navigate to={'/'} /> : <Login />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    
    </>
  )
}

export default App
