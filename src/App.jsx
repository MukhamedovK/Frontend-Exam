import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './pages/Main';
import Contact from './pages/Contact';
import Filials from './pages/Filials';
import About from './pages/About';
import Report from './pages/Report';


const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/report" element={<Report />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/filials" element={<Filials />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
