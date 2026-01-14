import React, { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Trustedby from './components/Trustedby/Trustedby'
import Services from './components/Services/Services'
import OverWork from './components/Our Work/OverWork'
import Team from './components/Team/Team'
import Contact from './components/Contact Us/Contact'
import Footer from './components/Footer/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const [Theme, setTheme] = useState(localStorage.getItem('Theme') ? localStorage.getItem('Theme') : 'light')

  return (
    <div className='min-h-screen text-gray-700 dark:bg-black dark:text-white'>


      <Routes>
        <Route path='/' element={
          <>
          <Toaster/>
          <Header Theme={Theme} setTheme={setTheme} />
          <Home Theme={Theme} setTheme={setTheme} />
          <Trustedby />
          <Services />
          <OverWork />
          <Team />
          <Contact />
          <Footer Theme={Theme} />
        </>
        } />
        
        {/* <Route path="/login" element={<><Toaster/><Login /></>} /> */}
      </Routes>

    </div>
  )
}

export default App
