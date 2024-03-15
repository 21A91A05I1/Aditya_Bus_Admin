import React from 'react'
import LoginPage from '../components/Login'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <div className='h-[100vh] w-full  flex flex-col'>
        <Navbar/>
        <LoginPage/>
    </div>
  )
}

export default Login
