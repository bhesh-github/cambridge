import React from "react";
import NewsCard from "./NewsCard";
import img1 from "../../../images/news/n6.jpg";
import img2 from "../../../images/news/n7.png";
import img3 from "../../../images/news/n8.png";
import img4 from "../../../images/news/n9.png";
import img5 from "../../../images/news/n10.png";

const NewsAndBlogs = ({ newsData }) => {
  return (
    <div className="news-and-blogs">
      <div className="content">
        <h1 className="head">News And Blogs</h1>
        <div className="cards-wrapper">
          {newsData && newsData.map((item) => <NewsCard cardData={item} />)}
        </div>
      </div>
    </div>
  );
};

export default NewsAndBlogs;
NewsAndBlogs.defaultProps = {
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
