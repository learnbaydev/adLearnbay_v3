import Image from "next/image";
import { useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaLaptopCode,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { HiIdentification, HiOutlineBadgeCheck } from "react-icons/hi";
import { MdAltRoute, MdAnalytics, MdLiveTv } from "react-icons/md";
import Reviews from "../../WebinarPage/CareerImpactHome/CareerImpact";
import ReviewsFSD from "../../WebinarPage/CareerImpactHomeFSD/CareerImpact";
import styles from "./EventFeature.module.css";

const EventFeature = ({
  data,
  eventDataD,
  domainDataD,
  reviewsDataD,
  datascienceImg,
}) => {
  const [eventData, setEventData] = useState({
    aboutThisMasterclass: data.aboutThisMasterclass,
    topicsMasterclass: data.topicsMasterclass,
    topicsCoveredMasterclass: data.topicsCoveredMasterclass,
    aboutLearnbay: data.aboutLearnbay,
    standoutFeatures: data.standoutFeatures,
    standoutFeaturesLastHead: data.standoutFeaturesLastHead,
  });
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  return (
    <div className={styles.eFeature}>
      <div className={styles.topicCover}>
        <p className={styles.paragramTitle}>{data.heading2}</p>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/event/Line+48.png"
          layout="intrinsic"
          width="90"
          height="5"
          loading="lazy"
          alt="backImg"
        />
        <div className={styles.iconList}>
          {eventData.topicsCoveredMasterclass.map((value, i) => {
            return (
              <div className={styles.iconDiv} key={i}>
                <FaCheck className={styles.icon} />{" "}
                <p className={styles.iconPs}>{value}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className={styles.centerBtn}>
          <button className="outLineBtn">
            Register NOW!
          </button>
        </div>
      </div>

      <div className={styles.backTrainer}>
        <p>About the Speaker</p>
        <div>
          <div className={styles.innerDiv}>
            {datascienceImg ? (
              <></>
            ) : (
              <div className={styles.spanTrainerImg}>
                <Image
                  src={data.img4}
                  layout="intrinsic"
                  objectFit="cover"
                  quality={100}
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="backImg"
                />
              </div>
            )}
            <div>
              <p className={styles.trainerHead}>{data.speakerName}</p>
              <p>{data.speakerDesignation}</p>
              <p>
                Experience :{" "}
                <span className={styles.spanT}>{data.speakerComp}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {domainDataD ? (
        ""
      ) : (
        <div className={styles.master}>
          <p className={styles.paragramTitle}>{data.heading3}</p>
          <div className={styles.TopMargin}>
            <div className={styles.iconP}>
              <FaUserTie className={styles.iconG} />
              <p>{data.masterclassForHeading1}</p>
            </div>
            <div className={styles.iconP}>
              <GiReceiveMoney className={styles.iconG} />
              <p>{data.masterclassForHeading2}</p>
            </div>
            <div className={styles.iconP}>
              <HiIdentification className={styles.iconG} />
              <p>{data.masterclassForHeading3}</p>
            </div>
            <div className={styles.iconP}>
              <MdAltRoute className={styles.iconG} />
              <p>{data.masterclassForHeading4}</p>
            </div>
            <div className={styles.iconP}>
              <MdAnalytics className={styles.iconG} />
              <p>{data.masterclassForHeading5}</p>
            </div>
          </div>
        </div>
      )}

      {eventDataD ? (
        ""
      ) : (
        <div className={styles.master}>
          <p className={styles.paragramTitle}>{data.heading3}</p>
          <div className={styles.TopMargin}>
            <div className={styles.iconList}>
              {eventData.topicsMasterclass.map((value, i) => {
                return (
                  <div className={styles.iconDiv} key={i}>
                    <FaArrowRight className={styles.icon} />{" "}
                    <p className={styles.iconPs}>{value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div id="About">
        <p className={styles.paragramTitleReview}>{data.heading4}</p>
        <div className={styles.eReview}>
          {reviewsDataD ? (
            <ReviewsFSD redirectFs={true} />
          ) : (
            <Reviews redirectFs={true} />
          )}
        </div>
      </div>
      <div>
        <p className={styles.paragramTitle}>{data.heading5}</p>

        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/event/Line+48.png"
          layout="intrinsic"
          width="90"
          height="5"
          loading="lazy"
          alt="backImg"
        />
        {eventData.aboutLearnbay.map((value, i) => {
          return <p key={i}>{value}</p>;
        })}

        <p className={styles.paragramTitlestrong}>
          <strong>{data.aboutLearnbayHeading}</strong>
        </p>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/event/Line+51.png"
          layout="intrinsic"
          width="90"
          height="5"
          loading="lazy"
          alt="backImg"
        />
        <ul className={styles.listMargin}>
          {eventData.standoutFeatures.map((value, i) => {
            return <li key={i}>{value}</li>;
          })}
        </ul>
        {eventData.standoutFeaturesLastHead.map((value, i) => {
          return <p key={i}>{value}</p>;
        })}
      </div>
      <div>
        <div className={styles.centerBtn}>
          <button className="outLineBtn">
            Register NOW!
            {/* <FaArrowRight className={styles.iconB} /> */}
          </button>
        </div>
      </div>

      <div style={{ margin: "15px 0px" }}>
        <div className={styles.bodyContent}>
          <div className={styles.eLeft}>
            <MdLiveTv className={styles.iconBlue} />
            <h6>{data.h1}</h6>
          </div>
          <div className={styles.eMiddle}>
            <FaLaptopCode className={styles.iconOrange} />
            <h6>{data.h2}</h6>
          </div>
          <div className={styles.eRight}>
            <FaUserGraduate className={styles.iconBlue} />
            <h6>{data.h3}</h6>
          </div>
          <div className={styles.eRight}>
            <HiOutlineBadgeCheck className={styles.iconOrange} />
            <h6>{data.h4}</h6>
          </div>
        </div>
      </div>
      <p className={styles.paragramTitlestrong}>
        <strong>Our Webinar</strong>
      </p>
      <Image
        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/event/Line+51.png"
        layout="intrinsic"
        width="120"
        style={{ marginTop: "6px" }}
        height="3"
        loading="lazy"
        alt="backImg"
      />
      <div className={styles.webinarInfo}>
        <div className={styles.innerBox}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/event/LLDMobile.jpg"
            alt="Learnbay"
            quality={100}
            width="260"
            height="260"
          />
          <p>System Design Masterclass</p>
          <button className="outLineBtn">
            View webinar
          </button>
        </div>
        <div className={styles.innerBox}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/event/LLDMobile.jpg"
            alt="Learnbay"
            quality={100}
            width="260"
            height="260"
          />
          <p>System Design Masterclass</p>
          <button className="outLineBtn">
            View webinar
          </button>
        </div>
        <div className={styles.innerBox}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/event/LLDMobile.jpg"
            alt="Learnbay"
            quality={100}
            width="260"
            height="260"
          />
          <p>System Design Masterclass</p>
          <button className="outLineBtn">
            View webinar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventFeature;
