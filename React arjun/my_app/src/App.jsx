import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Rav from './components/Rav'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <br />
      <br />
      <h1>REACT PROGRAM</h1>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/S' element={<Statebasics />} />
        <Route path='/C' element={<Counter />} />
        <Route path='/R' element={<Rav />} />
        <Route path='/Api' element={<Api />} />
        <Route path='/P' element={<Pokemon />} />
      </Routes>
      
    </>
  )
}

export default App
