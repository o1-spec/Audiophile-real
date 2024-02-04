/* eslint-disable no-unused-vars */
import React from "react";

function AudioInfo() {
  return (
    <div className="section-audio">
      <div className="audio-info">
        <div className="audio-text">
          <h4>
            Bringing you the <span>best</span> audio gear
          </h4>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="audio-img">
          <img className="audio-desktop" src="./Images/Bitmap_(3).png" alt="" />
          <img className="audio-none" src="./Images/Bitmap_(4).png" alt="" />
          <img className="mobile-audio" src="./Images/Bitmap_(10).png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AudioInfo;