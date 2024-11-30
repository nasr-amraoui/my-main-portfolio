import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPhp, FaNodeJs, FaUnity, FaSwift, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiKotlin, SiFlutter, SiCsharp, SiMysql, SiFirebase, SiGodotengine } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Front-end',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
      { name: 'ReactJS', icon: FaReact, color: '#01D3F9' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Back-end',
    skills: [
      { name: 'PHP', icon: FaPhp, color: '#777BB4' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
      { name: 'Flutter', icon: SiFlutter, color: '#44D1FD' },
      { name: 'Swift', icon: FaSwift, color: '#F05138' }
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'Game Dev',
    skills: [
      { name: 'C#', icon: SiCsharp, color: '#239120' },
      { name: 'Unity', icon: FaUnity, color: '#000000' },
      { name: 'Godot', icon: SiGodotengine, color: '#478CBF' },
    ],
  },
];

const HexagonalSkill = ({ skill, index, isActive, onClick }) => {
  const randomRotation = Math.random() * 360;
  const delay = index * 0.1;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0, rotate: randomRotation }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        z: isActive ? 50 : 0
      }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        z: 100,
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
    >
      <div 
        className={`group w-24 h-24 rounded-full flex flex-col items-center justify-center transform transition-all duration-300
                   backdrop-blur-sm relative ${isActive ? 'scale-110' : ''}`}
        style={{
          background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}30)`,
          border: `2px solid ${skill.color}44`
        }}
      >
        {/* Glow effect layers */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `0 0 20px ${skill.color}66,
                       0 0 40px ${skill.color}33,
                       inset 0 0 20px ${skill.color}33`,
          }}
        />
        <skill.icon 
          className="text-3xl mb-2 transition-all duration-300 relative z-10 group-hover:brightness-125" 
          style={{ color: skill.color }} 
        />
        <span className="text-xs text-center text-gray-200 px-1 font-medium relative z-10">{skill.name}</span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const allSkills = skillCategories.reduce((acc, category) => 
    [...acc, ...category.skills.map(skill => ({ ...skill, category: category.title }))], 
  []);

  return (
    <div className="min-h-screen relative overflow-hidden py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-[#64ffda] mb-8">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, idx) => (
              <motion.button
                key={category.title}
                className={`px-6 py-2.5 rounded-full text-sm font-medium border border-[#64ffda] transition-all duration-300
                          ${activeCategory === category.title 
                            ? 'bg-[#64ffda] text-[#0a192f] shadow-[0_0_20px_#64ffda]'
                            : 'text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] hover:shadow-[0_0_15px_#64ffda]'
                          }`}
                onClick={() => setActiveCategory(
                  activeCategory === category.title ? null : category.title
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <AnimatePresence>
            {(activeCategory 
              ? allSkills.filter(skill => skill.category === activeCategory)
              : allSkills
            ).map((skill, index) => (
              <HexagonalSkill
                key={skill.name}
                skill={skill}
                index={index}
                isActive={hoveredSkill === skill.name}
                onClick={() => setHoveredSkill(
                  hoveredSkill === skill.name ? null : skill.name
                )}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating particles background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#64ffda] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
