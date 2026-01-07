import React from "react";
import "./LeftSideBar.css";
import Button from '@mui/material/Button';
function LeftSideBar() {
  return (
    <div className="leftSideBarDiv">
      <div className="text-center">
        <h1>Tejaswi Avula</h1>
        <br></br>
        <h3>Software Developer || Fullstack Developer</h3>
        <br></br>
      </div>
      <hr className="bg-white hrline" />
      <div className="leftSideBarConnectDiv">
        <a className="leftBarConnectionLinks">
          <i class="fa-solid fa-envelope text-center"></i>
        </a>
        <a className="leftBarConnectionLinks">
          {" "}
          <i class="fa-brands fa-github text-center"></i>
        </a>
        <a className="leftBarConnectionLinks">
          {" "}
          <i class="fa-brands fa-linkedin text-center"></i>
        </a>
      </div>
      <div className="resumeButton">
        <Button variant="contained" size="large" className="mt-5">
          Resume
        </Button>
      </div>
    </div>
  );
}

export default LeftSideBar;
