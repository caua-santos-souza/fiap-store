// src/components/DetalhesDoProduto.tsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './DetalhesProduto.css';

interface UseLocation {
    nome: string;
    preco: number;
    descricao: string;
    imagem: string;
}

const DetalhesDoProduto: React.FC = () => {
    const location = useLocation();
    const { nome, preco, descricao, imagem } = location.state as UseLocation;
    
    const [quantidade, setQuantidade] = useState(0);

    const aumentarQuantidade = () => {
        setQuantidade(prev => prev + 1);
    };

    const diminuirQuantidade = () => {
        setQuantidade(prev => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <div className="detalhes-do-produto">
            <img src={imagem} alt={nome} />
            <div className="info-produto">
                <h1>{nome}</h1>
                <p>{descricao}</p>
                <p>{`R$${preco.toFixed(2)}`}</p>
                <div className="controle-quantidade">
                    <button 
                        onClick={diminuirQuantidade} 
                        disabled={quantidade === 0}
                    >
                        -
                    </button>
                    <span>{quantidade}</span>
                    <button onClick={aumentarQuantidade}>+</button>
                </div>
                <button className="adicionar-carrinho">Adicionar ao Carrinho</button>
            </div>
        </div>
    );
}

export default DetalhesDoProduto;
