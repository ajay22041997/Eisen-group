import React from "react";
import CatogaryCard1 from ".//CatogaryCard1";
import "./catogaries.css";

const catogaries = [
  { name: "Telescopic cover", img: "/images/img1.jpeg" },
  { name: "Telescopic cover", img: "/images/img2.jpeg" },
  { name: "Telescopic cover", img: "/images/img3.jpeg" },
  { name: "Telescopic cover", img: "/images/img4.jpeg" },
  { name: "Telescopic cover", img: "/images/img5.jpeg" },
  { name: "Telescopic cover", img: "/images/img6.jpeg" },
  { name: "Telescopic cover", img: "/images/img7.jpeg" },

  { name: "Telescopic cover", img: "/images/img8.jpeg" },
  { name: "Telescopic cover", img: "/images/img9.jpeg" },
  { name: "Telescopic cover", img: "/images/img10.jpeg" },
  { name: "Telescopic cover", img: "/images/img11.jpeg" },
  { name: "Telescopic cover", img: "/images/img12.jpeg" },
  { name: "Telescopic cover", img: "/images/img13.jpeg" },
  { name: "Telescopic cover", img: "/images/img14.jpeg" },
  { name: "Telescopic cover", img: "/images/img15.jpeg" },
  { name: "Telescopic cover", img: "/images/img16.jpeg" },
  { name: "Telescopic cover", img: "/images/img17.jpeg" },
  { name: "Telescopic cover", img: "/images/img18.jpeg" },
  { name: "Telescopic cover", img: "/images/img19.jpeg" },

  { name: "Telescopic cover", img: "/images/img20.jpeg" },
  { name: "Telescopic cover", img: "/images/img21.jpeg" },
  { name: "Telescopic cover", img: "/images/img22.jpeg" },
  { name: "Telescopic cover", img: "/images/img23.jpeg" },
  { name: "Telescopic cover", img: "/images/img24.jpeg" },
  { name: "Telescopic cover", img: "/images/img25.jpeg" },
  { name: "Telescopic cover", img: "/images/img26.jpeg" },
  { name: "Telescopic cover", img: "/images/img27.jpeg" },
  { name: "Telescopic cover", img: "/images/img28.jpeg" },
  { name: "Telescopic cover", img: "/images/img29.jpeg" },
  { name: "Telescopic cover", img: "/images/img30.jpeg" },
  { name: "Telescopic cover", img: "/images/img31.jpeg" },

  { name: "Telescopic cover", img: "/images/img32.jpeg" },
  { name: "Telescopic cover", img: "/images/img33.jpeg" },
  { name: "Telescopic cover", img: "/images/img34.jpeg" },
  { name: "Telescopic cover", img: "/images/img35.jpeg" },
  { name: "Telescopic cover", img: "/images/img36.jpeg" },
  
  
];

const Catogaries = () => {
  return (
    <div className="container ">
      <section className="categories">
      <h2>CATEGORIES</h2>
      <div className="categories-grid">
        {catogaries.map((c, i) => (
          <CatogaryCard1 key={i} name={c.name} img={c.img} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default Catogaries;
