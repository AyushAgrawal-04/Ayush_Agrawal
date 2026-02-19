import { motion } from "framer-motion";
import {
  FaReact, FaBootstrap, FaNodeJs, FaPython, FaJava, FaDatabase, FaGitAlt, FaAws, FaLinux,
  FaWindows, FaJs, FaFlask
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPytorch, SiScikitlearn, 
  SiKeras, SiPostman, SiOpencv, SiTypescript, SiRedux, SiPostgresql } from "react-icons/si";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", icon: <img src="/images/icons8-c++-48.png" className="h-8" /> },
      { name: "Python", icon: <FaPython className="text-yellow-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-blue-600" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Vite", icon: <img src="/images/icons8-vite-50.png" className="h-8" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
      { name: "Flask", icon: <img src="/images/icons8-flask-64.png" className="h-8" /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    ],
  },
  {
    category: "AI/ML",
    items: [
      { name: "PyTorch", icon: <SiPytorch className="text-orange-500" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-blue-500" /> },
      { name: "Keras", icon: <SiKeras className="text-red-500" /> },
      { name: "Computer Vision", icon: <SiOpencv className="text-gray-500" /> },
      { name: "YOLO", icon: <img src="/images/icons8-yolo-48.png" alt="yolo" className="h-8" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "AWS", icon: <FaAws className="text-yellow-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "REST API", icon: <FaDatabase className="text-gray-500" /> },
      { name: "Linux", icon: <FaLinux className="text-gray-600" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-red-900 h-fit text-white py-10 px-6 flex flex-col items-center">
      <motion.h2
      initial={{ opacity: 0, y: -20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 0.5, ease: "easeOut"}}
      className="text-3xl font-bold text-center text-white mb-6">
        My Tech Stack
      </motion.h2>
      <div className="px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-120"
            initial={{ opacity: 0, y: -40, scale: 0.8 }}  
            whileInView={{ opacity: 1, y: 0, scale: 0.8 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-4 justify-end">
              {skill.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{y:0}}
                  whileHover={{y: -20}}
                  transition={{ delay: 0, duration: 0.2, ease: "linear"}}
                  className="flex flex-col items-center justify-end gap-2 scale-80 md:scale-100 bg-black px-4 py-2 rounded-lg border-b-1 hover:border-1 hover:shadow-[0_0_13px_#ffffff] border-white duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-white">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
