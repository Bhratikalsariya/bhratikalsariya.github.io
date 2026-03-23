
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
  {
    company: "Sassy Infotech",
    position: "Laravel Developer",
    duration: "2023 – Present",
    location: "Surat, India",
    type: "Full-time",
    description: [
      "Developing scalable web applications using Laravel and MERN stack with focus on performance and security.",
      "Designed and implemented admin panels with Role-Based Access Control (RBAC) for secure system management.",
      "Built and optimized RESTful APIs to improve response time and system efficiency.",
      "Integrated third-party services including Stripe payment gateway and AWS S3 for secure file storage.",
      "Implemented drag-and-drop functionality using Konva.js for interactive UI features.",
      "Worked on AI-based integrations using external APIs for image generation and automation.",
      "Collaborated with clients and cross-functional teams to deliver projects within deadlines.",
      "Continuously improved application performance, security, and user experience across projects."
    ],
    technologies: [
      "Laravel",
      "React.js",
      "Node.js",
      "JavaScript",
      "MySQL",
      "Stripe",
      "AWS S3",
      "REST APIs",
      "Konva.js"
    ]
  },
  {
    company: "Elaunch Solutions",
    position: "Laravel Developer",
    duration: "2021 – 2023",
    location: "Surat, India",
    type: "Full-time",
    description: [
      "Developed full stack web applications using Laravel and MERN stack for multiple business use cases.",
      "Built secure REST APIs with JWT authentication and Role-Based Access Control (RBAC).",
      "Designed and developed admin dashboards with Excel import/export and reporting features.",
      "Implemented cron jobs for background processing and automation of scheduled tasks.",
      "Developed PDF generation functionality using DOMPDF and MPDF.",
      "Integrated map-based features using Google Maps API with dynamic latitude and longitude handling.",
      "Debugged and optimized existing systems to enhance performance and scalability.",
      "Collaborated with development team to deliver high-quality and maintainable code."
    ],
    technologies: [
      "Laravel",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "JavaScript",
      "JWT",
      "RBAC",
      "REST APIs"
    ]
  },
  {
    company: "Elaunch Solutions",
    position: "Laravel Developer & React Trainee",
    duration: "6 Months",
    location: "Surat, India",
    type: "Training",
    description: [
      "Completed hands-on training in Laravel, React.js, and full stack development.",
      "Built CRUD applications and REST APIs from scratch.",
      "Implemented authentication systems and responsive UI designs.",
      "Gained practical experience in real-world development workflows and team collaboration."
    ],
    technologies: [
      "Laravel",
      "React.js",
      "PHP",
      "JavaScript",
      "MySQL",
      "REST APIs"
    ]
  }
];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-gradient"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in web development, working with amazing teams
            to build impactful solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-950/40 border border-gray-100 dark:border-gray-800 p-8 hover:shadow-xl transition-all duration-500 border-l-4 border-l-blue-500 hover-lift opacity-0 animate-fade-in-${index % 2 === 0 ? "left" : "right"} delay-${index * 200}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Building className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {exp.position}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <Calendar size={16} className="mr-2" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <MapPin size={16} className="mr-2" />
                    {exp.location}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${exp.type === "Training"
                        ? "bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50"
                        : "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50"
                      }`}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-default opacity-0 animate-fade-in-up delay-${index * 200 + techIndex * 50}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
