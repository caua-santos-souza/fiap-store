import React from 'react';
import ProdutoItem from '../ProdutoItem/ProdutoItem';
import './ProdutoLista.css'

interface Produto {
    nome: string;
    preco: number;
    descricao: string;
    imagem: string;
}

const produtos: Produto[] = [
    {
        nome: 'batata frita',
        preco: 99.99,
        descricao: 'fritas saborosas que todos nós amamos bebe',
        imagem: '/batata.png'
    },
    {
        nome: 'Produto 2',
        preco: 79.99,
        descricao: 'Descrição do produto 2',
        imagem: 'link-para-imagem-2.jpg'
    },
    
    {
        nome: 'macarrão',
        preco: 79.99,
        descricao: 'Descrição do produto 2',
        imagem: 'link-para-imagem-2.jpg'
    },

    {
        nome: 'Produto 4',
        preco: 79.99,
        descricao: 'Descrição do produto 2',
        imagem: 'link-para-imagem-2.jpg'
    },

    {
        nome: 'Produto 5',
        preco: 79.99,
        descricao: 'Descrição do produto 2',
        imagem: 'link-para-imagem-2.jpg'
    },

    {
        nome: 'Produto 6',
        preco: 79.99,
        descricao: 'Descrição do produto 2',
        imagem: 'link-para-imagem-2.jpg'
    },

    {
        nome: 'Produto 7',
        preco: 79.99,
        descricao: 'Descrição do produto 2',
        imagem: 'link-para-imagem-2.jpg'
    },

    {
        nome: 'Produto 8',
        preco: 79.99,
        descricao: 'Descrição do produto 2',
        imagem: 'link-para-imagem-2.jpg'
    },

    {
        nome: 'Produto 8',
        preco: 79.99,
        descricao: 'Descrição do produto 2',
        imagem: 'link-para-imagem-2.jpg'
    },

    {
        nome: 'Produto 8',
        preco: 79.99,
        descricao: 'Descrição do produto 2',
        imagem: 'link-para-imagem-2.jpg'
    },

    {
        nome: 'Produto 8',
        preco: 79.99,
        descricao: 'Descrição do produto 2',
        imagem: 'link-para-imagem-2.jpg'
    },

    {
        nome: 'Produto 8',
        preco: 79.99,
        descricao: 'Descrição do produto 2',
        imagem: 'link-para-imagem-2.jpg'
    },
];

const ProdutosLista: React.FC = () => {
    return (
        <div className="produtos-lista">
            {produtos.map((produto, index) => (
                <ProdutoItem
                    key={index}
                    nome={produto.nome}
                    preco={produto.preco}
                    descricao={produto.descricao}
                    imagem={produto.imagem}
                />
            ))}
        </div>
    );
}

export default ProdutosLista;
