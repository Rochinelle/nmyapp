import React from 'react';
import { Github, Linkedin, Mail, Instagram, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Makoukam Yvana</h1>
            <p className="text-xl">Data Scientist | Masters Student at Aalto University</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 leading-relaxed">
              I am a passionate data scientist currently pursuing my Master's degree at Aalto University, Finland. 
              With a strong foundation in Computer Science from Kalinga Institute of Industrial Technology, India, 
              I am dedicated to leveraging data-driven approaches to solve real-world problems.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              My research interests include machine learning, artificial intelligence, and their applications 
              in healthcare and personalized AI solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">Master's in Data Science</p>
                <p className="text-gray-600">Aalto University, Finland</p>
                <p className="text-gray-500">Present</p>
              </li>
              <li>
                <p className="font-medium">Bachelor's in Computer Science</p>
                <p className="text-gray-600">Kalinga Institute of Industrial Technology, India</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">AI Tool Workshop</h3>
              <p className="text-gray-700">Participated in NextWave's workshop on building personalized AI tools, gaining hands-on experience with cutting-edge AI technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Research Paper</h3>
              <p className="text-gray-700">Authored a research paper on breast cancer detection using machine learning techniques.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Python Programming Internship</h3>
              <p className="text-gray-700">Completed a comprehensive Python programming internship at InternPe, developing practical software solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="tel:+your-number" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Phone size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2026 Makoukam Yvana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;