import React, { useState } from 'react';
import './PlanSelection.css';

function PlanSelection() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
    };

    return (
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
                        <td className={selectedPlan === 'Básico con Anuncios' ? 'selected' : ''} onClick={() => handlePlanSelection('Básico con Anuncios')}>
                            Básico con Anuncios
                        </td>
                        <td>5,49€</td>
                        <td>Buena</td>
                        <td>720p</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td className={selectedPlan === 'Estándar' ? 'selected' : ''} onClick={() => handlePlanSelection('Estándar')}>
                            Estándar
                        </td>
                        <td>12,99€</td>
                        <td>Muy buena</td>
                        <td>1080p</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td className={selectedPlan === 'Premium' ? 'selected' : ''} onClick={() => handlePlanSelection('Premium')}>
                            Premium
                        </td>
                        <td>17,99€</td>
                        <td>Excepcional</td>
                        <td>4K + HDR</td>
                        <td>Check</td>
                        <td>Check</td>
                    </tr>
                </tbody>
            </table>
            <button disabled={!selectedPlan} onClick={() => console.log(`Plan seleccionado: ${selectedPlan}`)}>
                Siguiente
            </button>
        </div>
    );
}

export default PlanSelection;