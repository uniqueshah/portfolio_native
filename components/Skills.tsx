"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90, color: "from-blue-400 to-blue-600" },
  { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
  { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
  { name: "Node.js", level: 82, color: "from-green-400 to-green-600" },
  { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-cyan-600" },
  { name: "Python", level: 80, color: "from-yellow-400 to-yellow-600" },
  { name: "MongoDB", level: 75, color: "from-green-500 to-green-700" },
  { name: "PostgreSQL", level: 78, color: "from-blue-500 to-indigo-600" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "Git",
              "Docker",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

