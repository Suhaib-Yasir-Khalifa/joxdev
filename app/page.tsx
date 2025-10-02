import { Button } from "@/components/ui/button";
import { ArrowDown, Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <main>
      <nav className="backdrop-blur-3xl flex flex-row justify-between items-center    lg:px-50 xl:px-70 lg:pt-8 sm:px-7 px-7 py-4 ">
        <div>
          <a href="#" className="selection:bg-transparent">
            <Image
              className="rounded-full "
              src="/logo.png"
              alt="My photo"
              width={70}
              height={70}
            />
          </a>
        </div>
        <div className="lg:flex lg:flex-row gap-x-4 sm:hidden hidden ">
          <a
            href="#"
            className="hover:text-primary transition-all duration-100 cursor-pointer "
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-primary transition-all duration-100 cursor-pointer "
          >
            About
          </a>
          <a
            href="#education"
            className="hover:text-primary transition-all duration-100 cursor-pointer "
          >
            Education
          </a>
          <a
            href="#work"
            className="hover:text-primary transition-all duration-100 cursor-pointer "
          >
            Work
          </a>
          <a
            href="#contact"
            className="hover:text-primary transition-all duration-100 cursor-pointer "
          >
            Contact
          </a>
        </div>
        <div className="sm:flex w-10 h-10 lg:hidden">
          {" "}
          <Menu className="w-full h-full" />
        </div>
      </nav>
      {/**_______________________________________HeroSection */}

      <div className="relative flex lg:flex-row flex-col  sm:flex-col blu justify-between items-center py-4 lg:px-20 sm:px-4 overflow-hidden">
        {/* 🔹 Background Grid */}
        <div className="absolute inset-0 -z-10 opacity-60">
          {/* Horizontal lines with spheres */}
          {["20%", "40%", "60%", "80%"].map((pos, i) => (
            <React.Fragment key={`h-${i}`}>
              {/* line */}
              <div
                className="absolute left-0 right-0 h-[3px] bg-primary/70"
                style={{ top: pos }}
              />
              {/* moving sphere */}
              <div
                className="absolute w-3 h-3 bg-primary rounded-full blur-sm  move-x"
                style={{
                  top: `calc(${pos} - 6px)`,
                  left: "0",
                  animationDuration: `${6 + i * 2}s`,
                }}
              />
            </React.Fragment>
          ))}

          {/* Vertical lines with spheres */}
          {["20%", "40%", "60%", "80%"].map((pos, i) => (
            <React.Fragment key={`v-${i}`}>
              {/* line */}
              <div
                className="absolute top-0 bottom-0 w-[3px] bg-primary/70"
                style={{ left: pos }}
              />
              {/* moving sphere */}
              <div
                className="absolute w-3 h-3 bg-primary rounded-full blur-sm move-y"
                style={{
                  left: `calc(${pos} - 6px)`,
                  top: "0",
                  animationDuration: `${7 + i * 2}s`,
                }}
              />
            </React.Fragment>
          ))}
        </div>

        {/* 🔹 Left content */}
        <div className="flex text-center lg:text-left flex-col gap-y-3 justify-center p-4">
          <h1 className="font-bold text-center lg:text-left text-3xl sm:text-[3rem] lg:text-7xl">
            "HI, I'm{" "}
            <span className="text-primary font-extrabold sm:text-[4rem] lg:text-8xl text-4xl">
              Jox
            </span>
            "
          </h1>
          <p className="text-[1rem] lg:pl-[4rem] lg:w-2/3">
            “I’m a frontend developer with medium-level experience in web and
            desktop development. I enjoy building clean, responsive user
            interfaces and bringing ideas to life with modern frameworks. Always
            learning and exploring new technologies to improve my craft.”
          </p>
          <div className="flex gap-x-5 flex-row w-full lg:justify-start justify-center">
            <Button className="cursor-pointer">Contact</Button>
            <Button className="cursor-pointer">
              Download CV <ArrowDown />
            </Button>
          </div>
        </div>

        {/* 🔹 Right image */}
        <div className="relative rounded-full flex items-center justify-center">
          <div
            className="relative overflow-hidden rounded-full
          w-[160px] h-[160px]
          sm:w-70 sm:h-70
          lg:w-80 lg:h-80
          xl:w-96 xl:h-96
        "
          >
            <Image
              src="/myPhoto.png"
              alt="pro"
              fill
              className="object-cover border-b-4 border-primary rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full flex  my-5 justify-center">
        <div className="w-1/2 border-b-2 border-forgorund"></div>
      </div>
      {/**____________________________________________________________________________________________________ */}
    </main>
  );
}
