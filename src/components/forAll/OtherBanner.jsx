import React from "react";

const OtherBanner = ({ bannerImg }) => {
  return (
    <div className="other-banner">
      <img src={bannerImg && bannerImg} alt="" className="banner-img" />
    </div>
  );
};

export default OtherBanner;
