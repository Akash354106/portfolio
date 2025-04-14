import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-white" /> },
];

const Skill = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center space-y-2 transform transition-transform duration-300 hover:scale-110"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
