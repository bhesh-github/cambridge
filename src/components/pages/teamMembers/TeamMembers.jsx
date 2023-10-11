import React from "react";
import fotoA from "../../../images/memberPhoto/foto0.jpg";
import fotoB from "../../../images/memberPhoto/foto1.jpg";
import fotoC from "../../../images/memberPhoto/foto2.jpg";
import fotoD from "../../../images/memberPhoto/foto3.jpg";
import MemberCard from "../../forAll/MemberCard";

const TeamMembers = ({ teamMembers }) => {
  const mCard =
    teamMembers &&
    teamMembers.map((item) => <MemberCard cardInfo={item && item} />);
  return (
    <div className="team-members">
      <h1 className="head">TeamMembers</h1>
      <div className="cards-wrapper" data-aos="fade-right">
        {mCard && mCard}
      </div>
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
  ],
};
