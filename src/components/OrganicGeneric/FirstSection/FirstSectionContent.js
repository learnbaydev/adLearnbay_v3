import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { FaCheck } from "react-icons/fa";
import styles from "./FirstSection.module.css";

function HeroSection({ setPopups }) {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const desktopTypeLogo = "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibm_mix_logo.webp";
  const mobileTypeLogo = "https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/logo_mix_mbl.webp";

  const typeLogo = isMobile ? mobileTypeLogo : desktopTypeLogo;

  const popupShow = () => setPopups(true);

  return (
    <section className={styles.section}>
      <div className={styles.bgWrap}>
      </div>
      <div className={styles.content}>
        <h1>
          <span className={styles.india}>India’s #1</span> Upskilling Platform
          for Working Professionals
        </h1>
        <h3 title="Gen AI and ChatGPT">Curriculum inclusive of Gen AI and ChatGPT</h3>
        <div className={styles.round}>
          <p>
            <FaCheck /> Data Science & AI
          </p>
          <p>
            <FaCheck /> Cloud & DevOps
          </p>
          <p>
            <FaCheck /> Master’s Degree
          </p>
        </div>
        <div className={styles.buttonDiv}>
          <button
            title="Apply For Counselling"
            onClick={popupShow}
            className={styles.button}
          >
            Apply for Counselling
          </button>
        </div>
      </div>
      <div className={styles.typeLogo}>
        <p>Get Certification from :</p>
        <div className={styles.logoWrap}>
          <Image
            src={typeLogo}
            width={isMobile ? 300 : 650}
            height={isMobile ? 20 : 34}
            alt="IBM Logo"
            priority
            sizes={isMobile ? "300px" : "650px"}
            quality={75}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;