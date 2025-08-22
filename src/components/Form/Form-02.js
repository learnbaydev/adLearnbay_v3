import styles from "./form2.module.css";
import Image from "next/image";
import Link from "next/link";

const Form2 = () => {
  const domainOptions = [
    { value: "", label: "Explore other domains" },
    { value: "Cloud and Devops", label: "Cloud & DevOps" },
    { value: "Cyber Security", label: "Cyber Security" },
    { value: "Software Development", label: "Software Development" },
    { value: "Data Science & Gen AI", label: "Data Science & Gen AI" },
    { value: "Not Sure", label: "Not sure" },
    {
      value: "Not looking for any Course",
      label: "Not looking for any Course",
    },
  ];

  return (
    <div className={styles.container}>
      <form
        action={`https://getform.io/f/aqoekpva`}
        method="POST"
        className={styles.form}
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
        <h2>Career Interest Inquiry</h2>
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
          <label htmlFor="domain">Interested Domain:</label>
          <select id="domain" name="domain">
            {domainOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tell_us_in_details">Tell us in details:</label>
          <textarea
            id="tell_us_in_details"
            name="tell_us_in_details"
            rows="5"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form2;
