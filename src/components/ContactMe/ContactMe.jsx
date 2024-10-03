import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{flex: 1}}>
          <ContactInfoCard
            iconUrl="src\assets\images\gm.png"
            text="camiloakarck@gmail.com"
          />

          <ContactInfoCard
            iconUrl="src\assets\images\gh.png"
            text="https://github.com/Rocazzz/Semana_10"
          />
        </div>

        <div style={{flex: 1}}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe