import { useContext } from 'react';
import { ContextToken } from '../../utils/context-token';
import * as authService from '../../services/auth-service.ts';
import { Link } from 'react-router-dom';

export default function LoggedUser() {

    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick(){
        authService.logout();
        setContextTokenPayload(undefined);
    }

    return (
        contextTokenPayload && 
        authService.isAuthenticated()
            ? (
                <div className="devc-user-container">
                    <p>{contextTokenPayload?.user_name}</p>
                    <h4 onClick={handleLogoutClick}>Sair</h4>
                </div>
            )
            : (
                <div>
                    <Link to="/login" className="devc-item-nav devc-sign-in-link">Entrar</Link>
                </div>
            )
    );
}