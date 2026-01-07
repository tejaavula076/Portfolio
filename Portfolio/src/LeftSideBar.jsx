import React from "react";
import "./LeftSideBar.css";
import Button from "@mui/material/Button";
function LeftSideBar() {
  return (
    <div className="leftSideBarDiv col-sm-12 col-md-4">
      <div className="text-center">
        <h1>Tejaswi Avula</h1>
        <br></br>
        <h3 className="typing">Software Engineer</h3>

       
        <br></br>
      </div>
      <hr className="bg-white hrline" />
      <div className="leftSideBarConnectDiv">
        <a className="leftBarConnectionLinks" href="mailto:t.avula.2712@westcliff.edu?subject=Contact%20Request" target="_blank">
          <i class="fa-solid fa-envelope text-center"></i>
        </a>
        <a className="leftBarConnectionLinks" href="https://github.com/tejaavula076" target="_blank">
          <i class="fa-brands fa-github text-center"></i>
        </a>
        <a className="leftBarConnectionLinks" href="http://linkedin.com/in/tejaswi-29a598382" target="_blank">
          <i class="fa-brands fa-linkedin text-center"></i>
        </a>
      </div>
      <div className="">
        <a href="/TEJASWI_AVULA_RESUME.pdf" target="_blank" rel="noopener noreferrer">
        <button className=" resumeButton">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default LeftSideBar;
