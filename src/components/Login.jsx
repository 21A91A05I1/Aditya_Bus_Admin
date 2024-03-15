import React from 'react'

const LoginPage = () => {
  return (
   <div className='h-full w-full flex items-center justify-center flex-col  bg-slate-100 relative overflow-hidden'>
     <div className='h-[65%] w-[22%]   bg-white p-8 rounded-xl shadow-lg'>
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <form>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold  mb-2" htmlFor="username">
            Username
        </label>
        <input
            className="border rounded-md px-4 py-2 w-full"
            id="username"
            type="text"
            placeholder="Enter your username"
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
        </label>
        <input
            className="border rounded-md px-4 py-2 w-full"
            id="password"
            type="password"
            placeholder="Enter your password"
        />
    </div>
    <p className='mt-4 flex justify-end'>Forget password?</p>
    <div className='flex items-center justify-center'><button
        className="bg-blue-500 text-white rounded-[40px] px-4 py-2 w-[100px] mt-4"
        type="submit"
    >
        Login
    </button></div>
</form>


    </div>
<div className='h-[55%] w-[30%] bg-[#004466] rounded-[45px] absolute -top-12 -right-48 rotate-45'></div>
<div className='h-[55%] w-[30%] bg-[#004466] rounded-[45px] absolute -bottom-12 -left-48 rotate-45'></div> 

    
   </div>
   
  )
}

export default LoginPage

{/* <div className="bg-white p-8 rounded-xl shadow-lg w-[25%] flex items-center justify-center">


</div>
<div className='h-[55%] w-[30%] bg-blue-700 rounded-[45px] absolute -top-12 -right-48 rotate-45'></div>
<div className='h-[55%] w-[30%] bg-blue-700 rounded-[60px] absolute bottom-20 -left-48 rotate-[60deg]'></div> */}