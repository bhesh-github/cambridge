import React, { useState } from "react";
import oneImge from "../../../images/news/n7.png";
import { useNavigate } from "react-router-dom";
const Gallery = ({ gallery }) => {
  const [isSectionBar, setIsSectionBar] = useState(false);
  const [isSliderOverlay, setIsSliderOverlay] = useState(false);
  const [currentImageId, setCurrentImageId] = useState();
  const handleIsSectionBar = () => {
    if (isSectionBar === false) {
      setIsSectionBar(true);
    } else {
      setIsSectionBar(false);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="gallery">
      <div className="content">
        <h1 className="head">Gallery</h1>
        <div className="gallery-containers">
          {gallery.images.map((item) => {
            const { id = "", img = "", name = "", navigateTo = "" } = item;
            return (
              <div
                className="card-wrapper"
                key={id}
                onClick={() => {
                  setIsSliderOverlay(true);
                  navigate(`/gallery/${navigateTo}/images`);
                }}
              >
                <div
                  className="image-card"
                  style={{
                    backgroundImage: `url(${img})`,
                  }}
                ></div>
                <div className="gallery-name">
                  <div className="name">{name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
Gallery.defaultProps = {
  gallery: {
    images: [
      {
        id: 1,
        name: "Day Off",
        img: oneImge,
        navigateTo: "day-off",
      },
      {
        id: 2,
        name: "Walk Off",
        img: oneImge,
        navigateTo: "walk-off",
      },
      {
        id: 3,
        name: "Show Off",
        img: oneImge,
        navigate: "show-off",
      },
      {
        id: 4,
        name: "Day Off",
        img: oneImge,
        navigateTo: "day-off",
      },
      {
        id: 5,
        name: "Day Off",
        img: oneImge,
        navigateTo: "walk-off",
      },
      {
        id: 6,
        name: "Day Off",
        img: oneImge,
        navigateTo: "show-off",
      },
    ],
  },
};
