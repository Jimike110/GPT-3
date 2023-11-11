import React, { useEffect } from "react";
import "./header.css";
import "aos/dist/aos.css";
import AOS from "aos";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      className="gpt3__header section__padding"
      data-aos="fade-up-right"
      id="home"
    >
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Explore the limitless potential of GPT-3 and create extraordinary
          experiences. Join a community of innovators shaping the future.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 enthusiasts requested access in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="artificial intelligence" />
      </div>
    </div>
  );
};

export default Header;
