"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  technologies: string[];
}

interface ProjectsSectionProps {
  showAll?: boolean;
}

const ProjectsSection = ({ showAll = false }: ProjectsSectionProps) => {
  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "StepNova",
      description:
        "A modern web application built with Next.js and TypeScript.",
      image: "/shoe-1.png",
      images: ["/shoe-1.png", "/shoe-2.png", "/shoe-3.png", "/shoe-4.png"],
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn Ui",
        "Framer Motion",
      ],
    },
    {
      id: 2,
      title: "BITE",
      description: "An interactive restaurant website built with React.Js",
      image: "/bite-1.png",
      images: ["/bite-1.png", "/bite-2.png", "/bite-3.png"],
      technologies: [
        "React",
        "TailwindCSS",
        "JavaScript",
        "Shadcn Ui",
        "Jotai",
        "Framer Motion",
        "React Router",
      ],
    },
    {
      id: 3,
      title: "Todo",
      description: "A Desktop Application built with Electron",
      image: "/todo1.png",
      images: ["/todo1.png", "/todo2.png", "/todo3.png"],
      technologies: [
        "Electron",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Shadcn Ui",
        "Jotai",
        "Framer Motion",
        "Electron Store",
        "React Query",
      ],
    },
    {
      id: 4,
      title: "AnalyzerX",
      description:
        "A Desktop Application built with Electron to Analize and process your data",
      image: "/analize-2.png",
      images: ["/analize-1.png", "/analize-2.png", "/analize-3.png"],
      technologies: [
        "Electron",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Shadcn Ui",
        "Jotai",
        "Framer Motion",
        "Electron Store",
        "React Query",
        "Chart.js",
      ],
    },
    {
      id: 5,
      title: "Developer Doctor",
      description:
        "A web Application built with Reactjs to helps to tract your health",
      image: "/doc1.png",
      images: ["/doc1.png", "/doc2.png", "/doc3.png", "/doc4.png", "/doc5.png"],
      technologies: ["Reactjs", "JavaScript", "Bootstrap", "HTML", "CSS"],
    },
    {
      id: 6,
      title: "Fitness",
      description:
        "A website build with React, it usful if u want to stay fit! ",
      image: "/fitness1.png",
      images: [
        "/fitness2.png",
        "/fitness3.png",
        "/fitness4.png",
        "/fitness5.png",
        "/fitness6.png",
      ],
      technologies: [
        "Reactjs",
        "JavaScript",
        "Bootstrap",
        "React Dom",
        "HTML",
        "CSS",
      ],
    },

    {
      id: 7,
      title: "System Manager",
      description: "A Desktop Application built with Electron",
      image: "/system1.png",
      images: ["/system1.png", "/system2.png"],
      technologies: [
        "Electron",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Shadcn Ui",
        "Jotai",
        "Framer Motion",
        "Electron Store",
        "React Query",
        "System Information",
      ],
    },
    {
      id: 8,
      title: "WingFly",
      description:
        "A modern web application built with Next.js and TypeScript.",
      image: "/fly-1.png",
      images: [
        "/fly-1.png",
        "/fly-2.png",
        "/fly-3.png",
        "/fly-4.png",
        "/fly-5.png",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn Ui",
        "Framer Motion",
      ],
    },
    {
      id: 10,
      title: "SHINE",
      description: "A web Application built with Reactjs, find your style",
      image: "/shine2.png",
      images: [
        "/shine1.png",
        "/shine2.png",
        "/shine3.png",
        "/shine4.png",
        "/shine5.png",
        "/shine6.png",
      ],
      technologies: ["Reactjs", "JavaScript", "Bootstrap", "HTML", "CSS"],
    },
    {
      id: 11,
      title: "Travil",
      description: "A web Application built with Reactjs, find your style",
      image: "/travil.png",
      images: [
        "/tranvil1.png",
        "/tranvil2.png",
        "/tranvil3.png",
        "/tranvil4.png",
        "/tranvil5.png",
        "/tranvil6.png",
      ],
      technologies: ["Reactjs", "JavaScript", "Bootstrap", "HTML", "CSS"],
    },
  ];

  // Show only first 3 projects if showAll is false
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Animation variants for the section
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-20   " id="work">
      {/* Background floating elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]" />
        <div className="absolute -right-20 top-1/2 h-64 w-64 rounded-full bg-blue-500/20 blur-[80px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[80px]" />
      </div>

      <div className="   ">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </motion.div>
        {showAll && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: -10 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="/"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <span className="relative z-10">Back to Home</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </a>
          </motion.div>
        )}

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          data-glow="true"
        >
          {displayedProjects.map((project) => (
            <div key={project.id} data-glow="true">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                images={project.images}
                technologies={project.technologies}
              />
            </div>
          ))}
        </motion.div>

        {/* View more button - only show on homepage */}
        {!showAll && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="/Projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <span className="relative z-10">View All Projects</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
