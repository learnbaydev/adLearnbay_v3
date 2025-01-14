import React from "react";
import styles from "./DemoClsNew.module.css";
import Image from "next/image";
import Link from "next/link";
const DemoClsNew = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.DemoClsNew}>
        <h2>Know about Our Mentor :</h2>
       <div className={styles.demoButton}>

       <div className={styles.mentorDiv}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/swp_bg-bors.webp"
            alt=""
            width={70}
            height={70}
            loading="lazy"
            className={styles.swImg}
          />
         <div className={styles.divInside}>

         <p>Swapnil Narayan -<br/> Software Engineer</p>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/micro_whites.webp"
            width={100}
            height={20}
            loading="lazy"
            alt="microsoft"
            className={styles.microImage}
          />
         </div>
        </div>
      <Link href="https://calendly.com/learnbay-live-demo-class/book-your-slot-for-live-demo-session">  <button className={styles.bttn}>
        BOOK YOUR DEMO SESSION NOW
        </button></Link>
       </div>
        <p className={styles.para}>
          Meet Swapnil Narayan, a Software Engineer at Microsoft and a mentor at
          LearnBay specializing in DSA and System Design. With hands-on
          experience at a leading tech giant, he helps students master core
          concepts and prepare for technical interviews with real-world
          insights. Join Learnbay to learn directly from industry experts like
          him and elevate your career to the next level.
        </p>
      </div>
    </div>
  );
};

export default DemoClsNew;
