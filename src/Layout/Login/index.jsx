import React from 'react'

const Login = () => {
  return (
    <div className='page'>
        <h1>Login</h1>
        <form className='login-form'>
            <input type='text' placeholder='Username' required />
            <input type='password' placeholder='Password' required />
            <button type='Login'>Login</button>
        </form>
    </div>
  )
}

export default Login
