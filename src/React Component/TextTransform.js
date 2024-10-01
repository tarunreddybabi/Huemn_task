import React from "react";

import "./text.css";

const TextComponent = () => {
  const texts = [
    {
      text: (
        <h1>
          <img src="./roller.png" />
          yours
        </h1>
      ),
      bgColor: "#fce8e6",
      color: "#ea4335",
    },
    {
      text: (
        <h1>
          <img src="./speedtest.png" />
          fast
        </h1>
      ),
      bgColor: "#ceead6",
      color: "#188038",
    },
    {
      text: (
        <h1>
          <img src="./search.png" />
          safe
        </h1>
      ),
      bgColor: "#e8f0fe",
      color: " #1967d2",
    },
  ];

  return (
    <div className="text-container">
      <div className="scroll-text">
        {texts.map((item, index) => (
          <div
            className="text"
            key={index}
            style={{ backgroundColor: item.bgColor, color: item.color }}
          >
            {item.text}
          </div>
        ))}
        {texts.map((item, index) => (
          <div
            className="text"
            key={index + texts.length}
            style={{ backgroundColor: item.bgColor, color: item.color }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextComponent;
