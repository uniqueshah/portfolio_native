"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-2xl opacity-20" />
              <div className="relative bg-gray-900 rounded-lg p-8 border border-gray-800">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Who I Am
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I&apos;m a passionate Mobile Application Developer with a love for creating
                  innovative mobile/web solutions. With expertise in modern JavaScript
                  frameworks and a keen eye for design, I bring ideas to life
                  through clean, efficient code.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with
                  the developer community.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Years of Experience", value: "4+" },
              { label: "Projects Completed", value: "3+" },
              { label: "Happy Clients", value: "30+" },
              { label: "Technologies", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

