import React, { useState, useEffect } from "react";
import styles from "./FirstSection.module.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { FaCheck } from "react-icons/fa";

function HeroSection({ setPopups, setVideo }) {
  const popupShow = () => {
    setPopups(true);
  };

  const videoShow = () => {
    setVideo(true);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const [bgImage, setBgImage] = useState("");
  const [typeLogo, setTypeLogo] = useState("");

  useEffect(() => {
    setBgImage(
      isMobile
        ? "https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/mbl_home_two.webp"
        : "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BG_Home_1.webp"
    );

    setTypeLogo(
      isMobile
        ? "https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/logo_mix_mbl.webp"
        : "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibm_mix_logo.webp"
    );
  }, [isMobile]);

  return (
    <section className={styles.section}>
      <div className={styles.bgWrap}>
        {bgImage && (
          <Image
            src={bgImage}
            alt="Learnbay Background"
            layout="fill"
            priority
            placeholder="blur"
            blurDataURL={
              isMobile
                ? "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mbl_home_two.avif" // Replace with the base64 string of the mobile image
                : "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BG_Home_1.avif" // Replace with the base64 string of the desktop image
            }
            sizes="(max-width: 640px) 100vw, 100vw"
          />
        )}
      </div>
      <div className={styles.content}>
        <h1>
          <span className={styles.india}>India’s #1</span> Upskilling Platform
          for Working Professionals
        </h1>
        <h3>Curriculum inclusive of Gen AI and ChatGPT</h3>
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
          <button onClick={popupShow} className={styles.button}>
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
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
