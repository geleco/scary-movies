import React, { useState, useEffect } from 'react';
import Header from './Header';
import './styles/HomePage.css';
import { Link, useLocation } from 'react-router-dom';

function HomePage() {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        // Função para buscar filmes
        const fetchMovies = () => {
            const searchParams = new URLSearchParams(location.search);
            const searchTerm = searchParams.get('search');
            const url = searchTerm
                ? `http://localhost:8080/movies/search?name=${searchTerm}`
                : `http://localhost:8080/movies`;

            fetch(url)
                .then(response => response.ok ? response.json() : Promise.reject('Falha na resposta da rede.'))
                .then(data => Array.isArray(data) ? setMovies(data) : console.error('Data is not an array:', data))
                .catch(error => console.error('Error fetching movies:', error));
        };

        fetchMovies();
    }, [location]); // Dependência: location

    return (
        <div>
            <Header hideSearchBar={false} showLogout={true} />
            <div className="movies-container">
                {movies.map(movie => (
                    <div key={movie.id} className={`movie ${movie.watchedStatus}`}>
                        <h3>{movie.nome}</h3>
                        <Link to={`/info/${movie.id}`}>
                            <img src={movie.urlImagem} alt={movie.nome} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
