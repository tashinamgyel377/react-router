import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Layout/Login'
import Home from './Layout/Home'
import About from './Layout/About'

const App = () => {
  return (
    <div className='container'>
      <nav className='nav'>
        <Link to='/' className='nav-link'>
          Home
        </Link>
        <Link to='/about' className='nav-link'>
          About
        </Link>
        <Link to='/login' className='nav-link'>
          Login
        </Link>
      </nav>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/login' element={<Login />} />
  <Route
    path='*'
    element={
      <div className='page'>
        <h1>404 Page not found</h1>
        <p>🚫Oops the page is not avaliable for the time being, Try after sometime!!!</p>
      </div>
    }
    />
  </Routes>
  </div>
  )
}

export default App
