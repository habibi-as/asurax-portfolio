"use client";

import { motion } from "framer-motion";
import { Code, Gamepad2, Shield, Brain, Users, Award } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Expert in network security, vulnerability assessment, and threat analysis",
      color: "text-green-400"
    },
    {
      icon: Gamepad2,
      title: "Game Design",
      description: "Creative game designer with experience in Unity and Blender",
      color: "text-blue-400"
    },
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Pioneering AI solutions with experimental memory systems",
      color: "text-purple-400"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in React, Node.js, and modern web technologies",
      color: "text-pink-400"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Team lead in Smart India Hackathon and tech initiatives",
      color: "text-yellow-400"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Building cutting-edge solutions for real-world problems",
      color: "text-red-400"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate student, tech leader, and innovator dedicated to pushing the boundaries of technology
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a dedicated student and technology enthusiast, I&apos;ve always been fascinated by the intersection 
                of cybersecurity, game design, and artificial intelligence. My journey began with a simple curiosity 
                about how things work, which quickly evolved into a passion for creating innovative solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Through my work on projects like the Vortex AI Memory System and leadership in the Smart India 
                Hackathon, I&apos;ve developed a unique perspective on technology that combines technical expertise 
                with creative problem-solving.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of technology to transform lives and am committed to building solutions 
                that make a real difference in the world.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "7+", label: "Projects Completed", color: "from-green-400 to-blue-500" },
              { number: "3+", label: "Years Experience", color: "from-blue-400 to-purple-500" },
              { number: "1", label: "AI System Built", color: "from-purple-400 to-pink-500" },
              { number: "100%", label: "Passion Driven", color: "from-pink-400 to-red-500" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)" 
                }}
                className="glass rounded-xl p-6 hover:border-green-400 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center mb-4 group-hover:neon-glow transition-all duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
