import React, { useState } from "react";
import Banner from "../../../images/contact/contactBanner.jpeg";
import { GiEarthAmerica } from "react-icons/gi";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
import ProgressIndicator from "../../forAll/ProgressIndicator";
import SnackBar from "../../forAll/SnackBar";

const Contact = ({ locations }) => {
  const [formSubmitting, setFormSubmitting] = useState(false);

  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const [alertMessage, setAlertMessage] = useState({
    successMessage: "",
    failedMessage: "",
  });
  const handleClick = (newState) => () => {
    setSnackBarState((prev) => ({ ...prev, open: true }));
  };

  // const Location = ({ location }) => (
  //   <div className="branch-box">
  //     <h1 className="title desc">{location.title}</h1>
  //     <p className="phone desc">{location.phone}</p>
  //     <p className="email desc">{location.email}</p>
  //     <p className="address desc">{location.address}</p>
  //   </div>
  // );

  const x = locations.map((details) => (
    <div className="branch-box">
      <div className="title ">{details.title}</div>
      <p className="phone desc">{details.phone}</p>
      <p className="email desc">{details.email}</p>
      <p className="address desc">{details.address}</p>
    </div>
  ));

  return (
    <>
      {formSubmitting && (
        <div className="spinner-wrapper">
          <ProgressIndicator className="spinner" />
        </div>
      )}
      <div className="contact-us">
        <img src={Banner} alt="" className="banner" />
        <div className="content-wrapper">
          <div className="head-contact">
            <div className="head-box">
              <div className="icon">
                <GiEarthAmerica className="inner-icon" />
              </div>
              <div className="address">
                <div className="title">Address</div>
                <div>Bagbazar (Opp. Shrestha Tailoring), Kathmandu</div>
              </div>
            </div>
            <div className="head-box">
              <div className="icon">
                <BsTelephoneInbound className="inner-icon" />
              </div>
              <div className="address">
                <div className="title">Phone</div>
                <div>977-1-4223815</div>
                <div>01-4256776</div>
              </div>
            </div>
            <div className="head-box">
              <div className="icon">
                <MdOutlineEmail className="inner-icon" />
              </div>
              <div className="address">
                <div className="title">Email</div>
                <div>info@cambridgeedu.com.np</div>
              </div>
            </div>
          </div>
          <ContactForm
            setFormSubmitting={setFormSubmitting}
            setAlertMessage={setAlertMessage}
            setSnackBarState={setSnackBarState}
            handleClick={handleClick}
          />

          <div className="our-branches">
            <h1 className="branches-heading">Our Branches</h1>
            <div className="boxes">{x && x}</div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3752409713156!2d85.31923917551984!3d27.70569827618346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190786e87ceb%3A0xcd0bb5ab90660324!2sCambridge%20Institute%20of%20Technology!5e0!3m2!1sen!2snp!4v1696399045756!5m2!1sen!2snp"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
      <SnackBar
        alertMessage={alertMessage}
        snackBarState={snackBarState}
        setSnackBarState={setSnackBarState}
      />
    </>
  );
};

export default Contact;
Contact.defaultProps = {
  locations: [
    {
      id: 0,
      title: "Sydney Australia Office ",
      phone: " 0279017321 | 0450174483",
      email: "info@cambridgeedu.com.au ",
      address:
        " Suit 305 Level 3, 368 Sussex Street, Sydney 2000 NSW Australia",
    },
    {
      id: 1,
      title: "Adelaide Australia Office ",
      phone: " 0412190634",
      email: "info@cambridgeedu.com.au ",
      address: " 1B Fifth Avenue, Ascot Park, Adelaide, 5043 SA",
    },
    {
      id: 2,
      title: "UK Office ",
      phone: " 01869354640 | M: 00447886258443",
      email: "cambridgeuk100@gmail.com ",
      address: "26 Austen Walk Bicester Oxfordshire Ox26 2Fw ",
    },
    {
      id: 3,
      title: " New Baneshwor Office",
      phone: " 01- 4488503 | M: 9802021651",
      email: " cambridgenewbaneshwor@gmail.com",
      address: "New Baneshwor(Near Civil Bank), Kathmandu ",
    },
    {
      id: 4,
      title: "Lalitpur Office ",
      phone: "01-5550313 | M: 9851018793 ",
      email: "cambridgelalitpur@gmail.com ",
      address:
        "Kumaripati – 19, Lalitpur (next to Machhindra Petrol Pump, Beside Suzuki Showroom) ",
    },
    {
      id: 5,
      title: "Banepa Office ",
      phone: "011-660057 | 9851029762 ",
      email: "cambridgebanepa@gmail.com ",
      address: "Tindobato, 08 (Opposite of Nepal Telecom) Banepa Bazar, Nepal ",
    },
    {
      id: 6,
      title: " Koteshwor Office",
      phone: " 01- 4601306| M: 9869420134",
      email: "cambridgekoteshwor@gmail.com ",
      address: " Koteshwor 32 (way to Mahadevsthan), Kathmandu",
    },
    {
      id: 7,
      title: " Birtamod Office",
      phone: "023-545588 | M: 9843087358 ",
      email: "cambridgebirtamod@gmail.com ",
      address: "Near Adhuwa Bridge (Beside of Binayak Hotel), Jhapa ",
    },
    {
      id: 8,
      title: "Damak Office ",
      phone: "023-585746 | M: 9862674982 ",
      email: "cambridgedamak@gmail.com ",
      address: " Damak-10, Beldangi Road (Next to the medico), Jhapa",
    },
    {
      id: 9,
      title: " Itahari Office",
      phone: "025-588288 | M: 9842193912 ",
      email: " cambridgeitahari@gmail.com",
      address:
        " Itahari-4, Itabare Between Kabir Ma. Vi. & Peace Zone, Sunsari",
    },
    {
      id: 10,
      title: "Biratnagar Office ",
      phone: " 021-532350 | M: 9852053360",
      email: " cambridgebiratnagar@gmail.com",
      address: "Main Road Biratnagar Morang Nepal ",
    },
    {
      id: 11,
      title: " Dharan Office",
      phone: " 025-520542 | M: 9844642310",
      email: " cambridgedharan@gmail.com",
      address: "Chhata Chowk Dharan (Near by Nepal Bank), Sunsari ",
    },
  ],
};
