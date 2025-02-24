import './styles.css';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';
import iconAdmin from '../../assets/config.svg';
import * as authService from "../../services/auth-service.ts";
import { useContext } from 'react';
import { ContextToken } from '../../utils/context-token.ts';
import LoggedUser from '../LoggedUser/index.tsx';

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
                    <LoggedUser />
                </div>
            </nav>
        </header>
    );
}