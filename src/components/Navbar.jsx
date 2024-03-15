import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[80px] w-full bg-[#fd7520e4] flex items-center gap-10 md:gap-0 px-3 '>
        <div className='h-full md:w-[10%] flex items-center justify-center '>
            <img src="favicon.png" className='h-[80%] object-contain'/>
        </div>
        <div className='h-full md:w-[90%]   flex items-center justify-center'>
            <h1 className='md:text-[45px]  text-[30px] font-semibold  font-sans leading-9 text-center'>Aditya University</h1> 
        </div>
      {/* <img src="favicon.png" className='h-[80%] '/>
      <h1 className='text-[50px] font-sans font-semibold'>Aditya University</h1> */}
    </nav>
  )
}

export default Navbar
