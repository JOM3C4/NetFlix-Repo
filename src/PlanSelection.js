import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
import './PlanSelection.css';

function PlanSelection() {
    const [selectedPlan, setSelectedPlan] = useState('Básico con Anuncios');
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [step, setStep] = useState(1);
    const [price, setPrice] = useState(5.49);

    const handlePlanSelection = (plan, price) => {
        setSelectedPlan(plan);
        setPrice(price);
        setStep(1);
    };

    const handleNextStep = () => {
        setStep(2);
        setShowPaymentForm(true);
    };

    const handlePaymentFormSubmit = () => {
        // Add validation and error handling here
        console.log('Payment form submitted');
    };

    return (
        <div>
            {step === 1 && (
                <div>
                    <h2>Selecciona el plan ideal para ti</h2>
                    <ul>
                        <li>Ve todo lo que quieras</li>
                        <li>Recomendaciones exclusivas para ti</li>
                        <li>Cambia de plan o cancélalo cuando quieras</li>
                    </ul>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio del mes</th>
                                <th>Calidad de video</th>
                                <th>Resolución</th>
                                <th>Multidispositivo</th>
                                <th>Descargas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    className={`${selectedPlan === 'Básico con Anuncios' ? 'selected' : ''}`}
                                    onClick={() => handlePlanSelection('Básico con Anuncios', 5.49)}
                                >
                                    Básico con Anuncios
                                </td>
                                <td>5,49€</td>
                                <td>Buena</td>
                                <td>720p</td>
                                <td>✓</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td
                                    className={`${selectedPlan === 'Estándar' ? 'selected' : ''}`}
                                    onClick={() => handlePlanSelection('Estándar', 12.99)}
                                >
                                    Estándar
                                </td>
                                <td>12,99€</td>
                                <td>Muy buena</td>
                                <td>1080p</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td
                                    className={`${selectedPlan === 'Premium' ? 'selected' : ''}`}
                                    onClick={() => handlePlanSelection('Premium', 17.99)}
                                >
                                Premium
                                </td>
                                <td>17,99€</td>
                                <td>Excelente</td>
                                <td>4K + HDR</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleNextStep}>Continuar</button>
                </div>
            )}
                {showPaymentForm && (
                <div>
                    <h3>Ya Casi Estamos Listo</h3>
                    <h4>Configura tu tarjeta de credito o debito</h4>
                    <PaymentForm onSubmit={handlePaymentFormSubmit} selectedPlan={selectedPlan} price={price} />
                </div>
            )}
        </div>
    );
}
export default PlanSelection;