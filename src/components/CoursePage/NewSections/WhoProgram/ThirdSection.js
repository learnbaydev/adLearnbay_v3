import Image from "next/image";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import Button from "../../../Global/Button/Button";
import FormOtp from "../../../Global/FormOtp/FormOtp";
import Form from "../../../Global/Form/Form";
import Popup from "../../../Global/Popup/Popup";
import styles from "./ThirdSection.module.css";

const ThirdSection = ({
  leftImage,
  ThirdSectionData,
  dataScience,
  interstedInHide,
  dataScienceCounselling,
  formotp,
  ADS,
}) => {
  const [popups, setPopups] = useState(false);
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLinks, setBrochureLinks] = useState();
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={`${styles.program} wrapper`} id="eligibility">
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            // style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Syllabus</h5>
          {formotp ? (
            <FormOtp
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
              downloadBrochure
              interstedInHide={true}
              titleCourse={titleCourse}
              brochureLink={brochureLinks}
              formotp={formotp}
              ADS={ADS}
            />
          ) : (
            <Form
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
              downloadBrochure
              interstedInHide={true}
              titleCourse={titleCourse}
              brochureLink={brochureLinks}
              formotp={formotp}
              ADS={ADS}
            />
          )}
        </div>
      </Popup>

      <h2 className={styles.h2}>Choose Your Domain Elective</h2>
      <div className={styles.programWrap}>
        <div className={styles.left}>
          <Image
            src={leftImage}
            width={500}
            height={514}
            alt="who"
            loading="lazy"
          />
        </div>
        <div>
          <div className={styles.boxWrap}>
            {ThirdSectionData.map((data, index) => {
              const { icon, heading, para, brochureLink } = data;
              return (
                <div className={styles.leftSide} key={index}>
                  <div className={styles.boxIcon}>
                    <div className={styles.icons}>{icon}</div>
                  </div>
                  <h5 className={styles.heading}>{heading}</h5>
                  <p>{para}</p>

                  <div
                    className={styles.buttonDiv}
                    onClick={() => {
                      setTitleCourse(heading);
                      setBrochureLinks(brochureLink);
                      popupShow();
                    }}
                  >
                    <Button
                      text="Syllabus"
                      passIcon={<FaDownload className="bIconS" />}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
