import React, { useEffect } from "react";
import "./article.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Article = ({ imgUrl, date, text }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="gpt3__blog-container_article" data-aos="fade-up">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
