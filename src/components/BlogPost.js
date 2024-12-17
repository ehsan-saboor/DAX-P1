import React from 'react';
import image from '../assets/image.webp';

function BlogPost() {
  return (
    <article className="blog-post">
      <h2>AI Revolution in Technology</h2>
      <img 
        src={image} 
        alt="AI Revolution" 
        className="blog-image" 
      />
      <p>
        Artificial Intelligence (AI) is transforming industries and redefining innovation. From healthcare to transportation, AI is revolutionizing how we work and live.
      </p>
      <p>
        AI technologies like Machine Learning, Deep Learning, and Natural Language Processing are enabling smarter solutions and improving efficiency worldwide.
      </p>
      <p>
        The future of AI holds endless possibilities. It is enhancing human potential, solving real-world problems, and shaping a more connected, intelligent world.
      </p>
    </article>
  );
}

export default BlogPost;
