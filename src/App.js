import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Training from './Pages/Training'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <LandingPage />} />
        <Route path='/training' element={ <Training />} />
      </Routes>
    </Router>
  )
}

export default App