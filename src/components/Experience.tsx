import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

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
    <section id="experience" className="py-10 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <Briefcase className="w-8 h-8 text-orange-600 mr-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {exp.position}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-orange-600"
                  >
                    {exp.company}
                  </a>
                </div>
                <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-orange-600 mr-4" />
            <h3 className="text-3xl font-bold text-slate-800">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">
                      {edu.degree}
                    </h4>
                    <h5 className="text-orange-600 font-medium">
                      {edu.institution}
                    </h5>
                  </div>
                  <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-600 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
