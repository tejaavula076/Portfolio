import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";

function WithStyles({ icon, headline, skills }) {
  return (
    <div className="skillCard">
      <div className="skillHeader">
        <span className="skillIcon">{icon}</span>
        <h4 className="skillTitle">{headline}</h4>
      </div>

      <div className="skillChips">
        {skills.map((s) => (
          <span className="skillChip" key={s}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills">
      <h2 className="skillsHeading">Skills</h2>

      <Carousel
        arrows
        autoPlay
        autoPlaySpeed={2500}
        infinite
        slidesToSlide={1}
        draggable
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        showDots={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
      >
        <WithStyles
          icon="</>"
          headline="Programming Languages"
          skills={["Java", "Python", "SQL", "TypeScript", "JavaScript"]}
        />

        <WithStyles
          icon="⚛️"
          headline="Frameworks & Libraries"
          skills={["React Js", "Node.js", "Next.js"]}
        />

        <WithStyles
          icon="🌐"
          headline="Web Technologies"
          skills={["REST APIs", "HTML5", "CSS3", "JSON"]}
        />

        <WithStyles
          icon="🗄️"
          headline="Databases"
          skills={["MySQL", "PostgreSQL", "MongoDB", "Firebase"]}
        />

        <WithStyles
          icon="☁️"
          headline="Cloud & DevOps"
          skills={["AWS", "Docker", "Kubernetes", "CI/CD", "Git"]}
        />

        <WithStyles
          icon="🛠️"
          headline="Tools & Platforms"
          skills={["Postman", "Power BI", "Tableau", "Excel"]}
        />
      </Carousel>
    </div>
  );
}

export default Skills;
