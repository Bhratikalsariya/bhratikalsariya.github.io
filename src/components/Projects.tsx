
import { ExternalLink, Github, Code, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Small Circle",
      role: "Backend Developer",
      description:
        "A social and chat-based web application with post scheduling functionality. Managed admin panel operations and implemented timed post publishing using Laravel cron jobs.",
      technologies: ["HTML", "CSS", "Bootstrap", "Laravel", "Cron Job"],
      link: null,
      features: [
        "Post scheduling via cron job",
        "Admin panel for content and user management",
        "Responsive frontend design",
        "Custom Laravel backend for post automation"
      ]
    },
    {
      name: "Massttr",
      role: "API Developer",
      description:
        "A dual-platform Android and iOS application connecting Service Seekers and Service Providers. Built core APIs and implemented map-based fixer registration with location selection and localization features.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "AJAX", "Laravel", "Push Notifications", "Localization"],
      link: null,
      features: [
        "Fixer registration via web",
        "Push notification integration",
        "Map-based location picker with lat/lng capture",
        "API development for mobile communication",
        "Localized multi-language support"
      ]
    },
    {
      name: "Motogino",
      role: "Full Stack Developer",
      description:
        "Website and admin dashboard for a premium motorcycle rental service with real-time chat. Implemented listing, filtering, and CRUD functionality across the platform.",
      technologies: ["HTML", "CSS", "Bootstrap", "React.js", "Chat System"],
      link: null,
      features: [
        "Admin panel with CRUD operations",
        "User-facing listing and filtering functionality",
        "Integrated chat system",
        "Responsive design with React frontend"
      ]
    },
    {
      name: "Paxform",
      role: "Frontend & Backend Developer",
      description:
        "Comprehensive platform for managing digital forms and personal data. Developed both admin and organization panels, with features like document signing, PDF generation, form builder, and Stripe payment integration.",
      technologies: [
        "HTML", "CSS", "Bootstrap", "React.js", "Stripe", "Push Notifications", "Cron Job",
        "Drag & Drop", "Mpdf", "Dompdf", "RESTful API"
      ],
      link: null,
      features: [
        "Organization and Admin Panel Development",
        "Drag and drop form builder",
        "Push notification and Stripe integration",
        "PDF download (Mpdf & Dompdf)",
        "Auto-fill, sign, and share forms digitally"
      ]
    },
    {
      name: "Cyber B.A.A.P.",
      role: "Backend Developer",
      description:
        "Contributed to an anti-cyberbullying platform offering reporting, awareness, and counseling support through mobile and web tools. Developed secure backend systems for user reporting, expert coordination, and scalable institutional integration.",
      technologies: ["Laravel", "MySQL", "REST APIs", "Firebase", "Cron Jobs"],
      link: "https://www.cyberbaap.org",
      features: [
        "Report & case management system for cyberbullying incidents",
        "White-label app support for schools and corporates",
        "Integration with expert support, counselors, and awareness teams",
        "Push notification system via Firebase",
        "Dynamic admin dashboards and report tracking tools"
      ]
    },
    {
      name: "Pencila",
      role: "Backend Developer",
      description:
        "Developed and maintained the robust backend powering a modern, AI-driven design platform—handling user accounts, API orchestration, AI credit tracking, template management, and integration with AI services.",
      technologies: ["Laravel (PHP)", "MySQL/SQL", "RESTful API", "Stripe (for payments)"],
      link: "https://pencila.com",
      features: [
        "AI-powered tools: Image Generator, Graphic Generator, Vectorizer, Extender, Background Remover",
        "Payment processing via Stripe for subscription plans",
        "User account and AI credit management",
        "Template and media storage",
        "Responsive, dynamic frontend—but backed by secure, scalable backend logic"
      ]
    },
  ];


  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-gradient"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my expertise in building scalable web applications with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift opacity-0 animate-scale-in delay-200"
            >
              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-6 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-pulse-glow">
                      <Code className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {project.name}
                      </h3>
                      <p className="text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-200">
                        {project.role}
                      </p>
                    </div>
                  </div>
                  {project.link && (
                    <div className="flex space-x-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center transform hover:scale-110 hover-glow"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed hover:text-gray-800 transition-colors duration-200">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="opacity-0 animate-fade-in-left delay-400">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center hover:text-blue-600 transition-colors duration-200">
                      <Zap className="mr-2 text-blue-500 animate-pulse" size={20} />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className={`flex items-start opacity-0 animate-fade-in-up delay-${500 + index * 100} group`}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:animate-ping"></div>
                          <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="opacity-0 animate-fade-in-right delay-600">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-200">
                      Technologies Used
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.technologies.map((tech, index) => (
                        <div
                          key={tech}
                          className={`p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-center hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 hover-lift opacity-0 animate-scale-in delay-${700 + index * 100}`}
                        >
                          <span className="text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-200">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {project.link && (
                  <div className="border-t border-gray-200 pt-6 opacity-0 animate-fade-in-up delay-800">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-pulse-glow group"
                    >
                      Visit Project
                      <ExternalLink size={20} className="ml-2 group-hover:animate-bounce" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift opacity-0 animate-scale-in delay-200">
            <div className="p-8 lg:p-12">
              <div className="flex items-center justify-between mb-6 group">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-pulse-glow">
                    <Code className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{project.name}</h3>
                    <p className="text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-200">{project.role}</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center transform hover:scale-110 hover-glow"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed hover:text-gray-800 transition-colors duration-200">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="opacity-0 animate-fade-in-left delay-400">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center hover:text-blue-600 transition-colors duration-200">
                    <Zap className="mr-2 text-blue-500 animate-pulse" size={20} />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className={`flex items-start opacity-0 animate-fade-in-up delay-${500 + index * 100} group`}>
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:animate-ping"></div>
                        <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="opacity-0 animate-fade-in-right delay-600">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-200">
                    Technologies Used
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={tech}
                        className={`p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-center hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 hover-lift opacity-0 animate-scale-in delay-${700 + index * 100}`}
                      >
                        <span className="text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-200">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 opacity-0 animate-fade-in-up delay-800">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-pulse-glow group"
                >
                  Visit Project
                  <ExternalLink size={20} className="ml-2 group-hover:animate-bounce" />
                </a>
              </div>
            </div>
          </div> */}

          {/* <div className="mt-12 text-center opacity-0 animate-fade-in-up delay-1000">
            <p className="text-gray-600 mb-6">Interested in seeing more of my work?</p>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover-lift">
              View All Projects
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
