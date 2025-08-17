# FE-Capstone-Project
A responsive and interactive weather dashboard built with React JS (and optionally Tailwind CSS), allowing users to search for and view real-time weather conditions in various cities using a public weather API such as OpenWeatherMap.
## Project Overview
This project simulates a real-world frontend development environment, focusing on UI design, API integration, and deployment. The main objectives are:
Search for a city and display its current weather details.
Show temperature, humidity, wind speed, and weather conditions using icons.
Provide a responsive, user-friendly experience across all screen sizes.
### Features
City Search: Search weather information by city name.
Weather Details: Temperature (°C/°F), humidity, wind speed, and weather icons.
Responsive Design: Works on desktop, tablet, and mobile.
Real-Time Updates: Refresh weather data every few minutes (or manually).
Error Handling: Clear messages for invalid cities, network issues, or API errors.
### Tech Stack
Frontend: React JS
Styling: Tailwind CSS (or vanilla CSS)
State Management: React Hooks (useState, useEffect)
API: OpenWeatherMap API
Deployment: Netlify
### Project Structure
weather-dashboard/
├─ public/
│   └─ favicon.ico
│
├─ src/
│   ├─ assets/
│   │   ├─ icons/           
│   │   └─ images/           
│   │
│   ├─ components/
│   │   ├─ SearchBar.jsx
│   │   ├─ WeatherCard.jsx
│   │   ├─ ErrorMessage.jsx
│   │     
│   │
│   ├─ hooks/
│   │   └─ useWeather.js      
│   │
│   ├─ pages/
│   │   └─ Dashboard.jsx
│   │
│   ├─ services/
│   │   └─ weatherApi.js
│   │
│   ├─ utils/
│   │   ├─ formatDate.js
│   │   └─ constants.js
│   │
│   ├─ App.jsx
│   ├─ main.jsx
│   └─ index.css
│
├─ .env                     
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
├─ package.json
└─ README.md
