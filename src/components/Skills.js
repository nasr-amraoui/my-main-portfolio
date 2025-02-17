import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPhp, FaNodeJs, FaUnity, FaSwift, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiKotlin, SiFlutter, SiCsharp, SiMysql, SiFirebase, SiGodotengine } from 'react-icons/si';

const frontEndSkills = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
  { name: 'ReactJS', icon: FaReact, color: '#01D3F9' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
];

const mobileSkills = [
  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
  { name: 'Flutter', icon: SiFlutter, color: '#44D1FD' },
  { name: 'Swift', icon: FaSwift, color: '#F05138' },
];

const gameDevSkills = [
  { name: 'C#', icon: SiCsharp, color: '#239120' },
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
    <div className="flex items-center mx-4 my-2 p-2 bg-gray-800 rounded-lg">
      <SkillIcon className="text-2xl" style={{ color: skill.color }} />
      <span className="ml-2 text-sm text-gray-300">{skill.name}</span>
    </div>
  );
};

const Skills = () => {
  const skillRows = [
    { skills: frontEndSkills, direction: 'left' },
    { skills: mobileSkills, direction: 'right' },
    { skills: gameDevSkills, direction: 'left' },
    { skills: databaseSkills, direction: 'right' },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Skills
        </h2>
        <div className="space-y-8">
          {skillRows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="relative w-full h-16 overflow-hidden"
            >
              <div className={`
                flex absolute left-0 top-0 w-[200%]
                ${row.direction === 'left' 
                  ? 'animate-infinite-slide-left' 
                  : 'animate-infinite-slide-right'}
              `}>
                {[...row.skills, ...row.skills].map((skill, index) => (
                  <SkillItem key={`${skill.name}-${index}`} skill={skill} />
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