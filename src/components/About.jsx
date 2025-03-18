import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { delay, motion } from "framer-motion";

export const About = () => {
  return (
    <div className="border-b border-neutral-400 pb-4 tracking-tighter">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex font-light">
        {/* <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div> */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full text-center"
        >
          <div className="flex justify-center lg:justify-center">
            <p className="my-2 max-w-4xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


