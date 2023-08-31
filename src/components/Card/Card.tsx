import { useState } from "react";
import "./Card.css";

export default function Card() {
  const [color, setColor] = useState<string>(`white`);
  return (
    <div className="step-2-div" style={{ backgroundColor: color }}>
      <h2>Hello World</h2>
      <img src="https://shorturl.at/hkpvC" alt="image" className="step-2-image" />
      <div>
        <select onChange={(event) => setColor(event.target.value)}>
          <option value="white">Default color - white</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
    </div>
  );
}
