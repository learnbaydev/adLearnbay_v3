import React from "react";
import styles from "./CertificateSection.module.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

function CertificateSection() {
  return (
    <section className="containerWidth">
      <div className={styles.mainBg}>
        <h2 className={styles.upskillHeading}>
          Get certified and accelerate your
          <span className={styles.spanHead}>&nbsp;career growth</span>
        </h2>
          <div className={styles.innerDiv}>
            <div className={styles.certBox}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/ibm_Cert_new.webp"
                alt="icon"
                width={884}
                height={634}
                className={styles.toolIcon}
                loading="lazy"
              />
              <div className={styles.iconDivMain}>
                <h4>IBM Course Completion Certificate</h4>
                <div className={styles.iconDiv}>
                  <FaCheckCircle />
                  <p>
                    Complete your training with the internationally recognized
                    certificate.
                  </p>
                </div>
                <div className={styles.iconDiv}>
                  <FaCheckCircle />
                  <p>In-Demand Skills: Gain expertise recognized worldwide.</p>
                </div>

                <div className={styles.iconDiv}>
                  <FaCheckCircle />
                  <p>Career Boost: Elevate your job prospects and earnings.</p>
                </div>
              </div>
            </div>
            <div className={styles.certBox}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/microsoft_Cert_new.webp"
                alt="icon"
                width={995}
                height={651}
                className={styles.toolIcon}
                loading="lazy"
              />
              <div className={styles.iconDivMain}>
                <h4>Microsoft Course Completion Certificate</h4>
                <div className={styles.iconDiv}>
                  <FaCheckCircle />
                  <p>Industry-certified Microsoft certificates</p>
                </div>
                <div className={styles.iconDiv}>
                  <FaCheckCircle />
                  <p>Gain expertise & get recognized worldwide</p>
                </div>

                <div className={styles.iconDiv}>
                  <FaCheckCircle />
                  <p>
                    Boost job opportunities and earnings with Microsoft’s
                    certification
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.middleLine}></div>
          <div className={styles.innerDiv}>
            <div className={styles.certBox}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/project_ibm_Cert_new.webp"
                alt="icon"
                width={884}
                height={634}
                className={styles.toolIcon}
                loading="lazy"
              />
            </div>
            <div className={styles.certBox}>
              <div className={styles.iconDivMain}>
                <h4 className={styles.mHead}>Capstone Project Certificate from IBM</h4>
                <div className={styles.iconDiv}>
                  <FaCheckCircle />
                  <p>Globally recognized IBM certification based on industrial-level projects.</p>
                </div>
                <div className={styles.iconDiv}>
                  <FaCheckCircle />
                  <p>Earn 1 capstone project certification from IBM.</p>
                </div>

                <div className={styles.iconDiv}>
                  <FaCheckCircle />
                  <p>
                  Individualized project experience with easy access to premium job opportunities.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificateSection;
