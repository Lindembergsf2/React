import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import api from './api';

import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import Summary from './components/Pages/Summary/Summary'
import Curriculum from './components/Pages/Curriculum/Curriculum'
import Portfolio from './components/Pages/Portfolio/Portfolio'
import Contact from './components/Pages/Contact/Contact'
import NavBar from './components/Layout/NavBar/NavBar';


function App() {
  const [informacoes, setInformacoes] = React.useState({});
  const [curriculo, setCurriculo] = React.useState({});
  const [portfolio, setPortfolio] = React.useState({});

  const fetchData = async () => {
    try {
    const informacao = await api.get('/informacoes/0');
    setInformacoes({
      foto: informacao.data.foto,
      titulo: informacao.data.titulo,
      resumo: informacao.data.resumo
    });

    const experienciaAcademica = await api.get(`/experiencias?tipo=Acadêmico`);
    const experienciaProfissional = await api.get(`/experiencias?tipo=Profissional`);
    
    setCurriculo({
      experienciaAcademica: experienciaAcademica.data,
      experienciaProfissional: experienciaProfissional.data
    });

    const portfolio = await api.get(`/portfolio`);
    console.log(portfolio)
    setPortfolio({
      portfolio: portfolio.data
    });
  } catch (error) {
    console.error('Erro ao buscar informações:', error);
  }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      
        <Header></Header>

        <BrowserRouter>

          <NavBar></NavBar>

          <Routes>
            <Route index element={<Summary informacoes={informacoes} />} />
            <Route path="Curriculum" element={<Curriculum curriculo={curriculo} />} />
            <Route path="Portfolio" element={<Portfolio portfolio={portfolio}/>} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        
      <Footer></Footer>
    </>

  )
}




export default App;
