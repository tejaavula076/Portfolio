import React, { useEffect, useRef, useState } from "react";
import "./Education.css";

const educationData = [
  {
    degree: "Master of Business Administration, Web Development & Design",
    school: "Westcliff University, Dallas, Texas",
    date: "May 2025 – Present",
    tag: "MBA (in progress)",
  },
  {
    degree: "Master of Computer Science",
    school: "Northwest Missouri State University, Maryville, Missouri",
    date: "Jan 2020 – May 2021",
    tag: "GPA: 3.8",
  },
  {
    degree: "Bachelor of Electronics and Communication Engineering",
    school:
      "Vignan's Foundation for Science, Technology & Research (Deemed to be University)",
    date: "June 2016 – July 2020",
    tag: "GPA: 9.3",
  },
];

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const els = itemRefs.current.filter(Boolean);
    if (!els.length) return;

    // If you scroll inside a container, put that class here:
    // const rootEl = document.querySelector(".rightSideScroll");
    const rootEl = null;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

        if (visible[0]) {
          const idx = Number(visible[0].target.dataset.index);
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        }
      },
      {
        root: rootEl,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-25% 0px -55% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" className="eduWrap">
      <h2 className="eduHeading">Education</h2>

      <div className="eduTimeline">
        {/* Center line */}
        <div className="eduLine" />

        {educationData.map((e, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`eduRow ${isLeft ? "left" : "right"} ${
                activeIndex === idx ? "active" : ""
              }`}
              ref={(el) => (itemRefs.current[idx] = el)}
              data-index={idx}
            >
              {/* Card */}
              <div className="eduCard">
                <div className="eduTop">
                  <h3 className="eduDegree">{e.degree}</h3>
                  <span className="eduDate">{e.date}</span>
                </div>

                <p className="eduSchool">{e.school}</p>
                <span className="eduTag">{e.tag}</span>
              </div>

              {/* Dot */}
              <div className={`eduDot ${activeIndex === idx ? "dotActive" : ""}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
