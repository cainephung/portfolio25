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
    tech: "React · MUI · C# · .NET · SQL · Azure DevOps",
    points: [
      "Contributed to a React/MUI component library, improving UI consistency and reuse for 4+ internal teams.",
      "Replaced hardcoded UI values with design tokens, centralizing styles and simplifying future updates.",
      "Provided ongoing support for the library, resolving internal team issues proactively and reducing escalations.",
      "Migrated 20+ VBScript legacy jobs to C#, taking multi-hour runs down to ~30 minutes (~80% reduction).",
      "Maintained ActiveBatch workflows and supported deployments via Azure DevOps.",
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
        {/* Section Title */}
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle mb-6"
        >
          Work Experience
        </motion.h1>

        {/* Section Intro (Optional but Recommended) */}
        {/* <motion.p
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="text-neutral-400 mb-12 max-w-2xl leading-relaxed text-sm md:text-base"
        >
          Hands-on professional experience in full-stack development, UI design systems,
          and workflow automation through a year-long internship at Equitable Life.
        </motion.p> */}

        {/* Experience List */}
        <motion.div
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList flex flex-col gap-14"
        >
          {experienceList.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="serviceExpanded flex flex-col md:flex-row items-start gap-6 md:gap-10 bg-[#1a112b]/80 p-6 md:p-8 rounded-2xl shadow-lg border border-[#2a1e45]"
            >
              {/* Logo */}
              <div className="serviceIcon">
                <img
                  src={item.icon}
                  alt={item.company}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>

              {/* Content */}
              <div className="serviceInfo">
                <h1 className="text-white font-bold text-2xl md:text-3xl mb-1">
                  {item.title}
                </h1>
                <h2 className="text-neutral-300 text-base md:text-lg mb-2">
                  {item.company} <span className="mx-2">|</span> {item.date}
                </h2>

                {/* Tech Stack Line */}
                <p className="text-neutral-400 text-sm md:text-base mb-4 italic">
                  {item.tech}
                </p>

                {/* Bullet Points */}
                <ul className="list-disc list-inside text-neutral-300 space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed">
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
