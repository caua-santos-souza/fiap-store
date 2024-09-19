// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const erro404: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>404 - Página Não Encontrada</h1>
            <p>A página que você está tentando acessar não existe.</p>
            <Link to="/">Voltar para a Home</Link>
        </div>
    );
}

export default erro404;
