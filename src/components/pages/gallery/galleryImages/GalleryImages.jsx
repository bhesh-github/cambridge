import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { lazy } from "react";
// import axios from "axios";
import GalleryCarousel from "./GalleryCarousel";
import { VscClose } from "react-icons/vsc";
import oneImg from "../../../../images/news/n7.png";

// const InnerBanner = lazy(() => import("../../forAll/InnerBanner"));

const GalleryImages = ({ images }) => {
  const [imagesApi, setImagesApi] = useState();

  const { imageSlug = "" } = useParams();
  const [isSliderOverlay, setIsSliderOverlay] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState();

  const innerBannerInfo = {
    pageName: "Images",
    // title: `${
    //   selectedContentDetail &&
    //   selectedContentDetail.slugSublink &&
    //   selectedContentDetail.slugSublink.replace("-", " ")
    // }`,
  };
  // const fetchImages = async (image) => {
  //     const res = await axios.get(
  //         import.meta.env.VITE_API_BASE_URL +
  //             `/api/gallery/${image ? image : imageSlug && imageSlug}/images`
  //     );
  //     const data = await res.data;
  //     setImagesApi(data);
  // };

  // useEffect(() => {
  //     fetchImages(imageSlug && imageSlug);
  // }, []);

  return (
    <div className="gallery-images-page">
      {/* <InnerBanner innerBannerInfo={innerBannerInfo} /> */}
      <h1 className="gallery-head">Gallery Images</h1>
      <div className="images-wrapper">
        {images &&
          images.map((item, idx) => {
            return (
              <div
                className="card-wrapper"
                key={idx}
                onClick={() => {
                  setIsSliderOverlay(true);
                  setCurrentImageIdx(idx);
                }}
              >
                <div
                  className="image-card"
                  style={{
                    backgroundImage: `url(${item})`,
                  }}
                ></div>
              </div>
            );
          })}
      </div>
      {isSliderOverlay && (
        <div className="overlay-outer">
          <div
            className="slider-overlay"
            onClick={() => {
              setIsSliderOverlay(false);
            }}
          >
            <div className="btn-wrapper">
              <VscClose
                className="close-btn"
                onClick={() => {
                  setIsSliderOverlay(false);
                }}
              />
            </div>
          </div>
          <div className="silder-comp">
            <GalleryCarousel
              currentImageIdx={currentImageIdx && currentImageIdx}
              imagesList={images && images}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImages;
GalleryImages.defaultProps = {
  images: [oneImg, oneImg, oneImg, oneImg, oneImg, oneImg, oneImg],
};
