import { Code } from "lucide-react";
import React from "react";

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
      items: ["Node.js", "Express.js", "Supabase", "RESTful APIs"],
    },
    // { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    {
      category: "Tools & Technologies",
      items: ["Git", "Netlify", "Figma", "VS Code", "Cursor", "ChatGPT","Claude"],
    },
  ];
  return (
    <section id="skills" className="py-10 md:py-20  bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <Code className="w-8 h-8 text-orange-600 mr-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className={`bg-slate-50 p-6 rounded-xl ${
              skillGroup.category === "Frontend" ? "lg:col-span-2" : ""
            }`}>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {skillGroup.category}
              </h3>
              <div className={skillGroup.category === "Frontend" ? "grid grid-cols-2 gap-x-4 gap-y-2" : "space-y-2"}>
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className={skillGroup.category === "Frontend" ? "text-slate-600 text-sm" : "text-slate-600"}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
