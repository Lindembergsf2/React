import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import Summary from './components/Pages/Summary/Summary'
import Curriculum from './components/Pages/Curriculum/Curriculum'


function App() {

  return (
    <>
    <Header></Header>

    {/* <Summary></Summary> */}
    <Curriculum></Curriculum>

    <Footer></Footer>
    </>
  )
}

export default App
