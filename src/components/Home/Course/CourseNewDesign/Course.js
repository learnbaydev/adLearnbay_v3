import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { BsCheckLg, BsFire } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Course.module.css";
import { courseDetails, courseDetailsM } from "./courseDetails";
const Popup = dynamic(() => import("@/components/Global/Popup/Popup"));
const Form = dynamic(() => import("@/components/Global/Form/Form"));
const FormOtp = dynamic(() => import("@/components/Global/FormOtp/FormOtp"));

const Course = ({
  dataScience,
  radio,
  dataScienceCounselling,
  organicADS,
  dataScienceGeneric,
  interstedInHide,
  formotp,
  HideInterest,
  ADS,
  DomainInput,
}) => {
  const [courseArray, setCourseArray] = useState(courseDetails);
  const [mobile, setMobile] = useState(false);
  const [value, setValue] = useState(3.68);
  const [popups, setPopups] = useState(false);

  const [CourseLoop, setCourseLoop] = useState([
    { title: "Popular Courses", value: true },
    { title: "Domain Courses", value: false },
    { title: "Data Science", value: false },
    { title: "Master's Degree", value: false },
    { title: "Cloud & DevOps", value: false },
  ]);

  const [CourseMLoop, setCourseMLoop] = useState([
    { title: "Popular Courses", value: true },
    { title: "Data Science", value: false },
    { title: "Cloud & DevOps", value: false },
  ]);

  const menuChange = (title, index) => {
    const loop = mobile ? CourseMLoop : CourseLoop;
    const setLoop = mobile ? setCourseMLoop : setCourseLoop;
    
    if (title === loop[index].title) {
      const updatedLoop = loop.map((item, idx) => ({
        ...item,
        value: idx === index
      }));
      setLoop(updatedLoop);
    }
  };

  const popupShow = () => {
    setPopups(true);
  };
  
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLinks, setBrochureLinks] = useState();

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setCourseArray(courseDetailsM);
    }
  }, []);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setValue(1.4);
      setMobile(true);
      setCourseArray(courseDetailsM);
    }
    if (width < 600) {
      setValue(1.1);
      setMobile(true);
    } else if (width <= 641) {
      setValue(1.6);
    } else if (width <= 801) {
      setValue(2);
    } else if (width <= 961) {
      setValue(2.3);
    } else if (width <= 1025) {
      setValue(2.6);
    } else if (width <= 1280) {
      setValue(3);
    } else if (width <= 1281) {
      setValue(2.4);
    } else if (width > 1281) {
      setValue(3.1);
    }
  }, []);

  return (
    <div className={styles.Course} id="course">
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            // style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Syllabus</h5>
          {formotp ? (
            <FormOtp
              popup={true}
              downloadBrochure
              upSkillingHide={true}
              radio={radio}
              titleCourse={titleCourse}
              brochureLink={brochureLinks}
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              dataScienceGeneric={dataScienceGeneric}
              interstedInHide={interstedInHide}
              ADS={ADS}
              HideInterest={HideInterest}
              DomainInput={DomainInput}
            />
          ) : (
            <Form
              titleCourse={titleCourse}
              brochureLink={brochureLinks}
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              dataScienceGeneric={dataScienceGeneric}
              radio={radio}
              downloadBrochure
              upSkillingHide={true}
              interstedInHide={interstedInHide}
            />
          )}
        </div>
      </Popup>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          {(mobile ? CourseMLoop : CourseLoop).map((CourseData, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  menuChange(CourseData.title, index);
                }}
                className={
                  (mobile ? CourseMLoop : CourseLoop)[index].value ? styles.ActiveSpan : styles.span
                }
              >
                {CourseData.title}

                {CourseData.title === "Popular Courses" ? (
                  <BsFire
                    style={{
                      color: "red",
                      marginRight: "5px",
                      marginLeft: "1px",
                    }}
                  />
                ) : (
                  ""
                )}
              </span>
            );
          })}
        </div>
        <div>
          {courseArray.map((courseDetail, index) => {
            const { courses } = courseDetail;
            return (mobile ? CourseMLoop : CourseLoop)[index].value ? (
              <div key={index}>
                {courses.map((courseDetail, index) => {
                  return (
                    <div key={index} className={styles.divBox}>
                      <div className={styles.viewAll}>
                        <h5 className={styles.h5font}>
                          {courseDetail.courseName}
                        </h5>
                      </div>
                      <div className={styles.borderTop}></div>
                      <div className={styles.gridPanel}>
                        <Swiper
                          slidesPerView={value}
                          spaceBetween={mobile ? 10 : 30}
                          pagination={{
                            clickable: true,
                          }}
                          grabCursor={true}
                          modules={[Pagination]}
                          className="mySwiper"
                        >
                          {courseDetail.courseDetails.map(
                            (viewAllData, index) => {
                              const {
                                id,
                                title,
                                title1,
                                img,
                                para,
                                link1,
                                tagHead,
                                titleCourse,
                                brochureLinks,
                                courseTime,
                                Green,
                                newDesign,
                                newDesignOrange,
                              } = viewAllData;

                              // Define custom inline style for specific cards
                              const specificCards = [
                                "Data Science and AI Master",
                                "Master's Degree in CS:",
                                "Executive program in",
                                "Cloud and DevOps",
                              ];
                              const customOrangeBgStyle =
                                specificCards.includes(title)
                                  ? {
                                      background:
                                        "linear-gradient(90deg, #04C988 0%, #0072BC 100%)",
                                      color: "#fff",
                                    }
                                  : {};

                              // Apply custom text alignment style for specific cards
                              const customTitleStyle = specificCards.includes(
                                title
                              )
                                ? {
                                    textAlign: "start",
                                    marginLeft: "20px",
                                    marginTop: "30px",
                                  }
                                : {};

                              return (
                                <SwiperSlide
                                  className={styles.leftSide}
                                  key={index}
                                >
                                  <div key={id} className={styles.SliderWrap}>
                                    {organicADS ? (
                                      <a
                                        onClick={() => {
                                          setTitleCourse(titleCourse);
                                          setBrochureLinks(brochureLinks);
                                          popupShow();
                                        }}
                                        className={styles.imgWrap}
                                      >
                                        <div className="bgWrap">
                                          <Image
                                            src={img}
                                            fill={true}
                                            quality={60}
                                            loading="lazy"
                                            alt="data science course"
                                          />
                                        </div>
                                      </a>
                                    ) : (
                                      <a
                                        href={link1}
                                        className={styles.imgWrap}
                                      >
                                        <div className="bgWrap">
                                          <Image
                                            src={img}
                                            fill={true}
                                            quality={80}
                                            loading="lazy"
                                            objectFit="fill"
                                            alt="data science course"
                                          />
                                        </div>
                                      </a>
                                    )}

                                    <div className={styles.zIndex}>
                                      <div
                                        className={styles.headWrapper}
                                        style={customTitleStyle}
                                      >
                                        <h6
                                          className={
                                            Green
                                              ? styles.mainHeadGreen
                                              : styles.mainHead
                                          }
                                        >
                                          {title}
                                        </h6>
                                        <h6
                                          className={
                                            Green
                                              ? styles.mainHeadGreen
                                              : styles.mainHead
                                          }
                                        >
                                          {title1}
                                        </h6>
                                      </div>
                                      <div
                                        className={styles.orangeBg}
                                        style={customOrangeBgStyle}
                                      >
                                        <p>{tagHead}</p>
                                      </div>
                                      <div
                                        className={styles.contButton}
                                        style={{
                                          borderRadius: "8px 8px 8px 8px",
                                          cursor: "pointer",

                                          // marginTop: "-12px",
                                          zIndex: "0",
                                          boxShadow:
                                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                        }}
                                      >
                                        <div className={styles.contentBox}>
                                          <div className={styles.paraDiv}>
                                            <p className={styles.singleP}>
                                              <BiTimeFive
                                                className={styles.checkCircle}
                                              />
                                              {para[0]} {courseTime}
                                            </p>
                                            <p className={styles.singleP}>
                                              <BsCheckLg
                                                className={styles.checkIcon}
                                              />
                                              {para[1]}
                                            </p>
                                            {para.length >= 3 ? (
                                              <p className={styles.singleP}>
                                                <BsCheckLg
                                                  className={styles.checkIcon}
                                                />
                                                {para[2]}
                                              </p>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                          <hr className={styles.hr1} />
                                        </div>
                                        <div className={styles.btnWrapper}>
                                          <a
                                            onClick={() => {
                                              setTitleCourse(titleCourse);
                                              setBrochureLinks(brochureLinks);
                                              popupShow();
                                            }}
                                          >
                                            <button
                                              className="outLineBtn1"
                                              style={{
                                                color: "#fff",
                                                background: "#fff",
                                                cursor: "pointer",
                                                borderRadius: "7.101px",
                                                background: "#282828",
                                              }}
                                            >
                                              Syllabus
                                              <FaDownload
                                                className="bIcon"
                                                style={{ color: "#fff" }}
                                              />
                                            </button>
                                          </a>
                                          <hr className={styles.btnLine} />
                                          {organicADS ? (
                                            <a
                                              onClick={() => {
                                                setTitleCourse(titleCourse);
                                                setBrochureLinks(brochureLinks);
                                                popupShow();
                                              }}
                                            >
                                              <button
                                                className={
                                                  Green
                                                    ? styles.fillBtn
                                                    : styles.fillBtn
                                                }
                                                style={{
                                                  borderRadius:
                                                    "8px 8px 8px 8px",
                                                  cursor: "pointer",
                                                  border: "1px solid #282828",
                                                }}
                                              >
                                                View Details
                                              </button>
                                            </a>
                                          ) : (
                                            <a
                                              href={link1}
                                              className={styles.link1}
                                            >
                                              <button
                                                className={
                                                  Green
                                                    ? styles.fillBtn
                                                    : styles.fillBtn
                                                }
                                                style={{
                                                  borderRadius:
                                                    "8px 8px 8px 8px",
                                                  cursor: "pointer",
                                                  border: "1px solid #282828",
                                                }}
                                              >
                                                View Details
                                              </button>
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              );
                            }
                          )}
                        </Swiper>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Course);
