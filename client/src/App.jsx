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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
      <Navbar/>
        <div className='border-2 border-transparent mt-16'>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
        </Routes>
        </div>
      </BrowserRouter>
      {/* <div>

        <div>

          <h1>Do this for the new and upcoming era </h1>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div> */}
    </>
  )
}

export default App
