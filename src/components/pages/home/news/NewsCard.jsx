import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const NewsCard = ({ cardData = "" }) => {
  const {
    id = "",
    image_link = "",
    title = "",
    head = "",
    date = "",
    slug = "",
  } = cardData;
  const navigate = useNavigate();
  return (
    <div
      className="news-card"
      onClick={() => {
        navigate(`/news-blogs-detail/${slug}`);
      }}
    >
      <img src={image_link} alt="" className="news-img" />
      <div className="title">{title}</div>
      <div className="news-heading">{head}</div>
      <div className="date-wrapper">
        <div className="news-date">{date}</div>
        <Button className="icon-btn-wrapper">
          <BsArrowRight className="card-icon" />
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
