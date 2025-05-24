import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <div className="top-section">
        <div className="features">
          <div className="feature">
            <div className="icon-circle">💡</div>
            <h3>BE THE BEST</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="feature">
            <div className="icon-circle">🎖️</div>
            <h3>GREAT SUPPORT</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="feature">
            <div className="icon-circle">📝</div>
            <h3>BE INNOVATIVE</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="feature">
            <div className="icon-circle">🖼️</div>
            <h3>INDUSTRY UPDATED</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="vision">
          <h2><span>OUR</span> VISION</h2>
          <div className="underline"></div>
          <p>To become a pioneering force in the mechanical industry by delivering innovative, reliable, and sustainable engineering solutions that empower global industries, enhance operational efficiency, and shape a future driven by precision, technology, and excellence. We envision The Eisen Group as a trusted leader recognized for setting new standards in mechanical design, manufacturing, and automation while upholding integrity, safety, and environmental responsibility at every step.

</p>
        </div>
        <div className="mission">
          <h2><span>OUR</span> MISSION</h2>
          <div className="underline"></div>
          <p>Our mission is to engineer high-performance mechanical solutions that drive industrial growth, innovation, and sustainability. We are committed to delivering superior products and services through cutting-edge technology, precision engineering, and a customer-centric approach. By fostering a culture of excellence, collaboration, and continuous improvement, The Eisen Group aims to support our clients in achieving operational efficiency and long-term success across diverse mechanical sectors.</p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
