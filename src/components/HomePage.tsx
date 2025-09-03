"use client"
import { useEffect, useState } from "react";
import { X,Menu,ChevronDown } from "lucide-react";
import Image from "next/image";
const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center md:py-4 py-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Suman Singh
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-orange-600 ${
                    activeSection === item
                      ? "text-orange-600 font-semibold"
                      : "text-slate-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-orange-600" />
              ) : (
                <Menu className="w-6 h-6 text-orange-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 mt-16">
            <div className="w-24 h-24 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-orange-500 shadow-xl mb-6">
              <Image 
                src="/assets/suman_pic.png" 
                alt="Suman Singh - Frontend Developer"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Suman Singh
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Senior Software Engineer crafting innovative urban mobility
            solutions
            <br />
            and scalable web applications with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200 font-semibold"
            >
              Get In Touch
            </button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-slate-400 hover:text-orange-600 transition-colors duration-200"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>
    </>
  );
};
export default HomePage;
