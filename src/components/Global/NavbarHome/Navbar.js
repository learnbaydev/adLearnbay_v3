import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import Form from "@/components/Global/Form/Form";
import FormOtp from "@/components/Global/FormOtp/FormOtp";
import Popup from "@/components/Global/Popup/Popup";
import styles from "./Navbar.module.css";

const Navbar = ({ radio, formotp, interstedInHide, dataScience, OS }) => {
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
          <h5>Apply For Counselling</h5>

          {formotp ? (
            <FormOtp popup={true} upSkillingHide={true} />
          ) : (
            <Form
              popup={true}
              setTrigger={setPopups}
              radio={radio}
              upSkillingHide={true}
              interstedInHide={interstedInHide}
              dataScience={dataScience}
              OS={OS}
            />
          )}
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <GiHamburgerMenu className={styles.ham} onClick={showMenu} />
          <div className={show ? styles.mobileWrapper : styles.hide}>
            <div className={styles.mobileMenu}>
              <span onClick={showMenu}>
                <Link href="/datascience/data-science-certification-courses">
                  Advance Data Science & AI Certification
                </Link>
              </span>
              {/* <span onClick={showMenu}>
                <Link href="/fswd">  Web Development Program</Link>
              </span> */}
              <span onClick={showMenu}>
                <Link href="/fullstack/fssd">
                  Software Development Certification Program
                </Link>
              </span>
              {/* <span onClick={showMenu}>
                <Link href="/fullstack/dsa">DSA & System Design</Link>
              </span> */}
              <span onClick={showMenu}>
                <Link href="/datascience/advance-ai-ml-certification">
                  Advance AI & ML Certification
                </Link>
              </span>
              <span onClick={showMenu}>
                <Link href="/datascience/data-science-ai-masters-program">
                  Master in CS: Data Science and AI
                </Link>
              </span>
              <span onClick={showMenu}>
                <Link href="/datascience/business-analytics-certification-course">
                  Business Analytics Program
                </Link>
              </span>
              <span onClick={showMenu}>
                <Link href="/datascience/data-analytics-certification-course">
                  Data Analytics Program
                </Link>
              </span>
              <span onClick={showMenu}>
                <Link href="/cloud&devops/cloud-computing-and-devOps-certification-program">
                  Cloud Computing & DevOps Certification Program
                </Link>
              </span>
            </div>
          </div>
          <a href="/">
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
              alt="Learnbay"
              quality={100}
              priority
              style={{ objectFit: "contain" }}
              width={mobile ? "135" : "230"}
              height={60}
            />
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              All Courses <FaChevronDown style={{ marginLeft: "5px" }} />
            </button>
            <div className={styles.dropdownContent}>
              <a href="/datascience/data-science-certification-courses">
                Advance Data Science & AI Certification
              </a>
              {/* <a href="/fswd">  Web Development Program</a> */}
              <a href="/fullstack/fssd">
                Software Development Certification Program
              </a>
              {/* <a href="/fullstack/dsa">DSA & System Design</a> */}
              <a href="/datascience/advance-ai-ml-certification">
                Advance AI & ML Certification
              </a>
              {/* <a href="/datascience/data-science-ai-cert-for-managers-leaders">
                Data Science & AI Cert. For Managers & Leaders
              </a> */}
              <a href="/datascience/data-science-ai-masters-program">
                Master in CS: Data Science and AI
              </a>
              <a href="/datascience/business-analytics-certification-course">
                Business Analytics Program
              </a>
              <a href="/datascience/data-analytics-certification-course">
                Data Analytics Program
              </a>
              <a href="/cloud&devops/cloud-computing-and-devOps-certification-program">
                Cloud Computing & DevOps Certification Program
              </a>
            </div>
          </div>

          <button onClick={popupShow} className={styles.applybutton}>
            Apply For Counselling <FiArrowRight style={{ marginLeft: "5px" }} />
          </button>

          <Popup></Popup>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
