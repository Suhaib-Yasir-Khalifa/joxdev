"use client";

import Link from "next/link";
import AnimatedDiv from "./AnimatedDiv";
import { SiGithub, SiFiverr, SiWhatsapp } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    description: "Get in touch via email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=suhaibyassirfox@gmail.com",
    color: "from-red-500 to-red-600",
    hoverColor: "hover:from-red-600 hover:to-red-700",
  },
  {
    icon: <SiGithub className="w-6 h-6" />,
    title: "GitHub",
    description: "Check out my projects",
    href: "https://github.com/Suhaib-Yasir-Khalifa",
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:from-gray-800 hover:to-black",
  },
  {
    icon: <SiFiverr className="w-6 h-6" />,
    title: "Freelance",
    description: "Hire me for a project",
    href: "https://fiverr.com/joxdev",
    color: "from-green-400 to-green-600",
    hoverColor: "hover:from-green-500 hover:to-green-700",
  },
  {
    icon: <SiWhatsapp className="w-6 h-6" />,
    title: "WhatsApp",
    description: "Chat with me directly",
    href: "https://wa.me/+201558157912",
    color: "from-green-500 to-emerald-600",
    hoverColor: "hover:from-green-600 hover:to-emerald-700",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Section Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedDiv
          direction="up"
          duration={0.6}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 sm:text-5xl">
            Get In Touch
          </h2>
          <div className="w-20 h-1 mx-auto my-4 bg-gradient-to-r from-primary to-primary/70 rounded-full" />
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. If you have a project
            in mind or just want to say hi, feel free to reach out!
          </p>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <AnimatedDiv
              key={item.title}
              direction="up"
              duration={0.6}
              delay={0.1 * index}
              className="h-full"
            >
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative h-full flex flex-col items-center p-6 rounded-2xl bg-background/30 backdrop-blur-lg border border-border/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${item.hoverColor}`}
              >
                {/* Hover effect background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}
                />

                {/* Icon with gradient background */}
                <div
                  className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-2xl mb-4 bg-gradient-to-br ${item.color} text-white`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 z-10">
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-center z-10">
                  {item.description}
                </p>

                {/* Subtle border highlight on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 pointer-events-none`}
                />
              </Link>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
