import FormOtp from "@/components/Global/FormOtp/FormOtp";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import Button from "../../Global/Button/Button";
import Form from "../../Global/Form/Form";
import NewSyllabusMap from "./NewSyllabusMap";
import styles from "./Syllabus.module.css";

function SyllabusNew({
  masterSyllabusMobile,
  dataScience,
  fullStack,
  titleCourse,
  brochureLink,
  buttonHide,
  dataScienceCounselling,
  interstedInHide,
  onebtn,
  adPage,
  dataScienceGeneric,
  ADS,
  HideInterest,
  formotp,
  OS,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const [popupsApp, setPopupsApp] = useState(false);

  const popupShowApp = () => {
    setPopupsApp(true);
  };

  return (
    <>
      <div id="curriculum" className={styles.containerDiv}>
        <PopupContent
          popups={popups}
          setPopups={setPopups}
          heading="Download Syllabus"
          downloadBrochure
          dataScience={dataScience}
          interstedInHide={interstedInHide}
          upSkillingHide={true}
          titleCourse={titleCourse}
          brochureLink={brochureLink}
          formotp={formotp}
          ADS={ADS}
          HideInterest={HideInterest}
        />
        <div className={styles.project}>
          <h4 className={styles.h1}>Explore our Syllabus</h4>
          <p className={styles.ptop}>
            Curriculum is specifically engineered to meet the expectations of
            leading tech companies
          </p>
        </div>

        <section className={styles.Syllabus}>
          <div className={styles.syllabusLeft}>
            <NewSyllabusMap Syllabus={masterSyllabusMobile} />
          </div>
          <div className={styles.button}>
            <div className={styles.formWrapper}>
              <div className={styles.boxDiv}>
                <div className={styles.formBox}>
                  {" "}
                  <FaRegUser className={styles.iconUser} /> 7,568 people filled
                </div>
              </div>
              {OS ? (
                <h4>
                  Apply For<span> Consultation ?</span>
                </h4>
              ) : (
                <h4>
                  Apply For<span> counselling ?</span>
                </h4>
              )}
              {formotp ? (
                <FormOtp
                  upSkillingHide={true}
                  ADS={true}
                  HideInterest={HideInterest}
                />
              ) : (
                <Form
                  dataScience={dataScience}
                  upSkillingHide={true}
                  dataScienceGeneric={dataScienceGeneric}
                  dataScienceCounselling={dataScienceCounselling}
                  adPage={adPage}
                  interstedInHide={interstedInHide}
                  HideInterest={HideInterest}
                  OS={OS}
                />
              )}
            </div>
          </div>
        </section>
        {onebtn ? (
          <div className={styles.buttonDiv}>
            {buttonHide ? "" : ""}
            <div onClick={popupShow}>
              <Button nobannerButton={true} text="DOWNLOAD SYLLABUS" />
            </div>
          </div>
        ) : (
          <div className={styles.buttonDiv}>
            {buttonHide ? (
              ""
            ) : (
              <div>
                <Button
                  onClick={popupShowApp}
                  bannerButton={true}
                  text="DOWNLOAD SYLLABUS"
                />
              </div>
            )}
            <div onClick={popupShow}>
              <Button nobannerButton={true} text="DOWNLOAD SYLLABUS" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SyllabusNew;
