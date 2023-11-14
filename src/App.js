import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontSizeProvider } from './Components/FontSizeContext'; // Importe o FontSizeProvider
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import RegisterPage from './Components/RegisterPage';
import InfoPage from './Components/InfoPage';
import RecuperPage from './Components/RecuperPage';

function App() {
  return (
    <FontSizeProvider> {/* Envolver com FontSizeProvider */}
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
    </FontSizeProvider>
  );
}

export default App;
