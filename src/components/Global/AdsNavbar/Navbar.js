import Image from "next/image";
import { useEffect, useState } from "react";

import Form from "@/components/Global/Form/Form";
import FormOtp from "@/components/Global/FormOtp/FormOtp";
import Popup from "@/components/Global/Popup/Popup";
import { FaDownload } from "react-icons/fa";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = ({
  radio,
  formotp,
  ADS,
  fullstackADS,
  marketing,
  grad,
  interstedInHide,
  dataScience,
  HideInterest,
  HideButton,
  OS,
  dateTime,
  ApplyS2,
  DomainInput,
  fullstackEvent,
  webinarLink,
}) => {
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, []);

  return (
    <div>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          {ApplyS2 ? (
            <h5>Apply for Counsellling</h5>
          ) : (
            <h5>Download Syllabus</h5>
          )}

          {ApplyS2 ? (
            <Form
              popup={true}
              setTrigger={setPopups}
              radio={radio}
              upSkillingHide={true}
              interstedInHide={interstedInHide}
              dataScience={dataScience}
              HideInterest={HideInterest}
              OS={OS}
              dateTime={dateTime}
            />
          ) : (
            <>
              {formotp ? (
                <FormOtp
                  popup={true}
                  downloadBrochure
                  upSkillingHide={true}
                  ADS={ADS}
                  fullstackADS={fullstackADS}
                  marketing={marketing}
                  grad={grad}
                  radio={radio}
                  HideInterest={HideInterest}
                  DomainInput={DomainInput}
                />
              ) : (
                <Form
                  popup={true}
                  setTrigger={setPopups}
                  radio={radio}
                  upSkillingHide={true}
                  downloadBrochure
                  interstedInHide={interstedInHide}
                  dataScience={dataScience}
                  HideInterest={HideInterest}
                  OS={OS}
                  dateTime={dateTime}
                />
              )}
            </>
          )}
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
          {ADS ? (
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
              alt="Learnbay"
              quality={100}
              priority
              style={{ objectFit: "contain" }}
              width={mobile ? "135" : "230"}
              height={60}
            />
          ) : (
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
              alt="Learnbay"
              quality={100}
              priority
              style={{ objectFit: "contain" }}
              width={mobile ? "135" : "230"}
              height={60}
            />
          )}
        </div>
        <div className={styles.right}>
          {ApplyS2 ? (
            <div onClick={popupShow}>
              <Button text="Apply for Counselling" outline={true} />
            </div>
          ) : (
            <>
              {fullstackEvent ? (
                <>
                  {" "}
                <Link href={webinarLink}>
                
                <div >
                    <Button
                      text="Register Now"
                      outline={true}

                    />
                  </div></Link>
                </>
              ) : (
                <>
                  {" "}
                  {HideButton ? (
                    ""
                  ) : (
                    <div onClick={popupShow}>
                      <Button
                        text="Download Syllabus"
                        outline={true}
                        passIcon={<FaDownload className={styles.icon} />}
                      />
                    </div>
                  )}
                </>
              )}
            </>
          )}

          <Popup></Popup>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
