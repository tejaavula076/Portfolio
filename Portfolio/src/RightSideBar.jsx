import React from "react";
import NavBar from "./NavBar";
import "./RightSideBar.css";
import Aboutme from "./AboutMe";
import Skills from "./Skills";
function RightSideBar() {
  return (
    <div className="col-sm-12 col-md-8 rightSideDiv">
      <NavBar />
      <section>
        <Aboutme/>
        <Skills/>

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
