// StatsSection.js
import React from "react";
import CountUp from "react-countup";
import { FaUserTie, FaTools, FaBuilding, FaUserTag, FaDesktop } from "react-icons/fa";
import "./countup.css"; // You can style it as per your needs

const stats = [
  { icon: <FaUserTie />, label: "Clients", value: 150, suffix: "+" },
  { icon: <FaTools />, label: "Installations", value: 7000, suffix: "+" },
  { icon: <FaBuilding />, label: "Manufacturing", value: 7 },
  { icon: <FaUserTag />, label: "Employees", value: 70, suffix: "+" },
  { icon: <FaDesktop />, label: "Machine Configurations", value: 66 },
];

const Countup = () => {
  return (
    <div className="container">
        <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-box">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-label">{stat.label}</div>
          <div className="stat-value">
            <CountUp end={stat.value} duration={2} />{stat.suffix}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Countup;
