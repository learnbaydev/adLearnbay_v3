import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/dist/client/link";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import PopupContent from "../PopupContent/PopupContent";

const BottomBar = ({
  whatsappShow,
  masterdegree,
  interstedInHide,
  ADS,
  formotp,
  HideInterest,
  dataScience,
  radio,
  DomainInput,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className="divWrapper">
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Apply for Counselling"
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        ADS={ADS}
        formotp={formotp}
        HideInterest={HideInterest}
        dataScience={dataScience}
        radio={radio}
        DomainInput={DomainInput}
      />
      {masterdegree ? (
        <div className="flDivLeft" onClick={popupShow}>
          Start Your Application
          <FaArrowRight style={{ color: "#fff" }} className="bIcon" />
        </div>
      ) : (
        <div className="flDivLeft" onClick={popupShow}>
          Apply For Counselling
          <FaArrowRight style={{ color: "#fff" }} className="bIcon" />
        </div>
      )}

      {whatsappShow ? (
        <div className="flDivRight">
          <Link href="https://wa.me/+917349222263">Chat with us</Link>
          <IoLogoWhatsapp className="bIcon" style={{ color: "Green" }} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BottomBar;
