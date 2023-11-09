import React from 'react';
import Header from './Header'; // Você precisa adicionar o caminho correto para o seu componente Header aqui
import './styles/HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <Header hideSearchBar={false} />
            {/* ... resto do seu HomePage ... */}
            <div>
            <Link to="/info">
              <button type="submit" className="button_login">Informação</button>
            </Link>
            </div>
        </div> 

    );
}

export default HomePage;
