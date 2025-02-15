import { useState } from "react";
import "../styles/globals.scss";
import backgroundImage from "../assets/img/main_bg.png";
import { Sidebar } from "../components/Sidebr";

export const Introduction = () => {
  
  return (

    <div
      className="
        relative
        bg-black
        rounded-r-[50px]
        rounded-l-[50px]
        w-[73%]
        flex flex-col items-center justify-center
        text-center
        p-8
        ml-auto
      "
    >
    <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-white text-4xl font-bold">Rutika Patel</h2>
      <p className="text-gray-300 text-xl mt-4">Frontend Developer</p>
    </div>
    </div>
  );
};
