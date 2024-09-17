"use client";
import React from "react";
import styles from "./reviewSlider.module.css";
import Image from "next/image";

const WhyLearnbay = () => {
  return (
    <div className={styles.keyContainer}>
      <h3 className={styles.mainHeading}>Courses Top Rated in:</h3>
            <p>Discover what our learners say about us</p>
        <div className={styles.reviewBotSection}>
          <div className={styles.firstBotReview}>
            
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/group_course_rated.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="974"
              height="668"
            />
          </div>
          <div className={styles.secondBotReview}>
          <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Social_review.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="1066"
              height="408"
            />
          </div>
      </div>
    </div>
  );
};

export default WhyLearnbay;
