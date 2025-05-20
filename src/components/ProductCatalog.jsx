import React, { useState } from 'react';
import './ProductCatalog.css';

const kits = [
  {
    title: "KIT 1 - Single Axle 1 Ton",
    rating: "Our Bellows Covers offer reliable, accordion-style shielding for linear guides, ball screws, and other precision machine components. Designed to compress and expand with your machine’s movement, bellows provide excellent protection from dust, metal chips, coolant splash, and accidental contact—extending the lifespan of your equipment.",
    items: [
      "Heavy-Duty Steel Construction – Built to withstand harsh workshop environments and resist impact.",
      "Space-Saving Design – Slides smoothly like a telescope for full extension and compact retraction.",
      "Debris & Coolant Protection – Keeps sensitive machine parts clean and running smoothly.",
      "Smooth Operation – Designed to move effortlessly with your machine’s axis.",
      "Custom Sizes Available – Can be tailored to fit your specific equipment needs.",
      
    ],
    image: "/images/kit1.png"
  },
  {
    title: "KIT 2 - Single Axle 1 Ton",
    rating: "Our Bellows Covers offer reliable, accordion-style shielding for linear guides, ball screws, and other precision machine components. Designed to compress and expand with your machine’s movement, bellows provide excellent protection from dust, metal chips, coolant splash, and accidental contact—extending the lifespan of your equipment.",
    items: [
      "Flexible Design – Expands and contracts with your machine’s motion.",
      "Durable Materials – Available in fabric-coated, rubberized, or PVC materials for long-lasting use.",
      "Lightweight & Low-Profile – Ideal for applications with limited space or high-speed movement.",
      "Custom Shapes & Sizes – Square, round, rectangular, or custom profiles to fit your exact needs.",
      "Mounting Options – Flange, zipper, Velcro, or metal frame options available.",
      "2 x LM Holden Tapered Bearing Sets (2 x 11910/49, 2 x 67010/48)",
      "1 x Coupling Multi Hole with Plate And Bolts (Coupling rated to 2000KG)"
    ],
    image: "/images/kit2.png"
  },
  {
    title: "KIT 3 - Tandem Hydraulic 2 Tonne",
    rating: "2000KG Rated - Eye to Slipper Springs Hydraulic Kit",
    items: [
      "4 x Leaf Slipper Spring 45mm Wide",
      "1 x Spring Fitting Kit (2 x Front Hanger, 2 x Rear Hanger, 2 x Deep Hanger, 4 x 3.5inch Bolt)",
      "2 x Lazy Hub with Nuts, Dust Cap and Seals (Available in Landcruiser, Ford, Holden HT, Holden HQ)",
      "2 x Electric Backing Plates 10 inch with Brake Shoes",
      "2 x Mount Plates to Suit Axle and Hydraulic Backing Plates & Nuts",
      "2 x Hub Assembly (Available in Landcruiser 6 Stud, Ford, Holden HT, Holden HQ)",
      "1 x Axle Fitting Kit (8 x 40mm Ubolts, 4 x Axle Pads, 4 x Slotted Fish Plates)",
      "4 x LM Holden Tapered Bearing Sets (4 x 11910/49, 4 x 67010/48)",
      "1 x Hydraulic Over Ride Coupling with Master Cylinder and Bracket"
    ],
    image: "/images/kit3.png"
  },
  {
    title: "KIT 4 - Tandem Electric 2 Tonne",
    rating: "2000KG Rated - Tandem Electric Slipper Springs",
    items: [
      "4 x 6 Leaf x 45mm Wide to Slipper Springs",
      "1 x Tandem Spring Fitting Kit (2 x Front Hanger, 2 x Rear Hanger, 2 x Deep Hanger, 8 x Bolt 2.5\")",
      "2 x Lazy Hubs with Nuts, Dust Cap and Seals (Available in Landcruiser 6 Stud, Ford, Holden HT, Holden HQ)",
      "2 x Electric Backing Plates 10 Inch",
      "2 x Mount Backing Plates to Suit Axle and Hydraulic Plates & Nuts",
      "2 x Hub Assembly (Available in Landcruiser 6 Stud, Ford, Holden HT, Holden HQ)",
      "1 x Axle Fitting Kit (8 x 50mm Ubolts, 4 x Axle Pads, 4 x Slotted Flash Plates)",
      "4 x LM Holden Tapered Bearing Sets (4 x L68149, 4 x L25580)",
      "1 x Coupling Electric Rated 3.5 Tonne Rated"
    ],
    image: "/images/kit4.png"
  },
  {
    title: "KIT 5 - Tandem Hydraulic 2 Tonne",
    rating: "2000KG Rated - Kit 5 Tandem Hydraulic Rocker Roller",
    items: [
      "1 x Leaf Rocker Roller 60mm Wide with hangers and Greasable Bolts",
      "2 x Drum w/ Nuts, Dust Cap and Seals (Available in Landcruiser 6 Stud, Ford, Holden HT, Holden HQ)",
      "2 x Mount Backing Plates 10 Inch with Brake Shoes",
      "2 x Mount Plates to Suit Axle and Hydraulic Backing Plates & Nuts",
      "2 x Hub Assembly (Available in Landcruiser 6 Stud, Ford, Holden HT, Holden HQ)",
      "4 x LM Holden Tapered Bearing Sets (4 x 11910/49, 4 x 67010/48)",
      "1 x Hydraulic Over Ride Coupling With Master Cylinder and Bracket",
      "4 x Bolts 4.5\" Hi-Tensile"
    ],
    image: "/images/kit5.png"
  },
  {
    title: "KIT 6 - Tandem Electric 2 Tonne",
    rating: "2000KG Rated - Tandem Electric Rocker Roller",
    items: [
      "1 x Leaf Rocker Roller 60mm Wide with hangers and Greasable Bolts",
      "2 x Drum w/ Nuts, Dust Cap and Seals (Available in Landcruiser 6 Stud, Ford, Holden HT, Holden HQ)",
      "2 x Electric Backing Plates 10 Inch with Brake Shoes and Magnets",
      "2 x Mount Backing Plates to Suit Axle and Electric Plates & Nuts",
      "2 x Hub Assembly (Available in Landcruiser 6 Stud, Ford, Holden HT, Holden HQ)",
      "1 x Axle Fitting Kit (8 x 45mm Ubolts, 4 x Axle Pads, 4 x Slotted Flash Plates)",
      "4 x LM Holden Tapered Bearing Sets (4 x L68149, 4 x L25580)",
      "4 x Bolts 4.5\" Hi-Tensile",
      "1 x Brake Cable Kit (1 x Brake Cable BTM, 4 x Cable Bolts, 1 x Brake Adjuster)"
    ],
    image: "/images/kit6.png"
  }
];
const ProductCatalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const kitsPerPage = 3;

  const totalPages = Math.ceil(kits.length / kitsPerPage);
  const startIndex = (currentPage - 1) * kitsPerPage;
  const currentKits = kits.slice(startIndex, startIndex + kitsPerPage);

  const changePage = (pageNum) => setCurrentPage(pageNum);

  return (
    <div className="catalog-container">
      <h2 className="catalog-title">Complete Trailer Kits</h2>
      <div className="kit-grid">
        {currentKits.map((kit, index) => (
          <div className="kit-card" key={index}>
            <img src={kit.image} alt={kit.title} className="kit-image" />
            <h3 className="kit-title">{kit.title}</h3>
            <p className="kit-rating">{kit.rating}</p>
            <ul className="kit-items">
              {kit.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => changePage(i + 1)}
            className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
