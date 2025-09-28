import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import "./CategoryCard.css";

const CategoryPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      image: "https://picsum.photos/id/100/400/200",
      title: "Bellow",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio maxime.",
      buttonText: "Go Anywhere",
    },
    {
      image: "https://picsum.photos/id/1011/400/200",
      title: "Conveyor",
      description:
        "Sapiente temporibus cum quisquam totam voluptatum asperiores. Necessitatibus repellendus!",
      buttonText: "Go Anywhere",
    },
    {
      image: "https://picsum.photos/id/1025/400/200",
      title: "Telescopic-cover",
      description:
        "Distinctio maxime, sapiente temporibus cum quisquam totam voluptatum asperiores.",
      buttonText: "Go Anywhere",
    },
  ];

  return (
    <div className="container">
      <div className="card-container">
        {categories.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </div>

      {/* View More Button */}
      <div className="view-more-container">
        <button
          className="view-more-btn"
          onClick={() => navigate("/products")}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
