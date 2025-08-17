export default function WeatherCard({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
      <p className="text-xl">{Math.round(data.main.temp)}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} km/h</p>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        className="mx-auto"
      />
      <p className="capitalize">{data.weather[0].description}</p>
    </div>
  );
}
