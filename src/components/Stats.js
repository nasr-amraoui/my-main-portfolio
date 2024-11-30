import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaClock, FaCode, FaLightbulb, FaCoffee, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Counter = ({ end, duration = 2, label, sublabel, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      controls.start({ scale: 1, opacity: 1 });

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, end, duration, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative group"
    >
      <div className="bg-[#112240]/50 backdrop-blur-sm p-8 rounded-lg border border-[#64ffda]/10
                    hover:border-[#64ffda]/30 transition-all duration-300
                    transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(100,255,218,0.1)]">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="bg-[#64ffda]/10 p-4 rounded-lg border border-[#64ffda]/20
                        group-hover:bg-[#64ffda]/20 transition-all duration-300">
            <Icon className="text-[#64ffda] text-2xl" />
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-1">
            <span className="text-4xl font-bold text-[#64ffda]">
              {typeof end === 'number' ? count : end}
            </span>
            {label && <span className="text-2xl text-[#64ffda]">{label}</span>}
          </div>
          <p className="text-[#8892b0] mt-2 uppercase tracking-wider text-sm">{sublabel}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { value: 3, label: '+', title: 'Years Experience', icon: FaClock },
    { value: '4.5k', title: 'Coding Hours', icon: FaCode },
    { value: 150, label: '+', title: 'Problems Solved', icon: SiLeetcode },
    { value: 15, label: '+', title: 'Projects Completed', icon: FaGithub },
    { value: 4, label: '+', title: 'Technologies Mastered', icon: FaLightbulb },
    { value: '∞', title: 'Cups of Coffee', icon: FaCoffee },
  ];

  return (
    <section id="stats" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 overflow-hidden">
        <div className="absolute w-[150%] h-[150%] border-[#64ffda] border-[1px] rounded-full animate-spin-slow" />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-[#64ffda] mb-4">Journey</h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            A snapshot of my journey in software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-24">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              end={stat.value}
              label={stat.label}
              sublabel={stat.title}
              icon={stat.icon}
              duration={2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
