import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateIMC = () => {
    const heightInMeters = height / 100;
    const imcValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setImc(imcValue);
    classifyIMC(imcValue);
  };

  const classifyIMC = (imc) => {
    if (imc < 18.5) {
      setClassification('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassification('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
      setClassification('Leve sobrepeso');
    } else {
      setClassification('Obeso');
    }
  };

  return (
    <div className="App">
      <h1>IMC Calculadora</h1>
      <div>
        <label>
          Sua altura (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Seu peso (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateIMC}>Calculate IMC</button>
      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <h3>Classificação: {classification}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
