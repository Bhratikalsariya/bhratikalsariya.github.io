
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Sassy Infotech",
      position: "Full Stack Developer",
      duration: "2023 – Present",
      location: "Surat, India",
      type: "Full-time",
      description: [
        "Developing scalable web and mobile applications using Laravel and MERN stack.",
        "Designed and implemented complete admin panels with role-based access control (RBAC).",
        "Built and optimized RESTful APIs to improve performance and response time.",
        "Integrated third-party services including Stripe payment gateway and AWS S3 for file storage.",
        "Implemented drag-and-drop functionality using Konva.js for interactive UI features.",
        "Integrated AI-based image generation using Python APIs.",
        "Collaborated with clients and managed project tasks to ensure timely delivery.",
        "Improved application performance, security, and overall user experience."
      ],
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "React.js",
        "Node.js",
        "Stripe",
        "AWS S3",
        "Konva.js",
        "REST APIs"
      ]
    },
    {
      company: "Elaunch Solutions",
      position: "Full Stack Developer",
      duration: "2021 – 2023",
      location: "Surat, India",
      type: "Full-time",
      description: [
        "Developed dynamic web and mobile applications using Laravel and MERN stack.",
        "Built secure REST APIs with JWT authentication and RBAC implementation.",
        "Created admin dashboards with Excel import/export functionalities.",
        "Implemented cron jobs for automation and background processing.",
        "Developed PDF generation features using DOMPDF and MPDF.",
        "Integrated map-based features using latitude and longitude (Google Maps API).",
        "Debugged issues and enhanced system performance and existing features.",
        "Collaborated with team members to deliver high-quality solutions on time."
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
        "DOMPDF",
        "MPDF"
      ]
    },
    {
      company: "Elaunch Solutions",
      position: "Full Stack Developer Trainee",
      duration: "6 Months",
      location: "Surat, India",
      type: "Training",
      description: [
        "Completed intensive training in Laravel, React.js, and full-stack development.",
        "Built CRUD applications and REST APIs from scratch.",
        "Implemented authentication systems and responsive UI designs.",
        "Gained practical experience in real-world project development workflows."
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-gradient"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in web development, working with amazing teams to build impactful solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border-l-4 border-blue-500 hover-lift opacity-0 animate-fade-in-${index % 2 === 0 ? 'left' : 'right'} delay-${index * 200}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Building className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{exp.position}</h3>
                    <p className="text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-200">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                  <div className="flex items-center hover:text-blue-600 transition-colors duration-200">
                    <Calendar size={16} className="mr-2" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center hover:text-blue-600 transition-colors duration-200">
                    <MapPin size={16} className="mr-2" />
                    {exp.location}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${exp.type === 'Training'
                      ? 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                      : 'bg-green-100 text-green-800 hover:bg-green-200'
                    }`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
                  {exp.description.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <p className="text-gray-600 mb-6 leading-relaxed hover:text-gray-800 transition-colors duration-200">
                {exp.description}
              </p> */}

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 cursor-default opacity-0 animate-fade-in-up delay-${index * 200 + techIndex * 50}`}
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
