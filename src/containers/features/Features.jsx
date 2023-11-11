import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Elevating ChatGPT Trustworthiness',
    text: 'It continuously refines its responses, providing a rich conversational experience. Users witness a seamless journey, fostering trust and reliability.',
  },
  {
    title: 'Embrace Proactive Engagement with ChatGPT',
    text: 'ChatGPT sympathetically engages in diverse conversations. Uncommonly, it offers assistance that\'s not just occasional but consistently sufficient.',
  },
  {
    title: 'Unlocking Meaningful Conversations',
    text: 'Guided by the quest for elegance in communication, ChatGPT leads discussions with a refined touch, contributing to conversations in a chief and noteworthy manner.',
  },
  {
    title: 'Pioneering Legal Dynamics',
    text: 'In the legal realm, ChatGPT exhibits prowess akin to a seasoned practitioner. Its influence extends, much like the reach of law in a county.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;