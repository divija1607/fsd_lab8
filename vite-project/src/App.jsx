import { useState } from "react";
import chroma from "chroma-js";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [shades, setShades] = useState([]);

  const generateShades = () => {
    try {
      const scale = chroma
        .scale(["white", color, "black"])
        .mode("lab")
        .colors(12);

      setShades(scale);
    } catch (error) {
      alert("Invalid color!");
    }
  };

  return (
    <div className="container">
      <h1>🎨 Color Shade Generator</h1>

      {/* Text Input */}
      <input
        type="text"
        placeholder="Enter color (e.g. red or #ff5733)"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      {/* Color Picker */}
      <input
        type="color"
        onChange={(e) => setColor(e.target.value)}
      />

      {/* Button */}
      <button onClick={generateShades}>Generate</button>

      {/* Shades Grid */}
      <div className="grid">
        {shades.map((shade, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: shade }}
            onClick={() => {
              navigator.clipboard.writeText(shade);
              alert("Copied " + shade);
            }}
          >
            <p>{shade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
