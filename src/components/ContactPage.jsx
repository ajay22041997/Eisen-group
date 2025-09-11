import React from "react";
import "./ContactPage.css";

const units = [
  {
    name: "Head office",
    address: "D-11/503, Sunder Sahawas Phase-2, Vadgaon Budruk, Hissa 1/1, Sinhgad Road, near Suncity Bus Stop, Pune 41105",
    phone: "+91-8551031100",
    email: "digvijaydjoshi@gmail.com>",
  },
  {
    name: "Unit 2 - Eisen Traders",
    address: "Survey No: 25/11, near Prabhat Press, Narhe, behind Dhiraj Company, Trimurti Company Lane, Narhe",
    phone: "+91-9922939695",
    email: "digvijaydjoshi@gmail.com",
  },
  {
    name: "Unit 3 - Eisen Schutz and Machine Komponenten",
    address: "Eisen Schutz and Machine Komponenten, Narhe, Pune-411041",
    phone: "+1 555-123-0003",
    email: "digvijaydjoshi@gmail.com",
  },
  {
    name: "Unit 4 - Safetech Engineering ",
    address: "S-31, MIDC Chikalthane , Chh. Sambhaji Nagar- 431006",
    phone: "+",
    email: "info.safetech@gmail.com",
  },
  {
    name: "Unit 5 - Eisen Engineering Works",
    address: "Satpur MIDC Nashik",
    phone: "+",
    email: "",
  },
  {
    name: "Shree Ganesh Enterprise",
    address: "Bhosri Pimpri-Chinchwad Pune",
    phone: "",
    email: "",
  },
  {
    name: "Eisen Innovative Technologies LLP",
    address: "Bhosri Pimpri-Chinchwad Pune",
    phone: "",
    email: "",
  },
  {
    name: "MNT Enterprise ",
    address: "Nishigandh Bunglow plot no 70 survey no 95 opposite to New India School , Kothrud, Pune  ",
    phone: "+91-9850957865 , 9834709120",
    email: "mntent294@agmail.com",
  },
];

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">Our Manufacturing Units & Location</p>

      <div className="units-grid">
        {units.map((unit, index) => (
          <div key={index} className="unit-card">
            <h2>{unit.name}</h2>
            <p><strong>Address:</strong> {unit.address}</p>
            <p><strong>Phone:</strong> {unit.phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${unit.email}`}>{unit.email}</a></p>
          </div>
        ))}
      </div>

      <div className="map-section">
        <h2>Our Locations on Map</h2>
        <iframe
          title="company-locations"
          src="https://www.google.com/maps/d/embed?mid=1abcdefg1234567890_example_map_id&ehbc=2E312F"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
