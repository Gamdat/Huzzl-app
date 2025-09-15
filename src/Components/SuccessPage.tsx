import React from "react";
import "./SuccessPage.css";

const SuccessPage: React.FC = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <img src="/images/Logo.png"  alt="Huzzl Logo" className="huzzl-logo" />
        <div className="checkmark"><span>✔</span></div>

        <h2>Your account has <br/>been setup!</h2>
        <p>
          We've been busy behind the scenes, making sure your huzzl experience
          is as smooth and authentic as it should be. Here's what we've done:
          Squashed pesky bugs, so nothing gets in the way of your real moments.
        </p>
        <button className="explore-btn">Explore</button>
      </div>
    </div>
  );
};

export default SuccessPage;

