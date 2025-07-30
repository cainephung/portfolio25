import { useState } from "react";
import "./portfolio.css";
import { motion } from "motion/react";

const items = [
  {
    id: 1,
    video: "/output.mp4",
    title: "ASL Sign Language Recognition App",
    desc: "Built a webcam-based app using Python, MediaPipe, PyTorch, and OpenCV to recognize ASL hand signs (A–Z) and simple motion-based gestures.\n\nUsed MediaPipe for hand tracking, trained an LSTM model for gesture sequences,\nand optimized preprocessing for real-time responsiveness.",
  },
  {
    id: 2,
    img: "/shop.png",
    title: "E-Commerce Website",
    desc: "Built with Next.js, JavaScript, and Sanity.io, this responsive e-commerce site features product listings, cart, and checkout flow.\n\nIt includes Sanity CMS for content management, smooth UI animations, and a mobile-friendly layout with visual polish.",
    link: "https://caineshop.vercel.app",
    showButton: true,
  },
];

const imgVariants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
};

const textVariants = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
};

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const item = items[currentIndex];

  return (
    <div className="portfolio">
      <div className="carousel">
        <motion.div key={item.id} className="pItem">
          <motion.div
            variants={imgVariants}
            initial="initial"
            animate="animate"
            className="pImg"
          >
            {item.video ? (
              <video src={item.video} autoPlay loop muted playsInline />
            ) : (
              <img src={item.img} alt="" />
            )}
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="pText"
          >
            <motion.h1>{item.title}</motion.h1>
            <motion.h3>
              {item.desc.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </motion.h3>
            {item.showButton && (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>Live Site</button>
              </a>
            )}
          </motion.div>
        </motion.div>

        <div className="carouselControls">
          <button onClick={prevItem}>&larr;</button>
          <button onClick={nextItem}>&rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
