import { useState } from "react";
import Swal from "sweetalert2";
import { GoMail } from "react-icons/go";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { IoShareSocial } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message Sent",
      text: "Thank you for reaching out. I'll get back to you soon!",
      icon: "success",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: <GoMail />,
      label: "Email",
      href: "mailto:john@example.com",
      color: "hover:text-[#FB2C36]",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-[#FB2C36]",
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-[#FB2C36]",
    },
    {
      icon: <FaWhatsapp />,
      label: "Whatsapp",
      href: "https://twitter.com",
      color: "hover:text-[#FB2C36]",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4"
      style={{ backgroundColor: "#111111", color: "#fff" }}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#FB2C36]">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Form Section */}
          <div
            className="p-8 rounded-2xl animate-slide-up"
            style={{ backgroundColor: "#292929" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#FB2C36]">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#111111] border border-gray-700 focus:border-[#FB2C36] outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#111111] border border-gray-700 focus:border-[#FB2C36] outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-[#111111] border border-gray-700 focus:border-[#FB2C36] outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#FB2C36] text-white font-semibold transition-all duration-300 hover:bg-[#e1262f]"
              >
                <LuSend />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Info Section */}
          <div
            className="space-y-8 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "#292929" }}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#FB2C36]">
                Connect With Me
              </h3>
              <p className="text-gray-400 mb-6 text-[16px] font-medium">
                Let's build something amazing together. Feel free to reach out
                through any of these platforms:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg bg-[#111111] border border-gray-800 transition-all duration-300 hover:scale-105 ${social.color}`}
                  >
                    {social.icon}
                    <span className="text-sm font-medium">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #FB2C36, #e1262f)",
                color: "#fff",
              }}
            >
              <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
              <p className="text-sm opacity-90">
                I'm currently available for freelance work and full-time
                positions. Let's discuss how we can work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
