"use client";

import { motion } from "framer-motion";
import { 
  Trophy, 
  Brain, 
  Code, 
  Star, 
  Target,
  Zap,
  Shield,
  Gamepad2
} from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Smart India Hackathon Leadership",
      description: "Led a team in the prestigious Smart India Hackathon, demonstrating exceptional leadership skills and technical expertise.",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      year: "2024",
      category: "Leadership",
      details: [
        "Team lead for national-level hackathon",
        "Managed 5+ team members",
        "Delivered innovative solution on time",
        "Received recognition for leadership"
      ]
    },
    {
      title: "Vortex AI Memory System",
      description: "Built an experimental AI project with layered memory architecture for future-predicting capabilities.",
      icon: Brain,
      color: "from-purple-400 to-pink-500",
      year: "2024",
      category: "AI Innovation",
      details: [
        "Developed advanced memory architecture",
        "Implemented future-predicting algorithms",
        "Created experimental AI system",
        "Pioneered new AI techniques"
      ]
    },
    {
      title: "Real AI Model Development",
      description: "Successfully built and deployed a real AI model that demonstrates practical machine learning applications.",
      icon: Code,
      color: "from-green-400 to-blue-500",
      year: "2024",
      category: "AI Development",
      details: [
        "Built production-ready AI model",
        "Implemented machine learning algorithms",
        "Deployed model successfully",
        "Achieved measurable results"
      ]
    },
    {
      title: "Major Graphics Design Projects",
      description: "Completed multiple high-impact graphics design projects including posters, UI/UX designs, and branding.",
      icon: Star,
      color: "from-pink-400 to-rose-500",
      year: "2023-2024",
      category: "Design",
      details: [
        "Created professional posters and designs",
        "Developed UI/UX for multiple projects",
        "Established brand identity systems",
        "Delivered high-quality creative work"
      ]
    },
    {
      title: "Cyber Security Expertise",
      description: "Developed advanced skills in cyber security including network security, vulnerability assessment, and threat analysis.",
      icon: Shield,
      color: "from-cyan-400 to-blue-500",
      year: "2023-2024",
      category: "Security",
      details: [
        "Mastered network security protocols",
        "Performed vulnerability assessments",
        "Conducted threat analysis",
        "Implemented security solutions"
      ]
    },
    {
      title: "Game Design Portfolio",
      description: "Created comprehensive game design portfolio showcasing Unity development, 3D modeling, and game mechanics.",
      icon: Gamepad2,
      color: "from-indigo-400 to-purple-500",
      year: "2023-2024",
      category: "Game Development",
      details: [
        "Developed games in Unity",
        "Created 3D models in Blender",
        "Designed engaging game mechanics",
        "Built complete game prototypes"
      ]
    }
  ];

  const stats = [
    { number: "7+", label: "Projects Completed", icon: Code },
    { number: "1", label: "AI System Built", icon: Brain },
    { number: "1", label: "Hackathon Led", icon: Trophy },
    { number: "100%", label: "Passion Driven", icon: Zap }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Key milestones and accomplishments that showcase my expertise and dedication
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)" }}
                className="glass rounded-xl p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)" 
                }}
                className="group glass rounded-xl overflow-hidden hover:border-green-400 transition-all duration-300"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${achievement.color} relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-white/80 text-sm">{achievement.year}</div>
                        <div className="text-white/60 text-xs">{achievement.category}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {achievement.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: detailIndex * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and collaborate on innovative projects. 
              Let&apos;s create something amazing together!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold rounded-full hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
            >
              <Target className="w-5 h-5" />
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
