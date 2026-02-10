import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: "21.05",
    feelsLike: "26.04",
    minTemp: "21.05",
    maxTemp: "21.05",
    humidity: "46",
    weather: "Haze",
  });
  const weatherImages = {
    clear: [
      "https://images.unsplash.com/photo-1762179396527-e3ec983ad8b0?auto=format&fit=crop&w=1600&q=80",
    ],

    clouds: [
      "https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?auto=format&fit=crop&w=1600&q=80",
    ],

    rainy: [
      "https://images.unsplash.com/photo-1571690182136-e18addf6f0c1?auto=format&fit=crop&w=1600&q=80",
    ],

    drizzle: [
      "https://images.unsplash.com/photo-1608890306831-58efdc14450b?auto=format&fit=crop&w=1600&q=80",
    ],

    thunderstorm: [
      "https://images.unsplash.com/photo-1572269197107-c3acab162ec0?auto=format&fit=crop&w=1600&q=80",
    ],

    snow: [
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1600&q=80",
    ],

    haze: [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&q=80",
    ],

    mist: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    ],

    fog: [
      "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?auto=format&fit=crop&w=1600&q=80",
    ],

    smoke: [
      "https://images.unsplash.com/photo-1637443719654-04e839df3aa0?auto=format&fit=crop&w=1600&q=80",
    ],

    dust: [
      "https://images.unsplash.com/photo-1761530376342-8e0a2b0abdab?auto=format&fit=crop&w=1600&q=80",
    ],

    sand: [
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=1600&q=80",
    ],

    tornado: [
      "https://images.unsplash.com/photo-1705102659473-97da402ca422?auto=format&fit=crop&w=1600&q=80",
    ],
  };

  const weatherType = weatherInfo.weather.toLowerCase();
  const image = weatherImages[weatherType]?.[0] || weatherImages.clear[0];
  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div
      className="weather-bg container text-center bg-light mt-5 rounded-4"
      style={{ height: "85vh", width: "70vw", "--bg-image": `url(${image})` }}
    >
      <div className="row p-3">
        <h1 className="fs-5 p-0 my-3">Search for Weather</h1>
        <div className="col-sm-12  my-1">
          <SearchBox updateInfo={updateInfo} />
        </div>
        <div className="col-sm-12  p-0">
          <InfoBox info={weatherInfo} />
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
