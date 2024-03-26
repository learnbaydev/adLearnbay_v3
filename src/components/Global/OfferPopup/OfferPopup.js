import React, { useState, useEffect } from "react";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import styles from "./OfferPopup.module.css";
// import Button from "../global/Button/Button";

const OfferPopup = ({
  dataScience,
  dataScienceCounselling,
  interstedInHide,
  ADS,
  formotp,
  radio,
  HideInterest,
  Cloud,
  BA,
}) => {
  const [open, setOpen] = useState(false);
  // Use state to control audio playback

  const handelOpen = () => {
    setOpen(false);
  };
  useEffect(() => {
    // const audioElement = document.getElementById("popup-entry-sound");

    const timeOut = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  // const firstPoint = popupData.para1.split("$$$");
  // const secondPoint = popupData.para2.split("$$$");

  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    open && (
      <div className={open ? styles.OfferPopup : styles.hide}>
        <PopupContent
          popups={popups}
          setPopups={setPopups}
          heading="Apply For Scholarship"
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
          interstedInHide={interstedInHide}
          upSkillingHide={true}
          ADS={ADS}
          formotp={formotp}
          HideInterest={HideInterest}
          radio={radio}
        />
        <p
          className={styles.Icon}
          onClick={() => {
            console.log("Close button clicked");
            setOpen(false);
          }}
        >
          close[X]
        </p>
        <div className={styles.header}>
          {ADS ? (
            <h6>Financial Year-End: Get 35% Scholarship</h6>
          ) : (
            <h6>Financial Year-End: Get 25% Scholarship</h6>
          )}
          <span>Valid Till 31st March 2024</span>
        </div>
        <div className={styles.valid}>
          <p></p>
          <div className={styles.tag}>Filling Fast!</div>
        </div>
        <div className={styles.Offer}>
          <p className={styles.bHeading}>Batch Details :</p>
          {BA ? (
            <div className={styles.batchPoint}>
              <p>
                <b>Weekend Evening : </b>
                12th April, 8.00 PM - 10.00 PM
              </p>
              <p>
                <b>Weekend Morning : </b>
                10th March, 9:30AM to 1PM
              </p>
            </div>
          ) : (
            <>
              {Cloud ? (
                <div className={styles.batchPoint}>
                  <p>
                    <b>Weekend Morning : </b>
                    6th April, 9:30AM to 1PM
                  </p>
                  <p>
                    <b>Weekend Morning : </b>
                    17th March, 9:30AM to 1PM
                  </p>
                </div>
              ) : (
                <div className={styles.batchPoint}>
                  <p>
                    <b>Weekday Evening : </b>
                    12th April, 8PM to 10PM
                  </p>
                  <p>
                    <b>Weekday Morning : </b>
                    19th April, 8AM to 10AM
                  </p>
                </div>
              )}
            </>
          )}
          <button className="button" onClick={popupShow}>
            Apply For Scholarship Now!
          </button>
        </div>
        {/* <audio
          id="popup-entry-sound"
          src="/pop.wav"
          onError={(error) => console.error("Audio playback error:", error)}
        ></audio> */}
      </div>
    )
  );
};

export default OfferPopup;
