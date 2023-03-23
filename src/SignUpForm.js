import React, { useState } from 'react';
import PlanSelection from './PlanSelection';

function SignUpForm() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPlanSelection, setShowPlanSelection] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email.length >= 5 && email.length <= 50 && re.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value.trim() === '') {
            setEmailError('Este campo es obligatorio');
        } else if (!validateEmail(e.target.value)) {
            setEmailError('Introduce una dirección de correo electrónico válida');
        } else {
            setEmailError('');
        }
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        const passwordLength = e.target.value.length;
        if (passwordLength < 6 || passwordLength > 60) {
            setPasswordError('La contraseña debe tener entre 6 y 60 caracteres');
        } else {
            setPasswordError('');
        }
    };

    const handleSiguienteClick = () => {
        if (email.trim() === '') {
            setEmailError('Este campo es obligatorio');
        } else if (!validateEmail(email)) {
            setEmailError('Introduce una dirección de correo electrónico válida');
        } else if (password.trim() === '') {
            setPasswordError('Este campo es obligatorio');
        } else if (password.length < 6) {
            setPasswordError('La contraseña debe tener entre 6 y 60 caracteres');
        } else {
            setPasswordError('');
            setShowPlanSelection(true);
        }
    };

    return (
        <div>
            {showPlanSelection ? (
                <PlanSelection />
            ) : (
                <div>
                    <h2>Crea una contraseña para empezar la suscripción</h2>
                    <p>¡Faltan solo algunos pasos!</p>
                    <p>También odiamos el papeleo.</p>
                    <div>
                        <label htmlFor="email">Email *</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        {emailError && <p className="error">{emailError}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña *</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        {passwordError && <p className="error">{passwordError}</p>}
                    </div>
                    <button onClick={handleSiguienteClick}>Siguiente</button>
                </div>
            )}
        </div>
    );
}

export default SignUpForm;