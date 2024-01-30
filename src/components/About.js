import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">About
  <h2>About Me</h2>
  <p>We went to the moon</p>
  <img src={image} alt="I made This"></img></div>;
}

export default About;
