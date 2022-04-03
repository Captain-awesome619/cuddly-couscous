import React from "react";
import "../styles/sections/Blogs.scss";
import Title from "../components/TItle";
import Blog from "../components/Blog";
import Button from "../components/Button";
import BlogImage1 from "C:/Users/lord_awesome/the multi-purpose site/multi-app/src/assets/blogImage1.jpg";
import BlogImage2 from "C:/Users/lord_awesome/the multi-purpose site/multi-app/src/assets/blogImage2.jpg";
import BlogImage3 from "C:/Users/lord_awesome/the multi-purpose site/multi-app/src/assets/blogImage3.jpg";
import {textAnimation, cardAnimation} from "../Animation"
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";



function Blogs() {
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Blogs" color="pink" lineCenter={true} />
          <p>Insights and advice from our experts.</p>
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            title="Top list of Mistakes to Avoid During MVP Development"
            subTitle="When there appears an idea to create a startup, have to take into
            account all the risks you will face and evalute them thoughtfullu.
            Also as a rule..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage2}
            title="A Day in the life on an Engineering Manager"
            subTitle="During the eight years I spent as an engineering manager, I regularly tracked how I spent my time. As a startup engineering manager, I was ... "
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage3}
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            variants={cardAnimation}
            animate={controls}
          />
        </div>
        <div
          className="button-container"
          variants={textAnimation}
          animate={controls}
        >
          <Button content="View All" />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
