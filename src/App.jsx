import { useState } from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Layout />} />
          <Route path="*" element={<Layout/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
