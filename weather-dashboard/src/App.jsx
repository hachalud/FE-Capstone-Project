import { useState } from 'react'
import './App.css'
import favicon from "./assets/icons/favicon3.svg";
import Dashboard from './pages/Dashboard.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard />
     </>
  );
}

export default App
