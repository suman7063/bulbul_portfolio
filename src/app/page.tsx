import React from "react";
import HomePage from "../components/HomePage";
import ProjectPage from "../components/ProjectPage";
import TechnologiesPage from "../components/TechnologiesPage";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div className="bg-custom-purple">
      <HomePage />
      <ProjectPage />
      <TechnologiesPage/>
      <AboutMe/>
    </div>
  );
}
