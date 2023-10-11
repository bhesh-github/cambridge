import React from "react";
import NewsCard from "./NewsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../../images/news/n6.jpg";
import img2 from "../../../../images/news/n7.png";
import img3 from "../../../../images/news/n8.png";
import img4 from "../../../../images/news/n9.png";
import img5 from "../../../../images/news/n10.png";

const NewsCarousel = ({ newsData }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1235 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1235, min: 1165 },
      items: 2.8,
    },
    a: {
      breakpoint: { max: 1165, min: 1090 },
      items: 2.6,
    },
    b: {
      breakpoint: { max: 1090, min: 1020 },
      items: 2.4,
    },
    c: {
      breakpoint: { max: 1020, min: 970 },
      items: 2.3,
    },
    d: {
      breakpoint: { max: 970, min: 930 },
      items: 2.2,
    },
    e: {
      breakpoint: { max: 930, min: 855 },
      items: 2,
    },
    f: {
      breakpoint: { max: 855, min: 785 },
      items: 1.8,
    },
    g: {
      breakpoint: { max: 785, min: 740 },
      items: 1.7,
    },
    h: {
      breakpoint: { max: 740, min: 700 },
      items: 1.6,
    },
    i: {
      breakpoint: { max: 700, min: 665 },
      items: 1.5,
    },
    j: {
      breakpoint: { max: 665, min: 625 },
      items: 1.4,
    },
    k: {
      breakpoint: { max: 625, min: 585 },
      items: 1.3,
    },
    l: {
      breakpoint: { max: 585, min: 550 },
      items: 1.2,
    },
    m: {
      breakpoint: { max: 550, min: 510 },
      items: 1.2,
    },
    n: {
      breakpoint: { max: 510, min: 490 },
      items: 1.1,
    },
    o: {
      breakpoint: { max: 490, min: 445 },
      items: 1.1,
    },
    p: {
      breakpoint: { max: 445, min: 420 },
      items: 1,
    },
    q: {
      breakpoint: { max: 420, min: 400 },
      items: 1,
    },
  };
  const carouselSettings = {
    responsive: responsive,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="main-news">
      <div className="in-wrapper">
        <div className="testi-card">
          <h1 className="news-head">News and Blogs</h1>
          <p className="news-text">
            Explore the latest from our students and our updates in our blog,
            news, and events section.
          </p>
        </div>
        <div className="inner-cards" data-aos="fade-left">
          {/* <NewsCard /> */}
          <Carousel responsive={responsive} {...carouselSettings}>
            {newsData && newsData.map((item) => <NewsCard cardData={item} />)}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;

NewsCarousel.defaultProps = {
  newsData: [
    {
      id: 0,
      image_link: img1,
      title: "News and Events",
      head: "A special session for studying in Australia...",
      date: "Sepetember 29, 2023",
      slug: "special-session-for-studing-in-australia",
    },
    {
      id: 1,
      image_link: img4,
      title: "News and Events",
      head: "Guiding the path for students to obtain their visas.",
      date: "Sepetember 10, 2023",
      slug: "guiding-the-path-for-students",
    },
    {
      id: 2,
      image_link: img5,
      title: "News and Events",
      head: "Individualized one-on-one sessions.",
      date: "Sepetember 05, 2023",
      slug: "individualized-one-on-one-sessions",
    },
    {
      id: 3,
      image_link: img2,
      title: "News and Events",
      head: "We've recently partnered with a new university.",
      date: "August 27, 2023",
      slug: "recently-partnered-with-a-new-university",
    },
    {
      id: 4,
      image_link: img3,
      title: "News and Events",
      head: "We have proudly received a certificate from a top-notch consultancy.",
      date: "August 15, 2023",
      slug: "proudly-received-a-certificate-from-a-top-notch-consultancy",
    },
  ],
};
