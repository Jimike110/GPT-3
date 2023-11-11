import React, { useEffect } from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Possibility = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image" data-aos="slide-right">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content" data-aos="slide-left">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">Unlocking Infinite Potential</h1>
        <p>
          Discover a realm beyond conventional boundaries. Embark on a journey
          where every facet resonates with the melody of unexplored
          possibilities. In the symphony of innovation, revel in the joy of
          transformation and the boisterous attachment to limitless potential.
          Join a celebration of years where every inquiry is an invitation to an
          extraordinary experience.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
