"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Gamepad2, Brain, QrCode, Image as ImageIcon, Clock } from "lucide-react";
import ProjectImage from "./ProjectImage";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Hostel Management App",
      description: "Smart system for managing hostels efficiently, including student registration, room allocation, and fee tracking.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      icon: Code,
      color: "from-blue-400 to-cyan-500",
      github: "https://github.com/asurax1983/hostel-management",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Red01 - Game Prototype",
      description: "Detailed story of the game scenario, mechanics, gameplay highlights, and innovative features. A complete game design portfolio piece.",
      image: "/api/placeholder/400/250",
      technologies: ["Unity", "C#", "Blender", "Game Design"],
      icon: Gamepad2,
      color: "from-purple-400 to-pink-500",
      github: "https://github.com/asurax1983/red01-game",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Vortex AI Memory System",
      description: "Experimental AI project with layered memory architecture for future-predicting capabilities. A breakthrough in AI memory systems.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TensorFlow", "AI/ML", "Neural Networks"],
      icon: Brain,
      color: "from-green-400 to-emerald-500",
      github: "https://github.com/asurax1983/vortex-ai",
      live: "#",
      featured: true
    },
    {
      id: 4,
      title: "Smart India Hackathon Project",
      description: "Lead role in team management, project development, and solving complex challenges in a national-level hackathon.",
      image: "/api/placeholder/400/250",
      technologies: ["Leadership", "Team Management", "Problem Solving"],
      icon: Code,
      color: "from-orange-400 to-red-500",
      github: "https://github.com/asurax1983/smart-india-hackathon",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "Graphics Design Showcase",
      description: "Collection of posters, UI/UX designs, branding, and digital art showcasing creative design capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["Photoshop", "Illustrator", "Figma", "UI/UX"],
      icon: ImageIcon,
      color: "from-pink-400 to-rose-500",
      github: "https://github.com/asurax1983/graphics-design",
      live: "#",
      featured: false
    },
    {
      id: 6,
      title: "QR Scanner App",
      description: "Mobile application with advanced QR code scanning functionality, modern UI, and seamless user experience.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "JavaScript", "Mobile Development"],
      icon: QrCode,
      color: "from-cyan-400 to-blue-500",
      github: "https://github.com/asurax1983/qr-scanner",
      live: "#",
      featured: false
    },
    {
      id: 7,
      title: "Future Project",
      description: "An exciting new project coming soon. Stay tuned for innovative solutions and cutting-edge technology.",
      image: "/api/placeholder/400/250",
      technologies: ["Coming Soon", "Innovation", "Future Tech"],
      icon: Clock,
      color: "from-gray-400 to-gray-600",
      github: "#",
      live: "#",
      featured: false,
      comingSoon: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of innovative projects showcasing my skills in development, design, and AI
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative glass rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300"
                >
                  {/* Project Image */}
                  <ProjectImage 
                    projectType={project.technologies[0]} 
                    title={project.title}
                    className="h-48"
                  />

                  {/* Project Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-black rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)" }}
                  className="group relative glass rounded-xl overflow-hidden hover:border-green-400 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-32">
                    <ProjectImage 
                      projectType={project.technologies[0]} 
                      title={project.title}
                      className="h-32"
                    />
                    {project.comingSoon && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded">
                        Coming Soon
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-4">
                    <h4 className="text-lg font-bold mb-2 text-white">{project.title}</h4>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded hover:bg-gray-700 transition-colors duration-200"
                      >
                        <Github size={14} />
                        Code
                      </motion.a>
                      {!project.comingSoon && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-black text-sm rounded hover:from-blue-500 hover:to-purple-600 transition-all duration-200"
                        >
                          <ExternalLink size={14} />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
