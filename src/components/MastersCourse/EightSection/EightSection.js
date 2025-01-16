import PopupContent from "@/components/Global/PopupContent/PopupContent";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Button from "../../Global/Button/Button";
import styles from "./EightSection.module.css";
import Link from "next/link";
import PopupContenttest from "@/components/Global/PopupContent/PopupContenttest";

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
  demoSessionButton,
  crmTest,
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
    {crmTest ? (  <PopupContenttest
        popups={popups}
        setPopups={setPopups}
        heading={demoSessionButton ? "Book Demo Session" : "Download Syllabus"}
        downloadBrochure
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        ADS={ADS}
        formotp={formotp}
        radio={radio}
        dataScience={true}
        HideInterest={HideInterest}
        DomainInput={DomainInput}
      />):(  <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading={demoSessionButton ? "Book Demo Session" : "Download Syllabus"}
        downloadBrochure
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        ADS={ADS}
        formotp={formotp}
        radio={radio}
        dataScience={true}
        HideInterest={HideInterest}
        DomainInput={DomainInput}
      />)}
      <div>
        <p className={styles.career}>
          Learn industry-relevant skills and build a rewarding career
        </p>
      </div>
 {

demoSessionButton ? (<Link href="https://docs.google.com/forms/d/1055DeqdBGx5dljVVWISdWf_CA59cPLeoQ8dt1hwhRKY/viewform">     <div className={styles.btnInner}>
    {

demoSessionButton ? ( <Button
className={styles.buttonDiv}
text="Book Demo Session"

invert
/>):(<>  {DownloadSyllabus ? (
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
      )}</>)
    }
    </div></Link>):(     <div onClick={popupShow} className={styles.btnInner}>
      {

demoSessionButton ? ( <Button
  className={styles.buttonDiv}
  text="Book Demo Session"

  invert
/>):(<>  {DownloadSyllabus ? (
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
        )}</>)
      }
      </div>)
 }
    </section>
  );
}

export default EightSection;
