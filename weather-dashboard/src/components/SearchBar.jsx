import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city..."
        className="p-2 border rounded-l-md w-64"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}
