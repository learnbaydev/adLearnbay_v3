/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaCheck, FaYoutube } from "react-icons/fa";
import Button from "../../../Global/Button/Button";
import FormOtp from "../../../Global/FormOtp/FormOtp";
import Form from "../../../Global/Form/Form";
import styles from "./FirstSection.module.css";

// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const FirstContent = ({
  softwareBtnHide,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  ibmOnly,
  cityParaCont,
  setPopups,
  S3RightImage,
  setVideo,
  DSWolf,
  IBMGl,
  videoId, // Pass videoId as a prop
  thumbnailUrl, // Pass thumbnailUrl as a prop
  dataScience,
  interstedInHide,
  upSkillingHide,
  dataScienceGeneric,
  brochureLink,
  dataScienceCounselling,
  downloadBrochure,
  fullStack,
  titleCourse,
  radio,
  topHide,
  fresher,
  backgorunimg,
  isSpecialPage,
  isGuwahati,
  backgroundImage,
  formotp,
  noImg,
  workingPro,
  ADS,
  DSA,
  microsoftOnly,
  cyber,
  demoSessionButton,
  DemoClass,
}) => {
  const texts = [
    "Guaranteed Interview Calls",
    "1:1 Doubt Session",
    "Resume BuildUp",
    "Designed for Professionals",
  ];

  const textfresher = [
    "Guaranteed Interview Calls",
    "1:1 Doubt Session",
    "6 Months Internship Certificate",
    "Final Year Project Assistance",
  ];
  const [mobile, setMobile] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
    const isVideoInView = (scrollY) => {
      // Implement logic to check if the video is in view
      // For simplicity, you can replace this with your own logic
      return true;
    };
    const handleScroll = () => {
      const threshold = 300;
      const scrollY = window.scrollY;

      const scrollDirection = scrollY > lastScrollTop ? "down" : "up";
      const isScrollingUp = scrollDirection === "up";
      const isBeyondThreshold = scrollY <= threshold;

      setShowThumbnail(
        isBeyondThreshold || (isScrollingUp && !isVideoInView(scrollY))
      );
      setLastScrollTop(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const popupShow = () => {
    setPopups(true);
  };

  const videoShow = () => {
    setVideo(true);
    setShowThumbnail(false);
    if (videoRef.current) {
      videoRef.current.seekTo(0); // Reset video to start
      videoRef.current.getInternalPlayer().play(); // Play the video
    }
  };
  const customStyles = `
  .react-player__play-icon {
    display: none !important;
  }
`;
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`, // Apply backgroundImage as background image style
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  // const youtubeVideoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <>
      <style>{customStyles}</style>
      <div className={styles.First} style={backgorunimg ? containerStyle : {}}>
        <div className={styles.FirstLeft}>
          {topHide ? "" : <p className={styles.ptopC}>{firstTopPara}</p>}
          {cyber ? (
            <h1 className={`${styles.h1} ${styles.cyberH1}`}>
              {" "}
              {firstHeading}{" "}
              <span className={`${styles.h1Span} ${styles.CyberpanH1}`}>
                {firstToparaImg}
              </span>
            </h1>
          ) : (
            <>
              {" "}
              {DSA ? (
                <h1 className={`${styles.h1} ${styles.DsaH1}`}>
                  {firstHeading}{" "}
                  <span className={styles.DsaSpan}>{firstToparaImg}</span>
                </h1>
              ) : (
                <h1
                  className={`${styles.h1} ${
                    isSpecialPage ? styles.specialPageH1 : ""
                  }`}
                >
                  {firstHeading}{" "}
                  <span className={styles.h1Span}>{firstToparaImg}</span>
                </h1>
              )}
            </>
          )}
          {DSA ? (
            <p className={`${styles.ptopCiity} ${styles.ptopGen}`}>
              {cityParaCont.split("Gen-AI").map((part, index, arr) => (
                <React.Fragment key={index}>
                  {part}
                  {index < arr.length - 1 && (
                    <span className={styles.GENAI}>Gen-AI</span>
                  )}
                </React.Fragment>
              ))}
            </p>
          ) : (
            <p className={styles.ptopCiity}>{cityParaCont}</p>
          )}
          {mobile ? (
            ""
          ) : (
            <>
              {cyber ? (
                <div className={styles.iHubdiv}>
                  {" "}
                  <p className={styles.ptop}>In Collaboration With</p>{" "}
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/iHub-logos.webp"
                    width={180}
                    height={40}
                    priority
                    alt="data science course"
                  />
                </div>
              ) : (
                <>
                  {" "}
                  {microsoftOnly ? (
                    <div className={styles.microsoftDiv}>
                      <p className={styles.ptop}>In Collaboration With</p>{" "}
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/micrososfttss.webp"
                        width={190}
                        height={40}
                        priority
                        alt="data science course"
                      />
                    </div>
                  ) : (
                    <>
                      {" "}
                      {noImg ? (
                        ""
                      ) : (
                        <div
                          className={ibmOnly ? styles.DAibm : styles.Desktop}
                        >
                          {isGuwahati ? (
                            <>
                              {" "}
                              <p className={styles.ptop}>
                                In Collaboration With
                              </p>{" "}
                              <Image
                                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/iit_guwati_logo.webp"
                                width={230}
                                height={60}
                                priority
                                alt="data science course"
                              />
                            </>
                          ) : (
                            <>
                              {" "}
                              {DSWolf ? (
                                <>
                                  <p className={styles.ptop}>
                                    Degree & Certification(s)
                                  </p>
                                  <div className={styles.ImageBlock}>
                                    <Image
                                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/DS-only.webp"
                                      width="430"
                                      height="44"
                                      priority
                                      alt="data science course"
                                    />
                                  </div>
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <p className={styles.ptop}>
                                    In Collaboration With
                                  </p>
                                  <div className={styles.ImageBlock}>
                                    {ibmOnly ? (
                                      <Image
                                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibmnew.webp"
                                        width="70"
                                        height="30"
                                        priority
                                        alt="data science course"
                                      />
                                    ) : (
                                      <Image
                                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                                        width="266"
                                        height="48"
                                        priority
                                        alt="data science course"
                                      />
                                    )}
                                  </div>
                                </>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </>
              )}

              {isGuwahati ? (
                <>
                  <div className={styles.twodiv}>
                    <div className={styles.divone}>
                      <span>
                        <FaCheck />
                      </span>{" "}
                      Campus Immersion
                    </div>
                    <div className={styles.divone}>
                      <span>
                        <FaCheck />
                      </span>{" "}
                      Industry Certification
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  {workingPro ? (
                    <div className={styles.animationTextWrap}>
                      <span className={styles.animationText}>
                        Only for Working Professionals
                      </span>
                    </div>
                  ) : (
                    <>
                      {" "}
                      {fresher ? (
                        <div className={styles.animationTextWrap}>
                          <span className={styles.animationText}>
                            Guaranteed Interview Calls
                          </span>
                        </div>
                      ) : (
                        <>
                          {IBMGl ? (
                            <div className={styles.animationTextWrap}>
                              {textfresher.map((text, index) => (
                                <div
                                  key={index}
                                  className={styles.verticalSlideWrapper}
                                >
                                  <span className={styles.animationText}>
                                    {text}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className={styles.animationTextWrap}>
                              {texts.map((text, index) => (
                                <div
                                  key={index}
                                  className={styles.verticalSlideWrapper}
                                >
                                  <span className={styles.animationText}>
                                    {text}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}

              {isGuwahati ? (
                <>
                  <div className={styles.btnImage}>
                    <div onClick={popupShow}>
                      <Button bannerButton={true} text="EXPLORE SYLLABUS" />
                    </div>
                    {softwareBtnHide ? (
                      ""
                    ) : (
                      <Link href="/master-application">
                        <div className={styles.btnImage}>
                          <Button
                            whiteBgButton={true}
                            text="START MY APPLICATION"
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                <div className={styles.btnImage}>
                  {demoSessionButton ? (
                    <Link href="https://calendly.com/learnbay-live-demo-class/book-your-slot-for-live-demo-session">
                      <div>
                        {demoSessionButton ? (
                          <Button
                            bannerButton={true}
                            text="BOOK DEMO SESSION"
                          />
                        ) : (
                          <Button
                            bannerButton={true}
                            text="DOWNLOAD SYLLABUS"
                          />
                        )}
                      </div>
                    </Link>
                  ) : (
                    <div onClick={popupShow}>
                      {demoSessionButton ? (
                        <Button bannerButton={true} text="BOOK DEMO SESSION" />
                      ) : (
                        <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
                      )}
                    </div>
                  )}
                  {softwareBtnHide ? (
                    ""
                  ) : (
                    <div onClick={videoShow} className={styles.FaPlay}>
                      INTRO VIDEO <FaYoutube className={styles.IconYou} />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {DemoClass ? (
        <div className={styles.desktopryt}>  <div className={styles.rytSide}>
        <div className={styles.rytConteiner}>
          <div className={styles.greenTag}>
            <svg
              height="40"
              width="92"
              fill="none"
              viewBox="0 0 92 59"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="59" width="92" fill="url(#pattern0_137_3837)" />
              <defs>
                <pattern
                  height="1"
                  id="pattern0_137_3837"
                  width="1"
                  patternContentUnits="objectBoundingBox"
                >
                  <use
                    transform="matrix(0.00641304 0 0 0.01 0.179348 0)"
                    xlinkHref="#image0_137_3837"
                  />
                </pattern>
                <image
                  height="100"
                  id="image0_137_3837"
                  width="100"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkElEQVR4nO2WMWsUQRiGRzAWgo2NlY2lnVwTQmYOoo0B/4LldZl3FcQy/gVbS0srUdidQ0GwlFRaCQpiSGVhKQGPyAZtREku7ub7Rp4Htt69e95nd0IAAABwSm7TpkrcVUkHdV9xV/N0M9TO/yEjHV65S59D7Vj/iRr4CrVj/QcKIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSGnKySXtMhdfHR4lbRAiGkh8c1WO139da+tNl3LJb6mkNMW0qU9lXQ7HIQzf7pnM0+3VOInXlkjC8kl7ecSH957unbhqDJnzybn1cUH6uK3IZ8h1M6AVTxvXqxfWfb+d0u8rBIfI2QgIbmk97lNm/86jGYeN3KJbynkpCK6+FUl3d9+cvVcGIjtV9OzeZ5mucQvvLKOX8Sif8XklxuXwkjcKasX+2+RSvzON2SJY+zYnOSYHGpniGPs2CxzTA61M9QxdmyOe0wOtTP0MXZsjjomh9rJXfo4xjF2bPpjsrr47rdv3IdQO003vdH/kJ9XM9uZrIRKmO1MVvpn7p+9H1Zu169bPxMAAED4Cz8AJEjYNmn1AMMAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </div>
          <h2>Book Live Demo Session</h2>
          <hr className={styles.hr} />

          <div className={styles.spandiv}>
            <div className={styles.listryt}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/job_seeker.webp"
                width={25}
                height={25}
                alt="jobseaker"
                priority
                quality={100}
              />
              <span>Ask your doubts in Live Q/A.</span>
            </div>

            <div className={styles.listryt}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/popular_man.webp"
                width={25}
                height={25}
                alt="jobseaker"
                priority
                quality={100}
              />
              <span>Trainer from Top Tech MNC's.</span>
            </div>
            <div className={styles.listryt}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/growth_and_flag.webp"
                width={25}
                height={25}
                alt="jobseaker"
                priority
                quality={100}
              />
              <span>Learn hands-on Industry Projects.</span>
            </div>
          </div>
        </div>
        <div className={styles.listDown}>
          <div className={styles.bookFreebtn}>
            <div >
            <Link href="https://calendly.com/learnbay-live-demo-class/book-your-slot-for-live-demo-session">   <button>Book your Demo Session Now</button></Link>
            </div>
            <div className={styles.conImg}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/trainer_swpnils.webp"
                width={50}
                height={50}
                alt="loading"
                quality={100}
                className={styles.desktopImg}
              />
            </div>
          </div>
         <div className={styles.tagsName}>
         <p>Swapnil Narayan</p>
          <div className={styles.downrytimge}>
            <p>Software Engineer</p> <hr />
            
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/micro_demoClsw.webp"
              width={80}
              height={16}
              loading="lazy"
              alt="microsoft"
            />
          </div>
         </div>
        </div>
      </div></div>
        ) : (
          <div className={styles.secondLeft}>
            <div className={styles.form}>
              {isGuwahati ? (
                <>
                  {" "}
                  <h4>
                    Interested in{" "}
                    <span style={{ color: "#FE7A36" }}> Degree?</span>
                  </h4>
                </>
              ) : (
                <>
                  {" "}
                  {demoSessionButton ? (
                    <p className={styles.p}>Book Demo Session</p>
                  ) : (
                    <p className={styles.p}>Free Career Counselling</p>
                  )}
                </>
              )}

              {formotp ? (
                <FormOtp
                  dataScience={dataScience}
                  dataScienceCounselling={dataScienceCounselling}
                  radio={radio}
                  downloadBrochure={downloadBrochure}
                  fullStack={fullStack}
                  dataScienceGeneric={dataScienceGeneric}
                  upSkillingHide={upSkillingHide}
                  interstedInHide={interstedInHide}
                  formotp={formotp}
                  ADS={ADS}
                />
              ) : (
                <Form
                  dataScience={dataScience}
                  dataScienceCounselling={dataScienceCounselling}
                  radio={radio}
                  downloadBrochure={downloadBrochure}
                  fullStack={fullStack}
                  dataScienceGeneric={dataScienceGeneric}
                  upSkillingHide={upSkillingHide}
                  interstedInHide={interstedInHide}
                  formotp={formotp}
                  ADS={ADS}
                />
              )}
            </div>
            {/* {S3RightImage ? (
        <div className={`"bgVideo"`}>
          <Image width="462" height="400" src={FirstRightImg} />
        </div>
      ) : (
        <div onClick={videoShow} className={`${styles.bgvidos} "bgVideo"`}>
          <Image width="532" height="300" src={thumbnailUrl} />
        </div>
      )}  */}
          </div>
        )}

        {mobile ? (
          <>
            <div className={styles.Mobile}>
              {cyber ? (
                <div className={styles.iHubdiv}>
                  {" "}
                  <p className={styles.ptop}>In Collaboration With</p>{" "}
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/iHub-logos.webp"
                    width={180}
                    height={40}
                    priority
                    alt="data science course"
                  />
                </div>
              ) : (
                <>
                  {" "}
                  {microsoftOnly ? (
                    <>
                      <p className={styles.ptoptwo}>In Collaboration With</p>{" "}
                      <div className={styles.ImageBlock}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/micrososfttss.webp"
                          width={160}
                          height={30}
                          priority
                          alt="data science course"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      {noImg ? (
                        ""
                      ) : (
                        <>
                          {isGuwahati ? (
                            <>
                              <p className={styles.ptoptwo}>
                                In Collaboration With
                              </p>{" "}
                              <div className={styles.ImageBlock}>
                                <Image
                                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/iit_guwati_logo.webp"
                                  width="340"
                                  height="44"
                                  priority
                                  alt="data science course"
                                  className={styles.imgGuwahati}
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              {" "}
                              {DSWolf ? (
                                <>
                                  <p className={styles.ptop}>
                                    Degree & Certification(s)
                                  </p>
                                  <div className={styles.ImageBlock}>
                                    <Image
                                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/DS-only.webp"
                                      width="340"
                                      height="44"
                                      priority
                                      alt="data science course"
                                    />
                                  </div>
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <p className={styles.ptop}>
                                    In Collaboration With
                                  </p>
                                </>
                              )}
                              <div className={styles.ImageBlock}>
                                {ibmOnly ? (
                                  <Image
                                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibmnew.webp"
                                    width="70"
                                    height="30"
                                    priority
                                    alt="data science course"
                                  />
                                ) : (
                                  <Image
                                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                                    width="250"
                                    height="40"
                                    priority
                                    alt="data science course"
                                  />
                                )}
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
              {isGuwahati ? (
                <div className={styles.twodiv}>
                  <div className={styles.divone}>
                    <span>
                      <FaCheck />
                    </span>{" "}
                    Campus Immersion
                  </div>
                  <div className={styles.divone}>
                    <span>
                      <FaCheck />
                    </span>{" "}
                    Industry Certification
                  </div>
                </div>
              ) : (
                ""
              )}

              {isGuwahati ? (
                <>
                  {" "}
                  <div className={styles.btnImageMobile}>
                    <div onClick={popupShow}>
                      <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
                    </div>
                    {softwareBtnHide ? (
                      ""
                    ) : (
                      <Link href="/master-application">
                        <div>
                          <Button
                            whiteBgButton={true}
                            text="START MY APPLICATION"
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className={styles.btnImageMobile}>
                    {demoSessionButton ? (
                      <Link href="https://calendly.com/learnbay-live-demo-class/book-your-slot-for-live-demo-session">
                        {" "}
                        <div>
                          {demoSessionButton ? (
                            <Button
                              bannerButton={true}
                              text="BOOK DEMO SESSION"
                            />
                          ) : (
                            <Button
                              bannerButton={true}
                              text="DOWNLOAD SYLLABUS"
                            />
                          )}
                        </div>
                      </Link>
                    ) : (
                      <div onClick={popupShow}>
                        {demoSessionButton ? (
                          <Button
                            bannerButton={true}
                            text="BOOK DEMO SESSION"
                          />
                        ) : (
                          <Button
                            bannerButton={true}
                            text="DOWNLOAD SYLLABUS"
                          />
                        )}
                      </div>
                    )}
                    {softwareBtnHide ? (
                      ""
                    ) : (
                      <div onClick={videoShow} className={styles.FaPlay}>
                        INTRO VIDEO <FaYoutube className={styles.IconYou} />
                      </div>
                    )}
                  </div>
                </>
              )}

         {
          DemoClass ? (<div className={styles.mblryt}><div className={styles.rytSide}>
            <div className={styles.rytConteiner}>
            <div className={styles.greenTag}>
            <svg height="40" width="80" fill="none" viewBox="0 0 92 59" xmlns="http://www.w3.org/2000/svg">
	<rect height="59" width="92" fill="url(#pattern0_4760_1080)"/>
	<defs>
		<pattern height="1" id="pattern0_4760_1080" width="1" patternContentUnits="objectBoundingBox">
			<use transform="matrix(0.00641304 0 0 0.01 0.179348 0)" xlinkHref="#image0_4760_1080"/>
		</pattern>
		<image height="100" id="image0_4760_1080" width="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkElEQVR4nO2WMWsUQRiGRzAWgo2NlY2lnVwTQmYOoo0B/4LldZl3FcQy/gVbS0srUdidQ0GwlFRaCQpiSGVhKQGPyAZtREku7ub7Rp4Htt69e95nd0IAAABwSm7TpkrcVUkHdV9xV/N0M9TO/yEjHV65S59D7Vj/iRr4CrVj/QcKIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSGnKySXtMhdfHR4lbRAiGkh8c1WO139da+tNl3LJb6mkNMW0qU9lXQ7HIQzf7pnM0+3VOInXlkjC8kl7ecSH957unbhqDJnzybn1cUH6uK3IZ8h1M6AVTxvXqxfWfb+d0u8rBIfI2QgIbmk97lNm/86jGYeN3KJbynkpCK6+FUl3d9+cvVcGIjtV9OzeZ5mucQvvLKOX8Sif8XklxuXwkjcKasX+2+RSvzON2SJY+zYnOSYHGpniGPs2CxzTA61M9QxdmyOe0wOtTP0MXZsjjomh9rJXfo4xjF2bPpjsrr47rdv3IdQO003vdH/kJ9XM9uZrIRKmO1MVvpn7p+9H1Zu169bPxMAAED4Cz8AJEjYNmn1AMMAAAAASUVORK5CYII="/>
	</defs>
</svg>
</div>

              <h2>Book Live Demo Session</h2>
              <hr className={styles.hr} />

              <div className={styles.spandiv}>
                <div className={styles.listryt}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/job_seeker.webp"
                    width={25}
                    height={25}
                    alt="jobseaker"
                    priority
                    quality={100}
                  />
                  <span>Ask your doubts in Live Q/A.</span>
                </div>

                <div className={styles.listryt}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/popular_man.webp"
                    width={25}
                    height={25}
                    alt="jobseaker"
                    priority
                    quality={100}
                  />
                  <span>Trainer from Top Tech MNC's.</span>
                </div>
                <div className={styles.listryt}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/growth_and_flag.webp"
                    width={25}
                    height={25}
                    alt="jobseaker"
                    priority
                    quality={100}
                  />
                  <span>Learn hands-on Industry Projects.</span>
                </div>
              </div>
            </div>
            <div className={styles.listDown}>
              <div className={styles.bookFreebtn}>
                <div >
               <Link href="https://calendly.com/learnbay-live-demo-class/book-your-slot-for-live-demo-session">   <button>Book your Demo Session Now</button></Link>
                </div>
                <div className={styles.conImg}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/trainer_swpnils.webp"
                    width={50}
                    height={50}
                    alt="loading"
                    quality={100}
                    className={styles.desktopImg}
                  />
                </div>
              </div>
             <div className={styles.tagsName}>
             <p>Swapnil Narayan</p>
              <div className={styles.downrytimge}>
                <p>Software Engineer</p> <hr />
                
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/micro_demoClsw.webp"
                  width={80}
                  height={20}
                  loading="lazy"
                  alt="microsoft"
                />
              </div>
             </div>
            </div>
          </div></div>):(     <div className={styles.secondLeft}>
            <div className={styles.form}>
              {demoSessionButton ? (
                <p className={styles.p}>Book Demo Session</p>
              ) : (
                <p className={styles.p}>Free Career Counselling</p>
              )}
              {formotp ? (
                <FormOtp
                  dataScience={dataScience}
                  dataScienceCounselling={dataScienceCounselling}
                  radio={radio}
                  downloadBrochure={downloadBrochure}
                  fullStack={fullStack}
                  dataScienceGeneric={dataScienceGeneric}
                  upSkillingHide={upSkillingHide}
                  interstedInHide={interstedInHide}
                  formotp={formotp}
                  ADS={ADS}
                />
              ) : (
                <Form
                  dataScience={dataScience}
                  dataScienceCounselling={dataScienceCounselling}
                  radio={radio}
                  downloadBrochure={downloadBrochure}
                  fullStack={fullStack}
                  titleCourse={titleCourse}
                  // brochureLink={brochureLink}
                  dataScienceGeneric={dataScienceGeneric}
                  upSkillingHide={upSkillingHide}
                  interstedInHide={interstedInHide}
                  formotp={formotp}
                  ADS={ADS}
                />
              )}
            </div>
            {/* {S3RightImage ? (
              <div className={`"bgVideo"`}>
                <Image width="231" height="200" src={FirstRightImg} />
              </div>
            ) : (
              <div
                onClick={videoShow}
                className={`${styles.bgvidos} "bgVideo"`}
              >
                <Image width="356" height="200" src={thumbnailUrl} />
              </div>
            )} */}
          </div>)
         }
            </div>{" "}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default FirstContent;
