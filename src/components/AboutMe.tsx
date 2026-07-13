import { Code, User } from "lucide-react";
import Reveal from "./Reveal";

const AboutMe = () => {
  return (
    <section id="about" className="pt-6 pb-10 md:pt-10 md:pb-20 bg-white dark:bg-slate-950 transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-4">
      <Reveal>
        <div className="flex items-center gap-4 mb-10">
          <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30">
            <User className="w-6 h-6" />
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">About Me</h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            I&apos;m a passionate software engineer with over 6 years of experience building
            scalable web applications and leading development teams. I specialize in
            modern frontend technologies and have a strong background in full-stack development.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Currently working at RideNGo, I focus on developing innovative urban mobility
            solutions and implementing robust architectures for next-generation transportation
            systems that revolutionize how people move through cities.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-900 dark:to-slate-900 border border-orange-100 dark:border-slate-800 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">6+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Years Experience</div>
            </div>
            <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-900 dark:to-slate-900 border border-orange-100 dark:border-slate-800 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Projects Completed</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-100 to-amber-100 dark:from-slate-900 dark:to-slate-800 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/30">
                <Code className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
  );
};

export default AboutMe;
