import React, { useEffect } from "react";
import logo from "../../../images/logo/logo.png";
import { IoCallOutline } from "react-icons/io5";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import bgImg from "../../../images/footer/bg-img.png";

const Footer = () => {
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    setNewDate(year.toString());
  }, []);
  return (
    <div className="footer">
      <div className="top-footer-bar">
        <h2 className="top-footer-heading">CAMBRIDGE INSTITUTE</h2>
      </div>
      <div className="line"></div>

      <div
        className="bottom-footer-bar"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="footer-overlay"></div>
        <div className="mid">
          <div className="bottom-left">
            <div className="bottom-contact">
              <div className="bottom-contact-heading">Contact Us</div>
              <div className="contact-content">
                <div className="contact-content-gap">
                  Bagbazar (Opp. Shrestha Tailoring), Kathmandu
                </div>
                <div className="contact-content-gap">
                  977-1-4223815 | 4256776
                </div>
                <div className="contact-content-gap">
                  {" "}
                  info@cambridgeedu.com.np
                </div>
                <div className="contact-content-gap">
                  <BiLogoFacebookCircle className="footer-icon" />
                  <BiLogoTwitter className="footer-icon" />
                  <BiLogoInstagram className="footer-icon" />
                </div>
              </div>
            </div>
            <div className="bottom-links">
              <div className="bottom-links-heading">Links</div>
              <div className="links-content">
                <div className="links-content-gap">About</div>
                <div className="links-content-gap">Photos</div>
                <div className="links-content-gap">Blogs</div>
                <div className="links-content-gap">Career</div>
              </div>
            </div>
          </div>
          <div className="bottom-right">
            <h1 className="bottom-right-heading">News Letter</h1>
            <div className="button-in">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="text-box"
              />
              <button className="submit-btn">OK</button>
            </div>
          </div>
        </div>
      </div>

      <div className="line"></div>
      <div className="final-footer">
        <div className="wrapper">
          <div className="copyright">
            ©{newDate} Cambridge Institute | Designed By{" "}
            <a href="https://nextaussietech.com/">Next Aussie Tech</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
