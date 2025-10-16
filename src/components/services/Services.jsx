import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FaCode, FaServer, FaCloud } from "react-icons/fa"; // updated icons

const textVariants = {
  initial: { x: -100, y: -100, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const aboutFacts = [
  {
    id: 1,
    icon: <FaCode className="text-white text-4xl" />,
    title: "Front-End Development",
    note: "I enjoy building clean, reusable interfaces with React and TypeScript.",
  },
  {
    id: 2,
    icon: <FaServer className="text-white text-4xl" />,
    title: "Backend & Automation",
    note: "I’ve worked with C#, SQL, and REST APIs to connect data and improve workflows.",
  },
  {
    id: 3,
    icon: <FaCloud className="text-white text-4xl" />,
    title: "Cloud & DevOps",
    note: "Hands-on with CI/CD pipelines and cloud tools like Azure and AWS.",
  },
];

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          About Me
        </motion.h1>

        <motion.div
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {aboutFacts.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="service p-6"
            >
              <div className="serviceIcon w-16 h-16 flex items-center justify-center rounded-full bg-[#444]">
                {item.icon}
              </div>

              <div className="serviceInfo text-lg mt-4">
                <h1 className="text-white font-semibold">{item.title}</h1>
                <h2 className="text-neutral-300 leading-relaxed">{item.note}</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="sSection right">
        <ComputerModelContainer />
      </div>
    </div>
  );
};

export default About;
