import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiArrowDown } from 'react-icons/hi';
import ParticlesBackground from './components/ParticlesBackground';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-[#0a192f] text-white min-h-screen overflow-hidden">
      <ParticlesBackground />
      <Navbar />
      
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-center"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold text-Primary mb-4"
              >
                AMR._.DEV
              </motion.h1>
              <motion.h2 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-secondary mb-6"
              >
                Mobile & Web Developer
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-textSecondary max-w-2xl mb-8"
              >
                I'm <span className='text-secondary'>NasrEddine Amraoui</span>, a passionate developer with expertise in web & mobile development. 
                I create modern and efficient solutions using cutting-edge technologies.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex space-x-6 justify-center mb-12"
              >
                <a
                  href="https://github.com/nasr-amraoui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub 
                    size={30} 
                    className="text-[#64ffda] transition-all duration-300 hover:drop-shadow-[0_0_8px_#64ffda] hover:brightness-125" 
                  />
                </a>
                <a
                  href="https://linkedin.com/in/nasr-amraoui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin 
                    size={30} 
                    className="text-[#64ffda] transition-all duration-300 hover:drop-shadow-[0_0_8px_#64ffda] hover:brightness-125" 
                  />
                </a>
                <a
                  href="https://www.instagram.com/amraoui_nasreddine/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram 
                    size={30} 
                    className="text-[#64ffda] transition-all duration-300 hover:drop-shadow-[0_0_8px_#64ffda] hover:brightness-125" 
                  />
                </a>
                <a
                  href="https://x.com/nasser_amraoui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter 
                    size={30} 
                    className="text-[#64ffda] transition-all duration-300 hover:drop-shadow-[0_0_8px_#64ffda] hover:brightness-125" 
                  />
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute left-1/2 -translate-x-1/2 bottom-10 cursor-pointer"
              onClick={() => {
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <HiArrowDown className="text-[#64ffda] hover:text-[#64ffda]/80 transition-colors" size={35} />
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen relative">
          <Skills />
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Resume Section */}
        <section id="resume">
          <Resume />
        </section>

        {/* Contact Section */}
        <Contact />

        <Footer />
      </main>
    </div>
  );
}

export default App;
