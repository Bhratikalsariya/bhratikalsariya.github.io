
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic for Girls, Surat",
      duration: "2018 – 2021",
      grade: "CGPA: 7.37",
      type: "Diploma",
      description:
        "Completed a comprehensive program covering computer engineering fundamentals, programming, database management, and software development practices."
    },
    {
      degree: "10th Standard (GSEB)",
      institution: "Gujarat Secondary and Higher Secondary Education Board",
      duration: "March 2018",
      grade: "85%",
      type: "Secondary Education",
      description:
        "Built a strong academic foundation in mathematics, science, and core subjects with excellent performance."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey that laid the foundation for my career in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <p className="text-green-600 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    {edu.duration}
                  </div>
                  <div className="flex items-center">
                    <Award size={16} className="mr-2 text-green-500" />
                    <span className="font-semibold text-green-700">{edu.grade}</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {edu.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
            <GraduationCap className="text-green-600 mr-3" size={24} />
            <div className="text-left">
              <p className="font-semibold text-gray-900">Academic Excellence</p>
              <p className="text-sm text-gray-600">Strong foundation in computer engineering and technology</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
