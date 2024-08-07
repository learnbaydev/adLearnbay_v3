import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { BsCheckLg, BsFire } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Course.module.css";
import { courseDetails } from "./courseDetails";
const Popup = dynamic(() => import("@/components/Global/Popup/Popup"));
const Form = dynamic(() => import("@/components/Global/Form/Form"));

const Course = ({
  dataScience,
  radio,
  dataScienceCounselling,
  organicADS,
  dataScienceGeneric,
  interstedInHide,
}) => {
  const [mobile, setMobile] = useState(false);
  const [value, setValue] = useState(3.68);
  const [popups, setPopups] = useState(false);

  const [CourseLoop, setCourseLoop] = useState([
    { title: "Popular Courses", value: true },
    // { title: "Certification Program", value: true },
    // { title: "Master's Degree Program", value: false },
  ]);

  const menuChange = (title, index) => {
    if (title === CourseLoop[index].title) {
      setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
      for (let i = 0; i < CourseLoop.length; i++) {
        if (index === i) {
          setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
        } else {
          setCourseLoop([...CourseLoop], (CourseLoop[i].value = false));
        }
      }
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
      setValue(1.4);
      setMobile(true);
    }
    if (width < 600) {
      setValue(1);
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
        </div>
      </Popup>
      <h2>Our Courses</h2>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          {courseDetails.map((CourseData, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  menuChange(CourseData.title, index);
                }}
                className={
                  CourseLoop[index].value ? styles.ActiveSpan : styles.span
                }
              >
                {CourseData.title === "Master's Degree Program" ? (
                  <BsFire style={{ color: "red", marginRight: "5px" }} />
                ) : (
                  ""
                )}
                {CourseData.title}
              </span>
            );
          })}
        </div>
        <div>
          {courseDetails.map((courseDetail, index) => {
            const { courses } = courseDetail;
            return CourseLoop[index].value ? (
              <div key={index}>
                {courses.map((courseDetail, index) => {
                  return (
                    <div key={index} className={styles.divBox}>
                      <h5 className={styles.h5font}>
                        {courseDetail.courseName}
                      </h5>
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
                                titleCourse,
                                brochureLinks,
                                courseTime,
                                Green,
                                newDesign,
                                newDesignOrange,
                              } = viewAllData;
                              return (
                                <SwiperSlide
                                  className={styles.leftSide}
                                  key={index}
                                >
                                  <div
                                    key={id}
                                    className={
                                      newDesignOrange
                                        ? styles.newSliderWrapOrange
                                        : newDesign
                                        ? styles.newSliderWrap
                                        : styles.SliderWrap
                                    }
                                  >
                                    {newDesign ? (
                                      <>
                                        {" "}
                                        <div
                                          className={
                                            newDesignOrange
                                              ? styles.OrangeLeftBorder
                                              : styles.leftBorder
                                          }
                                        ></div>
                                        <div
                                          className={
                                            newDesignOrange
                                              ? styles.OrangeRightBorder
                                              : styles.rightBorder
                                          }
                                        ></div>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    {newDesign ? (
                                      ""
                                    ) : organicADS ? (
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
                                            style={{ objectFit: "cover" }}
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
                                            style={{ objectFit: "cover" }}
                                            alt="data science course"
                                          />
                                        </div>
                                      </a>
                                    )}
                                    <div
                                      className={styles.contButton}
                                      style={
                                        newDesign
                                          ? { borderRadius: "20px" }
                                          : {
                                              borderRadius: "0px 0px 8px 8px",
                                              width: "92%",
                                              marginTop: "-12px",
                                              zIndex: "0",
                                              boxShadow:
                                                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                            }
                                      }
                                    >
                                      {newDesign ? (
                                        organicADS ? (
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
                                                quality={100}
                                                loading="lazy"
                                                style={{ objectFit: "cover" }}
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
                                                quality={100}
                                                loading="lazy"
                                                style={{ objectFit: "cover" }}
                                                alt="data science course"
                                              />
                                            </div>
                                          </a>
                                        )
                                      ) : (
                                        ""
                                      )}
                                      <div className={styles.contentBox}>
                                        <div
                                          className={styles.headWrapper}
                                          style={
                                            title === "Master in CS:" ||
                                            title === "Advance Certification"
                                              ? { marginTop: "5px" }
                                              : { marginTop: "15px" }
                                          }
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
                                        <hr className={styles.hr} />
                                        <div className={styles.paraDiv}>
                                          <p className={styles.singleP}>
                                            <BiTimeFive
                                              className={styles.checkCircle}
                                            />
                                            {/* <IoTimeOutline
                                          className={styles.timeIcon}
                                        />{" "} */}
                                            {para[0]} {courseTime}
                                          </p>
                                          {/* <p>
                                      <AiOutlineFundProjectionScreen
                                        className={styles.checkCircle}
                                        style={{ color: "#edb552" }}
                                      />
                                      {para[1]}
                                    </p> */}
                                          <p className={styles.singleP}>
                                            {/* <TbCurrencyRupee
                                          className={styles.checkCircle}
                                        /> */}
                                            <BsCheckLg
                                              className={styles.checkIcon}
                                            />
                                            {para[1]}
                                          </p>
                                          {para.length >= 3 ? (
                                            <p className={styles.singleP}>
                                              {/* <TbCurrencyRupee
                                          className={styles.checkCircle}
                                        /> */}
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
                                              color: "#2979AD",
                                              background: "#fff",
                                              borderRadius: "0px 0px 0px 20px",
                                            }}
                                          >
                                            Syllabus
                                            <FaDownload
                                              className="bIcon"
                                              style={{ color: "#2979AD" }}
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
                                                  ? styles.green
                                                  : styles.fillBtn
                                              }
                                              style={
                                                newDesign
                                                  ? {
                                                      borderRadius:
                                                        "0 0 20px 0",
                                                    }
                                                  : {
                                                      borderRadius:
                                                        "0 0 8px 0px",
                                                    }
                                              }
                                            >
                                              View Details
                                              <MdChecklist
                                                className={styles.bellIcon}
                                                onClick={() => {
                                                  setTitleCourse(titleCourse);
                                                  setBrochureLinks(
                                                    brochureLinks
                                                  );
                                                  popupShow();
                                                }}
                                              />
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
                                                  ? styles.green
                                                  : styles.fillBtn
                                              }
                                              style={
                                                newDesign
                                                  ? {
                                                      borderRadius:
                                                        "0 0 20px 0",
                                                    }
                                                  : {
                                                      borderRadius:
                                                        "0 0 8px 0px",
                                                    }
                                              }
                                            >
                                              View Details
                                              <MdChecklist
                                                className={styles.bellIcon}
                                                onClick={() => {
                                                  setTitleCourse(titleCourse);
                                                  setBrochureLinks(
                                                    brochureLinks
                                                  );
                                                  popupShow();
                                                }}
                                              />
                                            </button>
                                          </a>
                                        )}
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
