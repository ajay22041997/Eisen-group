import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, name, price }) => {
  return (
    <div classname= "container">
      <div className="product-card">
      <img src={image} alt={name} className="product-img" />
      <h4 className="product-name">{name}</h4>
      
  
     
    </div>
    

    </div>
    
    
    
  );
};

export default ProductCard;
