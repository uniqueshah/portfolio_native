"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hi, I'm{" "}
              </span>
              <span className="text-white">Shahnazar</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            React Native Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          >
            I build beautiful and functional mobile applications using modern
            technologies. Passionate about creating exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center space-x-4 mb-12"
          >
            <motion.a
              href="https://github.com/uniqueshah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} className="text-white" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/mshahnazar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} className="text-white" />
            </motion.a>
            <motion.a
              href="mailto:tyagishahnazar786@gmail.com"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} className="text-white" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="mb-2">Scroll Down</span>
              <ArrowDown size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

