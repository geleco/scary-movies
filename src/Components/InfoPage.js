/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import hallo from "./assets/Halloween.jpg";
import "./styles/InfoPage.css";
import Header from './Header';

const FilmeInfo = ({ filme }) => {
  return (
    <><div><Header hideSearchBar={false} /></div><div className="filme-info-container">
      <div className="movie-synopsis">
        <div className="movie-info">
          <img src={hallo} alt="Hallo" className="halloween" />
          <div>
            <h2>Halloween</h2>
            <p className="synopsis">teste sinopse</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="trailer-link"
            >
              Assistir ao Trailer
            </a>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default FilmeInfo;