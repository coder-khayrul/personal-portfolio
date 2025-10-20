import { useState } from "react";
import { SiBiolink, SiGithub } from "react-icons/si";
import Button from "./Button";
import { FaExternalLinkAlt } from "react-icons/fa";
const ProjectCard = ({
  title,
  tagline,
  image,
  techStack,
  liveUrl,
  githubUrl,
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
  };

  return (
    <div
      className="group relative rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Glow following cursor */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500 z-10 mix-blend-screen"
        style={{
          background: hovering
            ? `radial-gradient(250px circle at ${pos.x}px ${pos.y}px, rgba(251,44,54,0.3), transparent 70%)`
            : "transparent",
          opacity: hovering ? 1 : 0,
          filter: "blur(40px)",
        }}
      />

      {/* Main card container */}
      <div className="relative  border border-[#292929] rounded-xl overflow-hidden z-20">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] z-0"
          style={{
            backgroundImage: `
              linear-gradient(#FB2C36 1px, transparent 1px),
              linear-gradient(90deg, #FB2C36 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Image */}
        <div className="relative overflow-hidden h-56 bg-[#292929] z-10">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent opacity-80" />
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-4 bg-gradient-to-b from-transparent to-[#111111]/60 z-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-[#FB2C36]/90">{tagline}</p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-3 mt-4">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-sm font-medium rounded-full 
                  bg-[#292929] text-white border border-[#FB2C36]/40 
                  shadow-[0_0_8px_#FB2C36]/20 
                  hover:border-[#FB2C36] hover:shadow-[0_0_12px_#FB2C36]/40 
                  transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            {liveUrl && (
              <Button link={liveUrl}
                className="flex-1 relative overflow-hidden bg-[#FB2C36] hover:bg-[#FB2C36]/90 text-white group/btn"
                asChild
              >
                  <FaExternalLinkAlt className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">Live Link</span>
              </Button>
            )}
            {githubUrl && (
              <Button link={githubUrl}
                className="flex-1 border border-[#292929] hover:bg-[#292929] hover:border-[#FB2C36]/50 text-white transition-all duration-300"
                asChild
              >
                  <SiGithub className="w-4 h-4 mr-2" />
                  GitHub
              </Button>
            )}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FB2C36] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      </div>
    </div>
  );
};

export default ProjectCard;
