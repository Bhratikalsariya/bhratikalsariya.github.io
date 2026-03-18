
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "jQuery",
        "Laravel",
        "Node.js",
        "Express.js"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "API & Authentication",
      skills: [
        "RESTful APIs",
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
        "API Integration",
        "Secure Authentication Systems"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Database",
      skills: [
        "MySQL",
        "MongoDB",
        "Database Design",
        "Query Optimization"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Features & Integrations",
      skills: [
        "Stripe Payment Gateway",
        "Push Notifications",
        "Cron Jobs & Automation",
        "Google Maps API Integration",
        "Drag & Drop Interfaces (Konva.js)",
        "Admin Panel & Dashboard Development",
        "PDF Generation (MPDF, DOMPDF)",
        "Localization / Multi-language Support",
        "Image & File Upload Handling (AWS S3)"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Development Tools",
      skills: [
        "Git",
        "GitHub",
        "Bitbucket",
        "AWS S3",
        "Version Control",
        "Agile Development"
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Utilities & Editors",
      skills: [
        "VS Code",
        "Postman",
        "Chrome DevTools",
        "npm / yarn"
      ],
      color: "from-yellow-500 to-yellow-600"
    }
  ];


  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-gradient"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and creating engaging user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover-lift opacity-0 animate-fade-in-up delay-${index * 200}`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12`}>
                <span className="text-white font-bold text-lg">{category.title.charAt(0)}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {category.title}
              </h3>

              <div className="space-y-2 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in-right delay-${index * 200 + skillIndex * 50}`}
                  >
                    <span className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-200">{skill}</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 animate-scale-in delay-800">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
            <span className="mr-2 animate-bounce">💼</span>
            4.5+ Years of Professional Experience
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
