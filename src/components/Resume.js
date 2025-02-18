import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Resume = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Your Company",
      period: "2022 - Present",
      description: "Led development of web applications using React, Node.js, and MongoDB. Implemented responsive designs and optimized performance.",
      type: "work"
    },
    {
      title: "Frontend Developer Intern",
      company: "Tech Company",
      period: "2021 - 2022",
      description: "Developed and maintained client-side applications using React and TypeScript. Collaborated with UI/UX team for design implementation.",
      type: "work"
    }
  ];

  const education = [
    {
      title: "Technicienne spécialisée au développement digital",
      institution: "Cité Des Métiers Et Des Compétences - Rabat Salé Kénitra",
      period: "2023 - 2025",
      description: "Specialized in Web Technologies and Software Engineering. Graduated with honors.",
      type: "education"
    },
    {
      title: "Sciences Mathématiques et Physiques Chimie - SMPC",
      institution: "La faculté des sciences de Rabat",
      period: "2022 - 2023",
      description: "Une formation en sciences mathématiques et physiques avec une spécialisation en chimie",
      type: "education"
    },
    {
      title: "Bachaloia sciance physique et chimie",
      institution: "ABAS MEHMMOUD AL'AKKAD",
      period: "2022",
      description: "Core focus on programming fundamentals, algorithms, and data structures.",
      type: "education"
    }
  ];

  const TimelineItem = ({ item }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 group"
    >
      <div className="absolute left-0 top-0 h-full w-[2px] bg-[#64ffda]/20 group-hover:bg-[#64ffda] transition-colors duration-300" />
      <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-[#64ffda] group-hover:shadow-[0_0_8px_#64ffda] transition-all duration-300" />
      
      <div className="flex items-center text-[#64ffda] mb-2">
        {item.type === 'work' ? <FaBriefcase className="mr-2" /> : <FaGraduationCap className="mr-2" />}
        <span className="text-sm">{item.period}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-[#ccd6f6] mb-1">{item.title}</h3>
      <h4 className="text-lg text-[#8892b0] mb-2">{item.type === 'work' ? item.company : item.institution}</h4>
      <p className="text-[#8892b0]">{item.description}</p>
    </motion.div>
  );

  return (
    <section id="resume" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-6xl font-bold text-center text-Primary mb-8">Resume</h2>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Download Resume Button */}
          <motion.div
            {...fadeIn}
            className="flex justify-center mb-16"
          >
            <a
              href="/AMRAOUI_NasrEddine_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2.5 bg-transparent border border-[#64ffda] text-[#64ffda] rounded-full
                         hover:bg-[#64ffda] hover:text-[#0a192f] hover:shadow-[0_0_15px_#64ffda] transition-all duration-300"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
          </motion.div>

          {/* Experience Section */}
          <motion.div {...fadeIn} className="mb-16">
            <h3 className="text-2xl font-semibold text-[#ccd6f6] mb-8 flex items-center">
              <FaBriefcase className="mr-2 text-[#64ffda]" />
              Work Experience
            </h3>
            <div className="border-l-2 border-[#64ffda]/20">
              {experiences.map((exp, index) => (
                <TimelineItem key={index} item={exp} />
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div {...fadeIn}>
            <h3 className="text-2xl font-semibold text-[#ccd6f6] mb-8 flex items-center">
              <FaGraduationCap className="mr-2 text-[#64ffda]" />
              Education
            </h3>
            <div className="border-l-2 border-[#64ffda]/20">
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
