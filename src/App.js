import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import RegisterPage from './Components/RegisterPage';
import InfoPage from './Components/InfoPage';
import RecuperPage from './Components/RecuperPage';
function App() {
  return (
    <Router>
      <div className="App">
                <main>
          <Routes>
            {/* Configuração das rotas */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/info/:movieId" element={<InfoPage />} />
            <Route path="/RecuperPage" element={<RecuperPage />} />
            {/* Adicione mais rotas conforme necessário */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
