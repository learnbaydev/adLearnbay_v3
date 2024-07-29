import PopupContent from "@/components/Global/PopupContent/PopupContent";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Button from "../../Global/Button/Button";
import styles from "./EightSection.module.css";

function EightSection({
  DownloadSyllabus,
  formotp,
  ADS,
  interstedInHide,
  radio,
  grad,
  jobDescription,
  dataScience,
  HideInterest,
  upSkilling,
  DomainInput,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    let heightToHideFrom = 600;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <section className={isVisible ? styles.EightSection : styles.hide}>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        ADS={ADS}
        formotp={formotp}
        radio={radio}
        dataScience={true}
        HideInterest={HideInterest}
        DomainInput={DomainInput}
      />
      <div>
        <p className={styles.career}>
          Learn industry-relevant skills and build a rewarding career
        </p>
      </div>
      <div onClick={popupShow} className={styles.btnInner}>
        {DownloadSyllabus ? (
          <Button
            className={styles.buttonDiv}
            text="Download Syllabus"
            passIcon={<FaDownload className={styles.icon} />}
            invert
          />
        ) : (
          <Button
            className={styles.buttonDiv}
            text="Download Syllabus"
            passIcon={<FaDownload className={styles.icon} />}
            invert
          />
        )}
      </div>
    </section>
  );
}

export default EightSection;
