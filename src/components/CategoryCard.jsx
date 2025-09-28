import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ image, title, description, buttonText }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <button
          className="card-btn"
          onClick={() => navigate(`/products/${title.toLowerCase()}`)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
