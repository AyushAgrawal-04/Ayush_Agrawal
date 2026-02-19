import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

const Hero = () => {
  const socialLinks = [
    {
      href: "https://linkedin.com/in/ayush-agrawal-75658a229",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/AyushAgrawal-04",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://x.com/_aayush_27",
      icon: <FaSquareXTwitter />,
      label: "Twitter",
    },
  ];

  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-12 overflow-hidden ${styles.section}`}
    >
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 flex flex-col items-center text-center"
      >
        <img
          src="/Profile Picture/Dazai_pfp.jpeg"
          alt="Ayush Agrawal profile"
          className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full shadow-lg
          hover:scale-105 transition duration-300
          hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]"
        />

        <h3
          className={`text-2xl sm:text-3xl font-semibold mt-5 hover:scale-110 transition ${styles.mrs}`}
        >
          &lt; Ayush Agrawal /&gt;
        </h3>
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold mb-4"
        >
          Hi, It's <span className="text-red-500">Ayush</span>
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl sm:text-3xl font-semibold mb-4"
        >
          I'm a{" "}
          <span className="text-red-500">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "UI/UX Designer",
                1000,
                "AI Enthusiast",
                1000,
                "MERN Stack Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-sm sm:text-lg mb-6 leading-relaxed"
        >
          I am a passionate Full Stack Developer specializing in React, Node.js,
          Express.js, and MongoDB. I build scalable web applications and REST
          APIs while crafting intuitive, user-centered interfaces that deliver
          seamless and engaging digital experiences.
        </motion.p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start gap-4 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              initial={{ rotateX: 90, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-11 h-11 flex items-center justify-center
              border-2 border-red-500 rounded-full text-red-500
              hover:bg-red-500 hover:text-black
              active:scale-95
              transition hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* RESUME BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <motion.a
            href="/CV_Ayush_Agrawal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`w-full sm:w-auto text-center px-6 py-3 rounded-full
            text-red-500 border-2 border-red-500 font-semibold
            hover:bg-red-500 hover:text-black active:scale-95
            transition hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]
            ${styles.resume}`}
          >
            View Resume
          </motion.a>

          <motion.a
            href="/CV_Ayush_Agrawal.pdf"
            download="Ayush_Agrawal_CV"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`w-full sm:w-auto text-center px-6 py-3 rounded-full
            text-red-500 border-2 border-red-500 font-semibold
            hover:bg-red-500 hover:text-black active:scale-95
            transition hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]
            ${styles.resume}`}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;