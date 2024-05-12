import React from 'react'

import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'

import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import Summary from './components/Pages/Summary/Summary'
import Curriculum from './components/Pages/Curriculum/Curriculum'
import Portfolio from './components/Pages/Portfolio/Portfolio'
import Contact from './components/Pages/Contact/Contact'
import NavBar from './components/Layout/NavBar/NavBar';


function App() {

  return (
    <>
    
    <div>
    <Header></Header>

    <BrowserRouter>

      <NavBar></NavBar>

      <Routes>
          <Route index element={<Summary />} />
          <Route path="Curriculum" element={<Curriculum />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>

    <Footer></Footer>
    </>
    
  )
}




export default App
