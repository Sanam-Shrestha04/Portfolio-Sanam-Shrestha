import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ResumeIQ-AI-Powered Resume Analyzer",
    description:
      "ResumeIQ is an AI-powered tool that analyzes resumes and offers instant feedback to boost hiring chances.",
    image: "/projects/resumeIQ.png",
    url: "https://ai-powered-applicant-tracking-syste-nine.vercel.app/",
    tags: ["Html", "Css", "Javascript", "Tailwind", "React.js", "Puter.js"],
  },
  {
    id: 2,
    title: "TaskForge-Task Management System",
    description:
      "TaskForge is a group project where I handled the frontend using React and Tailwind. The backend was built by a teammate.",
    image: "/projects/taskForge.png",
    url: "https://github.com/Sanam-Shrestha04/TaskForge--Task-Management-System",
    tags: ["Html", "Css", "Javascript", "Tailwind", "React.js"],
  },
  {
    id: 3,
    title: "Swolenormous-Gym App",
    description:
      "An interactive workout generator built to help users select training plans, target specific muscle groups, and annihilate their fitness goals with style. ",
    image: "/projects/swolenormous.png",
    url: "https://swolenormous-ten.vercel.app/",
    tags: ["Html", "Css", "Javascript", "Tailwind", "React.js"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "My personal portfolio website to showcase my projects, skills, and experience as a frontend developer.",
    image: "/projects/portfolio.png",
    url: "https://react-js-nasa-app-c1jv.vercel.app/",
    tags: ["Tailwind", "React.js"],
  },
  {
    id: 5,
    title: "Todo App",
    description:
      "A simple and efficient Todo application to manage their tasks CRUD with ease and style.",
    image: "/projects/todo.png",
    url: "https://react-js-nasa-app-c1jv.vercel.app/",
    tags: ["Html", "Css", "Javascript", "React.js"],
  },
  {
    id: 6,
    title: "Rock Paper Scissor Game",
    description:
      "A classic Rock-Paper-Scissors game allowing users to play against the computer with an intuitive interface.",
    image: "/projects/rps.png",
    url: "https://rock-paper-scissor-beryl-chi.vercel.app/",
    tags: ["Html", "Css", "Javascript"],
  },
];
export const Project = () => {
  return (
    <section id="projects" className="py-24 px-2 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          There are some projects, each created with attention to detail and
          performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between h-full"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      target="_blank"
                      href={project.url}
                      className="text-primary px-2 transition-colors duration-300"
                    >
                      <ExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
