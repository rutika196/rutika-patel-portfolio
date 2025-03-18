import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const fullText = "<Code is my Gotham, and React.js is my Bat-Signal. />";
  const textRef = useRef(null); // Reference for dynamic width

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      setProgress(((index + 1) / fullText.length) * 100); // Sync progress with text length
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false); // Exit animation trigger
          setTimeout(() => {
            onComplete();
          }, 500);
        }, 400);
      }
    }, 40); // Adjust speed if needed

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center text-gray-600 antialiased selection:bg-cyan-300 selection:text-cyan-900 top-0 h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Typing Effect with Blinking Cursor */}
          <motion.div
            ref={textRef}
            className="mb-4 text-4xl font-mono font-bold whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {text}
            <motion.span
              className="ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>

          {/* Dynamically Set Progress Bar Width */}
          <div
            className="h-[4px] bg-gray-800 rounded mt-4 overflow-hidden relative"
            style={{
              width: textRef.current ? `${textRef.current.offsetWidth}px` : "300px", // Dynamically matches text width
            }}
          >
            {/* Animated Progress Bar with Moving Effect */}
            <motion.div
              className="h-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 shadow-[0_0_15px_#3b82f6]"
              style={{ width: `${progress}%` }} // Bar grows with text
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
