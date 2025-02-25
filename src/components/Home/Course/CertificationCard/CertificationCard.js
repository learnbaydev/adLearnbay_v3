import Image from "next/image";
import styles from "./CertificationCard.module.css";
import { MdOutlineFileDownloadSvg } from "@/Data/svgData/points";
// import { useState } from "react";
// import dynamic from "next/dynamic";
import Link from "next/link";
const CertificationCard = ({
  data,
  download,
  newBadge = true,
//   platform,
  isThankYou,
  imageAlt = "Certification Image",
}) => {
//   const [popups, setPopups] = useState(false);
//   const [titleCourse, setTitleCourse] = useState();
//   const [brochureLinks, setBrochureLinks] = useState();
//   const [brochurePdfs, setBrochurePdfs] = useState();
  return (
    <div className={styles.card}>
      {/* "New" Badge */}
      {newBadge && <div className={styles.newBadge}>New</div>}

      {/* Top Section: Main Image, Title, and Logo */}
      <div className={styles.cardBody}>
        <Image
          src={data.imageSrc}
          alt={imageAlt}
          width={160}
          height={100}
          className={styles.image}
        />
        <h2 className={styles.title}>{data.title}</h2>
        <Image
          src={data.logoSrc}
          alt={imageAlt}
          width={160}
          height={100}
          className={styles.logo}
        />
      </div>

      {/* Middle Section: Subtitle (with Icon) and Bullet Points */}
      <div className={styles.textContainer}>
        {/* <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          downloadBrochure
        >
          <div className="RightPopup">
            <h5>Download Syllabus</h5>
            <Form
              titleCourse={titleCourse}
              brochureLink={data.brochureLinks}
              brochurePdf={data.brochurePdfs}
              platform={platform}
              downloadBrochure
            />
          </div>
        </Popup> */}
        <div className={styles.textwrapper}>
          {/* {subtitleIcon && (
            <Image
              src={subtitleIcon}
              alt="Subtitle Icon"
              width={20}
              height={20}
              className={styles.subtitleIcon}
            />
          )} */}

          <ul className={styles.pointsList}>
            {data.points.map((point, index) => {
              // If the item is a string, just show text
              if (typeof point === "string") {
                return <li key={index}>{point}</li>;
              }
              // If the item is an object with icon + text
              return (
                <li key={index} className={styles.pointItem}>
                  <Image
                    src={point.icon}
                    alt="point icon"
                    width={20}
                    height={20}
                    className={styles.pointIcon}
                  />
                  <span className={styles.pointText}>{point.text}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Buttons */}
        <div className={styles.buttonGroup}>
          {data.link ? (
            isThankYou ? (
              <Link href={data.link} passHref>
                <button className={styles.viewDetails}>View Details</button>
              </Link>
            ) : (
              <button
                className={styles.viewDetails}
                onClick={() => {
                  // setTitleCourse(data.title);
                  // setBrochureLinks(data.brochureLinks);
                  // setBrochurePdfs(data.brochurePdfs);
                  setPopups(true);
                }}
              >
                View Details
              </button>
            )
          ) : (
            <button disabled className={styles.viewDetails}>
              No Details Available
            </button>
          )}
          {download ? (
            <a
              href={data.brochureLinks}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brochure}
            >
              Brochure <MdOutlineFileDownloadSvg />
            </a>
          ) : (
            <button
              className={styles.brochure}
              onClick={() => {
                setTitleCourse(data.title);
                setBrochureLinks(data.brochureLinks);
                setBrochurePdfs(data.brochurePdfs);
                setPopups(true);
              }}
            >
              Brochure <MdOutlineFileDownloadSvg />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
