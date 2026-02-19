import { useState } from "react";
import { motion } from "framer-motion";
import { FaSuitcase, FaGraduationCap } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";

/* ================= DATA ================= */

const education = [
  {
    title: "BE - Automation & Robotics",
    company: "Dr. D. Y. Patil Institute of Technology",
    location: "Pimpri, Pune",
    duration: "2021 - 2025",
    align: "left",
    summary:
      "Coursework included Data Science, ROS, AI, and Artificial Neural Networks for intelligent automation.",
  },
  {
    title: "Higher Secondary - Science (CS)",
    company: "Shree Shivaji High School",
    location: "Dongaon, Maharashtra",
    duration: "2019 - 2021",
    align: "right",
    summary: "Graduated with an outstanding aggregate of 90%.",
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Labmentix",
    location: "Remote",
    duration: "Oct 2025 - Feb 2026",
    align: "right",
    summary:
      "Built scalable and responsive web interfaces for client applications.",
    points: [
      "Developed responsive UI using React & Tailwind CSS",
      "Integrated REST APIs for real-time data updates",
      "Improved website performance",
      "Collaborated using Git & Agile workflow",
    ],
    tech: ["React", "Tailwind", "REST API", "Git"],
  },
  {
    title: "Web Developer Intern",
    company: "NMD Pvt. Ltd.",
    location: "Pune, India",
    duration: "Mar 2025 - Jun 2025",
    align: "left",
    summary:
      "Assisted in developing and maintaining company web applications.",
    points: [
      "Built reusable UI components",
      "Fixed UI bugs & improved UX",
      "Optimized mobile responsiveness",
      "Worked with backend team for integration",
    ],
    tech: ["JavaScript", "React", "CSS", "API"],
  },
];

/* ================= ANIMATION ================= */

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.45 },
  }),
};

/* ================= COMPONENT ================= */

export default function QualificationSection() {
  const [activeTab, setActiveTab] = useState("Experience");

  const data = activeTab === "Experience" ? experiences : education;

  return (
    <section
      id="qualifications"
      className="bg-black text-white py-14 px-4 md:px-6"
    >
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-red-500 mb-10"
      >
        Qualifications
      </motion.h2>

      {/* TOGGLE BUTTONS */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["Experience", "Education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg flex items-center gap-2 border-2 transition
            ${
              activeTab === tab
                ? "bg-red-600 border-red-600 text-white"
                : "text-red-500 border-red-500 hover:bg-red-600 hover:text-white"
            }`}
          >
            {tab === "Experience" ? <FaSuitcase /> : <FaGraduationCap />}
            {tab}
          </button>
        ))}
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-5xl mx-auto">
        {/* Desktop vertical line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full border-l border-white/20"></div>

        {data.map((item, index) => {
          const isRight = item.align === "right";

          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className={`mb-10 flex flex-col md:flex-row items-start md:justify-center ${
                isRight ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* CONTENT */}
              <div className="w-full md:w-[45%] px-2 md:px-4">
                <div className="bg-white/5 p-5 rounded-xl shadow-md backdrop-blur-sm">
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  {item.company && (
                    <p className="text-gray-400">
                      {item.company}
                      {item.location && ` • ${item.location}`}
                    </p>
                  )}

                  <p className="text-gray-500 text-sm flex items-center mt-1">
                    <FaCalendar className="mr-2" /> {item.duration}
                  </p>

                  {item.summary && (
                    <p className="text-gray-400 mt-2">{item.summary}</p>
                  )}

                  {item.points && (
                    <ul className="mt-2 text-gray-400 text-sm list-disc ml-4 space-y-1">
                      {item.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  )}

                  {item.tech && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs border border-white/30 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* TIMELINE DOT (Desktop only) */}
              <div className="hidden md:flex relative w-8 justify-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-3 shadow-[0_0_10px_rgba(255,0,0,0.8)]"></div>
              </div>

              {/* Spacer for desktop alignment */}
              <div className="hidden md:block md:w-[45%]"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}