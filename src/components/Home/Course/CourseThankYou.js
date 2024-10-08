import Image from "next/image";
import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import styles from "./CourseThankYou.module.css";

import {
  dataScience,
  fullStackD,
  nonTechD,
  placementProject,
  viewAllD,
} from "./courseDetailsThankYou";

function CourseThankYou() {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <div className={styles.Course} id="course">
      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              oneYear
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            Data Science Syllabus
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
            }}
            style={
              Stack
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            Syllabus
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
            }}
            style={
              Guarantee
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            E&ICT Academy of IIT Guwahati
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              nonTech
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
   Domain Syllabus         
          </span>
          <span
            onClick={() => {
              setViewAll(true);
              setOneYear(false);
              setNonTech(false);
              setGuarantee(false);
              setStack(false);
            }}
            style={
              viewAll
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            View All
          </span>
        </div>
        {viewAll ? (
          <div className={styles.gridPanel}>
            {viewAllD.map((viewAllData) => {
              const { id, title, img, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <Image
                    src={img}
                    layout="intrinsic"
                    className={styles.courseImg}
                    alt="data-science-course"
                    quality={100}
                    width="306"
                    height="230"
                  />

                  <p className={styles.Ptopp}>{title}</p>

                  <div className={styles.btnWrapper}>
                    <button className={styles.Button}>
                      <AiOutlineDownload className="bIcons" />
                      <a href={link1} target="_blank">
                        Download Syllabus
                      </a>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {oneYear ? (
          <div className={styles.gridPanel}>
            {dataScience.map((viewAllData) => {
              const { id, title, img, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <Image
                    src={img}
                    layout="intrinsic"
                    className={styles.courseImg}
                    alt="data-science-course"
                    quality={100}
                    width="306"
                    height="230"
                  />
                  <p className={styles.Ptopp}>{title}</p>
                  <div className={styles.btnWrapper}>
                    <button className={styles.Button}>
                      <AiOutlineDownload className="bIcons" />
                      <a href={link1} target="_blank">
                        Download Syllabus
                      </a>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

        {Guarantee ? (
          <div className={styles.gridPanel}>
            {placementProject.map((viewAllData) => {
              const { id, title, title1, img, para, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <Image
                    src={img}
                    layout="intrinsic"
                    className={styles.courseImg}
                    alt="data-science-course"
                    quality={100}
                    width="306"
                    height="230"
                  />
                  <p className={styles.Ptopp}>{title}</p>
                  <div className={styles.btnWrapper}>
                    <button className={styles.Button}>
                      <AiOutlineDownload className="bIcons" />
                      <a href={link1} target="_blank">
                        Download Syllabus
                      </a>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {Stack ? (
          <div className={styles.gridPanel}>
            {fullStackD.map((viewAllData) => {
              const { id, title, title1, img, para, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <Image
                    src={img}
                    layout="intrinsic"
                    className={styles.courseImg}
                    alt="data-science-course"
                    quality={100}
                    width="306"
                    height="230"
                  />
                  <p className={styles.Ptopp}>{title}</p>
                  <div className={styles.btnWrapper}>
                    <button className={styles.Button}>
                      <AiOutlineDownload className="bIcons" />
                      <a href={link1} target="_blank">
                        Download Syllabus
                      </a>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {nonTech ? (
          <div className={styles.gridPanel}>
            {nonTechD.map((viewAllData) => {
              const { id, title, title1, img, para, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <Image
                    src={img}
                    layout="intrinsic"
                    className={styles.courseImg}
                    alt="data-science-course"
                    quality={100}
                    width="306"
                    height="300"
                  />
                  <p className={styles.Ptopp}>{title}</p>
                  <div className={styles.btnWrapper}>
                    <button className={styles.Button}>
                      <AiOutlineDownload className="bIcons" />
                      <a href={link1} target="_blank">
                        Download Syllabus
                      </a>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CourseThankYou;
