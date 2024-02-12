import Image from "next/image";
import Styles from "./JobAbroad.module.css";
import Link from "next/link";
import Popup from "../../Global/Popup/Popup";
import Form from "../../Global/Form/Form";
import { useState } from "react";

const JobAbroad = ({dataScience, interstedInHide, ADS, HideInterest, radio}) => {
  const [popupsApp, setPopupsApp] = useState(false);

  const popupShowApp = () => {
    setPopupsApp(true);
  };
  return (
    <div>
      <Popup
        trigger={popupsApp}
        setTrigger={setPopupsApp}
        className="popupModal"
      >
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form
            popup={true}
            setTrigger={setPopupsApp}
            dataScience={dataScience}
            interstedInHide={interstedInHide}
            upSkillingHide={true}
            ADS={ADS}
            HideInterest={HideInterest}
            radio={radio}
          />
        </div>
      </Popup>
      <div className={Styles.JobAbroadMain}>
        <h2>
          Master’s Degree that gets you
          <span className={Styles.Ooo}>Job Abroad</span>{" "}
        </h2>

        <div className={Styles.JobAbroadHead}>
          <div className={Styles.JobAbroadleft}>
            <div className={Styles.leftpoints}>
              <div className={Styles.imgBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp"
                  width={90}
                  height={90}
                  loading="lazy"
                  alt="master degree"
                />
              </div>
              <div>
                <h3>Earn a Degree Without Pausing Your Career</h3>
                <p>
                  Flexible online degrees from LearnBay's ExcelVarsity for
                  working pros.
                </p>
              </div>
            </div>

            <div className={Styles.leftpoints}>
              <div className={Styles.imgBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp"
                  width={90}
                  height={90}
                  loading="lazy"
                  alt="master degree"
                />
              </div>
              <div>
                <h3>Skill Up for Swift Promotions</h3>
                <p>
                  Curriculum designed for rapid career advancement and
                  leadership roles.
                </p>
              </div>
            </div>

            <div className={Styles.leftpoints}>
              <div className={Styles.imgBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp"
                  width={90}
                  height={90}
                  loading="lazy"
                  alt="job master degree"
                />
              </div>
              <div>
                <h3>Step into High-Value Research Careers</h3>
                <p>
                  Degree for prestigious research jobs and institutional
                  collaborations.
                </p>
              </div>
            </div>

            <div className={Styles.consbtn1}>
              <button className={Styles.consbtn} onClick={popupShowApp}>
                Start Your Application
              </button>
            </div>
            <p className={Styles.woolfText}>
              Learnbay Excelversity is a constituent college affiliated with{" "}
              <a href="https://woolf.university/academics/college-membership/bb43ed7d-edff-4e25-b530-2e950496519c">
                <span className={Styles.spanWoolf}>Woolf University, EU</span>
              </a>
            </p>
          </div>

          <div className={Styles.JobAbroadRight}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job1.webp"
              width={600}
              height={400}
              priority
              quality={60}
              alt="master job program"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAbroad;
