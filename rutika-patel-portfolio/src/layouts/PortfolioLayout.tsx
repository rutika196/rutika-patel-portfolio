import { useState } from "react";
import "../styles/globals.scss";
import backgroundImage from "../assets/img/main_bg.png";
import { Sidebar } from "../components/Sidebr";
import { Introduction } from "../components/Introduction";

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

    <div
      className="portfolio-container relative w-screen h-screen overflow-hidden flex items-center justify-center"
      onPointerMove={handlePointerMove}
    >
      {/* Parallax Background */}
      <div
        className="
          absolute top-0 left-0 w-full h-full
          bg-cover bg-center
          transition-transform duration-100 ease-out
        "
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Centered Black Screen with Two Columns */}
      <div
        className="
          relative
          bg-[#1f1f1f] bg-opacity-80
          rounded-l-[50px] shadow-2xl
          w-[80%] h-[80%]
          max-w-[1100px] max-h-[800px]
          flex
          rounded-r-[50px]
        "
      >  
      
        <Sidebar />
        {/* RIGHT COLUMN: Main text/content */}
          <Introduction />
        
      </div>
    </div>
    // <div className="relative w-screen h-screen overflow-hidden flex">
    //   {/* Left Sidebar */}
    //   <Sidebar />

    //   {/* Main Content Area */}
    // <div
    //   className="portfolio-container flex-1 flex items-center justify-center overflow-hidden"
    //   onPointerMove={handlePointerMove}
    // >
    //   {/* Background Animation */}
    //   <div
    //     className="lm-animated-bg absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-100 ease-out"
    //     style={{
    //       transform: `translate(${offsetX}px, ${offsetY}px)`,
    //       backgroundImage: `url(${backgroundImage})`,
    //     }}
    //   ></div>
    //   {/* Centered Black Screen */}
    //   {/* Centered Black Screen */}
    //   <div
    //     className="
    //       relative
    //      bg-black bg-opacity-90
    //       rounded-md shadow-2xl
    //       w-[90%] h-[90%]
    //       max-w-[1100px] max-h-[800px]
    //       flex flex-col items-center justify-center
    //       text-center
    //       p-8
    //     "
    //   >
    //     <h1 className="text-white text-4xl font-bold">Alex Smith</h1>
    //     <p className="text-gray-300 text-xl mt-4">Frontend Developer</p>
    //   </div>
    // </div>
    // </div>
  );
};


