import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { WeatherResult } from "./types";
import { LineGraph } from "./components/LineGraph";
import { Card } from "./components/Card";
import "./App.css";

function App() {
  const [result, setResult] = useState<WeatherResult>();
  const [selectedDay, setSelectedDay] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather Forecaster</h1>
      </header>
      <div className="app-content">
        <span className="loader"></span>
        <SearchBar
          setData={setResult}
          setLoading={setLoading}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {loading ? (
          <h5>Loading...</h5>
        ) : (
          <>
            {searchValue.length === 0 && (
              <div>
                <h3>No City is selected!</h3>
                <h4>Type any city name to get weekly forecast data</h4>
              </div>
            )}
            {result?.data && (
              <div style={{}} className="graph-section">
                <div>
                  <LineGraph
                    city={result.city_name}
                    data={result?.data || []}
                    setSelectedDay={setSelectedDay}
                  />
                </div>
                <div className="card-section">
                  <Card
                    temperature={result.data[selectedDay].temp}
                    city={result.city_name}
                    date={result.data[selectedDay].datetime}
                    weather={result.data[selectedDay].weather.description}
                    icon={result.data[selectedDay].weather.icon}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
