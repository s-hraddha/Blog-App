import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Section from './Component/Section/Section'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
         
        </Routes>
      </main>
      {/* <Section/> */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
