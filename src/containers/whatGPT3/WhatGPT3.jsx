import React, { useEffect } from "react";
import Feature from "../../components/feature/Feature";
import "./whatgpt3.css";
import "aos/dist/aos.css";
import AOS from "aos";

const WhatGPT3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="wgpt3">
      <div className="gpt3__whatgpt3 section__margin" data-aos="flip-down">
        <div className="gpt3__whatgpt3-feature">
          <Feature
            title="What is GPT-3"
            text="Get insights from our vast library covering chatbots, knowledgebase, education, and more. Explore the possibilities that GPT-3 offers."
          />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore the Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature
            title="Chatbots"
            text="Engage in delightful conversations with our chatbots for a seamless experience."
          />
          <Feature
            title="Knowledgebase"
            text="The impossible becomes possible within our carefully curated collection of articles."
          />
          <Feature
            title="Education"
            text="Discover a wealth of knowledge. Our commitment to friendly interactions reflects in every aspect."
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
