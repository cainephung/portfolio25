import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

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
    desc: "Built with Next.js, JavaScript, and Sanity.io, this responsive e-commerce site features product listings, cart, and checkout flow.\n\n It includes Sanity CMS for content management, smooth UI animations, and a mobile-friendly layout with visual polish.",
    link: "https://caineshop.vercel.app",
    showButton: true,
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        {item.video ? (
          <video
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            // className="project-video"
          />
        ) : (
          <img src={item.img} alt="" />
        )}
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.h3 variants={textVariants}>
          {item.desc.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </motion.h3>
        {item.showButton && (
          <motion.a
            variants={textVariants}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Live Site</button>
          </motion.a>
        )}
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );
  const inViewRef = useRef();
  const isPortfolioInView = useInView(inViewRef, {
    margin: "-50% 0px -50% 0px",
  });

  return (
    <div
      className="portfolio"
      ref={(el) => {
        ref.current = el;
        inViewRef.current = el;
      }}
    >
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />

      {isPortfolioInView && (
        <div className="pProgress">
          <svg width="100%" height="100%" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#ddd"
              strokeWidth={20}
            />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#034694"
              strokeWidth={20}
              style={{ pathLength: scrollYProgress }}
              transform="rotate(-90 80 80)"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
