import { useContext, useState } from 'react';
import './styles.css';
import * as authService from '../../../services/auth-service.ts';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token.ts';

type FormData = {
    username:string,
    password:string
}

export default function Login() {

    const navigate = useNavigate();

    const [formData,setFormData] = useState<FormData>({
        username: "",
        password: ""
    })

    const {setContextTokenPayload} = useContext(ContextToken);

    function handleSubmit(event:any){
        event.preventDefault();
        authService.loginRequest(formData)
            .then((response) => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/catalog");
            })
            .catch((error) => {
                console.log("Erro na autorização", error);
            })
    }

    function handleOnChangeInput(event:any){
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formData, [name]: value})
    }

    return (
        <main>
            <section id="login-section" className="devc-container devc-pd-top-20">
                <div className="devc-login-form-container devc-card">
                    <form className="devc-form-login" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="devc-form-control-container">
                            <div className="devc-form-email-container">
                                <input name="username" value={formData.username} onChange={handleOnChangeInput} className="devc-form-input" type="text" placeholder="Email" />
                                    <div className="devc-form-error"></div>
                            </div>
                            <div className="devc-form-password-container">
                                <input name="password" value={formData.password} onChange={handleOnChangeInput} className="devc-form-input" type="password" placeholder="Senha" />
                                    <div className="devc-form-error"></div>
                            </div>
                        </div>
                        <button type="submit" className="devc-btn devc-btn-blue">Entrar</button>
                    </form>
                </div>
            </section>
        </main>
    );
}