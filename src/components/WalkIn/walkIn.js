import { FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./walkIn.module.css";
import Image from "next/image";

function WalkIn() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div>
          <h4>Thank You!</h4>
          <p className={styles.white}>
            We Received your request and look forward to getting in touch soon.
          </p>
          <div className={styles.minContainer}>
            <div className={styles.firstMin}>
              <p className={styles.para}>
                <span>
                  <b>Address</b>: 
                </span>
                1090 1st floor, 18th Cross Rd, above Sangam Sweets, Sector 3,
                HSR Layout, Bengaluru, Karnataka 560102
              </p>
              <hr />
              <div className={styles.Cont}>
                <p className={styles.black}>
                  <FaPhone className={styles.icon} />
                  +91 6364 939404
                </p>
              </div>
            </div>
            <a href="https://maps.app.goo.gl/8YmZ7BscDKvDYHBA7" target="_blank">
              <div className={styles.image}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/map-TY1.webp"
                  width="340"
                  height="285"
                  layout="intrinsic"
                />
              </div>
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default WalkIn;
