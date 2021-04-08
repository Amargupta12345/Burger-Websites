import React from "react";
import aboutImage from "../images/about.png";
const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          assumenda similique perferendis iste sequi commodi reiciendis eligendi
          nobis distinctio? Veritatis?
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="loading " />
      </div>
    </div>
  );
};

export default About;
