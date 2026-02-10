import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createClient } from "pexels";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const weather_API_KEY = "c74e79aabb0afb714bcbeeaf385f479b";
  let [city, setCity] = useState("");

  

  let getWeatherInfo = async () => {
    let response = await fetch(
      API_URL + `?q=${city}&appid=${weather_API_KEY}&units=metric`,
    );
    let jsonResponse = await response.json();
    
    let weatherDetail = {
      city: `${jsonResponse.name}`,
      temp: `${jsonResponse.main.temp}`,
      minTemp: `${jsonResponse.main.temp_min}`,
      maxTemp: `${jsonResponse.main.temp_max}`,
      humidity: `${jsonResponse.main.humidity}`,
      weather: `${jsonResponse.weather[0].main}`,
      feelsLike: `${jsonResponse.main.feels_like}`,
    };
    updateInfo(weatherDetail);
  };
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };
  let handleSubmit = async (evt) => {
    evt.preventDefault();
    // console.log(city);
    setCity("");
    getWeatherInfo();
  };
  return (
    <div className="container p-0 mb-3">
      <form className="h-100" onSubmit={handleSubmit}>
        <div className=" h-100 d-flex flex-column justify-content-around ">
          <TextField
            className="mb-3"
            id="city"
            label="City Name"
            variant="outlined"
            size="small"
            fullWidth
            value={city}
            onChange={handleChange}
            required
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
