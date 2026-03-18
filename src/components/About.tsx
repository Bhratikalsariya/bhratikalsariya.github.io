
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-gradient"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 opacity-0 animate-fade-in-left delay-200">

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 leading-snug">
              Crafting elegant code & seamless user experiences
            </h3>

            <p className="text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-800">
              I am a Full Stack Developer with <span className="font-semibold text-gray-800">4.5+ years of experience</span> building scalable web and mobile applications using Laravel, Node.js, React, and MongoDB.
            </p>

            <p className="text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-800">
              I specialize in developing admin dashboards, REST APIs, role-based authentication systems, payment integrations (Stripe), and cloud-based solutions using AWS S3.
            </p>

            <p className="text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-800">
              I have worked across multiple domains including social platforms, service marketplaces, motorcycle rental systems, graphic design tools, and healthcare applications.
            </p>

            <p className="text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-800">
              I focus on writing clean, efficient, and secure code while delivering user-friendly digital experiences that create real impact.
            </p>

            {/* Languages */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Languages I Speak
              </h4>

              <div className="flex flex-wrap gap-3">
                {["Gujarati", "Hindi", "Basic English"].map((language, index) => (
                  <span
                    key={language}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 cursor-default"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:pl-8 opacity-0 animate-fade-in-right delay-400">

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">

              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Quick Facts
              </h4>

              <div className="space-y-4">
                {[
                  { label: "Experience", value: "4.5+ Years" },
                  { label: "Location", value: "Surat, India" },
                  { label: "Specialty", value: "Laravel & MERN Stack" }
                ].map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between group">
                    <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
                      {fact.label}
                    </span>
                    <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg transition-all duration-300 hover:from-blue-100 hover:to-purple-100">
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  “Balancing aesthetics with performance, while always keeping the end-user at the center.”
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
