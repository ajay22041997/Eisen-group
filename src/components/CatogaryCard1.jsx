import React from "react";
import "./catogaries.css";

const CatogaryCard1 = ({ name, img }) => {
  return (
<div>
  <div className="category-card">
      <img src={img} alt={name} />
      <div className="category-overlay">
        <h3>{name}</h3>
      </div>
    </div>
</div>
    
  );
};

export default CatogaryCard1;
