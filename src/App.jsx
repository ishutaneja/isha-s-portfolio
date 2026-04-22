import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaBriefcase, FaGraduationCap, FaCode, FaServer, FaUsers } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-card border-b-0 border-white/5">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold gradient-text tracking-tighter">IT.</div>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-[var(--color-text-muted)]">
        <a href="#about" className="hover:text-[var(--color-primary)] transition-colors">About</a>
        <a href="#experience" className="hover:text-[var(--color-primary)] transition-colors">Experience</a>
        <a href="#skills" className="hover:text-[var(--color-primary)] transition-colors">Skills</a>
        <a href="#projects" className="hover:text-[var(--color-primary)] transition-colors">Projects</a>
      </div>
      <a href="mailto:ishutaneja012@gmail.com" className="px-5 py-2 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors glow-primary">
        Hire Me
      </a>
    </div>
  </nav>
);

const HeroSection = () => (
  <motion.section
    id="about"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="min-h-[80vh] flex flex-col justify-center items-start"
  >
    <motion.div variants={fadeIn} className="inline-block px-4 py-2 rounded-full glass-card text-[var(--color-accent-light)] text-sm font-medium mb-6 gradient-border">
      Available for work
    </motion.div>
    <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
      Hi, I'm <span className="gradient-text">Isha Taneja</span>
      <br />MERN Stack Developer

    </motion.h1>
    <motion.p variants={fadeIn} className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mb-10 leading-relaxed">
     Passionate about building scalable, high-performance web applications with modern technologies. Focused on creating seamless user experiences and robust backend systems.
    </motion.p>

    <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
      <a href="https://www.linkedin.com/in/isha-taneja-ba6133252" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
        <FaLinkedin className="text-[#0A66C2]" /> LinkedIn
      </a>
      <a href="mailto:ishutaneja012@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
        <FaEnvelope className="text-[var(--color-accent)]" /> Email Me
      </a>
      <a href="tel:+919914255093" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
        <FaPhone className="text-[var(--color-success)]" /> +91 9914255093
      </a>
    </motion.div>
  </motion.section>
);

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Front End Developer",
      company: "CQLSYS Technologies",
      period: "June 2025 – Present",
      desc: [
        "Built responsive, high-performance UI screens using React.js",
        "Styled layouts quickly and consistently with Tailwind CSS",
        "Developed interactive, reusable React components"
      ]
    },
    {
      role: "Front End Developer Intern",
      company: "CQLSYS Technologies",
      period: "April 2025 – June 2025",
      desc: [
        "Assisted in building responsive UI pages using React.js",
        "Contributed to creating simple, reusable React components"
      ]
    },
    {
      role: "AI / ML Intern",
      company: "AWADH, IIT Ropar",
      period: "Past",
      desc: [
        "Acquired hands-on experience in data annotation methodologies, including image and video annotation techniques.",
        "Collaborated with the team on a live project, contributing to machine learning algorithms and models."
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold mb-12 flex items-center gap-4">
        <FaBriefcase className="text-[var(--color-primary)]" /> Work Experience
      </motion.h2>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-primary-light)] before:to-transparent">
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={fadeIn} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-dark)] bg-[var(--color-primary)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 glow-primary">
              <FaBriefcase size={14} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-[var(--color-accent-light)] font-medium mb-4">{exp.company}</p>
              <ul className="space-y-2 text-[var(--color-text-muted)] text-sm">
                {exp.desc.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    { title: "Frontend", icon: <FaCode />, skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"] },
    { title: "Backend", icon: <FaServer />, skills: ["Node.js", "Express.js", "MongoDB", "JSON", "REST APIs"] },
    { title: "Soft Skills", icon: <FaUsers />, skills: ["Communication", "Project Management", "Problem Solving", "Team Management", "Decision Making"] }
  ];

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold mb-12 flex items-center gap-4">
        <FaCode className="text-[var(--color-accent)]" /> Skills Summary
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={fadeIn} className="glass-card p-8 rounded-2xl border-t-2 border-t-[var(--color-primary)] hover:bg-white/[0.03] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] flex items-center justify-center text-2xl mb-6">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-[var(--color-text-muted)] hover:text-white hover:border-[var(--color-primary)] transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cuddle Link",
      tags: ["React.js", "Responsive Design"],
      desc: [
        "Built the frontend for a platform allowing users to apply for cuddle sessions.",
        "Designed clean, user-friendly pages making browsing and booking simple.",
        "Implemented forms and interactive features to streamline application process.",
        "Improved responsiveness and performance for mobile and desktop."
      ]
    },
    {
      title: "Where is my Wrench",
      tags: ["React.js", "Frontend"],
      desc: [
        "Built a platform that helps users find and rent agriculture equipment.",
        "Designed search and listing pages so farmers can easily browse tools.",
        "Implemented forms for rental listings with price, availability, and location.",
        "Optimized app for fast loading and mobile-friendly access in rural areas."
      ]
    },
    {
      title: "Rent2Lease",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      desc: [
        "Developed a property rental website that helps users find homes for rent.",
        "Designed pages for browsing properties with details like price and amenities.",
        "Implemented features for adding and managing property listings."
      ]
    },
    {
      title: "VerShip",
      tags: ["React.js", "Node.js", "MongoDB"],
      desc: [
        "Built a cross-border shipping platform for sending orders from one country to another.",
        "Designed intuitive UI for tracking international shipments in real-time.",
        "Implemented country-to-country logistics flow with customs and delivery estimations.",
        "Developed order management dashboard for seamless cross-border transactions."
      ]
    },
    {
      title: "1Night",
      tags: ["React.js", "Express.js", "REST APIs"],
      desc: [
        "Developed a companion booking platform for spending one night with a desired gender partner — male, female, or transgender.",
        "Built user-friendly profiles and search filters for browsing available companions.",
        "Implemented secure booking flow with scheduling, confirmation, and payment integration.",
        "Designed inclusive and modern UI to ensure a safe and welcoming user experience."
      ]
    },
    {
      title: "RideJoy",
      tags: ["React.js", "Tailwind CSS", "Node.js"],
      desc: [
        "Created a horse ride booking platform for users to discover and reserve rides.",
        "Designed listing pages with horse details, ride duration, pricing, and availability.",
        "Implemented a booking system with date/time selection and instant confirmation.",
        "Optimized for mobile to let users book rides on the go from any location."
      ]
    }
  ];

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold mb-12 flex items-center gap-4">
        <FaExternalLinkAlt className="text-[var(--color-primary)]" /> Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div key={index} variants={fadeIn} className="glass-card rounded-2xl overflow-hidden group flex flex-col">
            <div className="h-48 bg-[var(--color-dark-lighter)] relative overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 mix-blend-overlay group-hover:scale-110 transition-transform duration-500"></div>
              <h3 className="text-3xl font-heading font-bold text-white/50 group-hover:text-white transition-colors z-10 text-center">{project.title}</h3>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)] flex-1">
                {project.desc.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[var(--color-accent)] mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const EducationSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
  >
    <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold mb-12 flex items-center gap-4">
      <FaGraduationCap className="text-[var(--color-accent)]" /> Education
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div variants={fadeIn} className="glass-card p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-bl-full"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Technology</h3>
              <p className="text-[var(--color-primary-light)] text-lg">Computer Science and Engineering</p>
            </div>
            <div className="text-left md:text-right">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-medium mb-2">2021 - 2025</span>
              <p className="text-[var(--color-text-muted)] flex items-center md:justify-end gap-2">
                <FaMapMarkerAlt /> Bathinda, Punjab
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10">
            <p className="text-xl font-medium text-white mb-2">Baba Farid College of Engineering & Technology</p>
            <p className="inline-flex items-center gap-2 text-[var(--color-success)] bg-[var(--color-success)]/10 px-3 py-1 rounded-lg font-bold">
              Score: 8.5 CGPA
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="glass-card p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/10 rounded-bl-full"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">+2 (Senior Secondary)</h3>
              <p className="text-[var(--color-accent-light)] text-lg">Non-Medical</p>
            </div>
            <div className="text-left md:text-right">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-medium mb-2">Past</span>
              <p className="text-[var(--color-text-muted)] flex items-center md:justify-end gap-2">
                <FaMapMarkerAlt /> Ferozepur, Punjab
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10">
            <p className="text-xl font-medium text-white mb-2">Meritorious School</p>
            <p className="inline-flex items-center gap-2 text-[var(--color-success)] bg-[var(--color-success)]/10 px-3 py-1 rounded-lg font-bold">
              Score: 90%
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-black/20 mt-20">
    <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[var(--color-text-muted)] text-sm">
        © {new Date().getFullYear()} Isha Taneja. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/isha-taneja-ba6133252" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all">
          <FaLinkedin />
        </a>
        <a href="mailto:ishutaneja012@gmail.com" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-dark)] text-[var(--color-text)] font-sans selection:bg-[var(--color-primary)] selection:text-white overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-grid z-0 opacity-40 pointer-events-none"></div>
      <div className="fixed top-20 left-20 w-96 h-96 bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-glow z-0 pointer-events-none"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-glow z-0 pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <Navbar />

      <main className="relative z-10 container mx-auto px-6 pt-32 pb-12 space-y-32">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
