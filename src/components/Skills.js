import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPhp, FaNodeJs, FaUnity, FaSwift, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiKotlin, SiFlutter, SiMysql, SiFirebase, SiGodotengine } from 'react-icons/si';
import { motion } from 'framer-motion';

const frontEndSkills = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'ReactJS', icon: FaReact, color: '#01D3F9' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
];

const mobileSkills = [
  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
  { name: 'Flutter', icon: SiFlutter, color: '#44D1FD' },
  { name: 'Swift', icon: FaSwift, color: '#F05138' },
];

const gameDevSkills = [
  { name: 'Unity', icon: FaUnity, color: '#000000' },
  { name: 'Godot', icon: SiGodotengine, color: '#478CBF' },
];

const databaseSkills = [
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Python', icon: FaPython, color: '#306998' },
  { name: 'PHP', icon: FaPhp, color: '#777BB4' },
];

const SkillItem = ({ skill }) => {
  const SkillIcon = skill.icon;

  return (
    <motion.div
      className="relative flex items-center justify-center w-24 h-24 rounded-lg transition-all duration-300 hover:scale-110 group"
      initial={{ y: 0 }}
      animate={{ y: [0, 0, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
    >
      <SkillIcon className="text-5xl" style={{ color: skill.color }} />
      <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend Development', skills: frontEndSkills },
    { title: 'Mobile Development', skills: mobileSkills },
    { title: 'Game Development', skills: gameDevSkills },
    { title: 'Database & Backend', skills: databaseSkills },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
      <h2 className="text-6xl font-bold text-center text-Primary mb-8">Skills</h2>
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
