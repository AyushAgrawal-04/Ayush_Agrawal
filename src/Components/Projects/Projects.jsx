import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const projects = [
  {
    id: 1,
    name: 'AgroTech E-Commerce Website',
    image: '/projects/Ecommerce.png',
    description:
      'A full-stack agriculture marketplace with real-time chat, role based secure authentication, and image uploads.',
    tech: [
      'ReactJS',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'Socket.IO',
      'Cloudinary',
      'JWT Auth',
    ],
    github: '',
    live: 'https://agrotech-yajt.onrender.com/',
  },
  {
    id: 2,
    name: 'Portfolio Website',
    image: '/projects/Portfolio.png',
    description:
      'A red-black themed portfolio with stunning animations. Built using React, Framer Motion, EmailJS, Swiper, and Tailwind CSS.',
    tech: ['ReactJS', 'Framer Motion', 'Tailwind CSS', 'SwiperJS', 'EmailJS'],
    github: 'https://github.com/AyushAgrawal-04/Portfolio_Website',
    live: '/',
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const touchStartX = useRef(0);

  const selectedProject = projects.find((p) => p.id === selectedId);

  const handleNext = () => {
    setSelectedId((prev) => (prev === projects.length ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setSelectedId((prev) => (prev === 1 ? projects.length : prev - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;

    if (touchStartX.current - touchEndX > 50) handleNext();
    if (touchEndX - touchStartX.current > 50) handlePrev();
  };

  return (
    <section
      id="projects"
      className="relative flex h-fit md:h-screen bg-red-900 text-white p-6 overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Side Navigation (Desktop) */}
      <div className="hidden md:flex w-1/4 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          {projects.map((project) => {
            const isSelected = selectedId === project.id;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`cursor-pointer p-3 rounded-lg text-center transition-all ${
                  isSelected
                    ? 'text-xl font-bold opacity-100 scale-110'
                    : 'opacity-50 scale-95'
                }`}
              >
                {project.name}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Project Details */}
      <div className="w-full md:w-3/4 md:p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4 text-center md:text-left"
        >
          Projects
        </motion.h1>

        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <img
            src={selectedProject.image}
            alt={selectedProject.name}
            className="w-full max-h-[70vh] object-cover rounded-lg"
          />

          <div className="md:absolute bottom-0 w-full p-4 md:bg-red-900/90 md:rounded-b-lg">
            <h2 className="text-2xl font-bold mb-2">{selectedProject.name}</h2>

            <p className="text-gray-200 mb-4">{selectedProject.description}</p>

            {/* Tech Tags */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="border border-white px-3 py-1 rounded-full text-sm hover:bg-white hover:text-black transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg hover:shadow-lg transition"
                >
                  <FaGithub /> GitHub
                </a>
              )}

              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg hover:shadow-lg transition"
                >
                  <FaExternalLinkAlt /> View
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Mobile Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white hover:text-black text-3xl rounded-full p-2"
        >
          <GoChevronLeft />
        </button>

        <button
          onClick={handleNext}
          className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white hover:text-black text-3xl rounded-full p-2"
        >
          <GoChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
