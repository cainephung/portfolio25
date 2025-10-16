import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// 🔹 Animation for social icons
const followVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

// 🔹 Animation for form elements
const listVariant = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef();
  const form = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (err) => {
          console.error(err);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          {/* 🔹 Title */}
          <motion.h1
            variants={listVariant}
            className="cTitle text-center md:text-left"
          >
            Let's keep in touch
          </motion.h1>

          <motion.div
            variants={followVariants}
            initial="initial"
            animate="animate"
            className="follow"
          >
            {/* LinkedIn */}
            <motion.a
              variants={followVariants}
              href="https://www.linkedin.com/in/caine-phung/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                style={{ width: "24px", height: "24px", color: "white" }}
              />
            </motion.a>

            {/* GitHub */}
            <motion.a
              variants={followVariants}
              href="https://github.com/cainephung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                style={{ width: "24px", height: "24px", color: "white" }}
              />
            </motion.a>
          </motion.div>

          {/* 🔹 Form Fields */}
          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input type="text" name="user_username" placeholder="John Doe" />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="john@gmail.com"
            />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="Write your message..."
            ></textarea>
          </motion.div>

          {/* 🔹 Send Button */}
          <motion.button variants={listVariant} className="formButton">
            Send
          </motion.button>

          {/* 🔹 Feedback Messages */}
          {success && (
            <span className="text-green-400 block mt-3">
              ✅ Your message has been sent!
            </span>
          )}
          {error && (
            <span className="text-red-400 block mt-3">
              ❌ Something went wrong. Please try again.
            </span>
          )}
        </motion.form>
      </div>

      {/* 🔹 SVG Illustration */}
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
