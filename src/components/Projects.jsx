import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export const Projects = () => {
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
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}{githubLink}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

