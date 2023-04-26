import React from 'react';
import './App.css';
import Header from './Components/Header';
import Inicio from './Components/Inicio';
import Sobremi from './Components/Sobremi';
import Skills from './Components/Skills'
import Cv from './Components/Cv'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Inicio/>
      <Sobremi/>
      <Skills/>
      <Cv/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
