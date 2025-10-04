"use client";

import { motion } from "framer-motion";
import { Code, Gamepad2, Brain, QrCode, Image as ImageIcon, Clock, Shield } from "lucide-react";

interface ProjectImageProps {
  projectType: string;
  title: string;
  className?: string;
}

export default function ProjectImage({ projectType, title, className = "" }: ProjectImageProps) {
  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "web":
      case "react":
      case "node":
        return Code;
      case "game":
      case "unity":
        return Gamepad2;
      case "ai":
      case "ml":
        return Brain;
      case "qr":
      case "scanner":
        return QrCode;
      case "design":
      case "graphics":
        return ImageIcon;
      case "security":
        return Shield;
      default:
        return Clock;
    }
  };

  const getGradient = (type: string) => {
    switch (type.toLowerCase()) {
      case "web":
      case "react":
      case "node":
        return "from-blue-400 to-cyan-500";
      case "game":
      case "unity":
        return "from-purple-400 to-pink-500";
      case "ai":
      case "ml":
        return "from-green-400 to-emerald-500";
      case "qr":
      case "scanner":
        return "from-cyan-400 to-blue-500";
      case "design":
      case "graphics":
        return "from-pink-400 to-rose-500";
      case "security":
        return "from-orange-400 to-red-500";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  const Icon = getIcon(projectType);
  const gradient = getGradient(projectType);

  return (
    <div className={`relative bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center ${className}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mb-4`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-white/80 text-sm font-medium max-w-32 text-center">
          {title}
        </div>
      </motion.div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
}
