import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Section from './Component/Section/Section'
import Footer from './Component/Footer/Footer'
import Front from './pages/Front'
import Login from './pages/Login'
import Register from './pages/Register'
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'

const App = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Routes>
        <Route exact path='/' element={<Front />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/posts' element={<CreatePost />} />
        <Route exact path='/posts/:id' element={<PostDetails />} />
        <Route exact path='/update/:id' element={<EditPost />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
