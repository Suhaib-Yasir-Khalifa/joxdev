"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  images: string[];
  technologies: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  images = [],
  technologies,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle keyboard navigation for the image carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentImageIndex, images.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const rotateX = ((mousePosition.y - 150) / 30) * (isHovered ? 1 : 0);
  const rotateY = ((mousePosition.x - 200) / -30) * (isHovered ? 1 : 0);

  const handlePrevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset to first image when closing
      setCurrentImageIndex(0);
    }
  };

  // Generate unique IDs for accessibility
  const dialogTitleId = `dialog-title-${title.replace(/\s+/g, '-').toLowerCase()}`;
  const dialogDescId = `dialog-desc-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <motion.div
      className="relative h-full w-full overflow-hidden rounded-2xl p-0.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        perspective: 1000,
      }}
      data-glow="true"
      role="article"
      aria-label={`Project: ${title}`}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
        style={
          {
            background:
              "radial-gradient(600px circle at var(--x) var(--y), rgba(99, 102, 241, 0.1), transparent 40%)",
            opacity: isHovered ? 1 : 0.5,
            "--x": `${mousePosition.x}px`,
            "--y": `${mousePosition.y}px`,
          } as React.CSSProperties
        }
      />

      <motion.div
        className="relative h-full w-full overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 flex flex-col sm:cursor-default cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={(e) => {
          // Only handle click on small screens and if not clicking the demo button
          if (window.innerWidth < 640 && !(e.target as HTMLElement).closest('button, a, [role="button"]')) {
            setIsOpen(true);
          }
        }}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
          transformStyle: "preserve-3d",
          scale: isHovered ? 1.02 : 1,
          // @ts-ignore - WebkitTapHighlightColor is a valid CSS property
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl group">
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              console.error(`Failed to load image: ${image}`);
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/placeholder.png';
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation(); // Prevent the card's click handler from triggering
                setIsOpen(true);
              }}
            >
              View Demo
            </Button>
          </div>
        </div>

        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mb-4 text-sm text-gray-300 flex-grow">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <button
              className="sr-only"
              aria-label={`View demo for ${title}`}
            />
          </DialogTrigger>
          <DialogContent
            className="max-w-4xl p-0"
            aria-labelledby={dialogTitleId}
          >
            <DialogHeader className="sr-only">
              <DialogTitle id={dialogTitleId}>{title}</DialogTitle>
              <DialogDescription>
                Project details and image gallery for {title}
              </DialogDescription>
            </DialogHeader>
            <div
              className="max-w-4xl bg-gray-900/95 backdrop-blur-xl border border-white/10 p-0 overflow-hidden"
              aria-describedby="dialog-description"
            >
              <div className="relative w-full aspect-video bg-black/50 overflow-hidden">
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="relative w-full aspect-video bg-black/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={images[currentImageIndex]}
                        alt={`${title} project screenshot ${currentImageIndex + 1} of ${images.length}`}
                        width={1200}
                        height={675}
                        className="max-h-[70vh] w-auto object-contain"
                        priority
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/placeholder.png';
                        }}
                      />
                    </div>
                  </div>
                </motion.div>

                {images.length > 1 && (
                  <>
                    <motion.button
                      onClick={handlePrevImage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all backdrop-blur-sm"
                      aria-label="Previous image"
                    >
                      ←
                    </motion.button>
                    <motion.button
                      onClick={handleNextImage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all backdrop-blur-sm"
                      aria-label="Next image"
                    >
                      →
                    </motion.button>
                    <motion.div
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-full bg-black/30 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {images.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            if (index !== currentImageIndex && !isAnimating) {
                              setCurrentImageIndex(index);
                              setIsAnimating(true);
                              setTimeout(() => setIsAnimating(false), 300);
                            }
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? "bg-white w-6"
                              : "bg-white/50 w-4 hover:bg-white/75"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                          whileHover={{ scale: 1.2 }}
                        />
                      ))}
                    </motion.div>
                  </>
                )}
              </div>

              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {title}
                  </DialogTitle>
                </DialogHeader>

                <p id="dialog-description" className="mt-4 text-gray-300">
                  {description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
