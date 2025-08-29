import { useState } from "react";
import logo from "../assets/icons/logo.svg";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input.trim());
    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col p-0 m-0">
      {/* Header */}
      <header className="text-center p-4 bg-blue-100">
        <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>
        <div className="flex items-center justify-center gap-4 w-full md:w-11/12 lg:w-9/12 xl:w-8/12 mx-auto">
          <img src={logo} alt="Weather Logo" className="w-16 h-16" />
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter city..."
              className="p-2 border rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
            >
              Search
            </button>
          </form>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 text-center overflow-y-auto p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-2">Current Weather</h2>
        {/* Weather information will be displayed here */}
      </main>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-200">
        <p className="text-sm text-gray-600">© 2023 Weather Dashboard</p>
      </footer>
    </div>
  );
}
