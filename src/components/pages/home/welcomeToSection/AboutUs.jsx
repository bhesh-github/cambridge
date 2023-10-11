import React from "react";
import img from "../../../../images/aboutUs/meeting.png";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="img-desc-wrapper">
        <div className="icon" data-aos="zoom-in">
          <img src={img} alt="" />
        </div>
        <div className="desc" data-aos="fade-left">
          <h1 className="head">
            Welcome to Cambridge Instutite <br /> of Technology
          </h1>
          <p className="message">
            We are the firm that has demonstrated a ceaseless commitment to the
            professional development of its personnel, resources and facilities.
            At Cambridge Institute of Technology, we assure you reliable study
            visa assistance and coaching for language ability tests IELTS, PTE,
            GRE and TOEFL. We have strong connection with top universities and
            colleges in Australia, UK, Canada, New Zealand, USA, Europe, Japan
            and India. Cambridge institute of Technology have a team of
            experienced and dedicated counselors who handle every enquiry with
            care and make everything clear before students as well their
            parents.
          </p>
          <button
            className="abt-btn"
            onClick={() => {
              navigate("about-us");
            }}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
