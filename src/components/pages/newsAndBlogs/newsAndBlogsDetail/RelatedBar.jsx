import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../../images/news/n6.jpg";
import img2 from "../../../../images/news/n7.png";
import img3 from "../../../../images/news/n8.png";
import img4 from "../../../../images/news/n9.png";
import img5 from "../../../../images/news/n10.png";

const RelatedBar = ({ newsData }) => {
  const navigate = useNavigate();
  return (
    <div className="related-bar">
      <div className="bar">
        <div className="heading">Related News & Blogs</div>
        <div className="cards-wrapper">
          {newsData.slice(0, 3).map((item) => {
            const { id, image_link, title, head, date, slug } = item;
            return (
              <div
                className="related-card"
                key={id}
                onClick={() => {
                  navigate(`/news-blogs-detail/${slug}`);
                }}
              >
                <img src={image_link} alt="" className="card-img" />
                <span className="text-wrapper">
                  <div className="title">{head}</div>
                  <div className="date">{date}</div>
                </span>
              </div>
            );
          })}
        </div>
        <div
          className="see-more-btn"
          onClick={() => {
            navigate("/news-blogs");
          }}
        >
          See more
        </div>
      </div>
    </div>
  );
};

export default RelatedBar;
RelatedBar.defaultProps = {
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
