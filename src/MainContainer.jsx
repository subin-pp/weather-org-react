import React from 'react';

// Function to convert temperature from Kelvin to Celsius
const kelvinToCelsius = (kelvin) => {
  return (kelvin - 273.15).toFixed(2); // Convert to Celsius and round to 2 decimal places
};

const MainContainer = ({ weatherData }) => {
  if (!weatherData) return null;

  const { city, list } = weatherData;

  // Current weather (first item in the list)
  const currentWeather = list[0];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '900px',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '15px',
        background: 'linear-gradient(135deg, #74ebd5, #9face6)',
        color: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px',
      }}
    >
      {/* Current Weather UI */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        <div
          style={{
            width: '300px',
            padding: '15px',
            borderRadius: '15px',
            background: 'rgba(255, 255, 255, 0.2)',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginBottom: '10px' }}>{city?.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@2x.png`}
            alt="weather-icon"
            style={{ width: '80px', height: '80px' }}
          />
          <p style={{ margin: '10px 0', textTransform: 'capitalize' }}>
            {currentWeather?.weather[0]?.description}
          </p>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {kelvinToCelsius(currentWeather?.main.temp)}°C
          </h3>
        </div>
      </div>

      {/* 4-Day Forecast UI */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'nowrap', // Prevent wrapping of cards
          gap: '20px',
          overflowX: 'auto', // Add horizontal scroll if content overflows on smaller screens
        }}
      >
        {list.slice(0, 4).map((item, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 200px', // Cards will resize and stay side by side
              maxWidth: '250px', // Max width for cards
              minWidth: '150px', // Prevent cards from becoming too small
              padding: '15px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.2)',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <h6 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
              {new Date(item.dt_txt).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </h6>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="weather-icon"
              style={{ width: '80px', height: '80px' }}
            />
            <p style={{ margin: '10px 0', textTransform: 'capitalize' }}>
              {item.weather[0].description}
            </p>
            <h6 style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {kelvinToCelsius(item.main.temp)}°C
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
