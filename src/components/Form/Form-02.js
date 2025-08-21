// components/Form2.js
import { useEffect, useState } from "react";
import styles from "./form2.module.css";
import Image from "next/image";
import Link from "next/link";

const Form2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
    reason: "",
  });
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

  const GETFORM_ENDPOINT = "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form 2 submitted:", formData);
    // Add your form submission logic here
  };

  const domainOptions = [
    { value: "", label: "Explore other domains" },
    { value: "cloud-devops", label: "Cloud & DevOps" },
    { value: "cyber-security", label: "Cyber Security" },
    { value: "software-development", label: "Software Development" },
    { value: "data-cience-and-gen-ai", label: "Data Science & Gen AI" },
    { value: "not-sure", label: "Not sure" },
  ];

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
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
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="domain">Interested Domain:</label>
          <select
            id="domain"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
          >
            {domainOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="reason">Reason for interest:</label>
          <textarea
            id="reason"
            name="reason"
            rows="5"
            value={formData.reason}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form2;
