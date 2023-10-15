import React, { FC } from "react";
import "./Card.css";
type CardProps = {
  temperature: number;
  city: string;
  date: string;
  weather: string;
  icon: string;
};

export const Card: FC<CardProps> = ({
  temperature,
  city,
  date,
  weather,
  icon,
}) => {
  return (
    <div className="card-container">
      <h3>{temperature} &deg;C</h3>
      <h4>{city}</h4>
      <h5>{date}</h5>
      <div>
        <img alt="weather icon" src={`icons/${icon}.png`} />
        <p>{weather}</p>
      </div>
    </div>
  );
};
