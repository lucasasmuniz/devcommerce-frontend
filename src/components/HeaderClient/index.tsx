import { Link } from 'react-router-dom';
import './styles.css';
import CartIcon from '../CartIcon';

export default function HeaderClient() {
    return (
        <header className="devc-header-client">
            <nav className="devc-container">
                <Link to="/">
                    <h1>DevCommerce</h1>
                </Link>
                <div>
                    <Link to="/cart"><CartIcon /></Link>
                    <Link to="/login" className="devc-item-nav devc-sign-in-link">Entrar</Link>
                </div>
            </nav>
        </header>
    );
}