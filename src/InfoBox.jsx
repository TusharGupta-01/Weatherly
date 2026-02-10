import React from "react";
import "./InfoBox.css";

function InfoBox({ info }) {
  // const weatherImages = {
  //   clear: ["https://images.unsplash.com/photo-1502082553048-f009c37129b9"],
  //   clouds: ["https://images.unsplash.com/photo-1501630834273-4b5604d2ee31"],
  //   rainy: ["https://images.unsplash.com/photo-1501696461415-6bd6660c6742"],
  //   drizzle: ["https://images.unsplash.com/photo-1527766833261-b09c3163a791"],
  //   thunderstorm: [
  //     "https://images.unsplash.com/photo-1500674425229-f692875b0ab7",
  //   ],
  //   snow: ["https://images.unsplash.com/photo-1608889175250-c3b0c1667d0f"],
  //   haze: ["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"],
  //   mist: ["https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227"],
  //   fog: ["https://images.unsplash.com/photo-1519681393784-d120267933ba"],
  //   smoke: ["https://images.unsplash.com/photo-1587502536263-9298f3f92c19"],
  //   dust: ["https://images.unsplash.com/photo-1594381898411-846e7d193883"],
  //   sand: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470"],
  //   tornado: ["https://images.unsplash.com/photo-1461511669078-d46bf351cd5b"],
  // };
  // const weatherType = info.weather.toLowerCase();
  // const image = weatherImages[weatherType]?.[0] || weatherImages.clear[0];
  return (
    <div className="">
      {/* <img src={image} alt="" style={{ width: "100px" }} /> */}
      <ul className="list-group" style={{ fontSize: "0.8rem" }}>
        <li className="list-group-item">
          <strong>{info.city} </strong> - {info.weather}
        </li>
        <li className="list-group-item">Temperature:{info.temp}&deg;C</li>
        <li className="list-group-item">Humidity:{info.humidity}</li>
        <li className="list-group-item">
          Min-Temperature:{info.minTemp}&deg;C
        </li>
        <li className="list-group-item">
          Max-Temperature:{info.maxTemp}&deg;C
        </li>
        <li className="list-group-item">
          The weather actually feels like {info.feelsLike}&deg;C
        </li>
      </ul>
    </div>
  );
}

export default InfoBox;
