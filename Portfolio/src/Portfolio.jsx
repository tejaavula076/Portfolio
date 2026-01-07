import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import "./Portfolio.css"
function Portfolio() {
  return (
    <div className="PortfolioDiv">
      {/* <h1 class="text-3xl font-bold underline text-clifford">Hello world!</h1> */}
      <LeftSideBar />
      <RightSideBar />
    </div>
  );
}

export default Portfolio;
