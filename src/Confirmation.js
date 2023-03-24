import React from 'react';

function Confirmation(props) {
    const { firstName, lastName, cardType, price,selectedPlan, cardNumber } = props;

    return (
        <div>
            <h2>Confirmación de pago</h2>
            <p>¡Gracias por tu compra, {firstName} {lastName}!</p>
            <p>Tarjeta de crédito utilizada: {cardType} **** **** ****{cardNumber.slice(12)}</p>
            <p>Importe pagado: {price} € <br></br>
            Plan Seleccionado {selectedPlan}</p>
            <p>¡Recibiras un Correo Con Toda La información de la Suscripcion!</p>
        </div>
    );
}

export default Confirmation;
