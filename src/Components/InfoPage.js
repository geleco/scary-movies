import React, { useState } from 'react';
import hallo from "./assets/Halloween.jpg";
import alouu from "./assets/halou.mp4";
import "./styles/InfoPage.css";
import Header from './Header';

const FilmeInfo = ({ filme }) => {
  const [borderColor, setBorderColor] = useState(null);

  const handleWatchedClick = () => {
    setBorderColor('green');
    // Adicione lógica adicional aqui, se necessário
  };

  const handleNotWatchedClick = () => {
    setBorderColor('red');
    // Adicione lógica adicional aqui, se necessário
  };

  return (
    <>
      <div>
        <Header hideSearchBar={false} />
      </div>
      <div className="filme-info-container">
        <div className="movie-synopsis">
          <div className="movie-info">
            <div className="image-container" style={borderColor ? { border: `2px solid ${borderColor}` } : {}}>
              <img src={hallo} alt="Hallo" className="halloween" />
              <div className="buttons-container">
                <button className="watched-button" onClick={handleWatchedClick}>
                  Já Assisti
                </button>
                <button className="not-watched-button" onClick={handleNotWatchedClick}>
                  Não Assisti Ainda
                </button>
              </div>
            </div>
            <div className="trailer-container">
              <video controls className="responsive-video">
                <source src={alouu} alt="halouu" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmeInfo;

