
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "CSS Properties",
      category: "Frontend Development",
      platform: "Online Course",
      year: "2021",
      description: "Advanced understanding of CSS properties, layouts, and styling techniques",
      link: null
    },
    {
      title: "Front End Development – CSS",
      category: "Frontend Development",
      platform: "Online Course",
      year: "2021",
      description: "Comprehensive CSS development skills including responsive design and best practices",
      link: null
    },
    {
      title: "Front End Development – HTML",
      category: "Frontend Development",
      platform: "Online Course",
      year: "2021",
      description: "Strong foundation in semantic HTML, accessibility, and modern web standards",
      link: null
    },
    {
      title: "Full Stack Web Development in PHP",
      category: "Full Stack Development",
      platform: "Webinar / Training",
      year: "2022",
      description: "Understanding of PHP development lifecycle, backend logic, and frameworks",
      link: null
    },

    // 🔥 ADD THESE (important for your profile)
    {
      title: "JavaScript Fundamentals",
      category: "Frontend Development",
      platform: "Online Course",
      year: "2022",
      description: "Core JavaScript concepts including ES6, DOM manipulation, and event handling",
      link: null
    },
    {
      title: "React.js Development",
      category: "Frontend Development",
      platform: "Online Course",
      year: "2023",
      description: "Building dynamic UI components, state management, and SPA development using React",
      link: null
    },
    {
      title: "Laravel Web Development",
      category: "Backend Development",
      platform: "Online Course",
      year: "2023",
      description: "Developing scalable backend systems, REST APIs, and authentication using Laravel",
      link: null
    },
    {
      title: "REST API Development",
      category: "Backend Development",
      platform: "Online Course",
      year: "2023",
      description: "Designing and building secure and scalable RESTful APIs",
      link: null
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-yellow-500"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {cert.title}
                    </h3>
                    <CheckCircle className="text-green-500 flex-shrink-0 ml-2" size={20} />
                  </div>

                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      {cert.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
            <Award className="text-yellow-600 mr-4" size={28} />
            <div className="text-left">
              <p className="font-bold text-gray-900 text-lg">Certified Professional</p>
              <p className="text-gray-600">Committed to continuous learning and staying updated with industry trends</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
