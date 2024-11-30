import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEye } from 'react-icons/fa';

const categories = [
  { id: 'All', label: 'All Projects' },
  { id: 'Web', label: 'Web Apps' },
  { id: 'Mobile', label: 'Mobile Apps' },
  { id: 'Game', label: 'Games' }
];

const projectsList = [
  // Web Projects
  {
    id: 'web1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management and secure payment processing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=400',
    category: 'Web'
  },
  {
    id: 'web2',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with real-time data visualization.',
    tech: ['Vue.js', 'Firebase', 'D3.js', 'TailwindCSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400',
    category: 'Web'
  },
  {
    id: 'web3',
    title: 'Cloud File Manager',
    description: 'Secure cloud storage solution with file sharing and collaboration features.',
    tech: ['Angular', 'AWS', 'TypeScript', 'Material UI'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=400',
    category: 'Web'
  },

  // Mobile Projects
  {
    id: 'mobile1',
    title: 'Fitness Tracker',
    description: 'Mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    tech: ['React Native', 'Redux', 'Firebase', 'HealthKit'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&w=800&h=400',
    category: 'Mobile'
  },
  {
    id: 'mobile2',
    title: 'Travel Companion',
    description: 'All-in-one travel app with itinerary planning, booking, and local recommendations.',
    tech: ['Flutter', 'Dart', 'Google Maps', 'Firebase'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&h=400',
    category: 'Mobile'
  },
  {
    id: 'mobile3',
    title: 'AR Shopping',
    description: 'Augmented reality shopping app allowing users to visualize products in their space.',
    tech: ['Swift', 'ARKit', 'CoreML', 'Metal'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1633536726481-465c3676851d?auto=format&fit=crop&w=800&h=400',
    category: 'Mobile'
  },

  // Game Projects
  {
    id: 'game1',
    title: 'Space Explorer',
    description: 'Immersive 3D space exploration game with procedurally generated worlds.',
    tech: ['Unity', 'C#', 'Blender', 'HLSL'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&h=400',
    category: 'Game'
  },
  {
    id: 'game2',
    title: 'Puzzle Quest',
    description: 'Brain-teasing puzzle game with unique mechanics and progressive difficulty.',
    tech: ['Godot', 'GDScript', 'Aseprite', 'Audacity'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1614066591435-b7f49a34e6cf?auto=format&fit=crop&w=800&h=400',
    category: 'Game'
  },
  {
    id: 'game3',
    title: 'RPG Adventure',
    description: 'Story-driven RPG with dynamic combat system and character customization.',
    tech: ['Unreal Engine', 'C++', 'Maya', 'Wwise'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&h=400',
    category: 'Game'
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projectsList
    : projectsList.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          My Projects
        </h2>
        
        {/* Category Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category, idx) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium border border-[#64ffda] transition-all duration-300
                        ${selectedCategory === category.id 
                          ? 'bg-[#64ffda] text-[#0a192f] shadow-[0_0_20px_#64ffda]'
                          : 'text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] hover:shadow-[0_0_15px_#64ffda]'
                        }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative group h-[420px]"
            >
              <div className="bg-[#112240]/50 backdrop-blur-sm rounded-lg overflow-hidden border border-[#64ffda]/10
                          hover:border-[#64ffda]/30 transition-all duration-300 h-full flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[90%] h-56 object-cover mx-auto mt-4 rounded-lg border border-[#64ffda]/10
                           group-hover:border-[#64ffda]/30 transition-all duration-300"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#64ffda] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex gap-6 items-center justify-center mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#64ffda] transition-colors"
                      title="View Code"
                    >
                      <FaGithub size={24} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#64ffda] transition-colors"
                        title="View Demo"
                      >
                        <FaEye size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;