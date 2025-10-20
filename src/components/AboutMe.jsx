import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiPython, SiGit, SiDocker, SiFigma, SiTailwindcss, SiWordpress, SiExpress, SiMongodb, SiPostgresql, SiGithub, SiBootstrap, SiMongoose, SiVite, SiC, SiCplusplus } from "react-icons/si";
import { MdSpeed, MdAccessibility } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import professionalHeadshot from "..//assets/image/profile.jpg";
import Button from "./ui/Button";

const FloatingIcons = () => {
  const icons = [
    { Icon: SiJavascript, color: "#F7DF1E", top: "10%", left: "5%", delay: 0 },
    { Icon: SiReact, color: "#61DAFB", top: "20%", right: "10%", delay: 2 },
    { Icon: SiWordpress, color: "#21759B", top: "40%", left: "8%", delay: 4 },
    { Icon: SiNodedotjs, color: "#339933", top: "60%", right: "15%", delay: 1 },
    { Icon: SiExpress, color: "#ffffff", top: "75%", left: "12%", delay: 3 },
    { Icon: SiMongodb, color: "#47A248", top: "85%", right: "8%", delay: 5 },
    { Icon: SiTypescript, color: "#3178C6", top: "30%", right: "5%", delay: 6 },
    { Icon: SiPostgresql, color: "#4169E1", top: "50%", left: "3%", delay: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {icons.map((item, index) => {
        const position = {
          top: item.top,
          animationDelay: `${item.delay}s`,
        };
        if ('left' in item) position.left = item.left;
        if ('right' in item) position.right = item.right;

        return (
          <item.Icon
            key={index}
            className="absolute floating-icon"
            style={{
              ...position,
              fontSize: '4rem',
              color: item.color,
            }}
          />
        );
      })}
    </div>
  );
};

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const techStack = {
    frontend: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiBootstrap, name: "Bootsatrap", color: "#3178C6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    ],
    backend: [
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiExpress, name: "Express.js", color: "#3776AB" },
      { icon: SiMongodb, name: "MongoDB", color: "#339933" },
    ],
    tools: [
      { icon: SiGit, name: "Git", color: "#F05032" },
      { icon: SiGithub, name: "Github", color: "#fff" },
      { icon: SiFigma, name: "Figma", color: "#F24E1E" },
      { icon: SiVite, name: "Vite", color: "#A14FF7" },
    ],
    programming: [
      { icon: SiC, name: "C", color: "#5968BA" },
      { icon: SiCplusplus, name: "C++", color: "#5968BA" }
    ]
  };

  const workflows = [
    {
      icon: MdSpeed,
      title: "Performance Optimization",
      description: "Minimizing load times and improving SEO scores.",
    },
    {
      icon: MdAccessibility,
      title: "Accessibility (A11Y)",
      description: "Building semantic, WCAG-compliant interfaces.",
    },
    {
      icon: BiTestTube,
      title: "Testing & Quality",
      description: "Experience with Jest, React Testing Library, and TDD principles.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-second py-20 px-6 md:px-12 lg:px-24 relative"
    >
      <FloatingIcons />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column - Identity Block */}
          <div className={`lg:sticky lg:top-24 space-y-6 flex flex-col items-center bg-[#292929] border border-[#3a3a3a] rounded-lg p-8 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            {/* Photo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-main/20 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6"></div>
              <img
                src={professionalHeadshot}
                alt="Professional headshot"
                className="relative rounded-lg w-full shadow-xl group-hover:scale-[1.02] transition-transform"
              />
            </div>

            {/* Name & Title */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-white">Khayrul Islam</h2>
              <p className="text-lg font-semibold text-main">Front-End Web Developer</p>
            </div>

            {/* Tagline */}
            <div className="border-t border-b border-[#3a3a3a] py-4">
              <p className="text-sm text-gray-400 italic text-center">
                "I build performant, accessible web experiences."
              </p>
            </div>

            {/* CTA Button */}
            <Button>
              <HiDownload className="h-5 w-5" />
              <a href="/Khayrul_Islam_Resume.pdf" download="Khayrul_Islam_Resume">Download CV</a>
            </Button>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle text-white hover:text-main transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle text-white hover:text-main transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle text-white hover:text-main transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Story & AboutMe Block */}
          <div className="space-y-8">
            {/* Card A: MyBio */}
            {/* Card A: MyBio */}
            <div className={`card bg-[#292929] border border-[#3a3a3a] shadow-xl ${isVisible ? "fade-in-up-delay" : "opacity-0"}`}>
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4 text-white">Hi, I'm Khayrul — <div className="bg-clip-text text-transparent" style={{
                    backgroundImage: "linear-gradient(90deg, #FB2C36 30%, #a81f26ff)",
                }}>a Passionate Front-End Developer.</div></h3>
                <div className="space-y-4 text-gray-400 text-[15px] leading-relaxed">
                  <p>
                    I’m a <strong className="text-white">Front-End Web Developer</strong> who loves transforming creative ideas
                    into visually stunning, functional, and responsive websites. I specialize in
                    <strong className="text-white"> HTML, CSS, JavaScript, React, and Tailwind CSS</strong>, focusing on
                    performance and clean design.
                  </p>
                  <p>
                    My development philosophy centers on simplicity, scalability, and user experience.
                    I always aim to write clean, maintainable code and follow best practices to ensure
                    accessibility and responsiveness across all devices.
                  </p>
                  <p>
                    Beyond coding, I enjoy exploring <strong className="text-white">UI design trends</strong>, optimizing website
                    performance, and continuously learning new tools like <strong className="text-white">Next.js</strong> and
                    <strong className="text-white"> TypeScript</strong> to stay up-to-date with the latest web technologies.
                  </p>
                </div>
              </div>
            </div>


            {/* Card B: The Stack */}
            <div className={`card bg-[#292929] border border-[#3a3a3a] shadow-xl ${isVisible ? "fade-in-up-delay" : "opacity-0"}`}>
              <div className="card-body">
               <h3 className="text-3xl font-bold mb-6 text-[#FB2C36] drop-shadow-[0_0_15px_rgba(251,44,54,0.7)] animate-pulse">
  My Technical Toolkit
</h3>






                {/* Frontend */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Frontend</h4>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {techStack.frontend.map((tech, index) => (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-second hover:bg-[#1a1a1a] transition-all hover:shadow-lg group"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        <tech.icon
                          className="h-10 w-10 transition-transform group-hover:scale-110"
                          style={{ color: tech.color }}
                        />
                        <span className="text-sm font-medium text-gray-400">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Backend</h4>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {techStack.backend.map((tech, index) => (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-second hover:bg-[#1a1a1a] transition-all hover:shadow-lg group"
                        style={{
                          animationDelay: `${(techStack.frontend.length + index) * 0.1}s`,
                        }}
                      >
                        <tech.icon
                          className="h-10 w-10 transition-transform group-hover:scale-110"
                          style={{ color: tech.color }}
                        />
                        <span className="text-sm font-medium text-gray-400">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Tools & Platforms</h4>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {techStack.tools.map((tech, index) => (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-second hover:bg-[#1a1a1a] transition-all hover:shadow-lg group"
                        style={{
                          animationDelay: `${(techStack.frontend.length + techStack.backend.length + index) * 0.1}s`,
                        }}
                      >
                        <tech.icon
                          className="h-10 w-10 transition-transform group-hover:scale-110"
                          style={{ color: tech.color }}
                        />
                        <span className="text-sm font-medium text-gray-400">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Problem Solving */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Problem Solving Skill</h4>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {techStack.programming.map((tech, index) => (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-second hover:bg-[#1a1a1a] transition-all hover:shadow-lg group"
                        style={{
                          animationDelay: `${(techStack.frontend.length + techStack.backend.length + index) * 0.1}s`,
                        }}
                      >
                        <tech.icon
                          className="h-10 w-10 transition-transform group-hover:scale-110"
                          style={{ color: tech.color }}
                        />
                        <span className="text-sm font-medium text-gray-400">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card C: The Workflow */}
            <div className={`card bg-[#292929] border border-[#3a3a3a] shadow-xl ${isVisible ? "fade-in-up-delay" : "opacity-0"}`}>
              <div className="card-body">
                 <h3 className="text-3xl font-bold mb-6 text-[#FB2C36] drop-shadow-[0_0_15px_rgba(251,44,54,0.7)] animate-pulse">
  My Development Focus
</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {workflows.map((workflow, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-main/10 rounded-lg">
                          <workflow.icon className="h-6 w-6 text-main" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-white">{workflow.title}</h4>
                      <p className="text-sm text-gray-400">{workflow.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
