import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/nasr-amraoui', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/nasr-amraoui', label: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://www.instagram.com/amraoui_nasreddine/', label: 'Instagram' },
    { icon: FaTwitter, url: 'https://x.com/nasser_amraoui', label: 'Twitter' }
  ];

  const InputField = ({ type = 'text', name, placeholder, value, rows = null }) => (
    <div className="relative mb-6 group">
      <div className={`relative bg-[#112240]/50 backdrop-blur-sm rounded-lg transition-all duration-300
                      ${focusedField === name ? 
                        'border-[#64ffda] border-2 shadow-[0_0_10px_#64ffda]' : 
                        'border border-[#64ffda]/10'}`}>
        {rows ? (
          <textarea
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            rows={6}
            className="w-full bg-transparent text-[#ccd6f6] p-3 outline-none rounded-lg resize-none h-[180px]
                     placeholder:text-[#8892b0]"
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent text-[#ccd6f6] p-3 outline-none rounded-lg
                     placeholder:text-[#8892b0]"
          />
        )}
      </div>
    </div>
  );

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-[#64ffda] mb-4">Get in Touch</h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Form - Takes up 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <InputField
                name="name"
                placeholder="Your Name"
                value={formData.name}
              />

              <InputField
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
              />

              <InputField
                name="message"
                placeholder="Your Message"
                value={formData.message}
                rows={6}
              />

              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-transparent border border-[#64ffda] text-[#64ffda] rounded-lg
                         hover:bg-[#64ffda] hover:text-[#0a192f] hover:shadow-[0_0_15px_#64ffda] transition-all duration-300
                         flex items-center justify-center space-x-2"
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info - Takes up 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-8"
          >
            {/* Contact Card */}
            <div className="bg-[#112240]/50 backdrop-blur-sm p-8 rounded-lg border border-[#64ffda]/10">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#64ffda]/10 rounded-lg">
                    <FaEnvelope className="text-[#64ffda] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-[#ccd6f6] font-medium">Email</h4>
                    <a
                      href="mailto:nasreddine.amraoui@gmail.com"
                      className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                    >
                      nasreddine.amraoui@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#64ffda]/10 rounded-lg">
                    <FaMapMarkerAlt className="text-[#64ffda] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-[#ccd6f6] font-medium">Location</h4>
                    <p className="text-[#8892b0]">Algiers, Algeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#112240]/50 backdrop-blur-sm p-8 rounded-lg border border-[#64ffda]/10">
              <h4 className="text-[#ccd6f6] font-medium mb-4">Connect with me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-[#8892b0] hover:text-[#64ffda] transition-colors p-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="text-xl" />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
