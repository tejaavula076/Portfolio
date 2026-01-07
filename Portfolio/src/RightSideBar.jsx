import React from "react";
import NavBar from "./NavBar";
import "./RightSideBar.css";
import Aboutme from "./AboutMe";
function RightSideBar() {
  return (
    <div className="col-sm-12 col-md-8 rightSideDiv">
      <NavBar />
      <section>
        <Aboutme/>
{/* 
        <div id="skills">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          commodi corrupti doloribus eos repellendus? Et odio assumenda a
          temporibus debitis laboriosam, excepturi sunt, quibusdam itaque
          consectetur harum in nobis repellendus.
        </div>
        <div id="experience">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          commodi corrupti doloribus eos repellendus? Et odio assumenda a
          temporibus debitis laboriosam, excepturi sunt, quibusdam itaque
          consectetur harum in nobis repellendus.
        </div>
        <div id="projects">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          commodi corrupti doloribus eos repellendus? Et odio assumenda a
          temporibus debitis laboriosam, excepturi sunt, quibusdam itaque
          consectetur harum in nobis repellendus.
        </div>
        <div id="education">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          commodi corrupti doloribus eos repellendus? Et odio assumenda a
          temporibus debitis laboriosam, excepturi sunt, quibusdam itaque
          consectetur harum in nobis repellendus.
        </div> */}
      </section>
      <footer>
        <div className="footer">
          <p> “Focus on your actions, not the results.”</p>
        
          <p><em>— Bhagavad Gita 2.47</em> </p>
        </div>
      </footer>

      {/* {content} */}
      {/* {footer} */}
    </div>
  );
}

export default RightSideBar;
