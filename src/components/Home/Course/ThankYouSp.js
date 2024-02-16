import React, { useState } from "react";
import styles from "./ThankYouNew.module.css";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import Link from "next/link";

import {
  SP,
} from "./courseDetailsThankYouNew";

function CourseThankYou() {
  const [oneYear, setOneYear] = useState(true);

  return (
    <div className={styles.Course} id="course">
      <div className={styles.coursesM}>
        <div className={styles.listPanel}>
          {oneYear ? (
            <div className={styles.gridPanel}>
              {SP.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.coursesD}>
        {oneYear ? (
          <div className={styles.gridPanel}>
            {SP.map((viewAllData) => {
              const { id, title, link1 } = viewAllData;
              return (
                <>
                  <Link href={link1}>
                    <div className={styles.leftSide} key={id}>
                      <p className={styles.Ptopp}>{title}</p>
                      <div className={styles.btnWrapper}>
                        <button className={styles.Button}>
                          <FaDownload className="Icons" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </>
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
