import ProjectCard from "./ui/ProjectCard";
import SectionHeader from "./ui/SectionHeader";

const projects = [
  {
    title: "Tech Valut",
    description: "Tech-vault is a modern tech platform where users can discover, share, and interact with tech products such as Web Apps, AI tools, Software, Games, and Mobile Apps. It is inspired by platforms like Product Hunt and allows users to submit products, upvote or downvote them, post reviews, and access premium features through subscription payments. This project is designed for Junior MERN Stack Developers to showcase full-stack skills using MongoDB, Express.js, React.js, Node.js, Firebase, and other modern tools.",
    image: "https://i.ibb.co.com/chZj9dHP/p2.png",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://tech-vault-web.netlify.app/",
    githubUrl: "https://github.com/coder-khayrul/tech-vault",
  },
  {
    title: "Recipe Log",
    description: "A full-featured recipe management web application where users can explore, add, and manage delicious recipes. Built with authentication, protected routes, dynamic filtering, and interactive UI components.",
    image: "https://i.ibb.co.com/3m30Dqg4/p3.png",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://recipe-log.netlify.app/",
    githubUrl: "https://github.com/coder-khayrul/recipelog-client",
  },
  {
    title: "Kind Forces",
    description: "KindForces a full-featured web application for managing volunteer needs and activities. Built with React, Express, MongoDB, and Firebase authentication, this platform allows organizations to post volunteer opportunities and users to participate as volunteers.",
    image: "https://i.ibb.co.com/ccQy9R2L/p1.png",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://kindforces.netlify.app/",
    githubUrl: "https://github.com/coder-khayrul/kindforces-client",
  },
  {
    title: "CharityZone HTML",
    description: "Data visualization for actionable business insights",
    image: "https://i.ibb.co.com/YBgGHwpH/p4.png",
    techStack: ["Javascript", "Jquery", "Bootstrap", "CSS"],
    liveUrl: "https://coder-khayrul.github.io/Charity-Zone/",
    githubUrl: "https://github.com/coder-khayrul/Charity-Zone",
  },
  {
    title: "ElPrint | Print on Demand",
    description: "A responsive print-on-demand front-end template built with HTML, CSS, Bootstrap, JavaScript, and jQuery. It showcases customizable products like T-shirts, mugs, and accessories, provides interactive product previews, and delivers a smooth shopping-style user experience. This project is a frontend-only demo focused on UI/UX and client-side interactions.",
    image: "https://i.ibb.co.com/Gjr7jw6/elprint-bg.png",
    techStack: ["Javascript", "Jquery", "Bootstrap", "CSS"],
    liveUrl: "https://coder-khayrul.github.io/elprint",
    githubUrl: "https://github.com/coder-khayrul/ElPrint",
  },
  {
    title: "ElMeals | Restaurant Website",
    description: "A beautifully designed and fully responsive restaurant website built using HTML, CSS, Bootstrap, JavaScript, and jQuery. The website showcases restaurant services, menu items, chefs, customer testimonials, and contact information — offering a delightful browsing experience for visitors.",
    image: "https://i.ibb.co.com/0yfCzNyg/elmeals.png",
    techStack: ["Javascript", "Jquery", "Bootstrap", "CSS"],
    liveUrl: "https://coder-khayrul.github.io/elmeal",
    githubUrl: "https://github.com/coder-khayrul/ElMeals",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #FB2C36 20%, #292929)",
            }}
          >
            Recent Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my latest works showcasing full-stack development,
            system architecture, and problem-solving skills.
          </p>
        </div> */}
        <SectionHeader title="Recent Projects" description="Here are some of my latest works showcasing full-stack development,
            system architecture, and problem-solving skills."/>

        {/* Projects Grid - Asymmetrical Layout */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`animate-fade-in-up ${index % 2 === 0 ? "md:mt-0" : "md:mt-12"
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
