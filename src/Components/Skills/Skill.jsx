import { motion } from "framer-motion";
import {
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaAws,
  FaLinux,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiPostman,
  SiOpencv,
  SiRedux,
  SiPostgresql,
} from "react-icons/si";

/* ================= SKILLS DATA ================= */

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", icon: <img src="/images/icons8-c++-48.png" className="h-7" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "SQL", icon: <FaDatabase className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Vite", icon: <img src="/images/icons8-vite-50.png" className="h-7" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-400" /> },
      { name: "Flask", icon: <img src="/images/icons8-flask-64.png" className="h-7" /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "PyTorch", icon: <SiPytorch className="text-orange-500" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-blue-400" /> },
      { name: "Keras", icon: <SiKeras className="text-red-500" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-gray-400" /> },
      { name: "YOLO", icon: <img src="/images/icons8-yolo-48.png" className="h-7" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "REST API", icon: <FaDatabase className="text-gray-400" /> },
      { name: "Linux", icon: <FaLinux className="text-gray-400" /> },
    ],
  },
];

/* ================= COMPONENT ================= */

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-red-900 text-white py-16 px-6 flex flex-col items-center"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10"
      >
        My Tech Stack
      </motion.h2>

      {/* GRID */}
      <div className="w-full max-w-6xl grid gap-8 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="bg-black/90 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-5 text-red-400">
              {skill.category}
            </h3>

            <div className="flex flex-wrap gap-4">
              {skill.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="flex flex-col items-center justify-center
                  gap-1 px-4 py-3 rounded-lg border border-white/20
                  bg-black hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.6)]
                  transition"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs sm:text-sm">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}