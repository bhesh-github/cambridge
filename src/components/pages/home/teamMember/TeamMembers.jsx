import React from "react";
import MemberCard from "../../../forAll/MemberCard";
import fotoA from "../../../../images/memberPhoto/foto0.jpg";
import fotoB from "../../../../images/memberPhoto/foto1.jpg";
import fotoC from "../../../../images/memberPhoto/foto2.jpg";
import fotoD from "../../../../images/memberPhoto/foto3.jpg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const TeamMembers = ({ teamMembers }) => {
  const navigate = useNavigate();
  const mCard =
    teamMembers &&
    teamMembers
      .slice(0, 4)
      .map((item) => <MemberCard cardInfo={item && item} />);

  return (
    <div className="team-members-page">
      <div className="in-wrapper">
        <div className="team-head">
          <h1 className="news-head">Our Team Members</h1>
          <p className="news-text">
            We're here, a team of experts guiding your bright future.
          </p>
        </div>
        <div className="cards-wrapper" data-aos="fade-right">
          {mCard && mCard}
        </div>
      </div>
      <Button
        className="seebtn"
        onClick={() => {
          setTimeout(() => {
            navigate("/members");
          }, 250);
        }}
      >
        See All
      </Button>
    </div>
  );
};

export default TeamMembers;

TeamMembers.defaultProps = {
  teamMembers: [
    {
      id: 0,
      image: fotoA,
      name: "Sisir Simkhada ",
      position: "CEO",
      socialLinks: ["", "", ""],
    },
    {
      id: 1,
      image: fotoC,
      name: "Nirjana Malla Thakuri",
      position: "Manager",
      socialLinks: ["", "", ""],
    },

    {
      id: 2,
      image: fotoB,
      name: "Naryan Kaji",
      position: "Document Head",
      socialLinks: ["", "", ""],
    },
    {
      id: 3,
      image: fotoD,
      name: "Jack Chhetri",
      position: "Senior counsler ",
      socialLinks: ["", "", ""],
    },
    // {
    //   id: 4,
    //   image: fotoE,
    //   name: "Gowen Walter",
    //   position: "Developer",
    //   socialLinks: ["", "", ""],
    // },
    // {
    //   id: 5,
    //   image: fotoF,
    //   name: "Harry Styles",
    //   position: "Software Engineer",
    //   socialLinks: ["", "", ""],
    // },

    // {
    //   id: 6,
    //   image: fotoA,
    //   name: "Harriet Watson",
    //   position: "UI/UX Designer",
    //   socialLinks: ["", "", ""],
    // },

    // {
    //   id: 7,
    //   image: fotoC,
    //   name: "Robort Winner",
    //   position: "UI/UX Designer",
    //   socialLinks: ["", "", ""],
    // },
  ],
};
