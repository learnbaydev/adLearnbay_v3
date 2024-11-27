import { useState, useEffect } from "react";
import styles from "./webinarCountDown.module.css";

const WebinarCountdown = ({ webinarDate }) => {
  const [timeParts, setTimeParts] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = new Date(webinarDate).getTime();
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      if (difference <= 0) {
        setTimeParts({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeParts({ days, hours, minutes, seconds });
    };

    // Initial calculation
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [webinarDate]);

  return (
    <div className={styles.timeDiv}>
      <span className={styles.start}>Starts in:</span>
      <div className={styles.countdown}>
        <div className={styles.box}>
          <p className={styles.value}>{timeParts.days}</p>
          <span className={styles.label}>d</span>
        </div>
<span className={styles.divider}>:</span>
        <div className={styles.box}>
          <p className={styles.value}>{timeParts.hours}</p>
          <span className={styles.label}>h</span>
        </div>
        <span className={styles.divider}>:</span>
        <div className={styles.box}>
          <p className={styles.value}>{timeParts.minutes}</p>
          <span className={styles.label}>m</span>
        </div>
        {/* <div className={styles.box}>
          <p className={styles.value}>{timeParts.seconds}</p>
          <span className={styles.label}>S</span>
        </div> */}
      </div>
    </div>
  );
};

export default WebinarCountdown;
