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
          <img src="https://i.imgur.com/BwLbW3k.jpeg" alt="" />
        </div>
        <div>
          <div className="tech-icon">
          <a href="https://www.instagram.com/juancastrorck/" target="_blank" rel="noopener noreferrer">
          <img src="/images/ig.png" alt="" />
          </a>
          </div>
          <div className="tech-icon">
          <a href="https://github.com/Rocazzz" target="_blank" rel="noopener noreferrer">
          <img src="/images/gh.png" alt="" />
          </a>
          </div>
          <div className="tech-icon">
          <a href="https://www.linkedin.com/in/juan-camilo-castro-391565300/?trk=onsite_shorturl" target="_blank" rel="noopener noreferrer">
          <img src="/images/ld.png" alt="" />
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;