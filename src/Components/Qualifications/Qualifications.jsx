import { useState } from "react";
import { motion } from "framer-motion";
import { FaSuitcase, FaGraduationCap, FaCalendar } from "react-icons/fa6";

/* ================= DATA (EDIT THIS LATER) ================= */

const education = [
  {
    title: "BE - Automation & Robotics",
    company: "Dr. D. Y. Patil Institute of Technology",
    location: "Pimpri, Pune",
    duration: "2021 - 2025",
    align: "left",
    summary: "Coursework included Data Science, AI in Robotics, and Neural Networks for intelligent automation and robotics.",
  },
  {
    title: "Higher Secondary - Science",
    company: "Shree Shivaji High School",
    location: "Dongaon, Maharashtra",
    duration: "2019 - 2021",
    align: "right",
    summary: "Graduated Higher Secondary with an outstanding aggregate of 90%.",
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
      "Worked on building scalable and responsive web interfaces for client applications.",

    points: [
      "Developed responsive UI using React & Tailwind CSS",
      "Integrated REST APIs for real-time data updates",
      "Improved website performance and loading speed",
      "Collaborated with team using Git & Agile workflow",
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
      "Fixed UI bugs and improved user experience",
      "Optimized pages for mobile responsiveness",
      "Worked closely with backend team for integration",
    ],

    tech: ["JavaScript", "React", "CSS", "API Integration"],
  },
];

/* ================= ANIMATION ================= */

const timelineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.5 },
  }),
};

/* ================= COMPONENT ================= */

export default function QualificationSection() {
  const [activeTab, setActiveTab] = useState("Experience");

  const data = activeTab === "Experience" ? experiences : education;

  return (
    <section id="qualifications" className="bg-black text-white py-6 px-4 md:px-6">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-red-500 mb-8"
      >
        Qualifications
      </motion.h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("Experience")}
          className={`px-6 py-2 rounded-lg flex items-center gap-2 border-2 transition ${
            activeTab === "Experience"
              ? "bg-red-600 border-red-600 text-white"
              : "text-red-500 border-red-500"
          }`}
        >
          <FaSuitcase /> Experience
        </button>

        <button
          onClick={() => setActiveTab("Education")}
          className={`px-6 py-2 rounded-lg flex items-center gap-2 border-2 transition ${
            activeTab === "Education"
              ? "bg-red-600 border-red-600 text-white"
              : "text-red-500 border-red-500"
          }`}
        >
          <FaGraduationCap /> Education
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 h-full border-l border-white/30"></div>

        {data.map((item, index) => {
          const isRight = item.align === "right";

          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={timelineVariants}
              className={`mb-8 flex items-start md:justify-center ${
                isRight ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-[45%] px-4 flex ${isRight ? "md:justify-start" : "md:justify-end"}`}>
                <div className="max-w-lg">
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

                  {/* Summary */}
                  {item.summary && (
                    <p className="text-gray-400 mt-2">{item.summary}</p>
                  )}

                  {/* Bullet Points */}
                  {item.points && (
                    <ul className="mt-2 text-gray-400 text-sm list-disc ml-4 space-y-1">
                      {item.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Tags */}
                  {item.tech && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs border border-white/40 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Dot */}
              <div className="relative w-8 flex justify-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2"></div>
              </div>

              <div className="hidden md:block md:w-[45%]"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}