import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "./NewSevenSection.module.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import PopupContent from "../PopupContent/PopupContent";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";
const Popup = dynamic(() => import("@/components/Global/Popup/Popup"));
const Form = dynamic(() => import("@/components/Global/Form/Form"));

const NewSevenSection = ({
  dataScience,
  radio,
  dataScienceCounselling,
  interstedInHide,
  dataScienceGeneric,
}) => {
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <PopupContent
        dataScience={dataScience}
        radio={radio}
        dataScienceCounselling={dataScienceCounselling}
        dataScienceGeneric={dataScienceGeneric}
        popups={popups}
        setPopups={setPopups}
        interstedInHide={interstedInHide}
        heading="Apply For Counselling"
      />
      <div className={styles.NewSevenSection}>
        <div className={styles.griContiner}>
          <div className={styles.left}>
            <div className={styles.fontDiv}>
              <h4>Got more questions?</h4>
              <h3>Talk to our team directly</h3>
              <p>
                Contact us and our academic counsellor will get in touch with
                you shortly
              </p>
            </div>

            <div className={styles.buttonDiv}>
              {/* <a
                  href="https://api.whatsapp.com/send?phone=917349222263&text=Hello,"
                  target="_blank"
                >
                  <button className={styles.green}>
                    <AiOutlineWhatsApp /> Enquire Now
                  </button>
                </a> */}
              <Link href="tel:+916364939404" className={styles.callLink}>
                <button className={styles.blue}>
                  <FaPhoneAlt /> +91 6364 939404
                </button>
              </Link>
            </div>
          </div>

          <div className={styles.ryt}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/seven_mblss.webp"
              width={220}
              height={350}
              alt="coun"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className={styles.NewSevenSectionM}>
        <div className={styles.griContiner}>
          <div className={styles.left}>
            <div className={styles.fontDiv}>
              <h4>Got more questions?</h4>
              <h3>Talk to our team directly</h3>
              <p>
                Contact us and our academic counsellor will get in touch with
                you shortly
              </p>
            </div>
          </div>

          <div className={styles.ryt}>
            <div className={styles.buttonDiv}>
              {/* <a
                  href="https://api.whatsapp.com/send?phone=917349222263&text=Hello,"
                  target="_blank"
                >
                  <button className={styles.green}>
                    <AiOutlineWhatsApp /> Enquire Now
                  </button>
                </a> */}
              <Link href="tel:+916364939404" className={styles.callLink}>
                <button className={styles.blue}>
                  <FaPhoneAlt /> +91 6364 939404
                </button>
              </Link>
            </div>

            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/seven_mblss.webp"
              width={400}
              height={350}
              alt="coun"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSevenSection;
