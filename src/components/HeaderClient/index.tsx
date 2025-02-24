import './styles.css';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';
import iconAdmin from '../../assets/config.svg';
import * as authService from "../../services/auth-service.ts";
import { useContext } from 'react';
import { ContextToken } from '../../utils/context-token.ts';

export default function HeaderClient() {

    const {contextTokenPayload} = useContext(ContextToken);

    return (
        <header className="devc-header-client">
            <nav className="devc-container">
                <Link to="/">
                    <h1>DevCommerce</h1>
                </Link>
                <div>
                    {
                        contextTokenPayload &&
                        authService.hasAnyRoles(['ROLE_ADMIN']) && 
                        <img className="devc-item-nav devc-mr-20" src={iconAdmin} alt="Tela de Admin" />
                    }
                    <Link to="/cart"><CartIcon /></Link>
                    <Link to="/login" className="devc-item-nav devc-sign-in-link">Entrar</Link>
                </div>
            </nav>
        </header>
    );
}