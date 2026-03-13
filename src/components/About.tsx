
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-gradient"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in-left delay-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Crafting elegant code and beautiful experiences
            </h3>
            
            <p className="text-gray-600 leading-relaxed transform transition-all duration-300 hover:text-gray-800">
              I'm a passionate and detail-oriented software engineer with a background in web development 
              and user experience design. I love transforming ideas into functional, beautiful digital 
              products that make an impact.
            </p>
            
            <p className="text-gray-600 leading-relaxed transform transition-all duration-300 hover:text-gray-800">
              With a blend of creativity and analytical thinking, I strive to build solutions that are 
              not just technically sound but also user-friendly. What makes me unique is my ability to 
              balance aesthetics with performance, always keeping the end-user in mind.
            </p>
            
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Languages I Speak</h4>
              <div className="flex flex-wrap gap-3">
                {["Gujarati", "Hindi", "Basic English"].map((language, index) => (
                  <span
                    key={language}
                    className={`px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 cursor-default opacity-0 animate-fade-in-up delay-${300 + index * 100}`}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8 opacity-0 animate-fade-in-right delay-400">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h4>
              
              <div className="space-y-4">
                {[
                  { label: "Experience", value: "4.5+ Years" },
                  { label: "Location", value: "Surat" },
                  { label: "Specialty", value: "Laravel & MERN" }
                ].map((fact, index) => (
                  <div key={fact.label} className={`flex items-center justify-between opacity-0 animate-fade-in-left delay-${500 + index * 100} group`}>
                    <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">{fact.label}</span>
                    <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{fact.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 animate-scale-in delay-800 hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                <p className="text-sm text-gray-700 italic">
                  "Balancing aesthetics with performance, always keeping the end-user in mind."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
