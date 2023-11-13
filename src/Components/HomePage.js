import React, { useState, useEffect } from 'react';
import Header from './Header';
import './styles/HomePage.css';
import { Link, useLocation } from 'react-router-dom';

function HomePage() {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    // Extrair o termo de pesquisa da URL
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search');

    useEffect(() => {
        // URL do endpoint de busca
        const url = searchTerm
            ? `http://localhost:8080/movies/search?name=${searchTerm}`
            : `http://localhost:8080/movies`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Falha na resposta da rede.');
                }
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setMovies(data);
                } else {
                    console.error('Data is not an array:', data);
                    setMovies([]); // Resetando para array vazio se os dados não forem um array
                }
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, [searchTerm]); // Dependência: searchTerm

    return (
        <div>
            <Header hideSearchBar={false} showLogout={true} />
            <div className="movies-container">
                {movies.map(movie => (
                    <div key={movie.id} className="movie">
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
