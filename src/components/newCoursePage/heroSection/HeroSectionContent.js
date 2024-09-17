import { useEffect, useRef, useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import styles from "./HeroSection.module.css";
import Form from "@/components/Global/Form/Form";
import FormOtp from "@/components/Global/FormOtp/FormOtp";
import { FaRegUser } from "react-icons/fa";

function HeroSectionContent({
  setPopups,
  spanTag,
  thumbnailurl,
  noIIt,
  interstedInHide,
  dataScienceCounselling,
  upSkillingHide,
  formotp,
  dataScience,
  DomainInput,
  ADS,
  HideInterest,}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [counter, setCounter] = useState(1568); 
  const videoRef = useRef(null);
  const iframeRef = useRef(null);

  // Handle Video Play/Pause
  const handleVideoPlay = () => {
    if (isVideoPlaying) {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
      setIsVideoPlaying(false);
    } else {
      setIsVideoPlaying(true);
      setShowThumbnail(false);
    }
  };

  useEffect(() => {
    const incrementCounter = setInterval(() => {
      setCounter((prevCounter) => Math.min(prevCounter + 20, 7568));
    }, 1);

    return () => clearInterval(incrementCounter);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 300;
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollTop ? "down" : "up";
      const isScrollingUp = scrollDirection === "up";
      const isBeyondThreshold = scrollY <= threshold;

      if (
        !isScrollingUp &&
        iframeRef.current &&
        iframeRef.current.contentWindow
      ) {
        iframeRef.current.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
        setIsVideoPlaying(false);
      }

      setShowThumbnail(isBeyondThreshold || (isScrollingUp && !isVideoPlaying));

      setLastScrollTop(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, isVideoPlaying]);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <section className={styles.mainBg}>
      <div className={styles.container}>
        <div className="containerWidth">
          <div className={styles.innerDiv}>
            <div className={styles.firstSection}>
            <div className={styles.starDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/hero_brain.webp"
                    alt="Curriculum Inclusive of Gen-AI"
                    width={59}
                    height={72}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/hero_brain.webp"
                  />
                  <h5>Curriculum Inclusive of Gen-AI</h5>
                </div>
              <h1>
                Executive Program in Data Science & AI for{" "}
                <span className={styles.span}>Managers and Tech Leaders</span>
              </h1>
              <div className={styles.starDivSection}>
                
              <div className={styles.starDiv}>
                  <p>"Learn to leverage the power of data and AI to solve complex business challenges, enhance decision-making, and lead high-impact projects in your organization."</p>
                </div>
              </div>
              <div className={styles.btnDiv}>
                <div className={styles.outlineButton} onClick={popupShow}>
                  DOWNLOAD SYLLABUS
                </div>
                <div className={styles.orangeButton} onClick={popupShow}>
                  START MY APPLICATION
                </div>
              </div>
            </div>
            {noIIt ? (
              <div className={styles.formdiv}>
                <span className={styles.fill}>
                  <FaRegUser className={styles.icon} /> {counter} people filled
                </span>
                <h3>
                  Check Your <span className={styles.span}>Eligibility</span>
                </h3>
                {formotp ? (
            <FormOtp
            popup={true}
            upSkillingHide={true}
            
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            interstedInHide={interstedInHide}
            ADS={ADS}
            HideInterest={HideInterest}
        DomainInput={DomainInput}
          />
          ) : (
        <Form
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
          
          
          fullStack={fullStack}
          titleCourse={titleCourse}
          brochureLink={brochureLink}
          upSkillingHide={upSkillingHide}
          interstedInHide={interstedInHide}
          adPage={adPage}
          HideInterest={HideInterest}
          OS={OS}
        />
          )}
              </div>
            ) : (
              <div className={styles.secondSection} onClick={handleVideoPlay}>
                <div className={styles.videoContainer}>
                  {showThumbnail ? (
                    <div className={styles.videoThumbnail}>
                      <Image
                        src={thumbnailurl}
                        alt="Video Thumbnail"
                        width={684}
                        height={450}
                        className={styles.clickableImage}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/first_yt_thumb.webp"
                      />
                      <div className={styles.playButton} />{" "}
                      {/* Add a play button overlay */}
                    </div>
                  ) : (
                    <iframe
                      ref={iframeRef}
                      width="480"
                      height="350"
                      src="https://www.youtube.com/embed/6Lr-sJLQ100?enablejsapi=1&autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className={styles.videoIframe}
                      loading="lazy"
                    ></iframe>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.btnDivM}>
                <div className={styles.outlineButton} onClick={popupShow}>
                  DOWNLOAD SYLLABUS
                </div>
                <div className={styles.orangeButton} onClick={popupShow}>
                  START MY APPLICATION
                </div>
              </div>
      </div>
      <div className="containerWidth">
        <div className={styles.botDiv}>
          <div className={styles.innerBotDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/application_b.webp"
              alt="Application Closes"
              width={60}
              height={60}
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/application_b.webp"
            />
            <div className={styles.content}>
              <p>Application closes on</p>
              <h3>29 Sept, 2024</h3>
            </div>
          </div>
          <div className={styles.innerBotDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_b.webp"
              alt="Program Duration"
              width={60}
              height={60}
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_b.webp"
            />
            <div className={styles.content}>
              <p>Program Duration</p>
              <h3>11 Months</h3>
            </div>
          </div>
          <div className={styles.innerBotDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/training_b.webp"
              alt="Training Format"
              width={60}
              height={60}
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/training_b.webp"
            />
            <div className={styles.content}>
              <p>Training Format</p>
              <h3>
                Live Online <span className={styles.span}>|</span> Hybrid
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionContent;