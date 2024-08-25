import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Happy Birthday!");
  const [bgColor, setBgColor] = useState("#ffeb3b");
  const [emojis, setEmojis] = useState([]);

  const addEmoji = (emoji) => {
    setEmojis([...emojis, emoji]);
  };

  const resetCard = () => {
    setMessage("Happy Birthday!");
    setBgColor("#ffeb3b");
    setEmojis([]);
  };

  return (
    <div className="container">
      {/* Contenedor de edición */}
      <div className="card" style={{ backgroundColor: bgColor }}>
        <h1>{message}</h1>
        <div className="emoji-container">
          {emojis.map((emoji, index) => (
            <span key={index}>{emoji}</span>
          ))}
        </div>
        <div>
          <button onClick={() => setMessage("Happy Holidays!")}>🎄 Holidays</button>
          <button onClick={() => setMessage("Happy Anniversary!")}>💍 Anniversary</button>
          <button onClick={() => setMessage("Congratulations!")}>🎉 Congrats</button>
        </div>
        <div>
          <button className="color-yellow" onClick={() => setBgColor("#ffeb3b")}>Yellow</button>
          <button className="color-green" onClick={() => setBgColor("#4caf50")}>Green</button>
          <button className="color-blue" onClick={() => setBgColor("#2196f3")}>Blue</button>
        </div>
        <div>
          <button onClick={() => addEmoji("🎂")}>🎂 Add Cake</button>
          <button onClick={() => addEmoji("🎈")}>🎈 Add Balloon</button>
          <button onClick={() => addEmoji("🎁")}>🎁 Add Gift</button>
        </div>
        <button className="reset" onClick={resetCard}>
          Reset
        </button>
      </div>

      {/* Vista previa de la tarjeta final */}
      <div className="card preview-card" style={{ backgroundColor: bgColor }}>
        <h1>{message}</h1>
        <div className="emoji-container">
          {emojis.map((emoji, index) => (
            <span key={index}>{emoji}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
