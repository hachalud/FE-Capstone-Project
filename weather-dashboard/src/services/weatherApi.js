const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(city) {
  const response = await fetch(
    `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) throw new Error("City not found");
  return response.json();
}
