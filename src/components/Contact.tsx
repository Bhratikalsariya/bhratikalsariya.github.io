import { Mail, Phone, Linkedin, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showTop, setShowTop] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bhratikalsariya@gmail.com",
      href: "mailto:bhratikalsariya@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8347837580",
      href: "tel:+918347837580",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/bhrati-kalsariya-47789a21a",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Katargam, Surat - 395004",
      href: "https://www.google.com/maps/search/?api=1&query=Katargam,+Surat,+395004",
      color: "from-purple-500 to-purple-600"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let’s build something amazing together. I’d love to hear about your
            project and discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageCircle className="mr-3 text-blue-600" size={28} />
                Let&apos;s Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-4xl">
                I&apos;m always interested in new opportunities, exciting
                projects, and meaningful connections. Whether you have a project
                in mind or simply want to connect and talk about technology,
                feel free to reach out.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={
                    item.label === "LinkedIn" || item.label === "Location"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.label === "LinkedIn" || item.label === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {item.label}
                  </h4>
                  <p className="text-gray-600 text-sm break-words group-hover:text-gray-800 transition-colors duration-200">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center border-t border-gray-200 pt-12">
          <p className="text-gray-600 mb-4">
            © {new Date().getFullYear()} Bhrati Kalsariya. All rights reserved.
          </p>
        </div>

        {showTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </section>
  );
};

export default Contact;