import { Link } from 'react-router-dom';
import cartIcon from '../../assets/cart.svg';
import './styles.css';

export default function HeaderClient() {
    return (
        <header className="devc-header-client">
            <nav className="devc-container">
                <Link to="/">
                    <h1>DevCommerce</h1>
                </Link>
                <div>
                    <Link to="/cart"><img className="devc-item-nav devc-mr-20" src={cartIcon} alt="Carrinho de compras" /></Link>
                    <Link to="/login" className="devc-item-nav devc-sign-in-link">Entrar</Link>
                </div>
            </nav>
        </header>
    );
}