"use client";
import styles from "./form1.module.css";
import Image from "next/image";
import Link from "next/link";

const Form1 = () => {
  const generateTimeOptions = () => {
    const options = [];
    for (let i = 10; i <= 21; i++) {
      const hour = i > 12 ? i - 12 : i;
      const ampm = i >= 12 ? "PM" : "AM";
      const time = `${hour < 10 ? "0" : ""}${hour}:00:00 ${ampm}`;
      options.push(
        <option key={time} value={time}>
          {time}
        </option>
      );
    }
    return options;
  };

  // Function to format the date to YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  // Function to calculate and format the future dates
  const getFutureDates = () => {
    const today = new Date();
    const futureDates = [];
    for (let i = 0; i <= 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      // 0 = Sunday, 6 = Saturday
      if (nextDate.getDay() !== 0) {
        // Exclude Sunday
        futureDates.push(nextDate);
      }
    }
    return futureDates;
  };

  // Function to generate date options for the select input
  const generateDateOptions = () => {
    const dates = getFutureDates();
    return dates.map((date) => {
      const formattedDate = formatDate(date);
      const displayDate = `${String(date.getDate()).padStart(2, "0")}/${String(
        date.getMonth() + 1
      ).padStart(2, "0")}/${date.getFullYear()}`;
      return (
        <option key={formattedDate} value={formattedDate}>
          {displayDate}
        </option>
      );
    });
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
          <select id="date" name="appointmentDate" required>
            <option value="">Select a date</option>
            {generateDateOptions()}
          </select>
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
