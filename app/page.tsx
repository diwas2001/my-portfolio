import { list } from "@vercel/blob";
import { projects } from "./data/projects";
import { skillGroups } from "./data/skills";
import { testimonials } from "./data/testimonials";
import { certificates } from "./data/certificates";
import { posts } from "./data/posts";
import BookCall from "@/components/BookCall";
import ScrambleName from "@/components/ScrambleName";

export const dynamic = "force-dynamic";

async function getProfilePicture() {
  try {
    const { blobs } = await list({ prefix: "profile.jpg" });
    return blobs[0]?.url ?? null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const profileUrl = await getProfilePicture();
  const totalTech = new Set(
    skillGroups.flatMap((g) => g.skills.map((s) => s.name)),
  ).size;

  const stats = [
    { label: "Projects built", value: projects.length },
    { label: "Years learning", value: "3+" },
    { label: "Technologies", value: totalTech },
    { label: "GitHub commits", value: "500+" },
  ];

  return (
    <main className="min-h-screen px-4 pb-24">
      {/* HOME */}
      <section id="home" className="max-w-2xl mx-auto pt-8 text-center">
        <div className="fade-in-up avatar-circle">
          {profileUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profileUrl} alt="Diwas Suyal" />
          ) : (
            "DS"
          )}
        </div>

        <p className="fade-in-up delay-1 text-[var(--accent-green)] text-lg mt-8">
          Welcome to My Portfolio
        </p>

        <p className="fade-in-up delay-1 text-[var(--accent-purple)] text-sm mt-6 mb-3">
          const <span className="text-[var(--accent-blue)]">developer</span> ={" "}
          {"{"}
        </p>
        <ScrambleName />
        <p className="fade-in-up delay-2 mt-6 text-lg">
          <span className="text-[var(--accent-purple)]">title</span>
          <span className="text-[var(--accent-cyan)]">:</span>{" "}
          <span className="text-[var(--accent-green)]">
            "Software Engineer | Data Scientist | AI Enthusiast"
          </span>
        </p>
        <p className="text-[var(--accent-purple)] text-sm mt-3">{"}"}</p>

        <p className="fade-in-up delay-3 text-[var(--text)] leading-relaxed mt-10 max-w-lg mx-auto">
          "Hi, I'm Diwas Suyal â€” a developer with a BSc in Software Engineering
          and an MSc in Data Science & Analytics. I build cross-platform mobile
          apps in Flutter and Dart, and work with Python and SQL on the data
          side. Looking for my first developer role".
        </p>

        <div className="fade-in-up delay-3 flex justify-center gap-4 mt-10">
          <a
            href="#contact"
            className="inline-block bg-[var(--accent-orange)] text-[var(--bg)] font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-block border border-[var(--accent-blue)] text-[var(--accent-blue)] px-8 py-3 rounded-md hover:bg-[var(--accent-blue)] hover:text-[var(--bg)] transition-colors"
          >
            Download CV
          </a>
        </div>
      </section>

      <div className="section-divider my-16"></div>

      {/* ABOUT */}
      <section id="about" className="fade-in-up max-w-2xl mx-auto pb-4">
        <div className="terminal mb-8">
          <div className="terminal-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ml-2 text-xs text-[var(--text-muted)]">
              about.md
            </span>
          </div>
          <div className="p-8">
            <p className="text-[var(--accent-green)] mb-3 text-lg">
              # About Me
            </p>
            <p className="text-[var(--text)] leading-relaxed">
              I'm Diwas Suyal, a graduate developer focused on data analytics,
              backed by a BSc (Hons) in Software Engineering and an MSc in Data
              Science & Analytics from the University of Hertfordshire. I work
              with Python and R to clean, analyse and visualise data in Jupyter
              Notebook, and I'm comfortable writing SQL across MySQL, PostgreSQL
              and Oracle â€” including a kiosk management system I built end to
              end in Oracle APEX. That analytics work sits on a full software
              engineering foundation. I've built cross-platform mobile
              applications in Flutter and Dart, worked with Firebase, and
              developed in Java, C#, C and JavaScript. I also hold a working
              knowledge of computer networking (CCNA fundamentals), which helps
              me understand the systems my data comes from. I'm looking for my
              first role in London, where I can turn data into decisions people
              can act on.
            </p>
          </div>
        </div>

        <div className="terminal mb-8">
          <div className="terminal-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ml-2 text-xs text-[var(--text-muted)]">
              education.md
            </span>
          </div>
          <div className="p-8">
            <p className="text-[var(--accent-green)] mb-6 text-lg">
              # Education
            </p>

            <div className="flex items-center gap-4 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/hertfordshire.png"
                alt="University of Hertfordshire logo"
                className="logo-reveal logo-delay-1 logo-badge h-12 w-12 object-contain bg-white rounded-md p-1"
              />
              <div>
                <a
                  href="https://www.herts.ac.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-blue)] font-semibold hover:underline"
                >
                  MSc Data Science with Analytics
                </a>
                <p className="text-[var(--text-muted)] text-sm">
                  University of Hertfordshire
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/bedfordshire.png"
                alt="University of Bedfordshire logo"
                className="logo-reveal logo-delay-2 logo-badge h-12 w-12 object-contain bg-white rounded-md p-1"
              />
              <div>
                <a
                  href="https://www.beds.ac.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-blue)] font-semibold hover:underline"
                >
                  BSc Software Engineering
                </a>
                <p className="text-[var(--text-muted)] text-sm">
                  University of Bedfordshire
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/global-college.webp"
                alt="Global College of Management logo"
                className="logo-reveal logo-delay-3 logo-badge h-12 w-12 object-contain bg-white rounded-md p-1"
              />
              <div>
                <a
                  href="https://globalcollege.edu.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-blue)] font-semibold hover:underline"
                >
                  +2 (Higher Secondary Education)
                </a>
                <p className="text-[var(--text-muted)] text-sm">
                  Global College of Management
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="ml-2 text-xs text-[var(--text-muted)]">
                languages.md
              </span>
            </div>
            <div className="p-6">
              <p className="text-[var(--accent-green)] mb-3"># Languages</p>
              <ul className="text-[var(--text)] text-sm space-y-1">
                <li>English</li>
                <li>Nepali</li>
              </ul>
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="ml-2 text-xs text-[var(--text-muted)]">
                hobbies.md
              </span>
            </div>
            <div className="p-6">
              <p className="text-[var(--accent-green)] mb-3"># Interests</p>
              <ul className="text-[var(--text)] text-sm space-y-1">
                <li>Listening to music</li>
                <li>Playing online games</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider my-16"></div>

      {/* PROJECTS */}
      <section id="projects" className="max-w-4xl mx-auto pb-4">
        <p className="fade-in-up text-[var(--accent-green)] text-center text-lg mb-10">
          # Projects
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`project-card fade-in-up delay-${(i % 3) + 1} terminal p-6 flex flex-col`}
            >
              <p className="text-sm">
                <span className="text-[var(--accent-purple)]">function</span>{" "}
                <span className="text-[var(--accent-blue)]">
                  {project.title.replace(/\s+/g, "")}
                </span>
                <span className="text-[var(--accent-cyan)]">()</span> {"{"}
              </p>
              <p className="text-[var(--text-dim)] text-sm pl-4 mt-2">
                // {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border border-[var(--border)] text-[var(--accent-green)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm mt-3">{"}"}</p>
              <a
                href={project.github}
                target="_blank"
                className="text-sm text-[var(--accent-cyan)] hover:underline mt-auto pt-4"
              >
                â†’ view_on_github()
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider my-16"></div>

      {/* SKILLS */}
      <section id="skills" className="max-w-2xl mx-auto pb-4">
        <p className="fade-in-up text-[var(--accent-green)] text-center text-lg mb-10">
          # Skills
        </p>
        {skillGroups.map((group) => (
          <div key={group.category} className="terminal mb-6">
            <div className="terminal-bar">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="ml-2 text-xs text-[var(--text-muted)]">
                {group.category.toLowerCase()}.js
              </span>
            </div>
            <div className="p-6">
              <p className="text-[var(--accent-blue)] font-semibold mb-4">
                {group.category}
              </p>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[var(--text)]">{skill.name}</span>
                      <span className="text-[var(--text-muted)]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="section-divider my-16"></div>

      {/* BLOG PREVIEW */}
      <section id="blog" className="max-w-2xl mx-auto pb-4">
        <p className="fade-in-up text-[var(--accent-green)] text-center text-lg mb-10">
          # Blog
        </p>
        <div className="space-y-4">
          {posts.map((post, i) => (
            <div
              key={post.slug}
              className={`fade-in-up delay-${(i % 3) + 1} terminal p-6`}
            >
              <p className="text-[var(--text-muted)] text-xs mb-1">
                {post.date}
              </p>
              <p className="text-[var(--accent-blue)] font-semibold">
                {post.title}
              </p>
              <p className="text-[var(--text)] text-sm mt-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider my-16"></div>

      {/* RESUME */}
      <section id="resume" className="max-w-3xl mx-auto pb-4 text-center">
        <p className="fade-in-up text-[var(--accent-green)] text-lg mb-6">
          # Resume
        </p>
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ml-2 text-xs text-[var(--text-muted)]">
              resume.pdf
            </span>
          </div>
          <iframe
            src="/resume.pdf"
            className="w-full h-[500px]"
            title="Resume"
          />
        </div>
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-8 border border-[var(--accent-orange)] text-[var(--accent-orange)] px-8 py-3 rounded-md hover:bg-[var(--accent-orange)] hover:text-[var(--bg)] transition-colors"
        >
          $ download resume.pdf
        </a>
      </section>

      <div className="section-divider my-16"></div>

      {/* CONTACT */}
      <section id="contact" className="max-w-xl mx-auto pb-4">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ml-2 text-xs text-[var(--text-muted)]">
              contact.js
            </span>
          </div>
          <div className="p-8">
            <p className="text-[var(--accent-green)] mb-6 text-lg">
              # Contact Me
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="section-divider my-16"></div>

      {/* BOOK A CALL */}
      <BookCall />

      <div className="section-divider my-16"></div>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-3xl mx-auto pb-4">
        <p className="fade-in-up text-[var(--accent-green)] text-center text-lg mb-10">
          # Testimonials
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={t.name + i}
              className={`fade-in-up delay-${(i % 3) + 1} terminal p-6`}
            >
              <p className="text-[var(--text)] text-sm leading-relaxed">
                "{t.quote}"
              </p>
              <p className="text-[var(--accent-blue)] font-semibold mt-4">
                {t.name}
              </p>
              <p className="text-[var(--text-muted)] text-xs">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider my-16"></div>

      {/* CERTIFICATES */}
      <section id="certificates" className="max-w-2xl mx-auto pb-4">
        <p className="fade-in-up text-[var(--accent-green)] text-center text-lg mb-10">
          # Certificates
        </p>
        <div className="space-y-4">
          {certificates.map((cert, i) => (
            <div
              key={cert.title + i}
              className={`fade-in-up delay-${(i % 3) + 1} terminal p-6 flex justify-between items-center`}
            >
              <div>
                <p className="text-[var(--accent-blue)] font-semibold">
                  {cert.title}
                </p>
                <p className="text-[var(--text-muted)] text-sm">
                  {cert.issuer} Â· {cert.date}
                </p>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  className="text-sm text-[var(--accent-cyan)] hover:underline"
                >
                  view â†’
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider my-16"></div>

      {/* DASHBOARD */}
      <section id="dashboard" className="max-w-3xl mx-auto">
        <p className="fade-in-up text-[var(--accent-green)] text-center text-lg mb-10">
          # Dashboard
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`fade-in-up delay-${(i % 3) + 1} stat-card`}
            >
              <p className="text-3xl font-bold text-[var(--accent-blue)]">
                {stat.value}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mvzekqoo"
      method="POST"
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="bg-[var(--terminal-bg)] border border-[var(--border)] rounded-md px-4 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent-blue)]"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="bg-[var(--terminal-bg)] border border-[var(--border)] rounded-md px-4 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent-blue)]"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="bg-[var(--terminal-bg)] border border-[var(--border)] rounded-md px-4 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent-blue)]"
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        rows={5}
        className="bg-[var(--terminal-bg)] border border-[var(--border)] rounded-md px-4 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent-blue)]"
      />
      <button
        type="submit"
        className="border border-[var(--accent-orange)] text-[var(--accent-orange)] px-6 py-2 rounded-md hover:bg-[var(--accent-orange)] hover:text-[var(--bg)] transition-colors"
      >
        $ send message
      </button>
    </form>
  );
}

