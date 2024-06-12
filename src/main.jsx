import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Router'
import './reset.css'
import './root.css'
import Header from './assets/Componentes/Header/Header'
import Footer from './assets/Componentes/Footer/Footer'
import Especialistas from './assets/Pages/Especialista/EspecialistaLogado'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Header/>
        <Routes />
        <Especialistas/>
        <Footer />
    </Router>
  </React.StrictMode>
)
