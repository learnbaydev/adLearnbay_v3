import Navbar from "@/components/Global/AdsNavbar/Navbar";
import Form from "@/components/Global/Form/Form";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdLocationPin, MdWatchLater } from "react-icons/md";
import styles from "../styles/Counseling.module.css";

function Counselling() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <>
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

        {mobile ? (
          <div className={styles.formq}>
            <div className={styles.forml}>
              <div className={styles.div1}>LEARNBAY</div>
              <h1>Free Profile Review and Career Counseling | By Experts</h1>
              <div className={styles.timeDetail}>
                <p>
                  <MdWatchLater /> 15-20 &nbsp; Mins
                </p>
                <p>
                  {" "}
                  <MdLocationPin />
                  Telephonic Discussion
                </p>
              </div>

              <div>
                <p>
                  Book a session with a career counsellor or course advisor to
                  go through your requirements in further detail.
                </p>
                <p>
                  <strong>TOPICS COVERED IN DISCUSSION:</strong>
                </p>

                <div
                  style={{
                    display: showMe ? "block" : "none",
                  }}
                >
                  <ul>
                    <li>
                      Can a candidate from the non-programming and non-technical
                      domain learn data science?
                    </li>
                    <li>Will your previous domain experience utilized?</li>
                    <li>Course Curriculum</li>
                    <li>Real-Time Projects List</li>
                    <li>
                      How to change the domain and whether your profile is
                      suitable for data science?
                    </li>
                    <li>Career Options in the data science domain</li>
                    <li>Placement Assistance and Job referrals </li>
                  </ul>

                  <p>
                    <strong>Minimum Duration:</strong>&nbsp;15 to 20 minutes.
                  </p>
                  <p>
                    Your queries and doubts will be answered through this
                    session with a professional.
                  </p>
                  <p>Thanks,</p>
                  <p>
                    <strong>Team Learnbay</strong>
                  </p>
                </div>
              </div>

              <a
                className={styles.btnout}
                style={{ marginTop: "20px" }}
                onClick={toggle}
              >
                {showMe ? (
                  <span style={{ color: "#0070f3" }}>
                    Show less
                    <FaArrowUp style={{ marginLeft: "10px" }} />
                  </span>
                ) : (
                  <span style={{ color: "#0070f3" }}>
                    Show more
                    <FaArrowDown style={{ marginLeft: "10px" }} />
                  </span>
                )}
              </a>
            </div>

            <div className={styles.formr}>
              <Form upSkillingHide={true} />
            </div>
          </div>
        ) : (
          <div className={styles.formq}>
            <div className={styles.forml}>
              <div className={styles.div1}>LEARNBAY</div>
              <h1>Free Profile Review and Career Counseling | By Experts</h1>
              <div className={styles.timeDetail}>
                <p>
                  <MdWatchLater /> 15-20 &nbsp; Mins
                </p>
                <p>
                  {" "}
                  <MdLocationPin />
                  Telephonic Discussion
                </p>
              </div>

              <div>
                <p>
                  Book a session with a career counsellor or course advisor to
                  go through your requirements in further detail.
                </p>
                <p>
                  <strong>TOPICS COVERED IN DISCUSSION:</strong>
                </p>
                <ul>
                  <li>
                    Can a candidate from the non-programming and non-technical
                    domain learn data science?
                  </li>
                  <li>Will your previous domain experience utilized?</li>
                  <li>Course Curriculum</li>
                  <li>Real-Time Projects List</li>
                  <li>
                    How to change the domain and whether your profile is
                    suitable for data science?
                  </li>
                  <li>Career Options in the data science domain</li>
                  <li>Placement Assistance and Job referrals </li>
                </ul>
                <p>
                  <strong>Minimum Duration:</strong>&nbsp;15 to 20 minutes.
                </p>
                <p>
                  Your queries and doubts will be answered through this session
                  with a professional.
                </p>
                <p>Thanks,</p>
                <p>
                  <strong>Team Learnbay</strong>
                </p>
              </div>
            </div>

            <div className={styles.formr}>
              <Form upSkillingHide={true} radio={true} interstedInHide={true} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Counselling;
