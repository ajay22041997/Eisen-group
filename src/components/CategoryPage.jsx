import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import "./CategoryCard.css";

const CategoryPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      image: "/images/Bellow.png",
      title: "Bellow",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio maxime.",
      buttonText: "See More ",
    },
    {
      image: "/images/inclined conveyor.jpg",
      title: "Conveyor",
      description:
        "Sapiente temporibus cum quisquam totam voluptatum asperiores. Necessitatibus repellendus!",
      buttonText: "See More",
    },
    {
      image: "/images/telescopic cover.jpeg",
      title: "Telescopic-cover",
      description:
        "Distinctio maxime, sapiente temporibus cum quisquam totam voluptatum asperiores.",
      buttonText: "See More",
    },
    {
      image: "/images/telescopic cover.jpeg",
      title: "Telescopic-cover",
      description:
        "Distinctio maxime, sapiente temporibus cum quisquam totam voluptatum asperiores.",
      buttonText: "See More",
    },
    {
      image: "/images/telescopic cover.jpeg",
      title: "Telescopic-cover",
      description:
        "Distinctio maxime, sapiente temporibus cum quisquam totam voluptatum asperiores.",
      buttonText: "See More",
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
