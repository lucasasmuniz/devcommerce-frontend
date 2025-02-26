import './styles.css';

import stockImg from '../../assets/stock.svg';
import homeImg from '../../assets/home.svg';
import LoggedUser from '../LoggedUser';
import { NavLink } from 'react-router-dom';

export default function HeaderAdmin() {
    return (
        <header className="devc-header-admin">
            <nav className="devc-container">
                <h1>DevCommerce</h1>
                <div>
                    <NavLink to={"/admin/home"} className={({ isActive}) => isActive ? "devc-active" : ""}>
                        <div className="devc-cursor-click devc-mr-20">
                            <img src={homeImg} alt="Carrinho de compras" />
                            <p className="devc-item-nav-name-admin">Início</p>
                        </div>
                    </NavLink>
                    <NavLink to={"/admin/products"} className={({ isActive}) => isActive ? "devc-active" : ""}>
                        <div className="devc-cursor-click">
                            <img src={stockImg} alt="Carrinho de compras" />
                            <p className="devc-item-nav-name-admin">Produtos</p>
                        </div>
                    </NavLink>

                    <LoggedUser />
                </div>
            </nav>
        </header>
    );
}