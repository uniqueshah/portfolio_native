"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics with data visualization and reporting capabilities.",
    tech: ["React", "Python", "Django", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "bg-gradient-to-br from-pink-500 to-red-600",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application with location-based forecasts and interactive maps.",
    tech: ["Next.js", "TypeScript", "OpenWeather API"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "bg-gradient-to-br from-yellow-500 to-orange-600",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300"
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

