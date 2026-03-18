
import { ExternalLink, Github, Code, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Small Circle",
      role: "Backend Developer",
      description:
        "Developed and managed the admin panel for a social and chat-based platform. Implemented a post scheduling module using Laravel cron jobs to automate timed post publishing and improve content management efficiency.",
      technologies: ["Laravel", "HTML", "CSS", "Bootstrap", "Cron Jobs"],
      link: null,
      features: [
        "Post scheduling automation using cron jobs",
        "Admin panel for content and user management",
        "Improved post publishing workflow",
        "Custom backend logic for scheduled operations"
      ]
    },
    {
      name: "Massttr",
      role: "API Developer",
      description:
        "Contributed to the development of Android and iOS application APIs connecting service seekers with service providers. Built registration APIs, localization features, and map-based location selection for mobile integration.",
      technologies: [
        "Laravel",
        "REST APIs",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "AJAX",
        "Push Notifications",
        "Localization"
      ],
      link: null,
      features: [
        "Service provider registration APIs",
        "Map-based location picker with latitude/longitude capture",
        "Push notification integration",
        "Localization and multi-language support",
        "API support for mobile app communication"
      ]
    },
    {
      name: "Motogino",
      role: "Full Stack Developer",
      description:
        "Developed website and admin panel features for a motorcycle rental platform. Implemented CRUD operations, listing and filtering functionality, and supported backend and frontend development for platform management.",
      technologies: [
        "Laravel",
        "React.js",
        "HTML",
        "CSS",
        "Bootstrap",
        "Chat System"
      ],
      link: null,
      features: [
        "Admin panel with CRUD functionality",
        "Vehicle listing and filtering features",
        "Integrated chat system",
        "Responsive frontend development",
        "Backend support for rental platform operations"
      ]
    },
    {
      name: "Paxform",
      role: "Frontend & Backend Developer",
      description:
        "Worked on a dynamic form management platform for storing personal data, forms, and signed documents. Developed admin and organization panels, form builder functionality, PDF generation, and Stripe payment integration.",
      technologies: [
        "React.js",
        "Laravel",
        "HTML",
        "CSS",
        "Bootstrap",
        "Stripe",
        "Push Notifications",
        "Cron Jobs",
        "Drag & Drop",
        "MPDF",
        "DOMPDF",
        "REST APIs"
      ],
      link: null,
      features: [
        "Admin and organization panel development",
        "Drag-and-drop form builder",
        "PDF generation using MPDF and DOMPDF",
        "Stripe payment integration",
        "Digital form filling, signing, and sharing"
      ]
    },
    {
      name: "Cyber B.A.A.P.",
      role: "Backend Developer",
      description:
        "Contributed to the backend development of an anti-cyberbullying platform focused on reporting, awareness, and counseling support. Built secure backend functionality for reporting workflows, dashboard operations, and scalable integrations.",
      technologies: [
        "Laravel",
        "MySQL",
        "REST APIs",
        "Firebase",
        "Cron Jobs"
      ],
      link: "https://www.cyberbaap.org",
      features: [
        "Cyberbullying incident reporting system",
        "Admin dashboard and case tracking tools",
        "Firebase-based notification support",
        "Support for school and corporate integrations",
        "Backend workflows for expert and counseling coordination"
      ]
    },
    {
      name: "Pencila",
      role: "Backend Developer",
      description:
        "Worked on the backend of an online graphic design platform used to create templates, posts, ads, and stories. Managed APIs, AI credit tracking, subscription features, template handling, and backend integrations with AI services.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "REST APIs",
        "Stripe",
        "Konva.js",
        "MPDF",
        "DOMPDF",
        "AWS S3"
      ],
      link: "https://pencila.com",
      features: [
        "AI-powered design platform backend development",
        "Subscription and Stripe payment integration",
        "User account and AI credit management",
        "Template and media management",
        "Integration with AI-based design services"
      ]
    },
    {
      name: "Hospital Management System",
      role: "Full Stack Developer",
      description:
        "Developed a hospital management platform using the MERN stack. Implemented patient record management, appointment scheduling, admin dashboard functionality, and REST APIs for healthcare operations.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "REST APIs"
      ],
      link: null,
      features: [
        "Patient record management",
        "Appointment scheduling system",
        "Admin dashboard features",
        "REST API development",
        "Healthcare data management workflows"
      ]
    }
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
