"use client";

import MobileMenu from "@/components/MoblieMenu";
import SkillSlider from "@/components/SkillSlider";
import { Button } from "@/components/ui/button";
import { Menu, Mouse } from "lucide-react";
import Image from "next/image";
import { useAtom } from "jotai";
import { mobileMenuAtom } from "@/components/status";
import React from "react";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useAtom(mobileMenuAtom);
  return (
    <main>
      <MobileMenu />
      <nav className="backdrop-blur-3xl flex flex-row justify-between items-center   sticky top-0 z-[100] lg:px-50 xl:px-70 lg:pt-2 sm:px-7 px-7 py-2">
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
          {mobileMenu ? (
            ""
          ) : (
            <Menu
              className="w-full h-full"
              onClick={() => setMobileMenu(true)}
            />
          )}
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
          <AnimatedDiv
            duration={0.5}
            direction="left"
            className="font-bold text-center lg:text-left text-3xl sm:text-[3rem] lg:text-7xl"
          >
            "HI, I'm{" "}
            <span className="text-primary font-extrabold sm:text-[4rem] lg:text-8xl text-4xl">
              Jox
            </span>
            "
          </AnimatedDiv>
          <AnimatedDiv
            direction="right"
            duration={1.5}
            className="text-[1rem] lg:pl-[4rem] lg:w-2/3"
          >
            “I’m a frontend developer with medium-level experience in web and
            desktop development. I enjoy building clean, responsive user
            interfaces and bringing ideas to life with modern frameworks. Always
            learning and exploring new technologies to improve my craft.”{" "}
          </AnimatedDiv>
          <div className="flex gap-x-5 flex-row w-full lg:justify-start justify-center">
            <AnimatedDiv duration={1.5}>
              <Button className="cursor-pointer">
                <a href="#contact">Contact</a>
              </Button>
            </AnimatedDiv>
            <AnimatedDiv duration={2} delay={0.5}>
              <Button asChild>
                <a href="/suhaibcv.pdf" download="Suhaib_CV.pdf">
                  Download CV ↓
                </a>
              </Button>
            </AnimatedDiv>
            <AnimatedDiv duration={2.5} delay={1}>
              <span className="lg:flex md:hidden hidden sm:hidden gap-x-2 items-center">
                Scroll Down <Mouse className="w-8 h-8" />
              </span>
            </AnimatedDiv>
          </div>
        </div>

        {/* 🔹 Right image */}
        <AnimatedDiv
          direction="down"
          className="relative rounded-full flex items-center justify-center"
        >
          <div
            className="relative overflow-hidden  rounded-2xl 
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
              className="object-cover clip-octagon border-4  border-foreground "
            />
          </div>
        </AnimatedDiv>
      </div>
      <div className="relative w-full flex  my-5 justify-center">
        <div className="w-1/2 border-b-2 border-forgorund"></div>
      </div>
      {/**____________________________________________________________________________________________________ for About Section */}
      <div id="about" className=" w-full flex flex-col  my-5 justify-center">
        <h1 className="font-extrabold text-center my-2 text-5xl">About</h1>
        <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between gap-y-5">
          <AnimatedDiv className="px-[1rem] flex flex-col sm:w-full lg:w-1/2 items-center">
            <h2>Skills</h2>
            <SkillSlider />
          </AnimatedDiv>
          <AnimatedDiv className="px-[1rem] flex flex-col sm:w-full lg:w-1/2 items-center">
            <h2>Education</h2>
          </AnimatedDiv>
        </div>
      </div>
    </main>
  );
}
