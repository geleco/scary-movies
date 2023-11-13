import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import "./styles/InfoPage.css";

const InfoPage = () => {
    const [filme, setFilme] = useState(null);
    const [borderColor, setBorderColor] = useState(null);
    const { movieId } = useParams(); // Capturando o ID do filme da URL

    useEffect(() => {
        // Substitua esta URL pela URL do seu backend para buscar os detalhes do filme
        const url = `http://localhost:8080/movies/${movieId}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setFilme(data))
            .catch(error => console.error('Error fetching movie:', error));
    }, [movieId]);

    if (!filme) {
        return <div>Carregando...</div>;
    }

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
                        <div className="trailer-container">
                            {/* Substitua pelo elemento de vídeo ou outro conteúdo relevante */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoPage;
