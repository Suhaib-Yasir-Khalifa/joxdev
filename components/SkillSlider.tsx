import { ArrowLeft, ArrowRight } from "lucide-react";
import { JSX } from "react";
import { useState } from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: any; // You can also use JSX.Element if you use SVG icons
  description: string;
  progress: number; // percentage
};

const skills: Skill[] = [
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
    progress: 75,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="w-20 h-20 text-blue-400" />,
    description: "Responsive UI, utility classes, animations.",
    progress: 70,
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
    description: "HTML & CSS basic for web and desktop developement",
    progress: 93,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-20 h-20 text-green-400" />,
    description: "NodeJs, Backend and serversite javascript.",
    progress: 70,
  },
];
export default function SkillSlider(): JSX.Element {
  const [selected, setSelected] = useState<number>(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const handlePrev = () => {
    setDirection("prev");
    setSelected((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setSelected((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col justify-between items-center w-full p-6">
      {/* Skill Icon Area */}
      <div className="relative w-40 h-40 flex items-center justify-center overflow-hidden">
        {skills.map((skill: Skill, index: number) => {
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
          className="px-4 py-2 rounded-lg cursor-pointer shadow hover:bg-primary transition"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 rounded-lg cursor-pointer shadow hover:bg-primary transition"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Selected Skill Info */}
      <div className="mt-6 w-full flex flex-col justify-between max-w-md text-center transition-all h-[9rem] duration-300">
        <h2 className="text-2xl font-bold">{skills[selected].name}</h2>
        <p className="mt-2 text-foreground">{skills[selected].description}</p>

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
}
