"use client";

import { useState, useEffect } from "react";
import AnimatedDiv from "./AnimatedDiv";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mouse, ArrowLeft, ArrowRight } from "lucide-react";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiElectron,
  SiTypescript,
  SiOpenai,
  SiFirebase,
} from "react-icons/si";
import { ScrollArea } from "./ui/scroll-area";

// SkillSlider component
const SkillSlider = () => {
  const [selected, setSelected] = useState<number>(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-20 h-20 text-yellow-400" />,
      description: "Learned JS fundamentals, DOM, ES6+, async/await.",
      progress: 85,
    },
    {
      name: "React",
      icon: <SiReact className="w-20 h-20 text-blue-400" />,
      description: "React hooks, components, router, state management.",
      progress: 90,
    },
    {
      name: "Firebase",
      icon: (
        <SiFirebase className="w-20 h-20 rounded-full text-black bg-gradient-to-r from-orange-500 to-yellow-500" />
      ),
      description:
        "Backend and dealing with the database without needing to backend developer",
      progress: 90,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="w-20 h-20 text-blue-400" />,
      description: "Responsive UI, utility classes, animations.",
      progress: 85,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-20 h-20 text-gray-400" />,
      description: "SSR, app router, API routes, and file structure.",
      progress: 65,
    },
    {
      name: "HTML & CSS",
      icon: (
        <div className="flex">
          <SiHtml5 className="text-red-800 w-20 h-20" />
          <SiCss3 className="text-blue-600 w-20 h-20" />
        </div>
      ),
      description: "HTML & CSS basic for web and desktop development",
      progress: 93,
    },
    {
      name: "Typescript",
      icon: <SiTypescript className="text-blue-600 w-20 h-20" />,
      description: "Typescript for web and desktop development",
      progress: 90,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-20 h-20 text-green-400" />,
      description: "NodeJs, Backend and serversite javascript.",
      progress: 70,
    },
    {
      name: "Electron",
      icon: <SiElectron className="w-20 h-20 text-blue-400" />,
      description:
        "Desktop application development, Security, Preload Controlling",
      progress: 90,
    },
    {
      name: "Ai Powered Apps",
      icon: <SiOpenai className="w-20 h-20 text-gray-400" />,
      description:
        "Applications powered by Ai, Chatbots, Image Generators, Asset Generators",
      progress: 77,
    },
  ];

  const handlePrev = () => {
    setDirection("prev");
    setSelected((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setSelected((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col justify-between items-center w-full p-6">
      {/* Skill Icon Area */}
      <div className="relative w-40 h-40 flex items-center justify-center overflow-hidden">
        {skills.map((skill, index) => {
          const isSelected = index === selected;
          return (
            <div
              key={skill.name}
              className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-transform duration-500 ease-in-out
                  ${
                    isSelected
                      ? "translate-y-0 opacity-100 z-20"
                      : direction === "next"
                      ? "translate-y-20 opacity-0 z-10"
                      : "translate-y-[-20px] opacity-0 z-10"
                  }
                `}
            >
              <div className="rounded-full p-8 shadow-2xl text-6xl">
                {skill.icon}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-6 space-x-6">
        <button
          onClick={handlePrev}
          className="px-4 py-2 rounded-lg cursor-pointer hover:bg-primary transition shadow-sm shadow-black"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 rounded-lg cursor-pointer hover:bg-primary transition shadow-sm shadow-black"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Selected Skill Info */}
      <div className="mt-6 w-full flex flex-col justify-between max-w-md text-center transition-all h-[12rem] duration-300">
        <h2 className="text-2xl font-bold">{skills[selected].name}</h2>
        <p className="text-foreground">{skills[selected].description}</p>

        {/* Progress Bar */}
        <div className="mt-4 w-full h-4 bg-foreground rounded-full overflow-hidden">
          <div
            className="h-4 bg-primary rounded-full transition-all duration-500"
            style={{ width: `${skills[selected].progress}%` }}
          ></div>
        </div>
        <p className="mt-1 text-sm text-primary">
          {skills[selected].progress}%
        </p>
      </div>
    </div>
  );
};

// HeroSection component
const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent h-screen w-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-transparent via-transparent to-primary/5" />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row justify-between items-center min-h-screen py-16 lg:py-0 lg:px-20 sm:px-4 gap-12 lg:gap-20">
        {/* Profile Image - Hexagon Shape */}
        <AnimatedDiv
          duration={0.8}
          delay={0.3}
          className="relative z-20 w-48 h-48 sm:w-65 sm:h-65 md:w-80 md:h-80 lg:w-100 lg:h-100 xl:w-150 xl:h-150"
        >
          <div className="hexagon w-full h-full">
            <Image
              src="/myPhoto.png"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 12rem, (max-width: 1024px) 14rem, 16rem"
            />
          </div>
          <div
            className="absolute inset-0 border-2 border-primary/30 rounded-full animate-pulse"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              transform: "scale(1.05)",
            }}
          />
        </AnimatedDiv>

        {/* Content - Left Side */}
        <div className="flex flex-col gap-y-6 justify-center p-4 lg:w-1/2">
          <div className="font-bold text-center lg:text-left text-4xl sm:text-[3.5rem] lg:text-7xl">
            "HI, I'm{" "}
            <span className="text-primary font-extrabold sm:text-[4.5rem] lg:text-8xl text-5xl">
              Jox
            </span>
            "
          </div>

          <div className="text-lg lg:text-xl text-gray-300 lg:pl-4 lg:pr-20">
            "I'm a frontend developer with medium-level experience in web and
            desktop development. I enjoy building clean, responsive user
            interfaces and bringing ideas to life with modern frameworks. Always
            learning and exploring new technologies to improve my craft."
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
            <Button className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 transition-all transform hover:scale-105">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
              </a>
            </Button>

            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-primary/30 hover:border-primary/50 transition-all transform hover:scale-105"
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
              </a>
            </Button>
          </div>

          <div className="lg:flex hidden gap-x-2 items-center mt-8 text-gray-400">
            <span>
              <Mouse />
            </span>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="relative">
      {/* Gradient Overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/80 to-background/50" />

      <div className="relative space-y-20 md:space-y-32">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <HeroSection />
        </section>

        {/* About Section */}
        <AnimatedDiv
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          direction="up"
          duration={0.7}
        >
          <p id="about"></p>
          <AnimatedDiv
            direction="up"
            duration={0.6}
            delay={0.2}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 sm:text-5xl">
              About Me
            </h2>
            <div className="w-20 h-1 mx-auto my-4 bg-gradient-to-r from-primary to-primary/70 rounded-full" />
          </AnimatedDiv>
          <div className="flex sm:flex-col lg:flex-row justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedDiv
                direction="left"
                duration={0.6}
                delay={0.3}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    My Skills
                  </h3>
                  <SkillSlider />
                </div>
              </AnimatedDiv>

              <AnimatedDiv
                direction="right"
                duration={0.7}
                delay={0.4}
                className="   w-full rounded-2xl overflow-hidden "
              >
                <h3 className="text-4xl pb-8 font-semibold text-foreground text-center">
                  Education
                </h3>
                <div className=" bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl" />
                <ScrollArea className="w-full border-primary/80 border-2 rounded-md  px-2 py-2 my-2  h-[20rem]">
                  <h3 className="text-center">Udemy Courses</h3>

                  <h2 className="text-foregground my-2">
                    - HTML, CSS, and Javascript for Web Development (Basic +
                    Advanced)
                  </h2>
                  <h2 className="text-foregground my-2">
                    - Reactjs for Web Development (Basic + Advanced)
                  </h2>
                  <h2 className="text-foregground my-2">
                    - Nextjs for Web Development (Basic + Advanced)
                  </h2>
                  <h2 className="text-foregground my-2">
                    - Electronjs for Desktop Development (Basic + Advanced)
                  </h2>
                  <h2 className="text-foregground my-2">
                    - Nodejs for Server Development (Basic )
                  </h2>
                  <h2 className="text-foregground my-2">
                    - Git for Version Control
                  </h2>
                  <h2 className="text-foregground my-2">
                    - Typescript for error Prevention
                  </h2>
                </ScrollArea>
              </AnimatedDiv>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
}
