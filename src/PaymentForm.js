import React, { useState } from 'react';
import './PaymentForm.css';
import Confirmation from './Confirmation';

function PaymentForm({ onSubmit, selectedPlan, price }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardType, setCardType] = useState('');
    const [errors, setErrors] = useState([]);
    const [paymentComplete, setPaymentComplete] = useState(false); // 1. Agregar variable de estado paymentComplete

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
        const cardNumberWithoutSpaces = event.target.value.replace(/ /g, '');
        if (/^4/.test(cardNumberWithoutSpaces)) {
            setCardType('visa');
        } else if (/^5[1-5]/.test(cardNumberWithoutSpaces)) {
            setCardType('mastercard');
        } else if (/^3[47]/.test(cardNumberWithoutSpaces)) {
            setCardType('amex');
        } else {
            setCardType('');
        }
    };

    const handleExpiryDateChange = (event) => {
        setExpiryDate(event.target.value);
    };

    const handleCvvChange = (event) => {
        setCvv(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentYear = new Date().getFullYear();
        const expiryYear = parseInt((expiryDate ?? '').slice(3));
        const expiryMonth = parseInt((expiryDate ?? '').slice(2));
        const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/;
        let errorList = [];

        if (
            firstName.length < 3 ||
            /\d/.test(firstName)
        ) {
            errorList.push('El nombre debe tener mínimo 3 caracteres y no puede tener números');
        }
        if (
            lastName.length > 0 &&
            (lastName.length < 1 || /\d/.test(lastName))
        ) {
            errorList.push('Apellidos deben tener mínimo un caratero y no pueden tener números');
        }
        if (
            !cardRegex.test(cardNumber)
        ) {
            errorList.push('Número de tarjeta debe tener un formato válido para una tarjeta Visa, MasterCard o American Express');
        }
        if (
            expiryYear < currentYear ||
            expiryYear > currentYear + 25 ||
            (expiryMonth

                <= 0 || expiryMonth > 12)
        ) {
            errorList.push('La fecha de vencimiento de la tarjeta es inválida');
        }
        if (
            cvv.length !== 3
        ) {
            errorList.push('El CVV debe tener 3 caracteres');
        }


        if (errorList.length > 0) {
            setErrors(errorList);
        } else {
            onSubmit();
            setPaymentComplete(true); // 2. Actualizar el estado paymentComplete a true
        }
    };

    return (
        <div className="payment-form-container">
            {paymentComplete ? ( // 3. Renderizar la confirmación si el pago se completó
                <Confirmation selectedPlan={selectedPlan} price={price} cardNumber={cardNumber} cardType={cardType} firstName={firstName}  lastName={lastName}/>
            ) : (
                <form onSubmit={handleSubmit} className="payment-form">
                    <div className="form-group">
                        <label htmlFor="firstName">Nombre</label>
                        <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Apellidos</label>
                        <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardNumber">Número de tarjeta</label>
                        <input type="text" id="cardNumber" value={cardNumber} onChange={handleCardNumberChange} />
                        {cardType && <img src={require(`./img/${cardType}.png`)} className="images" alt={cardType} />}
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiryDate">Fecha de vencimiento (MM/AA)</label>
                        <input type="text" id="expiryDate" value={expiryDate} onChange={handleExpiryDateChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" value={cvv} onChange={handleCvvChange} />
                    </div>
                    {errors.length > 0 && (
                        <div className="error-message">
                            {errors.map((error) => (
                                <p key={error}>{error}</p>
                            ))}
                        </div>
                    )}
                    <button type="submit" className="submit-button">Pagar {price} por el plan {selectedPlan}</button>
                </form>
            )}
        </div>
    );
}

export default PaymentForm;