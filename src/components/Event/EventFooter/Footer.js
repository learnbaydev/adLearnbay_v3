import Image from "next/image";
import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import styles from "./Footer.module.css";

const Footerfsd = () => {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv1}>
        <div className={styles.FooterDivInner}>
        <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/white-logo.webp"
              alt="Learnbay"
              width="230"
              height="100"
          />
          <p className={styles.FooterInnerli}>
          Enrol now for data science courses, System designing or full stack development courses. Master the most demanding skills of job market and experience and ever growing and lucrative career transformation.
          </p>
          <div className={styles.FooterSocial}>
            <FaTwitter className="bIcons" />
            <FaFacebookF className="bIcons" />
            <FaLinkedinIn className="bIcons" />
            <FaYoutube className="bIcons" />
            <FaInstagram className="bIcons" />
          </div>
          <span style={{ display: "flex", marginTop: "20px" }}>
            <IoMailSharp className="bIcons" />
            contacts@learnbay.co
          </span>
          <span style={{ display: "flex", marginTop: "10px" }}>
            <BsFillTelephoneFill className="bIcons" />
            (+91) 97311 35221
          </span>
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>
          Copyright © 2015 - 2024 Learnbay by Learnvista Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Footerfsd);
