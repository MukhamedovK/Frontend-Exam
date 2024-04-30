import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './pages/Main';
import Contact from './pages/Contact';
import Filials from './pages/Filials';
import About from './pages/About';
import Profile from './pages/Profile';


const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/filials" element={<Filials />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App