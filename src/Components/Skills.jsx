import { motion } from "framer-motion";
export const Skills = () => {
  const skills = [

  {
    category: "Frontend",
    items: [
      { id: 1, name: "HTML", icon: "./images/html5.svg", gradient: "from-orange-500 to-yellow-500" },
      { id: 2, name: "CSS", icon: "./images/css-3.svg", gradient: "from-blue-500 to-cyan-500" },
      { id: 3, name: "JavaScript", icon: "./images/javascript.svg", gradient: "from-yellow-400 to-amber-500" },
      { id: 4, name: "React", icon: "./images/react.svg", gradient: "from-sky-500 to-indigo-500" },
      { id: 5, name: "Tailwind CSS", icon: "./images/tailwindcss.svg", gradient: "from-teal-400 to-cyan-500" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { id: 6, name: "Git & GitHub", icon: "./images/github.svg", gradient: "from-gray-700 to-gray-900" },
      { id: 7, name: "Vercel", icon: "./images/vercel.svg", gradient: "from-zinc-700 to-black" },
    ],
  },
];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-secondary">
          {skills.map((group) => (
            <div key={group.category} className="space-y-6 ">
              <h3 className="text-2xl font-semibold text-center md:text-left">{group.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {group.items.map((skill) => (
                  <div
                    key={skill.id}
                    className={`h-40 rounded-xl text-white flex flex-col items-center justify-center px-4 py-6 bg-gradient-to-r ${skill.gradient} transition-transform duration-300 hover:scale-105`}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-3 object-contain" />
                    <p className="text-sm font-medium text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;