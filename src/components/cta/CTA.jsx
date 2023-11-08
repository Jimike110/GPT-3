import React, { useEffect } from "react";
import "./cta.css";
import "aos/dist/aos.css";
import AOS from "aos";

const CTA = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="gpt3__cta section__margin">
      <div className="gpt3__cta-banner" data-aos="zoom-in">
        <div className="gpt3__cta-banner__text">
          <h5>Request Early Access to Get Started</h5>
          <h2>Register today & start exploring the endless possiblities.</h2>
        </div>
        <div className="gpt3__cta-banner__button">
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
