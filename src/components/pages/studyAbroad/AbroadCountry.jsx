import React from "react";
import { useParams } from "react-router-dom";
import banner from "../../../images/banner/abroadImg.jpeg";
import OtherBanner from "../../forAll/OtherBanner";

import Australia from "./countries/Australia";
import Usa from "./countries/Usa";
import Canada from "./countries/Canada";

const AbroadCountry = () => {
  const { countrySlug } = useParams();

  const menuItems = {
    australia: [
      {
        id: 0,
        title: "Why Study in Australia",
        sectionLink: "why",
      },
      // {
      //   id: 1,
      //   title: "Universities/Institutions",
      //   sectionLink: "university",
      // },
      {
        id: 2,
        title: "Cost",
        sectionLink: "cost",
      },
      {
        id: 3,
        title: "Scholarship",
        sectionLink: "scholorship",
      },
      {
        id: 4,
        title: "Apply Process",
        sectionLink: "apply",
      },
      {
        id: 5,
        title: "Requirements",
        sectionLink: "requirements",
      },
    ],
    canada: [
      {
        id: 0,
        title: "Why Study in Canada",
        sectionLink: "why",
      },
      {
        id: 1,
        title: "Universities/Institutions",
        sectionLink: "university",
      },
      {
        id: 2,
        title: "Cost",
        sectionLink: "cost",
      },
      {
        id: 3,
        title: "Scholorship",
        sectionLink: "scholorship",
      },
      {
        id: 4,
        title: "Apply Process",
        sectionLink: "apply",
      },
      {
        id: 5,
        title: "Requirements",
        sectionLink: "requirements",
      },
    ],
    usa: [
      {
        id: 0,
        title: "Why Study in USA",
        sectionLink: "why",
      },
      {
        id: 1,
        title: "Universities/Institutions",
        sectionLink: "university",
      },
      {
        id: 2,
        title: "Cost",
        sectionLink: "cost",
      },
      {
        id: 3,
        title: "Scholorship",
        sectionLink: "scholorship",
      },
      {
        id: 4,
        title: "Apply Process",
        sectionLink: "apply",
      },
      {
        id: 5,
        title: "Requirements",
        sectionLink: "requirements",
      },
    ],
  };

  const selectedCountryNav = menuItems[countrySlug && countrySlug];

  const handleNavItemClick = (sectionLink) => {
    window.scrollBy(
      0,
      document.getElementById(sectionLink).getBoundingClientRect().top - 60
    );
  };
  return (
    <div>
      <div className="study-abroad">
        <OtherBanner bannerImg={banner} />
        <div className="menu-nav">
          <div className="nav-items">
            {selectedCountryNav &&
              selectedCountryNav.map((menuItem) => {
                const { id = "", title = "", sectionLink = "" } = menuItem;
                return (
                  <div
                    className="option"
                    key={id}
                    onClick={() => {
                      handleNavItemClick(sectionLink);
                    }}
                  >
                    {title}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="study">
          <div className=" content">
            {countrySlug === "australia" && <Australia />}
            {countrySlug === "canada" && <Canada />}
            {countrySlug === "usa" && <Usa />}
          </div>
          <div className="form">
            <h2 className="head">
              Make your dreams of studying abroad come true..
            </h2>
            <div className="input-area">
              <input type="text" placeholder="Name" className="text-box" />
              <input type="email" placeholder="Email" className="text-box" />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="text-box"
              />
            </div>
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroadCountry;
