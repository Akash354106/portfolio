import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 px-4 py-16 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="aboutme.jpg"
            alt="Profile"
            className="rounded-2xl shadow-lg w-72 h-72 md:w-96 md:h-96 object-cover"
          />
        </div>

        {/* About Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Hi! I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Akash</span>, a passionate web developer with a strong focus on creating
            modern, responsive, and user-friendly web applications. I love turning ideas
            into reality through code. With hands-on experience in JavaScript, React, Node.js,
            and MongoDB, I build powerful full-stack applications.
          </p>

          {/* Skill Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Frontend
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                React, Tailwind CSS, HTML5, CSS3, JavaScript
              </p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Backend
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                Node.js, Express.js, MongoDB, REST APIs
              </p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Tools
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                Git, GitHub, VS Code, Postman, Netlify, Vercel
              </p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Soft Skills
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                Problem Solving, Communication, Teamwork, Time Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
