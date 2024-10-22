import React from "react";
import styles from "./FestiveOffer.module.css";
import Form from "@/components/Global/Form/Form";

function FestiveOffer() {
  return (
    <section>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Festive Offer</h1>
            <p className={styles.desc}>
              on all our <b>Data Science</b> and <b>Cloud</b> & <b>DevOps</b>{" "}
              Courses
            </p>
            <p className={styles.botCont}>
              {" "}
              up to <span>40%</span> off
            </p>
            <p className={styles.valid}>
              valid till <b>3rd</b> November, Sunday
            </p>
          </div>
          <div className={styles.form}>
            <p>Check Your Eligibility</p>
            <Form upSkillingHide={true} offerFestive={true}/>
          </div>
        </div>
      </div>
      <div className={styles.botContent}>
        <p className={styles.topBold}>Free Profile Review and Career Counselling</p>
        <ul>
          <li>
            Can a candidate from the non-programming & non-tech Domain learn our
            Courses?
          </li>
          <li>Will your previous Domain experience utilized?</li>
          <li>Our Course Curriculum.</li>
          <li>Real-Time Projects List provided by us.</li>
          <li>
            How to change the domain and whether your profile is suitable for
            our Course?
          </li>
          <li>Career Options in your preferred Domain</li>
          <li>Placement Assistance and Job referrals</li>
        </ul>
        <p className={styles.paraBot}><b>Minimum Duration:</b> 15 to 20 minutes.</p>
        <p className={styles.paraBot}>Your queries and doubts will be answered through this session with a professional.</p>
      </div>
    </section>
  );
}

export default FestiveOffer;
