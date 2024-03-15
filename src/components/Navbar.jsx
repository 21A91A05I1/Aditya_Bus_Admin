import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[80px] w-full bg-[#fd7520e4] flex items-center  '>
        <div className='h-full w-[10%] flex items-center justify-center'>
            <img src="favicon.png" className='h-[80%] '/>
        </div>
        <div className='h-full w-[90%]   flex items-center justify-center'>
            <h1 className='text-[45px] font-semibold  font-sans'>Aditya University</h1> 
        </div>
      {/* <img src="favicon.png" className='h-[80%] '/>
      <h1 className='text-[50px] font-sans font-semibold'>Aditya University</h1> */}
    </nav>
  )
}

export default Navbar
