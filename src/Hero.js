import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import './App.css';

function Hero() {
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)) {
            setEmailError('Introduce una dirección de correo electrónico válida');
        } else {
            setEmailError('');
        }
    };

    const handleEmpezarClick = () => {
        if (validateEmail(email)) {
            setShowSignUpForm(true);
        } else {
            setEmailError('Introduce una dirección de correo electrónico válida');
        }
    };

    return (
        <div className="hero">
            {!showSignUpForm ? (
                <>
                    <h1>Películas y series ilimitadas y mucho más.</h1>
                    <p>Disfruta donde quieras. Cancela en cualquier momento.</p>
                    <p>¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</p>
                    <input
                        type="email"
                        placeholder="Introduce tu dirección de correo electrónico"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailChange}
                    />
                    {emailError && <span className="error">{emailError}</span>}
                    <button onClick={handleEmpezarClick}>Empezar</button>
                </>
            ) : (
                <SignUpForm />
            )}
        </div>
    );
}

export default Hero;
