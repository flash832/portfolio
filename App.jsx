import React, { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "resume", label: "Resume" },
  { id: "achievements", label: "Achievements" },
  { id: "about", label: "About Me" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
};

function Navbar() {
  return (
    <header className="kd-nav">
      <div className="kd-container kd-nav-inner">
        <div className="kd-nav-left">
          <div className="kd-logo-circle">SS</div>
          <div className="kd-logo-text">
            <div className="kd-logo-name">Saurabh Shetkar</div>
            <div className="kd-logo-sub">Software • Game • Developer</div>
          </div>
        </div>

        <nav className="kd-nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="kd-nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="kd-hero-section">
      <div className="kd-container kd-hero">
        {/* LEFT: photo circle */}
        <motion.div
          className="kd-hero-photo-wrap"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="kd-hero-photo-ring">
            {/* Later: replace with your own image */}
            <div className="kd-hero-photo-inner">SS</div>
          </div>
        </motion.div>

        {/* RIGHT: text */}
        <motion.div
          className="kd-hero-content"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <p className="kd-hero-eyebrow">
            Software Developer • Game Developer • Dynamic Tech Explorer
          </p>
          <h1 className="kd-hero-title">
            Hi, I&apos;m{" "}
            <span className="kd-hero-highlight">Saurabh Shetkar</span>
          </h1>
          <p className="kd-hero-subtitle">
            Enthusiastic and results-driven developer with a strong foundation
            in Python, data structures, cloud technologies, and interactive
            game-based learning solutions. I enjoy turning complex ideas into
            simple, engaging experiences that help people learn and solve real
            problems.
          </p>

          {/* role pills */}
          <div className="kd-pill-row">
            <span className="kd-pill">Python &amp; DSA</span>
            <span className="kd-pill">Game-Based Learning</span>
            <span className="kd-pill">Unity &amp; Blender</span>
            <span className="kd-pill">IoT &amp; ESP32</span>
            <span className="kd-pill">Cloud • AWS</span>
          </div>

          {/* info cards */}
          <div className="kd-info-row">
            <div className="kd-info-card">
              <div className="kd-info-title">📍 Location</div>
              <div className="kd-info-text">Pune, Maharashtra, India</div>
            </div>
            <div className="kd-info-card">
              <div className="kd-info-title">🧠 Expertise</div>
              <div className="kd-info-text">
                Game Dev, Python, Problem Solving
              </div>
            </div>
            <div className="kd-info-card">
              <div className="kd-info-title">📩 Contact</div>
              <div className="kd-info-text">
                saurabhshetkar2004@gmail.com
                <br />
                +91 8830561178
              </div>
            </div>
          </div>

          {/* social row */}
          <div className="kd-social-section">
            <p className="kd-social-title">Connect with me</p>
            <div className="kd-social-row">
              <a
                className="kd-social-icon"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GH
              </a>
              <a
                className="kd-social-icon"
                href="https://www.linkedin.com/in/saurabh-shetkar-2a3529336/"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>
              <a
                className="kd-social-icon"
                href="mailto:saurabhshetkar2004@gmail.com"
              >
                ✉
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="kd-section">
      <div className="kd-container">
        <div className="kd-section-header">
          <h2 className="kd-section-title">{title}</h2>
          {subtitle && <p className="kd-section-subtitle">{subtitle}</p>}
        </div>
        <div className="kd-section-content">{children}</div>
      </div>
    </section>
  );
}

/* ===================== PROJECTS ===================== */

function ProjectsSection() {
  const projects = [
    {
      title: "FixWith Python – Educational Game",
      description:
        "Story-driven learning platform where players solve Python questions to progress through interactive levels.",
      tags: ["Unity", "Python", "Game-Based Learning"],
      codeLink: "#",
      liveLink: "#",
      icon: "🎮",
    },
    {
      title: "AI-Powered IoT Real-Time Sleep Apnea Detection",
      description:
        "Wearable health monitoring system using MAX30102 + ESP32 and ML models (RF, DT, SVM) with Firebase alerts.",
      tags: ["IoT", "ESP32", "Machine Learning", "Firebase"],
      codeLink: "#",
      liveLink: "#",
      icon: "🩺",
    },
    {
      title: "Ballista – Educational Projectile System",
      description:
        "3D-modeled projectile platform with ESP32, sensors, motors and Wi-Fi for precise launch control and teaching physics.",
      tags: ["Embedded Systems", "ESP32", "Education Tech"],
      codeLink: "#",
      liveLink: "#",
      icon: "🎯",
    },
    {
      title: "Automatic Seat Lighting System for Cinema Theaters",
      description:
        "Weight-sensor based system that automatically lights seats when occupied, improving safety and user experience.",
      tags: ["IoT", "Sensors"],
      codeLink: "#",
      liveLink: "#",
      icon: "🎥",
    },
  ];

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A collection of my major works — blending code, hardware, and game design."
    >
      <div className="kd-project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="kd-project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
          >
            <div className="kd-project-image">
              <span className="kd-project-icon">{project.icon}</span>
              <span className="kd-project-image-text">Project Preview</span>
            </div>
            <div className="kd-project-body">
              <h3 className="kd-project-title">{project.title}</h3>
              <p className="kd-project-desc">{project.description}</p>
              <div className="kd-chip-row">
                {project.tags.map((tag) => (
                  <span className="kd-chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="kd-project-actions">
                <button className="kd-btn kd-btn-ghost">Code</button>
                <button className="kd-btn kd-btn-primary">Live</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ===================== SKILLS (FLOATING BALLS) ===================== */

function SkillsSection() {
  const skills = [
    { label: "Python", type: "emoji", icon: "🐍" },
    { label: "Data Structures", type: "emoji", icon: "🧠" },
    { label: "Unity", type: "emoji", icon: "🎮" },
    {
      label: "Blender",
      type: "img",
      src: "https://icongr.am/devicon/blender-original.svg?size=80",
    },
    {
      label: "AWS",
      type: "img",
      src: "https://icongr.am/devicon/amazonwebservices-original.svg?size=80",
    },
    { label: "GitHub", type: "emoji", icon: "🐙" },
    { label: "Red Hat Linux", type: "emoji", icon: "🧱" },
    { label: "Ubuntu", type: "emoji", icon: "🦊" },
    { label: "Windows", type: "emoji", icon: "🪟" },
    { label: "Communication", type: "emoji", icon: "💬" },
    { label: "Teamwork", type: "emoji", icon: "🤝" },
    { label: "Quick Learner", type: "emoji", icon: "⚡" },
  ];

  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="Technical & soft skills blended with creativity — explore my core strengths below."
    >
      <div className="kd-skills-panel">
        <div className="kd-skills-orbit">
          {skills.map((skill, index) => {
            const amp = 10 + (index % 3) * 4;

            return (
              <motion.div
                key={skill.label}
                className="kd-skill-orbit-item"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                animate={{
                  y: [0, -amp, amp * 0.6, -amp * 0.4, 0],
                  x: [0, 6, -5, 3, 0],
                }}
                transition={{
                  duration: 7 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                  repeatType: "mirror",
                }}
                whileHover={{ scale: 1.12 }}
              >
                <div className="kd-skill-circle">
                  {skill.type === "img" ? (
                    <img
                      src={skill.src}
                      alt={skill.label}
                      className="kd-skill-icon-img"
                    />
                  ) : (
                    <span className="kd-skill-icon">{skill.icon}</span>
                  )}
                </div>
                <p className="kd-skill-label">{skill.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}



/* ===================== EXPERIENCE ===================== */

function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Hands-on work turning ideas into interactive experiences."
    >
      <div className="kd-timeline">
        <div className="kd-timeline-item">
          <div className="kd-timeline-dot" />
          <div className="kd-timeline-content">
            <h3>Game Developer — FIREBIRDVR</h3>
            <p className="kd-timeline-location">Remote / India</p>
            <ul>
              <li>
                Developed educational games focused on making coding interactive
                and engaging.
              </li>
              <li>
                Built <strong>“FixWith Python”</strong>, a story-driven
                platform where players solve Python questions to progress.
              </li>
              <li>
                Designed gameplay mechanics, narrative structure, and integrated
                Python problem-solving into levels.
              </li>
              <li>
                Collaborated with cross-functional teams to ensure the game
                effectively enhanced students&apos; programming skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ===================== CERTIFICATES ===================== */

function CertificationsSection() {
  const [activeTab, setActiveTab] = useState("tech");

  const certificates = [
    {
      title: "Python Fundamentals",
      org: "Infosys Springboard",
      year: "2023",
      category: "tech",
    },
    {
      title: "Red Hat Linux Administration",
      org: "Red Hat",
      year: "2023",
      category: "tech",
    },
    {
      title: "AWS Fundamentals",
      org: "Amazon Web Services",
      year: "2024",
      category: "tech",
    },
    {
      title: "Tech Conclave Winner",
      org: "Intra-College Tech Conclave",
      year: "2024",
      category: "other",
    },
  ];

  const filtered = certificates.filter((c) =>
    activeTab === "all" ? true : c.category === activeTab
  );

  return (
    <Section
      id="certificates"
      title="Certificates"
      subtitle="Explore my certifications — technical & others."
    >
      <div className="kd-cert-panel">
        <div className="kd-cert-tabs">
          <button
            className={
              "kd-cert-tab" + (activeTab === "tech" ? " kd-cert-tab-active" : "")
            }
            onClick={() => setActiveTab("tech")}
          >
            Tech
          </button>
          <button
            className={
              "kd-cert-tab" +
              (activeTab === "other" ? " kd-cert-tab-active" : "")
            }
            onClick={() => setActiveTab("other")}
          >
            Others
          </button>
        </div>

        <div className="kd-cert-row">
          {filtered.map((cert) => (
            <motion.div
              key={cert.title}
              className="kd-cert-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="kd-cert-image" />
              <div className="kd-cert-body">
                <h3 className="kd-cert-title">{cert.title}</h3>
                <p className="kd-cert-meta">
                  {cert.org} • {cert.year}
                </p>
                <button className="kd-btn kd-btn-primary kd-cert-btn">
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ===================== RESUME (SUMMARY + EDUCATION) ===================== */

function ResumeSection() {
  return (
    <Section
      id="resume"
      title="Resume"
      subtitle="A quick glance at my journey."
    >
      <div className="kd-resume-grid">
        <div className="kd-resume-main">
          <h3 className="kd-resume-name">SAURABH SHETKAR</h3>
          <p className="kd-resume-role">
            Software Developer | Game Developer | Dynamic Tech Explorer
          </p>
          <p className="kd-resume-meta">
            📍 Pune, Maharashtra • ✉ saurabhshetkar2004@gmail.com • 📞 +91
            8830561178
          </p>

          {/* ⭐ DOWNLOAD BUTTON — THIS IS THE CORRECT SPOT */}
          <div className="kd-resume-download">
           <a
  href="/resume.pdf"
  className="kd-resume-download-btn"
  download
  target="_blank"
  rel="noreferrer"
>
  ⬇ Download Resume (PDF)
</a>

          </div>
        </div>

        <div className="kd-resume-summary">
          <h4>Professional Summary</h4>
          <p>
            Enthusiastic and results-driven Software Developer with a strong
            foundation in Python, data structures, cloud technologies, and
            interactive game-based learning solutions. Experienced in merging
            storytelling with coding challenges to make learning more impactful
            and fun.
          </p>
        </div>
      </div>

      <div className="kd-resume-edu-block">
        <h3 className="kd-resume-edu-title">Education</h3>
        <div className="kd-resume-edu-cards">
          <div className="kd-resume-edu-card">
            <h4>B.Tech in Electronics &amp; Telecommunication</h4>
            <p className="kd-resume-edu-inst">
              Vishwakarma Institute of Information Technology — Savitribai Phule
              Pune University
            </p>
            <p className="kd-resume-edu-meta">
              2018 – 2022 • CGPA: 7.2 / 10 • SGPA: 8.17 / 10
            </p>
          </div>

          <div className="kd-resume-edu-card">
            <h4>Higher Secondary Certificate (HSC)</h4>
            <p className="kd-resume-edu-inst">
              R.P. Nath College — Aurangabad, India
            </p>
            <p className="kd-resume-edu-meta">2022 – 2023</p>
          </div>

          <div className="kd-resume-edu-card">
            <h4>Secondary School Certificate (SSC)</h4>
            <p className="kd-resume-edu-inst">
              AGP Public School — Aurangabad, India
            </p>
            <p className="kd-resume-edu-meta">2019 – 2020</p>
          </div>
        </div>
      </div>
    </Section>
  );
}


/* ===================== ACHIEVEMENTS ===================== */

function AchievementsSection() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Highlights from academic and tech journeys."
    >
      <ul className="kd-list">
        <li>
          Awarded <strong>1st Prize</strong> at Intra-College Tech Conclave for
          Innovation and Implementation Excellence.
        </li>
        <li>
          Co-authored:{" "}
          <strong>
            “A Comparative Framework for Analyzing Runway Availability”
          </strong>{" "}
          (UEEDC Journal &amp; IRCSTEM Conference).
        </li>
      </ul>
    </Section>
  );
}

/* ===================== ABOUT ===================== */

function AboutSection() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A bit more about my background and interests."
    >
      <div className="kd-about-grid">
        <div>
          <h3>Who I Am</h3>
          <p>
            I&apos;m a Software Developer and Game Developer who loves combining
            code, design, and storytelling. My work ranges from IoT health
            systems and projectile simulators to game-based learning platforms
            that make Python feel like play instead of homework.
          </p>
          <p>
            I enjoy experimenting with new tools, building prototypes, and
            taking ideas from &quot;what if&quot; to something people can
            actually use and enjoy.
          </p>
        </div>
        <div>
          <h3>Interests</h3>
          <ul className="kd-chip-list">
            <li>Hackathons &amp; Tech Workshops</li>
            <li>IoT &amp; New Technologies</li>
            <li>Game-Based Learning Development</li>
            <li>Bike Riding &amp; Outdoor Activities</li>
          </ul>

          <h3>Languages</h3>
          <ul className="kd-chip-list">
            <li>English</li>
            <li>Marathi</li>
            <li>Hindi</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ===================== CONTACT ===================== */

function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you."
    >
      <div className="kd-contact-top">
        <div className="kd-social-row kd-contact-social-row">
          <a className="kd-social-icon" href="https://github.com/" target="_blank" rel="noreferrer">
            GH
          </a>
          <a
            className="kd-social-icon"
            href="https://www.linkedin.com/in/saurabh-shetkar-2a3529336/"
            target="_blank"
            rel="noreferrer"
          >
            in
          </a>
          <a className="kd-social-icon" href="mailto:saurabhshetkar2004@gmail.com">
            ✉
          </a>
          <a className="kd-social-icon" href="#">
            IG
          </a>
          <a className="kd-social-icon" href="#">
            Fb
          </a>
        </div>
      </div>

      <form
        className="kd-contact-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input className="kd-input" placeholder="Your Name" />
        <input className="kd-input" placeholder="Your Email or Phone" />
        <input className="kd-input" placeholder="Subject" />
        <textarea
          className="kd-input kd-textarea"
          placeholder="Your Message..."
          rows={4}
        />
        <button className="kd-btn kd-btn-primary kd-contact-btn" type="submit">
          🚀 Send Message
        </button>
      </form>
    </Section>
  );
}

/* ===================== FOOTER ===================== */

function Footer() {
  return (
    <footer className="kd-footer">
      <div className="kd-container kd-footer-inner">
        <span>© {new Date().getFullYear()} Saurabh Shetkar</span>
        <span>Built with React &amp; Framer Motion</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="kd-page">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ResumeSection />
        <AchievementsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
