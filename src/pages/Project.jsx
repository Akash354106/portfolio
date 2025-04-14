import React from "react";

const projects = [
    {
        title: "Personal Portfolio",
        description: "A personal portfolio website built using React and Tailwind CSS to showcase my skills and projects.",
        techStack: "React, Tailwind CSS, JavaScript",
        image: "project1.jpg",
        link: "#",
    },
    {
        title: "E-commerce Store",
        description: "A full-stack e-commerce app with user auth, cart system, and Stripe payments.",
        techStack: "React, Node.js, MongoDB, Stripe",
        image: "project2.jpg",
        link: "#",
    },
    {
        title: "Social Media App",
        description: "A real-time social media platform with posts, likes, and Firebase integration.",
        techStack: "React, Firebase, CSS",
        image: "project3.jpg",
        link: "#",
    },
    {
        title: "Task Manager",
        description: "A simple task manager where users can create and manage daily tasks.",
        techStack: "React, Node.js, MongoDB",
        image: "project4.jpg",
        link: "#",
    },
    {
        title: "E-commerce Store",
        description: "A full-stack e-commerce app with user auth, cart system, and Stripe payments.",
        techStack: "React, Node.js, MongoDB, Stripe",
        image: "project2.jpg",
        link: "#",
    },
    {
        title: "Social Media App",
        description: "A real-time social media platform with posts, likes, and Firebase integration.",
        techStack: "React, Firebase, CSS",
        image: "project3.jpg",
        link: "#",
    },
];

const Project = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    My Projects
                </h2>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
                        >
                            <div className="relative overflow-hidden rounded-t-2xl h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full p-3 object-cover transform transition-transform duration-300 group-hover:scale-110"
                                />

                                {/* Optional hover overlay effect */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                        Tech Stack: {project.techStack}
                                    </p>
                                    <a
                                        href={project.link}
                                        className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors duration-300"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
