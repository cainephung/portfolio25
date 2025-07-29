import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const experienceList = [
  {
    id: 1,
    icon: "/equitable_life_logo.ico",
    title: "Software Developer Intern",
    company: "The Equitable Life of Canada – Waterloo, ON",
    date: "Sept 2023 – Jan 2025",
    points: [
      "Contributed to a shared React component library (using MUI) to improve consistency and code reuse and maintained comprehensive documentation.",
      "Replaced hardcoded UI values with design tokens to support scalable theming.",
      "Modernized legacy jobs by rewriting VBScript logic in C#.",
      "Assisted with manual testing and debugging to ensure data accuracy.",
      "Maintained workflows using ActiveBatch and promoted code with Azure DevOps.",
    ],
  },
];

const textVariants = {
  initial: { x: -100, y: -100, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Experience = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="services py-12 md:py-20 px-4 md:px-12" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle mb-10"
        >
          Work Experience
        </motion.h1>

        <motion.div
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList flex flex-col gap-14"
        >
          {experienceList.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="serviceExpanded flex gap-6 md:gap-10"
            >
              <div className="serviceIcon">
                <img
                  src={item.icon}
                  alt={item.company}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>

              <div className="serviceInfo">
                <h1 className="text-white font-bold text-2xl md:text-3xl mb-1">
                  {item.title}
                </h1>
                <h2 className="text-neutral-300 text-base md:text-lg mb-4">
                  {item.company} <span className="mx-2">|</span> {item.date}
                </h2>
                <ul className="list-disc list-inside text-neutral-300 space-y-4 text-sm md:text-base leading-relaxed">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
