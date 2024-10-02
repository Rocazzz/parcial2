import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2></h2>
        <p>
          
        </p>
      </div>

      <div className="hero-img">
        <div>
          <img src="src\assets\images\pp.png" alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="src\assets\images\js.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="src\assets\images\html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="src\assets\images\css.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="src\assets\images\figma.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="src\assets\images\node.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="src\assets\images\react.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;