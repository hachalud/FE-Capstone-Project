import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import WeatherCard from "../components/WeatherCard.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import { fetchWeather } from "../services/weatherApi.js";
export default function Dashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (searchCity) => {
    setError("");
    try {
      const data = await fetchWeather(searchCity);
      setWeather(data);
      setCity(searchCity);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}