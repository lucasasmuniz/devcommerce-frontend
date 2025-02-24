import './styles.css';

import stockImg from '../../assets/stock.svg';
import homeImg from '../../assets/home.svg';

export default function HeaderAdmin() {
    return (
        <header className="devc-header-admin">
        <nav className="devc-container">
            <h1>DevCommerce</h1>
            <div>
                <div className="devc-cursor-click devc-mr-20">
                    <img src={homeImg} alt="Carrinho de compras" />
                    <p className="devc-item-nav-name-admin">Início</p>
                </div>
                <div className="devc-cursor-click">
                    <img src={stockImg} alt="Carrinho de compras" />
                    <h4 className="devc-item-nav-name-admin">Produtos</h4>
                </div>
                <div className="devc-user-container">
                    <p>Maria Silva</p>
                    <h4>Sair</h4>
                </div>
            </div>
        </nav>
    </header>
    );
}