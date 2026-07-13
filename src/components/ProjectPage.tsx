import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
const projects = [
  {
    title: "RideNgo – Bike Rental Platform",
    tag: "Mobility",
    tagColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
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
    image: "/assets/project/rideNgo.jpg",
  },
  {
    title: "Bicres – QR Ordering Platform for Restaurants",
    tag: "Restaurant SaaS",
    tagColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
    description: `A QR ordering platform for restaurants — register, add your menu, print QR cards and go live in under 2 minutes. Customers scan and order from their phone while the kitchen gets notified instantly.`,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://bicres.com/",
    githubUrl: "#",
    image: "/assets/project/bicres.jpg",
  },
  {
    title: "Soulversity – Mental Wellness Platform",
    tag: "Wellness",
    tagColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30",
    description: `A mental wellness platform connecting people with health coaches and wellness experts — with expert discovery, session booking, and personalized wellness journeys, all in a calm, accessible experience.`,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Google Sign-In",
    ],
    liveUrl: "https://live.soulversity.com/",
    githubUrl: "#",
    image: "/assets/project/soulversity.jpg",
  },
  {
    title: "Pixean – Image Management & Cloud Storage Platform",
    tag: "Cloud SaaS",
    tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    description: `Designed for artists, photographers, and businesses managing millions of images across devices — cloud storage, smart galleries, and object detection built in.`,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Material UI", "Bootstrap"],
    liveUrl: "https://stillsweb.com/",
    githubUrl: "#",
    image: "/assets/project/stillWeb.jpg",
  },
  {
    title: "QR-Menu-Items – Dynamic QR Code Menu System",
    tag: "Restaurant Tech",
    tagColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30",
    description: `A sleek, responsive web app allowing restaurants to create contactless digital menus. Once items are added, it instantly generates a QR-linked menu (e.g., ...netlify.app?tableNumber=X)—perfect for placing at tables for a smooth, touch-free dining experience`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "lucide-react", "Netlify", "GitHub", "Figma", "Cursor"],
    liveUrl: "https://qr-menu-items.netlify.app/",
    githubUrl: "#",
    image: "/assets/project/qr-menu-items.jpg",
  },
  {
    title: "Game Theory – Tech-Driven Sports Ecosystem",
    tag: "Sports",
    tagColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    description: `A dynamic, full-featured sports platform that brings together venue booking, coaching, analytics, and community engagement. With top-tier facilities, pro-level coaching, and computer-vision-powered performance tracking, Game Theory offers players—from beginners to seasoned athletes—a seamless, tech-enhanced way to elevate their game.`,
    technologies: ["Framer", "React"],
    liveUrl: "https://www.gametheory.in/",
    githubUrl: "#",
    image: "/assets/project/gametheory.jpg",
  },
];
const ProjectPage = () => {
  return (
    <section id="projects" className="pt-6 pb-10 md:pt-10 md:pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30">
              <ExternalLink className="w-6 h-6" />
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
              Featured Projects
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={index} delay={(index % 3) * 120} className="h-full">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — open live demo`}
                className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 dark:hover:border-orange-500/50 hover:-translate-y-1.5 transition-all duration-500"
              >
                {/* Image area — no text on the image itself */}
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover: fully opaque panel — image text can never bleed through */}
                  <div className="absolute inset-0 flex flex-col justify-center p-5 bg-gradient-to-br from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <p className="text-slate-300 text-sm leading-relaxed line-clamp-4 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-0.5 bg-white/10 border border-white/15 text-slate-200 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-0.5 bg-orange-500/90 text-white rounded-full text-xs font-medium">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1 text-orange-400 text-sm font-semibold">
                        Visit site
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title bar — always on a solid surface, never on the image */}
                <div className="flex items-start justify-between gap-3 p-4 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <span
                      className={`inline-block px-2 py-0.5 mb-1.5 rounded-full text-[11px] font-semibold border ${project.tagColor}`}
                    >
                      {project.tag}
                    </span>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100 leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
