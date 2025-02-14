import { useState } from "react";
import "../styles/globals.scss";
import backgroundImage from "../assets/img/main_bg.png";

export const PortfolioLayout = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (clientX - centerX) * 0.02;
    const moveY = (clientY - centerY) * 0.02;

    setOffsetX(moveX);
    setOffsetY(moveY);
  };

  return (
    <div className="portfolio-container" onPointerMove={handlePointerMove}>
      {/* Background Animation */}
      <div
        className="lm-animated-bg"
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

    </div>
  );
};


