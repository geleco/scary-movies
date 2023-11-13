import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import "./styles/InfoPage.css";

const InfoPage = () => {
    const [filme, setFilme] = useState(null);
    const [borderColor, setBorderColor] = useState(null);
    const { movieId } = useParams(); // Capturando o ID do filme da URL

    useEffect(() => {
        const url = `http://localhost:8080/movies/${movieId}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setFilme(data))
            .catch(error => console.error('Error fetching movie:', error));
    }, [movieId]);

    const handleWatchedClick = () => {
        setBorderColor('green');
    };

    const handleNotWatchedClick = () => {
        setBorderColor('red');
    };

    // Renderização condicional
    if (!filme) {
        return (
            <>
                <Header hideSearchBar={false} />
                <div className="loading-container">Carregando...</div>
            </>
        );
    }

    return (
        <>
            <Header hideSearchBar={false} />
            <div className="filme-info-container">
                <div className="movie-synopsis">
                    <div className="movie-info">
                        <div className="image-container" style={borderColor ? { border: `2px solid ${borderColor}` } : {}}>
                            <img src={filme.urlImagem} alt={filme.nome} className="movie-image" />
                            <div className="buttons-container">
                                <button className="watched-button" onClick={handleWatchedClick}>
                                    Já Assisti
                                </button>
                                <button className="not-watched-button" onClick={handleNotWatchedClick}>
                                    Não Assisti Ainda
                                </button>
                            </div>
                        </div>
                        {/* Aqui você pode adicionar o trailer ou outros detalhes do filme */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoPage;
