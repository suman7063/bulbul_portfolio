import { ExternalLink, Github, Code } from "lucide-react";
import Image from "next/image";
const projects = [
  {
    title: "RideNgo – Bike Rental Platform",
    description:
      "End-to-end frontend development for a bike & car rental platform with seamless booking, payments, and dashboards for users, partners, and admins.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "lucide-react",
      "Netlify",
      "VS Code",
      "GitHub",
      "Figma",
      "Cursor",
    ],
    liveUrl: "https://www.ridengo.in/",
    githubUrl: "#",
    image: "/assets/project/rideNgo.png",
  },
  {
    title: "Conscent.ai – Publisher Monetization Platform",
    description: `A full-stack platform powering content publishers with intelligent paywalling, analytics, audience segmentation, and frictionless micropayments—boosting subscriptions, retention, and lifetime value. Trusted by major media brands including India Today Group, Outlook Group, Jagran Media, and more.`,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "lucide-react",
      "Netlify",
      "VS Code",
      "GitHub",
      "Figma",
      "Cursor",
    ],
    liveUrl: "#",
    githubUrl: "#",
    image: "/assets/project/conscent.png",
  },
  {
    title: "Stillsweb – Image Management & Cloud Storage Platform",
    description: `Designed for artists, photographers, and businesses managing millions of images.
                  Tech Stack Tags: Image Management Cloud Storage Object Detection Cross-Platform`,
    technologies: ["HTML", "CSS", "JavaScript", "React",, "Material UI", "Bootstrap"],
    liveUrl: "https://stillsweb.com/",
    githubUrl: "#",
    image: "/assets/project/stillWeb.png",
  },
  {
    title: "QR-Menu-Items – Dynamic QR Code Menu System",
    description: `A sleek, responsive web app allowing restaurants to create contactless digital menus. Once items are added, it instantly generates a QR-linked menu (e.g., ...netlify.app?tableNumber=X)—perfect for placing at tables for a smooth, touch-free dining experience`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "lucide-react", "Netlify", "GitHub", "Figma", "Cursor"],
    liveUrl: "https://qr-menu-items.netlify.app/",
    githubUrl: "#",
    image: "/assets/project/qr-menu-items.png",
  },
  {
    title: "Game Theory – Tech-Driven Sports Ecosystem",
    description: `A dynamic, full-featured sports platform that brings together venue booking, coaching, analytics, and community engagement. With top-tier facilities, pro-level coaching, and computer-vision-powered performance tracking, Game Theory offers players—from beginners to seasoned athletes—a seamless, tech-enhanced way to elevate their game.`,
    technologies: ["Framer", "React"],
    liveUrl: "https://www.gametheory.in/",
    githubUrl: "#",
    image: "/assets/project/gametheory.png",
  },
];
const ProjectPage = () => {
  return (
    <section id="projects" className="py-10 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <ExternalLink className="w-8 h-8 text-orange-600 mr-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* <div className="h-48 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                <Code className="w-16 h-16 text-orange-600" /> */}
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={300} 
                  className="h-48 w-full object-cover"
                  priority={index < 3}
                  quality={85}
                />
              {/* </div> */}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  {/* <a
                      href={project.githubUrl}
                      className="flex items-center text-slate-600 hover:text-slate-700 font-medium text-sm"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
