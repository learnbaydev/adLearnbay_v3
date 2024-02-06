import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./SliderTab.module.css";

const Form = dynamic(() => import("../Form/Form"));
const Popup = dynamic(() => import("../Popup/Popup"));

const SliderTabs = ({ dataScience, dataScienceCounselling }) => {
  const services = [
    {
      title: "Mock Interviews",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career2.webp",
      content: [
        "LearnBay's targeted mock interviews sessions to ready you for your dream role.",
        "Actionable feedback for skill enhancement that keeps you in pace with interview trends.",
        "Industry-specific interview practice so that you can crack your dream job.",
      ],
    },
    {
      title: "Resume BuildUp",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career3.webp",
      content: [
        "LearnBay's tailored resume-building guidance.",
        "Strategic advice for impactful resumes.",
        "Tools and tips for resume optimization.",
      ],
    },
  ];

  const renderServiceItem = (service, index) => {
    const activeClass =
      index === activeService ? styles.ActiveSpan : styles.span;

    return (
      <div className={styles.panel} key={index}>
        <div
          key={index}
          onClick={() => setActiveService(index)}
          className={activeClass}
        >
          <div className={styles.img}>
            <Image
              src={service.icon}
              loading="lazy"
              width="25"
              height="25"
              alt="Bulb"
              quality={40}
            />
            <span>{service.title}</span>
            {/* {mobile ? bfsiButton ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""} */}
          </div>

          <div>
            <IoIosArrowForward className={styles.rightIcon} />
          </div>
        </div>
        {index === activeService ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h6>{currentService.title}</h6>

              {currentService.content.map((point, i) => (
                <div key={i} className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>{point}</p>
                </div>
              ))}
            </div>
            <div className={`imgWrapper ${styles.right}`}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/doamain-new.webp"
                width="200"
                height="200"
                quality={40}
                alt="projectLabs"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

  const [activeService, setActiveService] = useState(0);
  const currentService = services[activeService];

  return (
    <div className={styles.Course} id="servicePro">
      <h2>
        Get job ready within 6 months with Career Services{" "}
        <span style={{ color: "#f99600" }}>PRO</span>
      </h2>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          {services.map(renderServiceItem)}
        </div>

        <div className={styles.middlePanel}>
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h6>{currentService.title}</h6>

              {currentService.content.map((point, i) => (
                <div key={i} className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>{point}</p>
                </div>
              ))}
            </div>
            <div className={`imgWrapper ${styles.right}`}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/doamain-new.webp"
                width="200"
                height="200"
                quality={40}
                alt="projectLabs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTabs;
