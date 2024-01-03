import Button from "@/components/Global/Button/Button";
import Form from "@/components/Global/Form/Form";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./FirstSection.module.css";

const FirstSectionContent = ({
  setPopups,
  fullStack,
  dataScienceCounselling,
  interstedInHide,
}) => {
  const popupShow = () => {
    setPopups(true);
  };
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  }, []);

  return (
    <section className={styles.container}>
      <div className="bgWrap">
        <Image
          src={
            mobile
              ? " https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Masters+header+BG+Mobile+View+(1).webp"
              : "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/masterPage/newmaster-web.webp"
          }
          fill
          priority
          alt="Master program by learnbay"
        />
      </div>

      <>
        <div className={styles.DivContent}>
          <div className={styles.firstDiv}>
            <p className={styles.ptopC}>Learnbay Excelvarsity</p>
            <h1 className={styles.h1}>
              Master's in Computer Science:
              <br />
              <span style={{ color: "#F99600" }}>Data Science and AI</span>
            </h1>
            <div className={styles.paraCollab}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/woolf-univer.webp"
                alt="woolf-university"
                priority
                width="268"
                height="28"
              />
            </div>
            <div className={styles.boxDivGreen}>
              <p className={styles.special}>SPECIALIZATION IN</p>
              <div className={styles.iconPara}>
                <p className={styles.boxGreen}>Data Science & Analytics</p>
                <p className={styles.boxGreen}>Artificial Intelligence & ML</p>
              </div>
            </div>
            <div className={styles.BtnDiv}>
              <div onClick={() => popupShow()}>
                <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
              </div>
            </div>
          </div>
          <div className={styles.FormDiv}>
            <h4>
              Interested in <span>Master’s Degree?</span>
            </h4>
            <Form
              dataScienceCounselling={dataScienceCounselling}
              fullStack={fullStack}
              syllabus={true}
              upSkillingHide={true}
              interstedInHide={interstedInHide}
            />
          </div>
        </div>
      </>
    </section>
  );
};

export default FirstSectionContent;
