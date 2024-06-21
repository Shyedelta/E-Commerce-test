import React from 'react'
import Home from './Home';
import Header from './Header';

function Layout() {

  return (
    <div className='font-outfit  bg-gradient-to-t from-gray-200 to-orange-50/40 max-h-screen overflow-hidden h-screen'>
      <Header />
      <Home />
    </div>
  )
}

export default Layout