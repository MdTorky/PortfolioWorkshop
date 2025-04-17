import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {

  return (
    <div>
      <Navbar />
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />

      </Routes>
    </div>
  )
}

export default App
