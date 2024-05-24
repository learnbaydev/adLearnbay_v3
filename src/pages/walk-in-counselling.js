import Navbar from "@/components/Global/AdsNavbar/Navbar";
import Form from "@/components/Global/Form/Form";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdLocationPin, MdWatchLater } from "react-icons/md";
import styles from "../styles/NewCounseling.module.css";

function Counselling() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 481);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <Navbar upSkillingHide={true} dataScience={true} dateTime={true} radio={true}/>
      <div className={styles.container}>
        <div className={styles.width}>
          <div className={styles.leftsidecontent}>
            <p className={styles.ptag}>Learnbay</p>
            <h1 className={styles.h1tag}>
              Free Profile Review and Career Counselling | By Experts
            </h1>

            <div className={styles.twobtn}>
              <div className={styles.divbtn}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/time_machine.webp"
                  width={50}
                  height={30}
                  alt="machine"
                />
                <span>15-20 mins</span>
              </div>
              <div className={styles.divbtn}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/next_location.webp"
                  width={58}
                  height={40}
                  alt="machine"
                />
                <span>Walk in Discussion</span>
              </div>
            </div>
            <p className={styles.para}>
              Book a session with a career counsellor or course advisor to go
              through your requirements in further detail.
            </p>
          </div>
          <div>
            {/* <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cup.webp"
            alt="Background"
            width={250}
            height={250}
            className={styles.cup}
          /> */}
          </div>
          <div className={styles.formr}>
            <p>Free Career Counselling</p>
            <Form upSkillingHide={true} dataScience={true} dateTime={true} radio={true} />
          </div>
        </div>
      </div>
      <div className={styles.botCont}>
        <p className={styles.topBold}>Topics covered in discussion:</p>
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
        {/* <p className={styles.paraBot}>
          <b>Minimum Duration:</b> 15 to 20 minutes.
        </p> */}
        <p className={styles.paraBot}>
          Your queries and doubts will be answered through this session with a
          professional.
        </p>
      </div>
    </>
  );
}

export default Counselling;
