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
    name: "Jaya Sinha",
    imgSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/jaya_pro.webp",
    text: "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable.",
  },
  {
    name: "Lakshmi Sushmita",
    imgSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/laxmi_pro.webp",
    text: "Switching to data science with Learnbay was a game changer. After one on one doubt sessions and working on several projects I got a job offer from Natwest with 80% salary hike while I was still in the middle of course.",
  },
  {
    name: "Mohammad Israr",
    imgSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/irsar_pro.webp",
    text: "Thanks to the Learnbay data science course and outstanding assistance, I could ace the TCS interview and secure a job with a 210% pay hike. My understanding of the course was greatly improved by the real-time projects and respective IBM project experience certification.",
  },
  {
    name: "Preksha Mishra",
    imgSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/preksha_pro.webp",
    text: "The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. ",
  },
  {
    name: "Arvind Kumar",
    imgSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/arvind_pro.webp",
    text: "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is their flexible modules & small size batches. ",
  },
  {
    name: "Shubham Kumar",
    imgSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/shubam_pro.webp",
    text: "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world.",
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
              className={styles.img}
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
