import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherData } from '../models/Weather';

const WeatherForecast: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {
          location: 'Belgrade',
          format: 'json',
          u: 'c'
        },
      
      };

      try {
        const response = await axios.request(options);
        if (response.status !== 200) {
          throw new Error('Greska povlačenja podataka sa API-ja');
        }
        const data: WeatherData = response.data;
        data.forecasts = data.forecasts.slice(0, 7);
        setWeatherData(data);
      } catch (error) {
        console.error('Greska povlačenja podataka sa API-ja:', error);
      }
    };
    fetchData();
  }, []);

  if (!weatherData) {
    return <div>Učitava se...</div>;
  }

  return (
    <div className="weather-forecast">
      <header className="App-header">
        <h1>Vremenska prognoza</h1>
      </header>
      <div className="weather-details">
        <p>Grad: {weatherData.location.city}</p>
        <p>Temperatura: {weatherData.current_observation.condition.temperature}°C</p>
        <p>Vreme: {weatherData.current_observation.condition.text}</p>
        <p>Brzina vetra: {weatherData.current_observation.wind.speed} km/h</p>
      </div>
      <div className="forecast">
        <ul>
          {weatherData.forecasts.map((forecast, index) => (
            <li key={index}>
              <p>Dan: {forecast.day}</p>
              <p>Max: {forecast.high}°C</p>
              <p>Min: {forecast.low}°C</p>
              <p>Vreme: {forecast.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default WeatherForecast;
