import { LuGraduationCap } from "react-icons/lu";
import { LuAward } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";

const Education = () => {
  const education = [
    {
      icon: <LuGraduationCap className="text-[#FB2C36] w-6 h-6" />,
      degree: "Bachelor of Science in Computer Science",
      school: "North East University Bangladesh",
      period: "2025 - 2029",
      description:
        "Graduated with honors. Specialized in Software Engineering and Web Development.",
      achievements: ["Problem Solving", "Best Project Award"],
    },
    {
      icon: <FiBookOpen className="text-[#FB2C36] w-6 h-6" />,
      degree: "Higher Secondary Certificate",
      school: "Shaparan Govt. College, Sylhet",
      period: "2023",
      description:
        "Advanced certification in React and modern frontend development.",
      achievements: ["Advanced Level", "GPA A"],
    },
    {
      icon: <LuAward className="text-[#FB2C36] w-6 h-6" />,
      degree: "Web Development Bootcamp",
      school: "Programming Hero",
      period: "2025",
      description:
        "Intensive program covering modern web technologies and best practices.",
      achievements: ["Top Graduate", "Portfolio Excellence"],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4"
      style={{ backgroundColor: "#111111", color: "#FFFFFF" }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#FB2C36]">
          Education & Certifications
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FB2C36] to-[#292929]" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 items-center animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Left side for even indexes */}
                {index % 2 === 0 && (
                  <>
                    <div
                      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#292929" }}
                    >
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-[#FB2C36]/10">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">
                              {item.degree}
                            </h3>
                            <p className="text-[#FB2C36] font-medium mb-2">
                              {item.school}
                            </p>
                            <p className="text-sm text-gray-400 mb-3">
                              {item.period}
                            </p>
                            <p className="text-sm mb-3">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.achievements.map((achieve, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-xs rounded-full border border-[#FB2C36] text-[#FB2C36]"
                                >
                                  {achieve}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                  </>
                )}

                {/* Right side for odd indexes */}
                {index % 2 === 1 && (
                  <>
                    <div className="hidden md:block" />
                    <div
                      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#292929" }}
                    >
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-[#FB2C36]/10">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">
                              {item.degree}
                            </h3>
                            <p className="text-[#FB2C36] font-medium mb-2">
                              {item.school}
                            </p>
                            <p className="text-sm text-gray-400 mb-3">
                              {item.period}
                            </p>
                            <p className="text-sm mb-3">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.achievements.map((achieve, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-xs rounded-full border border-[#FB2C36] text-[#FB2C36]"
                                >
                                  {achieve}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FB2C36] border-4 border-[#111111]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
