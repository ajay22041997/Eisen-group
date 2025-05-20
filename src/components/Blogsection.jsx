import React from "react";
import "./BlogSection.css";

const blogPosts = [
  {
    id: 1,
    title: "Automation will lead the manufacturin industry in upcoming decade. But why ?",
    date: "March 31, 2025",
    category: "Automation",
    image: "/images/blog1.jpg",
    description:
      "Want to learn maore about this !",
  },
  {
    id: 2,
    title: "How engineering design will laed the manufacturing industry. ",
    date: "May 31, 2020",
    category: "Design",
    image: "/images/blog2.jpg",
    description:
      "Want to lear maore about this !.",
  },
  {
    id: 3,
    title: "Make supply chain even faster with the automated conveyor system.",
    date: "May 31, 2020",
    category: "Logistic",
    image: "/images/blog3.jpg",
    description:
      "Want to lear maore about this !.",
  },
];

export default function Blogsection() {
  return (
    <section className="blog-section">
        <div className="container">
        <h2 className="blog-heading">
        LATEST <span>NEWS</span>
      </h2>
      <p className="blog-subheading">
        Get update from around the world and get updated on time to time.
      </p>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-img" />
            <div className="blog-content">
              <small className="blog-meta">
                <span className="dot"></span> {post.date} | {post.category}
              </small>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href="#read" className="read-more">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
        </div>
      
    </section>
  );
}
