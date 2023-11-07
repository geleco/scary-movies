import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importar os componentes corrigidos
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
                <main>
          <Routes>
            {/* Configuração das rotas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* Adicione mais rotas conforme necessário */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
