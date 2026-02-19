import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const projects = [
  {
    id: 1,
    name: "AgroTech E-Commerce Website",
    image: "/projects/Ecommerce.png",
    description:
      "A full-stack agriculture marketplace with real-time chat, secure role-based authentication, and image uploads.",
    tech: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Socket.IO",
      "Cloudinary",
      "JWT Auth",
    ],
    github: "https://github.com/AyushAgrawal-04/AgroTech_E-Commerce-",
    live: "https://agrotech-yajt.onrender.com/",
  },
  {
    id: 2,
    name: "Portfolio Website",
    image: "/projects/Portfolio.png",
    description:
      "A red-black themed portfolio featuring smooth animations built with React, Framer Motion, EmailJS, Swiper, and Tailwind CSS.",
    tech: ["ReactJS", "Framer Motion", "Tailwind CSS", "SwiperJS", "EmailJS"],
    github: "https://github.com/AyushAgrawal-04/Portfolio_Website",
    live: "/",
  },
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const touchStartX = useRef(0);

  const selectedProject = projects[selectedIndex];

  const handleNext = () =>
    setSelectedIndex((prev) => (prev + 1) % projects.length);

  const handlePrev = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );

  /* ======================
     SWIPE SUPPORT (MOBILE)
  ====================== */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
  };

  return (
    <section
      id="projects"
      className="relative flex flex-col md:flex-row min-h-screen bg-red-900 text-white px-6 py-16 overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* SIDE NAVIGATION (DESKTOP) */}
      <div className="hidden md:flex md:w-1/4 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {projects.map((project, i) => {
            const active = i === selectedIndex;

            return (
              <button
                key={project.id}
                onClick={() => setSelectedIndex(i)}
                className={`text-left p-3 rounded-lg transition-all
                ${
                  active
                    ? "font-bold text-xl scale-105 opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                {project.name}
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* PROJECT DISPLAY */}
      <div className="w-full md:w-3/4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6 text-center md:text-left"
        >
          Projects
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              loading="lazy"
              className="w-full max-h-[65vh] object-cover rounded-xl shadow-lg"
            />

            <div className="md:absolute bottom-0 w-full p-5 md:bg-red-900/90 md:rounded-b-xl">
              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.name}
              </h2>

              <p className="text-gray-200 mb-4">
                {selectedProject.description}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-white px-3 py-1 rounded-full text-sm
                    hover:bg-white hover:text-black transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg
                    hover:scale-105 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}

                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg
                    hover:scale-105 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* MOBILE NAVIGATION BUTTONS */}
        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className="md:hidden absolute left-3 top-1/2 -translate-y-1/2
          bg-white/20 hover:bg-white hover:text-black text-3xl rounded-full p-2 transition"
        >
          <GoChevronLeft />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next project"
          className="md:hidden absolute right-3 top-1/2 -translate-y-1/2
          bg-white/20 hover:bg-white hover:text-black text-3xl rounded-full p-2 transition"
        >
          <GoChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;