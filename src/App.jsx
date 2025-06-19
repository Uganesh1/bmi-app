import { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMeters = heightNum / 100;
      const bmiValue = weightNum / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setBmiStatus('Underweight');
      } else if (bmiValue < 24.9) {
        setBmiStatus('Normal Weight');
      } else if (bmiValue < 29.9) {
        setBmiStatus('Overweight');
      } else {
        setBmiStatus('Obese');
      }
      setErrorMessage('');
    } else {
      setBmi(null);
      setBmiStatus('');
      setErrorMessage('Please enter valid numeric values for height and weight.');
    }
  };

  const clearall = () => {
    setBmi(null);
    setBmiStatus('');
    setHeight('');
    setWeight('');
    setErrorMessage('');
  };

  return (
    <div className="page-wrapper">
      <main className="main-content">
        <div className="bmi-calculator">
          <div className="box"></div>
          <div className="data">
            <h1>BMI Calculator</h1>

            {errorMessage && <p className="error">{errorMessage}</p>}

            <div className="input-container">
              <label htmlFor="height">Height (cm)</label>
              <input
                type="text"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label htmlFor="weight">Weight (kg)</label>
              <input
                type="text"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <button onClick={calculateBmi}>Calculate BMI</button>
            <button className="clr-button" onClick={clearall}>
              Clear
            </button>

            {bmi !== null && (
              <div className="result">
                <p>Your BMI is: {bmi}</p>
                <p>Status: {bmiStatus}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
