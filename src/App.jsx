// 1. import useState from React
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // 2. Create weather state with default "Sunny"
  const [weather, setWeather] = useState("Sunny")
  // 3. import useEffect from React

  // 4. Create handleRainy function
  // change weather to "Rainy"
function handleRainy() {
  setWeather("Rainy");
}
  // 5. Create handleSnowy function
  // change weather to "Snowy"
function handleSnowy(){
  setWeather("Snowy")
}
  // 6. Create handleHot function
  // change weather to "Hot"
function handleHot(){
  setWeather("Hot")
}
  // 7. Create handleReset function
  // change weather back to "Sunny"
function handleReset(){
  setWeather("Sunny")
}
  // 8. Add useEffect that runs when weather changes
  // show alerts based on weather value
useEffect(){
  if (weather === "Rainy") {
    alert("Dont forget your umbrella!");
  } else if (weather === "Snowy"){
    alert("wear a coat");
  } else if (weather === "Hot"){
    alert ("drink water");
  } else {
    alert("enjoy the sunshine");
  }
}
useEffect(weatherUpdate, [weather]);


  return (
    <div className="page">
      <div className="card">
        <h1>Weather Warning App</h1>
        <p className="subtitle">
          Practice using useEffect with weather changes.
        </p>

        <div className="weather-box">
          <h2>Current Weather</h2>

          {weather}
          <p className="output">Weather: </p>

          <button
            className="btn"
          onClick={handleRainy}
          >
            Rainy 🌧️
          </button>

          <button
            className="btn"
          onClick={handleSnowy}
          >
            Snowy ❄️
          </button>

          <button
            className="btn"
          onClick={handleHot}
          >
            Hot ☀️
          </button>

          <button
            className="btn secondary"
          onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;