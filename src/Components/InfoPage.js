import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import "./styles/InfoPage.css";

const InfoPage = () => {
    const [filme, setFilme] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        const url = `http://localhost:8080/movies/${movieId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setFilme(data))
            .catch(error => console.error('Error fetching movie:', error));
    }, [movieId]);

    const updateWatchedStatus = (status) => {
        fetch(`http://localhost:8080/movies/${movieId}/status`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(status)
        })
        .then(() => {
            // Atualizar o estado local do filme
            setFilme({ ...filme, watchedStatus: status });
        })
        .catch(error => console.error('Error updating movie status:', error));
    };

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
                        <div className="image-container">
                            <img src={filme.urlImagem} alt={filme.nome} className="movie-image" />
                            <div className="buttons-container">
                                <button className="watched-button" onClick={() => updateWatchedStatus('watched')}>
                                    Já Assisti
                                </button>
                                <button className="not-watched-button" onClick={() => updateWatchedStatus('notWatched')}>
                                    Não Assisti Ainda
                                </button>
                            </div>
                        </div>
                        <div className="trailer-container">
                            <iframe
                                src={`https://www.youtube.com/embed/${filme.trailerId}`}
                                frameBorder="0"
                                allowFullScreen
                                className="responsive-video"
                                title="Trailer do Filme"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoPage;
