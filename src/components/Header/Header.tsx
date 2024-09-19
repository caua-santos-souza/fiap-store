import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <>
            <header className="Header">
                <img src="/Logo.png" alt="Logo da Fiap Store" />
                <nav className="Header__Nav">
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ProdutosLista">Produtos</Link></li>
                        <li><a href="#footer">Participantes</a></li> 
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
