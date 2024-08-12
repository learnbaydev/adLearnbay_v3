import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Global/AdsNavbar/Navbar";
import Form from "../components/Global/Form/Form";
import styles from "../styles/Counseling.module.css";

function Counselling() {
  return (
    <div>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <Navbar radio={true} />
      <div className={styles.formq}>
        <div className={styles.formlImage}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/popup-left.webp"
            width={400}
            height={470}
            alt="LearnsupportImg"
          />
        </div>
        <div className={styles.formr}>
        <h4>Apply for Counselling</h4>
          <Form radio={true} interstedInHide={true} />
        </div>
      </div>
    </div>
  );
}

export default Counselling;
