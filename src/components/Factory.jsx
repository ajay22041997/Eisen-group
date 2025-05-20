import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./companyslider.css";
import bfl from '../logos/bfl.png'
import kirloskar from '../logos/kirloskar.png'
import bbm from '../logos/bbm.png'
import bajaj from '../logos/bajaj.png'
import hira from '../logos/hira.jpeg'
import mm from '../logos/mm.png'
import volkswagen from '../logos/volkswagen.png'
import cummins from '../logos/cummins.png'
import sparkonix from '../logos/sparkonix.png'
import grindmaster from '../logos/grindmaster.png'
import gestamp from '../logos/gestamp.png'
import thyssenkrup from '../logos/thyssenkrup.png'
import thermax from '../logos/thermax.png'
import apt from '../logos/apt.png'
import randack from '../logos/randack.png'
import inductotherm from '../logos/inductotherm.png'
import SFS from '../logos/SFS.svg'
import kinetic from '../logos/kinetic.png'
import dran from '../logos/dran.jpg'
import electro from '../logos/electro.png'
import phillps from '../logos/phillps.webp'
import siddheshwar from '../logos/siddheshwar.png'
import girme from '../logos/girme.png'
import hytech from '../logos/hytech.png'
import tata from '../logos/tata.png'
import lnt from '../logos/lnt.webp'
import electronica from '../logos/electronica.svg'
import gudel from '../logos/gudel.png'




const logos = [
  { src: bfl, alt: "BFL", link: "https://www.posco.com" },
  { src: kirloskar, alt: "Kirloskar", alt: "Kirloskar", link: "https://www.ssi-steel.com" },
  { src: bbm, alt: "BBM", link: "https://www.tcrss.com" },
  { src: bajaj, alt: "BAJAJ", link: "https://www.tcrss.com" },
  { src: hira, alt: "HIRA", link: "https://www.tcrss.com" },
  { src: grindmaster, alt: "GRINDMASTER", link: "https://www.tcrss.com" },
  { src: gestamp, alt: "GESTAMP", link: "https://www.tcrss.com" },
  { src: mm, alt: "MM", link: "https://www.tcrss.com" },
  { src: volkswagen, alt: "VG", link: "https://www.tcrss.com" },
  { src: cummins, alt: "Cummins", link: "https://www.tcrss.com" },
  { src: sparkonix, alt: "sparkonix", link: "https://www.tcrss.com" },
  { src: thyssenkrup, alt: "THYSSENKRUP", link: "https://www.tcrss.com" },
  { src: thermax, alt: "THERMAX", link: "https://www.tcrss.com" },
  { src: apt, alt: "APT", link: "https://www.tcrss.com" },
  { src: randack, alt: "RANDACK", link: "https://www.tcrss.com" },
  { src: inductotherm, alt: "INDUCTOTHERM", link: "https://www.tcrss.com" },
  { src: SFS, alt: "SFS", link: "https://www.tcrss.com" },
  { src: kinetic, alt: "KINETIC", link: "https://www.tcrss.com" },
  { src: dran, alt: "DRAN", link: "https://www.tcrss.com" },
  { src: electro, alt: "ELECTRO", link: "https://www.tcrss.com" },
  { src: phillps, alt: "PHILLPS", link: "https://www.tcrss.com" },
  { src: siddheshwar, alt: "SIDDHESHWAR", link: "https://www.tcrss.com" },
  { src: girme, alt: "GIRME", link: "https://www.tcrss.com" },
  { src: tata, alt: "TATA", link: "https://www.tcrss.com" },
  { src: hytech, alt: "HYTECH", link: "https://www.tcrss.com" },
  { src: lnt, alt: "LNT", link: "https://www.tcrss.com" },
  { src: electronica, alt: "ELECTRONICA", link: "https://www.tcrss.com" },
  { src: gudel, alt: "gudel", link: "https://www.tcrss.com" },
  
 
];

const Factory = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 8000,
        rows:2, // show 2 lines
        slidesPerRow: 3, // 3 logos per row (adjust as needed)
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
      };

  return (
    <div className="container">
<div className="trusted-container">
      <h2 className="trusted-title">Trusted By 150 + companies worldwide</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <a href={logo.link} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    
  );
};

export default Factory;
