import React, { useState } from "react";
import styles from "./WbotomLine.module.css";
import Form from "@/components/Global/Form/Form";
import Popup from "@/components/Global/Popup/Popup";
import Link from "next/link";

const WBotomLine = ({
  dataScience,
  interstedInHide,
  event,
  eventFullStack,
  fullstackEvent,
  webinarLink,

}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
        // radio={radio}
        dataScience={dataScience}
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            // style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>

          <Form
            dataScience={dataScience}
            interstedInHide={interstedInHide}
            upSkillingHide={true}
            eventFullStack={eventFullStack}
            event={event}
            // radio={radio}
          />
        </div>
      </Popup>

      <div className={styles.WContainer}>
        <p>Acquire in-demand skills and start a successful career </p>
        {fullstackEvent ? (
          <div className={styles.btnSpan}>
            {" "}
            <Link href={webinarLink}>Register Now</Link>
          </div>
        ) : (
          <div className={styles.btnSpan} onClick={popupShow}>
            Register Now
          </div>
        )}
      </div>
    </>
  );
};

export default WBotomLine;
