import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Styles from './pages/Styles'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/styles" element={<Styles />} />
      </Routes>
    </div>
  )
}

export default App
