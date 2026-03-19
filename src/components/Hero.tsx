
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300 mt-6"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30 animate-floating"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-900 rounded-full opacity-30 animate-floating delay-200"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200 dark:bg-pink-900 rounded-full opacity-30 animate-floating delay-400"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-30 animate-floating delay-600"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="opacity-0 animate-fade-in-up">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 animate-pulse-glow hover-lift">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700">
                <img
                  src={`${import.meta.env.BASE_URL}DSC03746.png`}
                  alt="Profile"
                  className="w-full h-full object-cover object-[center_20%] rounded-full"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 opacity-0 animate-fade-in-up delay-200">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Bhrati Kalsariya
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-300">
            Full Stack Developer | Laravel & MERN
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-400">
            Crafting elegant code and beautiful experiences with 4.5+ years of expertise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 opacity-0 animate-fade-in-up delay-500">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover-glow flex items-center gap-2 group"
            >
              Explore My Work
              <ArrowDown size={20} className="group-hover:animate-bounce" />
            </button>

            <a
              href={`${import.meta.env.BASE_URL}Bhrati-Kalsariya-Laravel-React-Developer.pdf`}
              download
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover-lift flex items-center gap-2 group"
            >
              Download Resume
              <Download size={20} className="group-hover:animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
