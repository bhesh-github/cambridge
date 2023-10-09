import React from "react";
import HighlightCard from "./HighlightCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { AiOutlinePlayCircle } from "react-icons/ai";
// import { PiTelevision } from "react-icons/pi";
// import { LuNewspaper } from "react-icons/lu";
import aus from "../../../../images/studyAbroad/aus.png";
import can from "../../../../images/studyAbroad/cad.png";
import usa from "../../../../images/studyAbroad/usa.png";
import uk from "../../../../images/studyAbroad/uk.png";
import japan from "../../../../images/studyAbroad/japan.png";
import india from "../../../../images/studyAbroad/india.png";
import dubai from "../../../../images/studyAbroad/dubai.png";

// import { AirlineSeatFlatAngledSharp } from "@mui/icons-material";

const Highlight = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    a: {
      breakpoint: { max: 1065, min: 950 },
      items: 3.5,
    },
    b: {
      breakpoint: { max: 950, min: 820 },
      items: 3.5,
    },
    c: {
      breakpoint: { max: 820, min: 0 },
      items: 3.5,
    },
    d: {
      breakpoint: { max: 690, min: 480 },
      items: 3.2,
    },
    e: {
      breakpoint: { max: 480, min: 465 },
      items: 3.1,
    },
    f: {
      breakpoint: { max: 465, min: 435 },
      items: 2.8,
    },
    g: {
      breakpoint: { max: 435, min: 340 },
      items: 2.4,
    },
    h: {
      breakpoint: { max: 340, min: 0 },
      items: 2.1,
    },
  };
  const carouselSettings = {
    responsive: responsive,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 4000,
    infinite: true,
    // speed: 100,
    transitionDuration: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const highlightDetails = [
    // {

    {
      id: 0,
      flagImg: aus,
      // desc: "Australia",
    },
    {
      id: 1,
      flagImg: can,
      // desc: "Canada",
    },
    {
      id: 2,
      flagImg: usa,
      // desc: "USA",
    },
    {
      id: 0,
      flagImg: uk,
      // desc: "Australia",
    },
  ];

  const cards = highlightDetails.map((item) => (
    <HighlightCard key={item.id} highlightDetails={item} />
  ));

  return (
    <div className="highlight">
      <h1 className="heading">Study Abroad</h1>
      <p className="highlight-desc">
        We offer a plethora of study abroad options.
      </p>
      <div className="class-wrapper" data-aos="fade-up">
        <Carousel responsive={responsive} {...carouselSettings}>
          {cards}
        </Carousel>
      </div>
    </div>
  );
};

export default Highlight;
