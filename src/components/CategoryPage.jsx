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
        "Bellow cover for protection of the lm rails ans guideways to ensure the smoother function and precision for the machining.",
      buttonText: "See More ",
    },
    {
      image: "/images/inclined conveyor.jpg",
      title: "Conveyor",
      description:
        "For smooth and convinient work flow in manufacturing industries conveyor system is used ",
      buttonText: "See More",
    },
    {
      image: "/images/telescopic cover.jpeg",
      title: "Telescopiccover",
      description:
        "Distinctio maxime, sapiente temporibus cum quisquam totam voluptatum asperiores.",
      buttonText: "See More",
    },
    {
      image: "/images/Rollway Cover.jpg",
      title: "Rollway Cover",
      description:
        "Distinctio maxime, sapiente temporibus cum quisquam totam voluptatum asperiores.",
      buttonText: "See More",
    },
    {
      image: "/images/Machine Enclosure.jpg",
      title: " Machine Enclosure",
      description:
        "Distinctio maxime, sapiente temporibus cum quisquam totam voluptatum asperiores.",
      buttonText: "See More",
    },
    {
      image: "/images/Apron Cover.jpg",
      title: " Apron Cover",
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
