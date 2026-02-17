import { TypeAnimation as Typing } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

const Hero = () => {
  const icons = [
    {
      href: 'https:linkedin.com/in/ayush-agrawal-75658a229',
      components: <FaLinkedin />,
    },
    {
      href: 'https://github.com/AyushAgrawal-04',
      components: <FaGithub />,
    },
    {
      href: 'https://x.com/_aayush_27',
      components: <FaSquareXTwitter />,
    },
  ];

  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row items-center justify-center min-h-screen py-10 px-6 overflow-hidden ${styles.section}`}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="md:w-1/2 flex flex-col justify-center items-center"
      >
        <img
          alt="Image"
          className="rounded-full w-76 h-96 object-cover shadow-lg hover:scale-105 transition duration-300 hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]"
          src="/Profile Picture/Dazai_pfp.jpeg"
        />
        <h3
          className={`text-3xl md:text-3xl font-semibold mt-4 hover:scale-110 transition duration-600 hover:drop-shadow-[0_0_10px_#ffffff] ${styles.mrs} `}
        >
          &lt; <span className={`${styles.mrs}`}> Ayush Agrawal </span> /&gt;
        </h3>
      </motion.div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 ">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-4xl sm:text-7xl font-bold mb-4"
        >
          Hi, It's <span className="text-red-500">Ayush</span>
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold mb-4"
        >
          I'm a{' '}
          <span className="text-red-500">
            <Typing
              sequence={[
                'Software Engineer',
                1000,
                'UI/UX Designer',
                1000,
                'AI Enthusiast',
                1000,
                'MERN Stack Developer',
                1000,
              ]}
              speed={50}
              style={{ fontSize: '2rem' }}
              repeat={Infinity}
            />
          </span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm sm:text-lg mb-6"
        >
          I am a passionate Full Stack Developer specializing in React, Node.js,
          Express.js, and MongoDB, with a strong foundation in UI/UX design. I
          focus on building scalable web applications and robust REST APIs while
          crafting intuitive, user-centered interfaces. By combining technical
          expertise with thoughtful design principles, I strive to deliver
          seamless digital experiences that are both functional and visually
          engaging.
        </motion.p>
        <div className="flex justify-center md:justify-start space-x-4 mb-6 sm:mb-6">
          {icons.map((icon, index) => (
            <motion.a
              initial={{ rotateX: 90, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: 'easeOut',
              }}
              href={icon.href}
              target="_blank"
              key={index}
              className="w-10 h-10 flex items-center justify-center border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]"
            >
              {icon.components}
            </motion.a>
          ))}
        </div>
        <motion.a
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          href="/CV_Ayush_Agrawal.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 sm:px-6 py-2 rounded-full text-red-500 border-2 border-red-500 font-semibold hover:bg-red-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)] ${styles.resume}`}
        >
          View Resume
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          href="./public/CV_Ayush_Agrawal.pdf"
          download="Ayush_Agrawal_CV"
          className={`px-4 sm:px-6 py-2 rounded-full text-red-500 border-2 border-red-500 font-semibold hover:bg-red-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)] ${styles.resume}`}
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
