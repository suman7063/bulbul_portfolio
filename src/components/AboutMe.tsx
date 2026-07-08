import { Code, User } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="pt-6 pb-10 md:pt-10 md:pb-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center mb-8">
        <User className="w-8 h-8 text-orange-600 mr-4" />
        <h2 className="text-2xl md:text-4xl font-bold text-slate-800">About Me</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            I&apos;m a passionate software engineer with over 6 years of experience building 
            scalable web applications and leading development teams. I specialize in 
            modern frontend technologies and have a strong background in full-stack development.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Currently working at RideNGo, I focus on developing innovative urban mobility 
            solutions and implementing robust architectures for next-generation transportation 
            systems that revolutionize how people move through cities.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">6+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">20+</div>
              <div className="text-sm text-slate-600">Projects Completed</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
              <Code className="w-24 h-24 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutMe;
