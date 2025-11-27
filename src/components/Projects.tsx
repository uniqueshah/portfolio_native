"use client";

import { motion } from "framer-motion";

// App Store Icon Component
const AppStoreIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.08-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

// Play Store Icon Component
const PlayStoreIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm-4.95-4.95l-2.27 2.27L17.76 3.66c.4-.4 1.07-.39 1.46 0l1.78 1.78-7.14 7.13z" />
  </svg>
);

const projects = [
  {
    title: "Floweraura Application",
    description:
      "An e-commerce application with payment integration, user authentication, and smart shopping features.",
    tech: ["React Native", "JavaScript", "MobX", "Firebase", "Google Maps API"],
    appStore: "https://apps.apple.com/in/app/floweraura-flowers-cake-gifts/id1490812119",
    playStore: "https://play.google.com/store/apps/details?id=com.floweraura",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    title: "Bakingo Application",
    description:
      "Baking cakes, pastries, and other bakery products with real-time updates and order tracking features.",
    tech: ["React Native", "Redux", "JavaScript", "Firebase", "Google Maps API"],
    appStore: "https://apps.apple.com/in/app/bakingo-online-cake-delivery/id1495615464",
    playStore: "https://play.google.com/store/apps/details?id=com.bakingo",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
  },
  {
    title: "Instanto Application",
    description:
      "Delivery personnels can track their orders and delivery status with real-time updates and order tracking features.",
    tech: ["React Native", "Redux", "JavaScript", "Firebase", "Google Maps API"],
    appStore: "",
    playStore: "https://play.google.com/store/apps/details?id=com.instantoapp",
    image: "bg-gradient-to-br from-pink-500 to-red-600",
  },
  {
    title: "Dog Breed Identification Application",
    description:"A mobile application that allows users to identify the breed of a dog by uploading a photo of the dog using CNN.",
    tech: ["React Native", "JavaScript", "TensorFlow", "Keras", "CNN"],
    appStore: "",
    playStore: "",
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
                    href={project?.appStore || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AppStoreIcon size={20} />
                    <span>App Store</span>
                  </motion.a>
                  <motion.a
                    href={project?.playStore || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PlayStoreIcon size={20} />
                    <span>Play Store</span>
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

