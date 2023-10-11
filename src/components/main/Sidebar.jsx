import React from "react";

import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import logo from "../../images/logo/color-logo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Sidebar = ({ sidebarClass, setSidebarClass, menuItems }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-comp" style={{ display: `${sidebarClass}` }}>
      <div
        className="sidebar-header-wrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#064267",
          padding: "20px",
        }}
      >
        {/* <div
          className="logo"
        > */}
        <img
          style={{ width: "150px !important", maxWidth: "150px !important" }}
          src={logo}
          alt=""
          className="side-logo"
          onClick={() => {
            navigate("/");
            setSidebarClass("none");
          }}
        />
        {/* </div> */}
        <RxCross2
          className="cancel"
          onClick={() => {
            setSidebarClass("none");
          }}
        />
      </div>
      <hr className="hr-line" />
      <div className="menu-item">
        <div
          className="menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "#064267",
            marginTop: "0.4em",
          }}
        >
          {menuItems.map((item) => {
            const { id = "", path = "", title = "", sublinks = "" } = item;

            if (title === "Study Abroad") {
              return (
                <div key={id}>
                  <div className="item-link-wrapper">
                    <div
                      className="item-link btn btn-primary collapsed"
                      data-bs-toggle="collapse"
                      href="#studyAbroad"
                      role="button"
                      aria-expanded="false"
                      aria-controls="studyAbroad"
                    >
                      {title}
                    </div>
                    <MdOutlineKeyboardArrowRight
                      className="drop-arrow"
                      data-bs-toggle="collapse"
                      href="#studyAbroad"
                    />
                  </div>
                  <div className="multi-collapse collapse" id="studyAbroad">
                    {sublinks &&
                      sublinks.map((item) => {
                        const { id = "", title = "", path = "" } = item;
                        return (
                          <div
                            className="child-link"
                            key={id}
                            onClick={() => {
                              setSidebarClass("none");
                              navigate(`/study-abroad/${path}`);
                            }}
                          >
                            {title}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            } else if (title === "Prepration Classes") {
              return (
                <div key={id}>
                  <div className="item-link-wrapper">
                    <div
                      className="item-link btn btn-primary collapsed"
                      data-bs-toggle="collapse"
                      href="#preprationClasses"
                      role="button"
                      aria-expanded="false"
                      aria-controls="preprationClasses"
                    >
                      {title}
                    </div>
                    <MdOutlineKeyboardArrowRight
                      className="drop-arrow"
                      data-bs-toggle="collapse"
                      href="#preprationClasses"
                    />
                  </div>
                  <div
                    className="multi-collapse collapse"
                    id="preprationClasses"
                  >
                    {sublinks &&
                      sublinks.map((item) => {
                        const { id = "", title = "", path = "" } = item;
                        return (
                          <div
                            className="child-link"
                            key={id}
                            onClick={() => {
                              setSidebarClass("none");
                              navigate(`/preparation-classes/${path}`);
                            }}
                          >
                            {title}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            } else if (title === "Resources") {
              return (
                <div key={id}>
                  <div className="item-link-wrapper">
                    <div
                      data-bs-toggle="collapse"
                      href="#resources"
                      role="button"
                      aria-expanded="false"
                      aria-controls="resources"
                      className="item-link collapsed"
                    >
                      {title}
                    </div>
                    <MdOutlineKeyboardArrowRight
                      className="drop-arrow"
                      data-bs-toggle="collapse"
                      href="#resources"
                    />
                  </div>
                  <div className="multi-collapse collapse" id="resources">
                    {sublinks &&
                      sublinks.map((item, idx) => {
                        const { id = "", title = "", path = "" } = item;
                        return (
                          <div
                            key={idx}
                            className="child-link"
                            onClick={() => {
                              setSidebarClass("none");
                              navigate(`/resources/${path}`);
                            }}
                          >
                            {title}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            } else {
              return (
                <div className="item-link-wrapper" key={id}>
                  <div
                    className="item-link active-link"
                    onClick={() => {
                      setSidebarClass("none");
                      navigate(path);
                    }}
                  >
                    {title}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
