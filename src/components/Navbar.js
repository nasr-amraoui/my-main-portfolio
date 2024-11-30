import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'stats', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'stats', label: 'Journey' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className={`absolute inset-0 rounded-full transition-colors duration-300
                        ${isScrolled ? 'bg-[#0a192f]/60' : 'bg-[#0a192f]/40'}
                        backdrop-blur-md`}
        />
        <div className="relative rounded-full border border-[#64ffda]/10">
          <ul className="flex items-center space-x-2 px-6 py-2">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                            ${activeSection === id
                              ? 'bg-[#64ffda] text-[#0a192f] shadow-[0_0_20px_#64ffda]'
                              : 'text-[#64ffda]'
                            }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
