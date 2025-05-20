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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
        </div>
        <div className="mission">
          <h2><span>OUR</span> MISSION</h2>
          <div className="underline"></div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
