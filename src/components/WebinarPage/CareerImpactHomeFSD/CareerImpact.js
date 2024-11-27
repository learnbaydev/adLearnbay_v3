import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CareerImpact.module.css";

const testimonials = [
  {
    name: "Binit Kumar Swalsingh",
    imgSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Alumni+Images/binit.png",
    text: "I've been with this org since Jan 4, 2023, studying Full Stack Software Development. If you have ambition and need a mentor to show you the right path to success with the right knowledge, I highly recommend this org.",
  },
  {
    name: "Swarup Halder",
    imgSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Alumni+Images/swarup.png",
    text: "I have enrolled in Software Development course. I had basic knowledge of DSA and since then it has been a wonderful learning experience. The teacher does an excellent job of explaining the concepts in a way that is easy to understand.",
  },
  {
    name: "Karanveer Bansal",
    imgSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Alumni+Images/karanveer.png",
    text: "I enrolled in Learnbay's full stack program. I already completed basic DSA and the live sessions were clear, with good teaching pace. They offer an easy and simple EMI option for course fees.",
  },
  {
    name: "Gowthaman Jeganathan",
    imgSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Alumni+Images/Gowthaman.png",
    text: "I'm currently enrolled in the Full Stack course and have completed the DSA and System Design modules. The trainers' teaching method has been enlightening for me as a beginner. Highly recommend Learnbay for upskilling.",
  },
  {
    name: "Abhishek Pakhide",
    imgSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Alumni+Images/Abhishek+Pakhide.png",
    text: "I recently finished Learnbay's Basic DSA Course online. The course is well-structured, taught by knowledgeable trainers with a focus on interview preparation and data structure concepts. It benefits both novices and experts.",
  },
];

const CareerImpact = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 600);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const renderSlide = useCallback(
    ({ name, imgSrc, text }, index) => (
      <SwiperSlide key={index} className={styles.slide}>
        <div className={styles.content}>
          <div className={styles.imgP}>
            <Image
              src={imgSrc}
              layout="intrinsic"
              width={100}
              height={100}
              alt={name}
            />
          </div>
          <div className={styles.contentRight}>
            <div className={styles.name}>
              <h5>{name}</h5>
            </div>
            <div>
              <p className={styles.para}>{text}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ),
    []
  );

  const slides = useMemo(() => testimonials.map(renderSlide), [renderSlide]);

  return (
    <div className={styles.reviewWrap}>
      <div className={styles.swiperleft}>
        <Swiper
          slidesPerView={isMobile ? 1.02 : 1.6}
          spaceBetween={10}
          pagination={{ clickable: true }}
          grabCursor
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2500 }}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};

export default CareerImpact;
