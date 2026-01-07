import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const PROJECTS = [
  {
    id: "tl",
    title: "Converse AI",
    date: "Jan 2026",
    desc: "AI-powered conversational web application with real-time, context-aware responses using LLM APIs and a responsive React UI.",
    live: true,
    link: "https://your-converse-ai-link.com",
  },
  {
    id: "tr",
    title: "Wanderlust",
    date: "Nov 2025 – Dec 2025",
    desc: "Full-stack Airbnb-style travel platform with authentication, reviews, image uploads, and cloud deployment.",
    live: true,
    link: "https://wanderlust-52g2.onrender.com/listings",
  },
  {
    id: "bl",
    title: "Quantix",
    date: "Oct 2025",
    desc: "Full-stack financial trading simulation platform with React frontend, Node.js backend, and REST APIs.",
    live: true,
    link: "https://quantix-frontend-application.netlify.app/",
  },
  {
    id: "br",
    title: "Quote Maker",
    date: "Jan 2022 – May 2022",
    desc: "Progressive Web App that delivers daily inspirational quotes with authentication and customization features.",
    live: false,
    link: "",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActive(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`projectsSection ${active ? "active" : ""}`}
    >
      <h2 className="projectsHeading">Projects</h2>

      <div className="projectsGrid">
        {PROJECTS.map((p) => (
          <div key={p.title} className={`projectCard ${p.id}`}>
            {p.live && <span className="liveDot" title="Live"></span>}

            <h3 className="projectTitle">{p.title}</h3>
            <span className="projectDate">{p.date}</span>

            <p className="projectDesc">{p.desc}</p>

            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                View Live →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
