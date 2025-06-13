import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

export const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get the current visitor count from localStorage
    const currentCount = parseInt(localStorage.getItem("visitorCount") || "0");
    
    // Check if this is a new visit in this session
    const hasVisited = localStorage.getItem("hasVisited");
    
    if (!hasVisited) {
      // Increment count for new visitors
      const newCount = currentCount + 1;
      localStorage.setItem("visitorCount", newCount.toString());
      localStorage.setItem("hasVisited", "true");
      setVisitorCount(newCount);
    } else {
      // Just display the current count for returning visitors
      setVisitorCount(currentCount);
    }
  }, []);

  return (
    <div className="flex items-center gap-2 text-neutral-600 hover:text-black transition duration-300">
      <FaEye className="text-2xl" />
      <span className="text-sm font-medium">{visitorCount}</span>
    </div>
  );
}; 