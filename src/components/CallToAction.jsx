import { motion } from "framer-motion";
import { useState } from "react";

const Toggle = ({ leftText, rightText, isActive, onClick }) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className={`text-sm ${!isActive ? 'text-slate-900' : 'text-slate-500'}`}>{leftText}</span>
      <motion.div
        className={`w-16 h-8 rounded-full p-1 cursor-pointer ${
          isActive 
            ? 'bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400' 
            : 'bg-gradient-to-l from-pink-200 via-pink-300 to-pink-400'
        }`}
        onClick={onClick}
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full"
          animate={{
            x: isActive ? 32 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 1
          }}
        />
      </motion.div>
      <span className={`text-sm ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>{rightText}</span>
    </div>
  );
};

const CallToAction = () => {
  const [githubToggle, setGithubToggle] = useState(false);
  const [vercelToggle, setVercelToggle] = useState(false);

  return (
    <div className="border-b border-neutral-400 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Explore My Code & Live Projects
      </motion.h2>
      
      <div className="flex flex-wrap items-center justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <p className="mb-8 text-neutral-600 max-w-xl text-center">
              Browse through my GitHub repositories to see the code behind my projects, or check out the live 
              deployments to see them in action. From web apps to interactive experiences, discover my work!
            </p>
            
            {/* Toggle Switches */}
            <div className="my-6 w-full max-w-md">
              <Toggle
                leftText="GitHub Profile"
                rightText="GitHub Projects"
                isActive={githubToggle}
                onClick={() => setGithubToggle(!githubToggle)}
              />
              <Toggle
                leftText="Portfolio"
                rightText="Deployed Apps"
                isActive={vercelToggle}
                onClick={() => setVercelToggle(!vercelToggle)}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction; 