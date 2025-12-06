"use client";

import HomePage from "@/components/HomePage";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomePage />

      {/* Projects Section */}
      <section id="projects" className="py-20  sm:px-6 ">
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
