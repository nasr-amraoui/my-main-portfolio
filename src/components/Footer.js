import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/nasr-amraoui', label: 'GitHub' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/nasreddine-amraoui-469928245/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/nasser_amraoui', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:nasreddine.amraoui.2004@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="absolute w-[200%] h-[200%] border border-[#64ffda] rounded-full animate-spin-slow" />
        <div className="absolute w-[150%] h-[150%] border border-[#64ffda] rounded-full animate-spin-slow-reverse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center items-center mb-8">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#64ffda]" />
            <HiCode className="text-[#64ffda] mx-4" size={30} />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#64ffda]" />
          </div>

          <h2 className="text-2xl font-bold text-Primary mb-6">Let's Connect</h2>
          
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute -inset-2 bg-[#64ffda]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <social.icon
                  className="relative text-[#64ffda] transition-transform group-hover:scale-110"
                  size={24}
                />
              </motion.a>
            ))}
          </div>

          <div className="text-[#8892b0] text-sm">
            <p className="mb-2">
              Designed & Built with{' '}
              <span className="text-[#64ffda]">♥</span> by{' '}
              <span className="text-[#64ffda]">NasrEddine Amraoui</span>
            </p>
            <p>© {currentYear} All rights reserved</p>
          </div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#64ffda] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 200,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1]
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
    </footer>
  );
};

export default Footer;
