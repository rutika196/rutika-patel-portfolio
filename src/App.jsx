import { useState } from "react";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Experience} from "./components/Experience";
import {Hero} from "./components/Hero";
import {Navbar} from "./components/Navbar";
import {Projects} from "./components/Projects";
import {Technologies} from "./components/Technologies";
import { LoadingScreen } from "./components/LoadingScreen";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  return (
    <>
    <AnimatePresence mode="wait">
    {isLoaded ? (<LoadingScreen onComplete={() => setIsLoaded(false)} />) :(
    <div className="overflow-x-hidden text-gray-600 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
    )}
    </AnimatePresence>
  </>
   
  );
};

export default App;
