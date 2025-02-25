import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import styles from "./ThankYouNew.module.css";

import {
  dataScience,
  fullStackD,
  nonTechD,
  placementProject,
  viewAllD,
  GenAI,
} from "./courseDetailsThankYouNew";

function CourseThankYou() {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(false);
  const [oneYearD, setOneYearD] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
  const [genAI, setGenAI] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <div className={styles.Course} id="course">
      <div className={styles.coursesM}>
        <div className={styles.listPanel}>
        <div
            className={styles.spanDiv}
            onClick={() => {
              setViewAll(false);
              setOneYearD(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setGenAI(true);
            }}
            style={
              genAI
                ? {
                    background: "#009CE7",
                    color: "#fff",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    fontWeight: "600",
                  }
                : {
                    background: "#f4fcfe",
                    color: "#0072bc",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    padding: "15px 20px",
                  }
            }
          >
            <p>Generative AI Syllabus</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {genAI ? (
            <div className={styles.gridPanel}>
              {GenAI.map((viewAllData) => {
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
          <div className={styles.line}></div>
          <div
            className={styles.spanDiv}
            onClick={() => {
              setViewAll(false);
              setOneYearD(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setGenAI(false);
            }}
            style={
              oneYearD
                ? {
                    background: "#009CE7",
                    color: "#fff",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    fontWeight: "600",
                  }
                : {
                    background: "#f4fcfe",
                    color: "#0072bc",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    padding: "15px 20px",
                  }
            }
          >
            <p>Data Science Syllabus</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {oneYearD ? (
            <div className={styles.gridPanel}>
              {dataScience.map((viewAllData) => {
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
          <div className={styles.line}></div>
          <div
            className={styles.spanDiv}
            onClick={() => {
              setViewAll(false);
              setOneYearD(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
              setGenAI(false);
            }}
            style={
              Stack
                ? {
                    background: "#009CE7",
                    color: "#fff",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    fontWeight: "600",
                  }
                : {
                    background: "#f4fcfe",
                    color: "#0072bc",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    padding: "15px 20px",
                  }
            }
          >
            <p>DSA / Cloud Computing / Cyber Security Syllabus</p>
            <p>
              <FaChevronDown className="Icons" style={{ fontWeight: "600" }} />
            </p>
          </div>
          {Stack ? (
            <div className={styles.gridPanel}>
              {fullStackD.map((viewAllData) => {
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
          <div className={styles.line}></div>
          <div
            className={styles.spanDiv}
            onClick={() => {
              setViewAll(false);
              setOneYearD(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
              setGenAI(false);
            }}
            style={
              Guarantee
                ? {
                    background: "#009CE7",
                    color: "#fff",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    fontWeight: "600",
                  }
                : {
                    background: "#f4fcfe",
                    color: "#0072bc",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    padding: "15px 20px",
                  }
            }
          >
            <p>E&ICT Academy of IIT Guwahati</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {Guarantee ? (
            <div className={styles.gridPanel}>
              {placementProject.map((viewAllData) => {
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
          <div className={styles.line}></div>
          <div
            className={styles.spanDiv}
            onClick={() => {
              setViewAll(false);
              setOneYearD(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
              setGenAI(false);
            }}
            style={
              nonTech
                ? {
                    background: "#009CE7",
                    color: "#fff",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    fontWeight: "600",
                  }
                : {
                    background: "#f4fcfe",
                    color: "#0072bc",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    padding: "15px 20px",
                  }
            }
          >
            <p>Data Science Master in CS</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {nonTech ? (
            <div className={styles.gridPanel}>
              {nonTechD.map((viewAllData) => {
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
          <div className={styles.line}></div>
          <div
            className={styles.spanDiv}
            onClick={() => {
              setViewAll(true);
              setOneYearD(false);
              setNonTech(false);
              setGuarantee(false);
              setStack(false);
              setGenAI(false);
            }}
            style={
              viewAll
                ? {
                    background: "#009CE7",
                    color: "#fff",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    fontWeight: "600",
                  }
                : {
                    background: "#f4fcfe",
                    color: "#0072bc",
                    borderBottom: "1px solid #0072bc",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    padding: "15px 20px",
                  }
            }
          >
            <p>Domain Courses Syllabus</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {viewAll ? (
            <div className={styles.gridPanel}>
              {viewAllD.map((viewAllData) => {
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
        <div className={styles.listPanel}>
        <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setGenAI(true);
            }}
            style={
              genAI
                ? { background: "white", color: "#0072bc" }
                : { background: "#009CE7", color: "#fff" }
            }
          >
            Generative AI Syllabus
          </span>
          <div className={styles.line}></div>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setGenAI(false);
            }}
            style={
              oneYear
                ? { background: "white", color: "#0072bc" }
                : { background: "#009CE7", color: "#fff" }
            }
          >
            Data Science Syllabus
          </span>
          <div className={styles.line}></div>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
              setGenAI(false);
            }}
            style={
              Stack
                ? { background: "white", color: "#0072bc" }
                : { background: "#009CE7", color: "#fff" }
            }
          >
            DSA / Cloud Computing / Cyber Security Syllabus
          </span>
          <div className={styles.line}></div>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
              setGenAI(false);
            }}
            style={
              Guarantee
                ? { background: "white", color: "#0072bc" }
                : { background: "#009CE7", color: "#fff" }
            }
          >
            E&ICT Academy of IIT Guwahati
          </span>
          <div className={styles.line}></div>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
              setGenAI(false);
            }}
            style={
              nonTech
                ? { background: "white", color: "#0072bc" }
                : { background: "#009CE7", color: "#fff" }
            }
          >
            Master's Degree Syllabus
          </span>
          <div className={styles.line}></div>
          <span
            onClick={() => {
              setViewAll(true);
              setOneYear(false);
              setNonTech(false);
              setGuarantee(false);
              setStack(false);
              setGenAI(false);
            }}
            style={
              viewAll
                ? { background: "white", color: "#0072bc" }
                : { background: "#009CE7", color: "#fff" }
            }
          >
            Domain Courses Syllabus
          </span>
        </div>
        {genAI ? (
          <div className={styles.gridPanel}>
            {GenAI.map((viewAllData) => {
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
        {viewAll ? (
          <div className={styles.gridPanel}>
            {viewAllD.map((viewAllData) => {
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
        {oneYear ? (
          <div className={styles.gridPanel}>
            {dataScience.map((viewAllData) => {
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

        {Guarantee ? (
          <div className={styles.gridPanel}>
            {placementProject.map((viewAllData) => {
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
        {Stack ? (
          <div className={styles.gridPanel}>
            {fullStackD.map((viewAllData) => {
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
        {nonTech ? (
          <div className={styles.gridPanel}>
            {nonTechD.map((viewAllData) => {
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
