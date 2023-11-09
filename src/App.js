import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig'; // Importe a configuração do Firebase do seu arquivo de configuração
// Importar os componentes corrigidos
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import InfoPage from './Components/InfoPage';

function App() {
  return (
    <Router>
      <div className="App">
                <main>
          <Routes>
            {/* Configuração das rotas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/info" element={<InfoPage />} />
            {/* Adicione mais rotas conforme necessário */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
