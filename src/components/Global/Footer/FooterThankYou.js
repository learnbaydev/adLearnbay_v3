import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import styles from "../Footer/Footer.module.css";

const FooterThankYou = () => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <a href="/">
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/white-logo.webp"
              alt="Learnbay"
              quality={100}
              width="230"
              height="100"
            />
          </a>
          <p className={styles.FooterInnerli}>
            The Full-Stack Developer Program is a demanding course that offers
            you everything you need to know about becoming a skillful developer.
            Prepare for top product based MNCs interviews by brushing up on your
            technical skills. Enroll now for a smooth transition.
          </p>
          <span style={{ display: "flex", marginTop: "20px" }}>
            <IoMailSharp className="bIcons" />
            <Link href="mailto:contacts@learnbay.co">contacts@learnbay.co</Link>
          </span>
          <span style={{ display: "flex", marginTop: "10px" }}>
            <BsFillTelephoneFill className="bIcons" />
            <Link href="tel:+918123327570">(+91) 81233 27570</Link>
          </span>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Popular Courses</p>
          <a>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Science & AI Certification
            </p>
          </a>
          <a>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Advance Data Science & AI Certification
            </p>
          </a>
          <a>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Structures & Algorithm And System Design
            </p>
          </a>
          <a>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Software Development Master Program
            </p>
          </a>
          <a>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Advance AI & ML Certification
            </p>
          </a>
          <a>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Science & AI Cert. For Managers & Leaders
            </p>
          </a>
          <a>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Science and AI Master Program
            </p>
          </a>
          <a>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Analytics & Business Analytics Program | Fast Track Course
            </p>
          </a>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Find Us Here</p>
          <p className={styles.FooterInnerli}>
            #1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore -
            560102 (Above Sangam Sweets)
          </p>
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>
            Copyright © 2022 Learnbay by Learnvista Pvt. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FooterThankYou);
