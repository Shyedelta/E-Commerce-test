import React from 'react'

function Header() {
  return (
    <div className='font-outfit  max-w-[75vw] mx-auto py-14 flex justify-between align-middle *:my-auto '>
      <div className='flex *:my-auto gap-20'>
        <svg className='hover:scale-105 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
        <div className='flex gap-20 font-bold tracking-widest'>
          <p className='hover:scale-105 cursor-pointer'>man</p>
          <p className='hover:scale-105 cursor-pointer'>women</p>
          <p className='hover:scale-105 cursor-pointer'>tech</p>
          <p className='hover:scale-105 cursor-pointer'>explore</p>
        </div>
      </div>
      <div className='flex gap-5 '>
        <svg className='hover:scale-105 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" /></svg>
        <svg className='hover:scale-105 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </div>
    </div>
  )
}

export default Header