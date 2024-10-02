import React from "react";
import Typewriter from "typewriter-effect";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Hi, my name is...</h2>
        <h1>
          <Typewriter
            options={{
              strings: ["Juan Castro"],
              autoStart: true,
              loop: true,
              delay: 75, 
              deleteSpeed: 100, 
            }}
          />
        </h1>
        <p>
        I am a multimedia engineering student who is passionate about UX/UI, web development and the creation of multimedia content. If you want someone responsible, committed and willing to work, contact me.
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