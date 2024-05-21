import Navbar from "@/components/Global/AdsNavbar/Navbar";
import Form from "@/components/Global/Form/Form";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdLocationPin, MdWatchLater } from "react-icons/md";
import styles from "../styles/Counseling.module.css";

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
      <Navbar upSkillingHide={true} radio={true} interstedInHide={true} />
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/background_apply_form.webp"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={75}
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles.leftsidecontent}>
            <p className={styles.ptag}>Learnbay</p>
            <h1 className={styles.h1tag}>Free Profile Review and Career Counselling | By Experts</h1>

            <div className={styles.twobtn}>
              <div className={styles.divbtn}>
              <Image src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/time_machine.webp"
                width={50}
                height={30}
                alt="machine"
                />
                <span>
                  15-20  mins
                </span>
              </div>
              <div className={styles.divbtn}>
              <Image src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/office_phone.webp"
                width={40}
                height={50}
                alt="machine"
                />
                <span>
                  Telephonic Discussion
                </span>
              </div>
            </div>
            <p className={styles.para}>
              Book a session with a career counsellor or course advisor to go
              through your requirements in further detail.
            </p>
          </div>

          <div className={styles.formr}>
            <Form upSkillingHide={true} radio={true} interstedInHide={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Counselling;
