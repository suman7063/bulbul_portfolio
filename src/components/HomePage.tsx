"use client"
import { useEffect, useState } from "react";
import { X, Menu, ChevronDown, Download } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const ROLES = [
  "Senior Software Engineer",
  "React & Next.js Developer",
  "UI Engineer",
  "Frontend Architect",
];

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect cycling through roles
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(ROLES[0]);
      return;
    }
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const role = ROLES[roleIndex];
      if (!deleting) {
        charIndex++;
        setTyped(role.slice(0, charIndex));
        if (charIndex === role.length) {
          deleting = true;
          timer = setTimeout(tick, 2000);
          return;
        }
        timer = setTimeout(tick, 70);
      } else {
        charIndex--;
        setTyped(role.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
        timer = setTimeout(tick, 35);
      }
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };
  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg dark:shadow-slate-900/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center md:py-4 py-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              Suman Singh
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "home",
                "projects",
                "about",
                "experience",
                "skills",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className={`capitalize transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 ${
                    activeSection === item
                      ? "text-orange-600 dark:text-orange-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href="/SumanSingh_Resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-1.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium text-sm"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                ) : (
                  <Menu className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "home",
                "projects",
                "about",
                "experience",
                "skills",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className="block w-full text-left px-3 py-2 capitalize text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-md"
                >
                  {item}
                </a>
              ))}
              <a
                href="/SumanSingh_Resume.pdf"
                download
                className="flex items-center gap-2 px-3 py-2 text-orange-600 dark:text-orange-400 font-medium hover:bg-slate-50 dark:hover:bg-slate-900 rounded-md"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 pt-24 md:pt-28 pb-2 md:pb-4 transition-colors duration-300"
      >
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-orange-300/30 dark:bg-orange-500/15 rounded-full blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 w-96 h-96 bg-amber-300/30 dark:bg-amber-500/10 rounded-full blur-3xl animate-blob animation-delay-3000" />

        <div className="relative max-w-6xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left: text */}
            <div className="text-center md:text-left">
              <div className="animate-fade-up fade-delay-1">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-orange-200 dark:border-orange-500/30 text-orange-700 dark:text-orange-300 text-sm font-medium shadow-sm backdrop-blur-sm mb-5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Open to new opportunities
                </span>
              </div>

              <h1 className="animate-fade-up fade-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4 tracking-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 dark:from-orange-400 dark:via-amber-300 dark:to-orange-400 bg-clip-text text-transparent animate-gradient">
                  Suman Singh
                </span>
              </h1>

              <div className="animate-fade-up fade-delay-3 text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4 min-h-[2rem]">
                <span className="text-orange-600 dark:text-orange-400">{typed}</span>
                <span className="text-orange-600 dark:text-orange-400 animate-caret">|</span>
              </div>

              <p className="animate-fade-up fade-delay-4 text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Crafting innovative urban mobility solutions and scalable web
                applications with modern technologies
              </p>

              <div className="animate-fade-up fade-delay-5 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 font-semibold"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 rounded-full hover:bg-orange-600 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white hover:-translate-y-0.5 transition-all duration-300 font-semibold"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right: photo with floating stat chips */}
            <div className="animate-fade-up fade-delay-2 order-first md:order-last flex justify-center md:justify-end">
              <div className="relative">
                {/* Soft glow behind the photo */}
                <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-orange-400/30 to-amber-400/20 blur-2xl" />

                <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-br from-orange-500 to-amber-500 shadow-2xl shadow-orange-500/25 animate-float">
                  <Image
                    src="/assets/suman_pic.png"
                    alt="Suman Singh - Frontend Developer"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover rounded-full border-2 border-white dark:border-slate-950"
                    priority
                  />
                </div>

                {/* Floating stat chips */}
                <div className="absolute -left-6 top-6 md:-left-10 md:top-10 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 shadow-lg backdrop-blur-sm text-sm font-semibold text-slate-700 dark:text-slate-200 animate-float">
                  6+ <span className="font-normal text-slate-500 dark:text-slate-400">yrs exp</span>
                </div>
                <div className="absolute -right-4 bottom-8 md:-right-8 md:bottom-12 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 shadow-lg backdrop-blur-sm text-sm font-semibold text-slate-700 dark:text-slate-200 animate-float animation-delay-3000">
                  15+ <span className="font-normal text-slate-500 dark:text-slate-400">projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-10">
            <button
              onClick={() => scrollToSection("projects")}
              className="animate-bounce text-slate-400 dark:text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
              aria-label="Scroll to Projects section"
            >
              <ChevronDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
