import cartIcon from '../../assets/cart.svg';
import './styles.css';

export default function HeaderClient() {
    return (
        <header className="devc-header-client">
            <nav className="devc-container">
                <h1>DevCommerce</h1>
                <div>
                    <img className="devc-item-nav" src={cartIcon} alt="Carrinho de compras" />
                    <a className="devc-item-nav devc-sign-in-link" href="#">Entrar</a>
                </div>
            </nav>
        </header>
    );
}