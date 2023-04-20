import React, { useState } from "react";
import "./Home.css";
const Home = () => {
  const [city, setCity] = useState("London");

  const [weather, setWeather] = useState([]);

  const handleClick = () => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e4c1a378e0394c13f57257ca334c8c3&units=metric`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setCity(e.target.value)}
          />
          <button>
            <img src="/image/search-icon.avif" alt="" onClick={handleClick} />
          </button>
        </div>
        <div className="weatherInfo">
          <img src="/image/cloudy-icon.avif" alt="logo" className="icon" />
          {weather.main ? <h1>{Math.round(weather.main.temp)}°C</h1> : null}
          <h2>{weather.name}</h2>
          <div className="details">
            <div className="col">
              <img src="/image/wind.avif" alt="" />
              <div className="wind">
                {weather.wind ? (
                  <p>{Math.round(weather.wind.speed)}Km/h</p>
                ) : null}
                <p>Wind </p>
              </div>
            </div>
            <div className="col">
              <img src="/image/humidity.avif" alt="" />
              <div className="humidity">
                {weather.main ? <p>{weather.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
