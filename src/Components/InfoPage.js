import React from 'react';
import hallo from "./assets/Halloween.jpg";
import alouu from "./assets/halou.mp4"
import "./styles/InfoPage.css";
import Header from './Header';

const FilmeInfo = ({ filme }) => {
  return (
    <><div><Header hideSearchBar={false} /></div><div className="filme-info-container">
      <div className="movie-synopsis">
        <div className="movie-info">
          <img src={hallo} alt="Hallo" className="halloween" />
          <div>
            <div className="trailer-container">
              <video width="560" height="315" controls>
                <source src={alouu} alt="halouu" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <h2>Halloween</h2>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default FilmeInfo;

