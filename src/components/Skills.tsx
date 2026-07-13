import { Code } from "lucide-react";
import React from "react";
import Reveal from "./Reveal";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Payment gateway",
        "GA4",
        "Amplitude",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Material UI",
        "Bootstrap",
        "SASS",
        "Framer"
      ],
    },
    {
      category: "Backend",
      items: ["Express.js", "Supabase", "RESTful APIs"],
    },
    // { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    {
      category: "Tools & Technologies",
      items: ["Git", "Netlify", "Figma", "VS Code", "Cursor", "ChatGPT","Claude"],
    },
  ];
  return (
    <section id="skills" className="py-10 md:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30">
              <Code className="w-6 h-6" />
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
              Skills & Technologies
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <Reveal key={index} delay={index * 120} className={
              skillGroup.category === "Frontend" ? "lg:col-span-2" : ""
            }>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-orange-200 dark:hover:border-orange-500/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                {skillGroup.category}
              </h3>
              <div className={skillGroup.category === "Frontend" ? "grid grid-cols-2 gap-x-4 gap-y-2" : "space-y-2"}>
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mr-3"></div>
                    <span className={skillGroup.category === "Frontend" ? "text-slate-600 dark:text-slate-400 text-sm" : "text-slate-600 dark:text-slate-400"}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
