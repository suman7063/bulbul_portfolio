import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";
import Reveal from "./Reveal";

const Experience = () => {
  const experiences = [
    {
      period: "Jun 2024 - Present",
      company: "RideNGo",
      companyUrl: "https://www.ridengo.in/",
      position: "Senior Software Engineer",
      description: `Developed and launched a Bike & Car Rental Platform:Integrated secure payment
                    gateways for seamless transactions,ensuring reliable booking and rental experiences.
                    Implemented Sentry for Real-time Error Monitoring: Set up and configured Sentry to
                    proactively track and resolve issues,enhancing platform stability and user experience.
                    Built Interactive Dashboards for Admin and Partner Users: Created intuitive, data-
                    driven dashboards to manage bookings,track activity, and generate insights, improving
                    operational efficiency.
                    Optimized SEO and Performance: Enhanced website SEO strategies and implemented
                    speed optimization techniques, significantly improving site visibility and loading times.`,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "GA4",
        "Amplitude",
        "Payment gateway",
        "Tailwind CSS",
        "lucide-react",
        "Netlify",
        "VS Code",
        "GitHub",
        "Figma",
        "Cursor",
      ],
    },
    {
      period: "Nov 2020 - Jun 2024",
      company: "Conscent.ai",
      companyUrl: "https://conscent.ai/",
      position: "Software Engineer",
      description: `Supervised a team consisting of two developers and two interns.Led the development
                    of an SDK designed to assess user capacity for subscription or micro-payment, or
                    predict the likelihood of not paying for content based on consumption patterns.This
                    was executed utilizing React and NextJs. Developed a no-code Software as a Service
                    (SaaS) platform for Identity Management Systems. This platform features a JavaScript
                    SDK with customization capabilities accessible through a user-friendly dashboard.
                    Technologies utilized include Preact, React, and NestJs.Created a SaaS Subscription
                    Model system enabling seamless payment and subscription management for various
                    platforms.Designed and implemented a payment gateway routing system allowing
                    users to integrate payment gateways such as Razorpay and Paytm, enabling immediate
                    commencement of payment collection. This was achieved using React and NextJs.`,
      technologies: [
        "HTML",
        "SASS",
        "JavaScript",
        "React",
        "Next.js",
        "AntD",
        "TypeScript",
        "Payment gateway",
        "GitHub",
        "Figma",
        "VS Code",
      ],
    },
    {
      period: "Nov 2018 - Nov 2020",
      company: "Pixean (OKSBIRD Online Services Pvt. Ltd.)",
      companyUrl: "https://stillsweb.com/",
      position: "Frontend Developer",
      description:
        "Created responsive web applications and improved user experience across multiple projects.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Material UI",
        "Bootstrap",
      ],
    },
  ];

  const education = [
    {
      period: "2015 - 2018",
      degree: "MCA",
      institution: "NIT Durgapur",
      description:
        "NIT Durgapur 07/2015 – 07/2018 · Durgapur, India",
    },
    {
      period: "2011 - 2014",
      degree: "BCA",
      institution: "Lucknow University",
      description: `University of Lucknow,Lucknow, India`,
    },
  ];
  return (
    <section id="experience" className="py-10 md:py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30">
              <Briefcase className="w-6 h-6" />
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">Experience</h2>
          </div>
        </Reveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 100}>
            <div
              className="bg-white dark:bg-slate-950/60 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                    {exp.position}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-orange-600 dark:text-orange-400"
                  >
                    {exp.company}
                  </a>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30">
                <GraduationCap className="w-6 h-6" />
              </span>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Education</h3>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Reveal key={index} delay={index * 120}>
              <div
                className="bg-white dark:bg-slate-950/60 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                      {edu.degree}
                    </h4>
                    <h5 className="text-orange-600 dark:text-orange-400 font-medium">
                      {edu.institution}
                    </h5>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.description}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
