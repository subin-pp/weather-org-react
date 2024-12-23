import './App.css';
import InputText from './InputText';
import MainContainer from './MainContainer';
import React, { useState } from 'react';
import backgroundImg from './assets/pexels-lum3n-44775-167699.jpg';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    if (!inputValue) return;  // If input is empty, do nothing.

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&APPID=6557810176c36fac5f0db536711a6c52`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle pressing Enter key
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchWeatherData();
    }
  };

  return (
    <div
      className="d-flex justify-content-start align-items-center flex-column gap-4"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        width: '100%', 
        height: '100vh', 
        overflow: 'hidden', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      <InputText setInputValue={setInputValue} handleKeyPress={handleKeyPress} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <MainContainer weatherData={weatherData} />
    </div>
  );
}

export default App;
