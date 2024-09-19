import React from "react";
import { useNavigate } from "react-router-dom";
import './ProdutoItem.css'

interface ProdutoItemProps {
    nome: string;
    preco: number;
    descricao: string;
    imagem: string;
}

const ProdutoItem: React.FC<ProdutoItemProps> = ({ nome, preco, descricao, imagem }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/DetalhesProduto', { state: { nome, preco, descricao, imagem } });
    };

    return (
        <div className="produto-item" onClick={handleClick}>
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <p>{`R$${preco.toFixed(2)}`}</p>
        </div>
    );
}

export default ProdutoItem;
