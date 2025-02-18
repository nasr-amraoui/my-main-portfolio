import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/nasr-amraoui', label: 'GitHub', color: '#6e5494' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/nasr-amraoui', label: 'LinkedIn', color: '#0077b5' },
    { icon: FaInstagram, url: 'https://www.instagram.com/amraoui_nasreddine/', label: 'Instagram', color: '#e4405f' },
    { icon: FaTwitter, url: 'https://x.com/nasser_amraoui', label: 'Twitter', color: '#1da1f2' },
    { icon: FaEnvelope, url: 'mailto:nasreddine.amraoui.2004@gmail.com', label: 'Email', color: '#ea4335' },
    { icon: FaDiscord, url: 'https://discord.gg/SbzkF2fhhu', label: 'Discord', color: '#5865f2' }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
        </motion.div>

        {/* Interactive Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#112240]/50 backdrop-blur-sm p-6 rounded-lg border border-[#64ffda]/10 hover:border-[#64ffda] transition-all duration-300
                       flex flex-col items-center justify-center text-center space-y-3 hover:shadow-[0_0_15px_#64ffda]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="p-3 rounded-full" style={{ backgroundColor: social.color }}>
                <social.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-[#ccd6f6] text-lg font-medium">{social.label}</h3>
              <p className="text-[#8892b0] group-hover:text-[#64ffda] transition-colors text-sm">
                {social.label === 'Email' ? 'Send me an email' : `Connect on ${social.label}`}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;