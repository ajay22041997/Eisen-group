import React from "react";

import "./ProductCatalog.css";

const products = [
  {
    title: "HINGED BELT CONVEYOR",
    model: "EISEN MAKE ",
    description: "HINGED BELT CONVEYOR FOR MAKE CONVEYOING EASY",
    image: "/images/img13.jpeg",       // Place this image in /public/images
    
    specs: [
      "Power:3 phase 440 volts TGPL make motor",
      "Control Panel: Fully Automatic",
      "Material:  SS 304",
      
      
    ],
  },
  // Add more products below as needed
];

const ProductCatalog = () => {
  return (
    <div className="catalogue-wrapper container">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-header">
            <h2>{product.title}</h2>
            <h4>{product.model}</h4>
            <p>{product.description}</p>
          </div>
          <div className="product-body">
            <div className="product-images">
              <img src={product.image} alt="Machine" className="main-img" />
             
            </div>
            <div className="product-specs">
              <h5>Technical Specifications:</h5>
              <ul>
                {product.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
              <div className="buttons">
                <a href="/catlogue.pdf" download className="btn">
  Download Brochure
</a>
                <button className="btn btn-alt">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default ProductCatalog;
