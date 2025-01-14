import React, { useState, memo, useEffect } from "react";
import styles from "./ClsBenFit.module.css";
import Image from "next/image";

const BenefitBox = ({ title, imageSrc, description }) => (
  <div className={styles.boxMain}>
    <div className={styles.topBox}>
      <h4>{title}</h4>
      <div className={styles.iconDiv}>
        <Image src={imageSrc} alt="icon" width={40} height={40} />
      </div>
    </div>
    <div className={styles.boxDown}>
      <p>{description}</p>
    </div>
  </div>
);

const ClsBenFits = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const benefits = [
    {
      title: "Expert Mentor from Top Tech MNC's",
      imageSrc: "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/teacher.webp",
      description:
        "Learn from mentors at leading product-based companies who simplify complex topics and provide feedback to ensure students gain skills aligned with current industry standards.",
    },
    {
      title: "1-on-1 Doubt Clearing Session",
      imageSrc:
        "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/questions.webp",
      description:
        "Experience personalized 1-on-1 doubt-clearing sessions with experts, revisiting challenging topics and providing tailored guidance for your learning journey.",
    },
    {
      title: "Pseudocode for Problem-solving",
      imageSrc:
        "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/laptop_error.webp",
      description:
        "Simplifies problem-solving by focusing on logic over rules, outlines clear steps, and encourages team collaboration by enabling discussions independent of programming languages.",
    },
    {
      title: "Work on Industry Projects",
      imageSrc:
        "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/group_of_projects.webp",
      description:
        "Real-world projects provide hands-on experience with industry tools, build problem-solving skills, and prepare learners for real-world challenges.",
    },
    {
      title: "Mock Interview Preparation",
      imageSrc:
        "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/send_job_list.webp",
      description:
        "Mentors conduct mock interviews, provide feedback, and simulate real-world scenarios to build confidence and enhance problem-solving skills.",
    },
  ];

  const visibleBenefits =
    isMobile && !showMore ? benefits.slice(0, 2) : benefits;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.ClsBenFits}>
      <h2>Get Learnbay Class Benefits</h2>
      <div className={styles.boxGroup}>
        {visibleBenefits.map((benefit, index) => (
          <BenefitBox
            key={index}
            title={benefit.title}
            imageSrc={benefit.imageSrc}
            description={benefit.description}
          />
        ))}
      </div>

      {isMobile && !showMore && (
        <button className={styles.viewButton} onClick={() => setShowMore(true)}>
          View More
        </button>
      )}
    </div>
  );
};

export default memo(ClsBenFits);
