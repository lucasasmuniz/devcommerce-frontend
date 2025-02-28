import { useContext, useState } from 'react';
import './styles.css';
import * as authService from '../../../services/auth-service.ts';
import * as forms from '../../../utils/forms.ts'
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token.ts';
import FormInput from '../../../components/FormInput/index.tsx';

export default function Login() {

    const navigate = useNavigate();

    const [submitResponseFail, setSubmitResponseFail] = useState(false);

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    const { setContextTokenPayload } = useContext(ContextToken);

    function handleSubmit(event: any) {
        event.preventDefault();

        setSubmitResponseFail(false);

        const newFormData = forms.toDirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(newFormData)) {
            setFormData(newFormData);
            return
        }

        authService.loginRequest(forms.toValues(formData))
            .then((response) => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/catalog");
            })
            .catch(() => {
                setSubmitResponseFail(true);
            })
    }

    function handleOnChangeInput(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleTurnDirty(name: string){
        setFormData(forms.toDirtyAndValidate(formData, name));
    }

    return (
        <main>
            <section id="login-section" className="devc-container devc-pd-top-20">
                <div className="devc-login-form-container devc-card">
                    <form className="devc-form-login" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="devc-form-control-container">
                            <div className="devc-form-email-container devc-mb-20">
                                <FormInput
                                    {...formData.username}
                                    className="devc-form-input"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleOnChangeInput}
                                />
                                <p className="devc-form-error">{formData.username.message}</p>
                            </div>
                            <div className="devc-form-password-container devc-mb-20">
                                <FormInput
                                    {...formData.password}
                                    className="devc-form-input"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleOnChangeInput}
                                />
                                <div className="devc-form-error"></div>
                            </div>

                            {
                                submitResponseFail &&
                                <div className='devc-form-global-error'>Usuário ou senha inválidos</div>
                            }

                        </div>
                        <button type="submit" className="devc-btn devc-btn-blue">Entrar</button>
                    </form>
                </div>
            </section>
        </main>
    );
}