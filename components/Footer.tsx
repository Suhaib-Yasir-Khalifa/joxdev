"use client";

import Link from "next/link";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

import AnimatedDiv from "./AnimatedDiv";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <SiGithub className="w-5 h-5" />,
      href: "https://github.com/Suhaib-Yasir-Khalifa",
      label: "GitHub",
    },
    {
      icon: <SiLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/suhiab-yasir-434aa6398",
      label: "LinkedIn",
    },

    {
      icon: <SiInstagram className="w-5 h-5" />,
      href: "https://instagram.com/S_jox_02",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-lg">
      {/* Decorative gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-1/3 h-1/2 bg-primary/5 rounded-full filter blur-3xl -z-10" />
        <div className="absolute -bottom-1/4 right-1/4 w-1/4 h-1/2 bg-primary/10 rounded-full filter blur-3xl -z-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <AnimatedDiv
            direction="up"
            duration={0.6}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Jox
            </h3>
            <p className="mt-4 text-foreground/70">
              Crafting exceptional digital experiences with modern web
              technologies.
            </p>
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, index) => (
                <AnimatedDiv
                  key={social.label}
                  direction="up"
                  duration={0.5}
                  delay={0.1 * index}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-background/30 border border-white/10 hover:border-primary/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                    <span className="relative z-10 text-foreground/80 group-hover:text-foreground transition-colors">
                      {social.icon}
                    </span>
                  </Link>
                </AnimatedDiv>
              ))}
            </div>
          </AnimatedDiv>

          {/* Quick Links */}
          <AnimatedDiv direction="up" duration={0.6} delay={0.1}>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </AnimatedDiv>

          {/* Contact Info */}
          <AnimatedDiv direction="up" duration={0.6} delay={0.2}>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Get in Touch
            </h4>
            <ul className="space-y-3 w-full">
              <li className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-foreground/70 group w-full">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-background/30 border border-white/10 group-hover:border-primary/30 transition-colors duration-300">
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">
                    📧
                  </span>
                </span>
                <a
                  target="_blank"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=suhaibyassirfox@gmail.com"
                  className="hover:text-primary transition-colors break-all w-full sm:w-auto"
                >
                  SuhaibYassirFox@gmail.com
                </a>
              </li>
            </ul>
          </AnimatedDiv>
        </div>

        {/* Copyright */}
        <div className="mt-12 pb-1 border-t border-white/10 text-center text-foreground/60 text-sm">
          <p>© {2022} Jox_Dev. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS, and ❤️</p>
        </div>
      </div>
    </footer>
  );
}
