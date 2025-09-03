import React from "react";
import HomePage from "../components/HomePage";
import ProjectPage from "../components/ProjectPage";
import AboutMe from "../components/AboutMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; 
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HomePage />
      <AboutMe/>
      <Experience />
      <Skills />
      <ProjectPage />
      <Contact/>
      <Footer/>
    </div>
  );
}
