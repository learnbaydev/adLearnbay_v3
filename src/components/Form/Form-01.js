// components/Form1.js

"use client";
import { useEffect, useState } from "react";
import styles from "./form1.module.css";

import Image from "next/image";
import Link from "next/link";

const Form1 = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, []);

  // Helper function to generate time options from 10:00 AM to 9:00 PM IST
  const generateTimeOptions = () => {
    const options = [];
    for (let i = 10; i <= 21; i++) {
      const time = `${i < 10 ? "0" : ""}${i}:00`;
      options.push(
        <option key={time} value={time}>
          {time} IST
        </option>
      );
    }
    return options;
  };

  return (
    <div className={styles.container}>
      <form
        action={`https://getform.io/f/apjznexa`}
        className={styles.form}
        method="POST"
      >
        <div className={styles.center}>
          <Link href="/">
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
              alt="Learnbay"
              quality={100}
              priority
              style={{ objectFit: "contain" }}
              width={230} // Use a single size and let CSS handle responsiveness
              height={60}
            />
          </Link>
        </div>

        <h2> Appointment Booking</h2>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">Date (Mon-Sat):</label>
          <input type="date" id="date" name="appointmentDate" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="time">Time (10 AM - 9 PM IST):</label>
          <select id="time" name="appointmentTime" required>
            <option value="">Select a time</option>
            {generateTimeOptions()}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form1;
