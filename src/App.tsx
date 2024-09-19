import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Erro404 from './components/erro404/erro404';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProdutosLista from './components/ProdutoLista/ProdutoLista';
import DetalhesDoProduto from './components/DetalhesProduto/DetalhesProduto';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/ProdutosLista" element={ <ProdutosLista/> } />
                <Route path="/DetalhesProduto" element={ <DetalhesDoProduto/> } />
                <Route path="*" element={ <Erro404 />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
