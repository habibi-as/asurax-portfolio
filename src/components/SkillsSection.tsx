"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Code, 
  Palette, 
  Gamepad2, 
  Brain, 
  Users, 
  Database, 
  Smartphone, 
  Globe,
  Zap,
  Layers,
  Cpu
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Cyber Security",
      icon: Shield,
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "Network Security", level: 90 },
        { name: "Vulnerability Assessment", level: 85 },
        { name: "Threat Analysis", level: 80 },
        { name: "Penetration Testing", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: Code,
      color: "from-blue-400 to-cyan-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 90 }
      ]
    },
    {
      title: "Game Design",
      icon: Gamepad2,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Unity", level: 85 },
        { name: "Blender", level: 80 },
        { name: "C#", level: 90 },
        { name: "Game Mechanics", level: 85 }
      ]
    },
    {
      title: "AI/ML",
      icon: Brain,
      color: "from-pink-400 to-rose-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "TensorFlow", level: 80 },
        { name: "Neural Networks", level: 75 },
        { name: "Machine Learning", level: 85 }
      ]
    },
    {
      title: "Design",
      icon: Palette,
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Graphics Design", level: 80 },
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 75 }
      ]
    },
    {
      title: "Leadership",
      icon: Users,
      color: "from-yellow-400 to-orange-500",
      skills: [
        { name: "Team Management", level: 90 },
        { name: "Project Leadership", level: 85 },
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 90 }
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: Code, color: "text-blue-400" },
    { name: "Node.js", icon: Cpu, color: "text-green-400" },
    { name: "Tailwind CSS", icon: Palette, color: "text-cyan-400" },
    { name: "Unity", icon: Gamepad2, color: "text-purple-400" },
    { name: "Blender", icon: Layers, color: "text-orange-400" },
    { name: "Python", icon: Brain, color: "text-yellow-400" },
    { name: "MongoDB", icon: Database, color: "text-green-500" },
    { name: "TypeScript", icon: Code, color: "text-blue-500" },
    { name: "Figma", icon: Palette, color: "text-pink-400" },
    { name: "Git", icon: Zap, color: "text-red-400" },
    { name: "Mobile Dev", icon: Smartphone, color: "text-indigo-400" },
    { name: "Web Design", icon: Globe, color: "text-teal-400" }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive range of technical skills and creative abilities
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)" 
                }}
                className="glass rounded-xl p-6 hover:border-green-400 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: skillIndex * 0.1, duration: 0.8 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)"
                  }}
                  className="group flex items-center gap-2 px-4 py-2 glass rounded-full hover:neon-glow transition-all duration-300 cursor-pointer"
                >
                  <Icon className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-gray-300 font-medium">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: "Problem Solving", description: "Analytical thinking and creative solutions", icon: Zap },
            { title: "Team Leadership", description: "Leading teams and managing projects", icon: Users },
            { title: "Innovation", description: "Creating cutting-edge solutions", icon: Brain },
            { title: "Communication", description: "Clear and effective communication", icon: Globe }
          ].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-6 text-center hover:border-green-400 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{skill.title}</h4>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
