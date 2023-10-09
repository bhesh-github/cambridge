import React from "react";
import oneImge from "../../../images/news/n7.png";
const Gallery = () => {
  return (
    <div className="gallery">
      <div className="content">
        <h1 className="head">Gallery</h1>
        <img src={oneImge} alt="" className="head-photo" />
        <div className="box">
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
          <img src={oneImge} className="gallery1" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
