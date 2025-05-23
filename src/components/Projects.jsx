import { PROJECTS } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const Toggle = ({ isActive, onClick, onReset }) => {
  const controls = useAnimation();
  const [position, setPosition] = useState('center');

  const handleCodeClick = () => {
    if (position === 'center' || position === 'live') {
      setPosition('code');
      onClick(false);
    }
  };

  const handleLiveClick = () => {
    if (position === 'center' || position === 'code') {
      setPosition('live');
      onClick(true);
    }
  };

  useEffect(() => {
    if (onReset) {
      const timer = setTimeout(() => {
        setPosition('center');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [onReset]);

  // Get gradient class based on position
  const getKnobGradient = () => {
    if (position === 'center') {
      return 'bg-gradient-to-r from-pink-300 to-pink-200/80';
    }
    return 'bg-gradient-to-r from-purple-900/90 via-purple-800/80 to-purple-600/70';
  };

  // Get text visibility class based on position
  const getTextVisibility = (side) => {
    if (position === 'center') return 'opacity-100';
    if (position === side) return 'opacity-0';
    return 'opacity-50';
  };

  useEffect(() => {
    const positions = {
      center: 48,
      code: 0,
      live: 96
    };

    controls.start({
      x: positions[position],
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.5,
        duration: 0.8
      }
    });
  }, [position, controls]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-[144px] h-10 rounded-full p-1 flex items-center bg-white/5">
        <div className="absolute inset-0 flex">
          <div 
            className="flex-1 h-full flex items-center justify-center cursor-pointer"
            onClick={handleCodeClick}
          >
            <span className={`text-sm font-medium transition-all duration-300 text-neutral-500 ${getTextVisibility('code')}`}>
              Code
            </span>
          </div>
          <div 
            className="flex-1 h-full flex items-center justify-center cursor-pointer"
            onClick={handleLiveClick}
          >
            <span className={`text-sm font-medium transition-all duration-300 text-neutral-500 ${getTextVisibility('live')}`}>
              Live
            </span>
          </div>
        </div>
        
        <motion.div
          animate={controls}
          initial={{ x: 48 }}
          className={`absolute rounded-full cursor-pointer transition-colors duration-300 ${getKnobGradient()}`}
          style={{
            height: "32px",
            width: "32px",
            left: "8px"
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </div>
    </div>
  );
};

export const Projects = () => {
  const [weatherDashboardLive, setWeatherDashboardLive] = useState(false);
  const [petroHexLive, setPetroHexLive] = useState(false);
  const [portfolioLive, setPortfolioLive] = useState(false);
  const [shouldResetWeather, setShouldResetWeather] = useState(0);
  const [shouldResetPetroHex, setShouldResetPetroHex] = useState(0);
  const [shouldResetPortfolio, setShouldResetPortfolio] = useState(0);

  const handleWeatherDashboardToggle = (isLive) => {
    setWeatherDashboardLive(isLive);
    
    setTimeout(() => {
      if (!isLive) {
        window.open('https://github.com/rutika196/weather-app', '_blank');
      } else {
        window.open('https://rutika-weather-dashboard.vercel.app/', '_blank');
      }
      setShouldResetWeather(prev => prev + 1);
    }, 800);
  };

  const handlePetroHexToggle = (isLive) => {
    setPetroHexLive(isLive);
    
    setTimeout(() => {
      if (!isLive) {
        window.open('https://github.com/rutika196/petroHex', '_blank');
      } else {
        window.open('https://patro-hex.vercel.app/', '_blank');
      }
      setShouldResetPetroHex(prev => prev + 1);
    }, 800);
  };

  const handlePortfolioToggle = (isLive) => {
    setPortfolioLive(isLive);
    
    setTimeout(() => {
      if (!isLive) {
        window.open('https://github.com/rutika196/rutika-patel-portfolio', '_blank');
      } else {
        window.open('https://rutika-patel-portfolio.vercel.app/', '_blank');
      }
      setShouldResetPortfolio(prev => prev + 1);
    }, 800);
  };

  return (
    <div className="border-b border-neutral-400 pb-4 font-light tracking-tighter">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0, scale: 0.98 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: [0.33, 1, 0.68, 1], delay: 0.7 }}
              className="w-full max-w-4xl lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0, scale: 0.98 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: [0.33, 1, 0.68, 1], delay: 0.7 }}
              className="w-full max-w-4xl lg:w-3/4"
            >
              <div className="flex items-center gap-4 mb-2">
                <h6 className="font-semibold">{project.title}</h6>
                {project.title === "Weather Dashboard" && (
                  <Toggle
                    isActive={weatherDashboardLive}
                    onClick={handleWeatherDashboardToggle}
                    onReset={shouldResetWeather}
                  />
                )}
                {project.title === "PatroHex AI chat" && (
                  <Toggle
                    isActive={petroHexLive}
                    onClick={handlePetroHexToggle}
                    onReset={shouldResetPetroHex}
                  />
                )}
                {project.title === "Portfolio" && (
                  <Toggle
                    isActive={portfolioLive}
                    onClick={handlePortfolioToggle}
                    onReset={shouldResetPortfolio}
                  />
                )}
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

