import React, { useEffect } from "react";
import Article from "../../components/article/Article";
import "./blog.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const BlogData = [
    {
      id: 1,
      url: blog02,
      date: "Sep 25, 2023",
      title: "GPT-3 and OpenAI: Shaping the Future",
    },
    {
      id: 2,
      url: blog03,
      date: "Sep 20, 2023",
      title: "Exploring GPT-3: The Future Unveiled",
    },
    {
      id: 3,
      url: blog04,
      date: "Sep 17, 2023",
      title: "The Power of GPT-3: A Future Perspective",
    },
    {
      id: 4,
      url: blog05,
      date: "Sep 10, 2023",
      title: "GPT-3 and OpenAI: A Glimpse into Tomorrow",
    },
  ];
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading" data-aos="fade-down">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA" data-aos="fade-up">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          {BlogData.map((data) => (
            <Article
              key={data.id}
              imgUrl={data.url}
              date={data.date}
              text={data.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
