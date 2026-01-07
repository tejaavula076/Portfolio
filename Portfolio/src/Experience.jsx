import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const EXP = [
  {
    role: "Full Stack Developer (Consultant)",
    company: "Sira Consulting Inc, USA",
    date: "2022 – Present",
    bullets: [
      "Delivered web application features for enterprise clients, translating requirements into scalable UI and backend components.",
      "Collaborated with product, QA, and engineering teams in Agile sprints to plan, build, test, and release enhancements.",
      "Supported production issues by debugging, fixing defects, and improving reliability and performance.",
      "Maintained clear documentation and supported handoffs to ensure consistent delivery across teams.",
    ],
  },
  {
    role: "UI Developer",
    company: "BNY Mellon, USA",
    date: "2022 – 2025",
    bullets: [
      "Developed responsive and accessible interfaces using Angular, HTML, and CSS for consistent user experience.",
      "Worked extensively with AG Grid: custom cell renderers, new features, and performance improvements for large datasets.",
      "Identified and resolved UI defects, improving stability and cross-browser compatibility.",
      "Collaborated with business analysts, QA, and senior developers to meet sprint goals and implement business requirements.",
    ],
  },
  {
    role: "Graduate Assistant",
    company: "Northwest Missouri State University",
    date: "2021 – 2022",
    bullets: [
      "Mentored graduate students in iOS development and Swift, supporting debugging and coding best practices.",
      "Assisted faculty with labs, grading, coursework development, and classroom support.",
      "Strengthened leadership, communication, and organization through continuous student support.",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const els = cardRefs.current.filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible entry as active
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

        if (visible[0]) {
          const idx = Number(visible[0].target.getAttribute("data-index"));
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        }
      },
      {
        root: null,          // viewport
        threshold: [0.25, 0.4, 0.6], // tune visibility levels
        rootMargin: "-20% 0px -55% 0px", // makes "center-ish" feel active
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="experience">
      <h2 className="experienceHeading">Experience</h2>

      <Timeline position="right" className="expTimeline">
        {EXP.map((item, idx) => (
          <TimelineItem key={`${item.company}-${item.role}`}>
            <TimelineSeparator>
              <TimelineDot
                className={`expDot ${activeIndex === idx ? "activeDot" : ""}`}
              />
              {idx !== EXP.length - 1 && (
                <TimelineConnector
                  className={`expLine ${activeIndex >= idx ? "activeLine" : ""}`}
                />
              )}
            </TimelineSeparator>

            <TimelineContent className="expContent">
              <div
                className={`expCard ${activeIndex === idx ? "activeCard" : ""}`}
                ref={(el) => (cardRefs.current[idx] = el)}
                data-index={idx}
              >
                <div className="expTop">
                  <div>
                    <h3 className="expRole">{item.role}</h3>
                    <p className="expCompany">{item.company}</p>
                  </div>
                  <span className="expDate">{item.date}</span>
                </div>

                <ul className="expList">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
