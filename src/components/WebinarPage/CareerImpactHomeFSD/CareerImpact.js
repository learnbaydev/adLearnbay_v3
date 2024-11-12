import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CareerImpact.module.css";

const CareerImpact = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  return (
    <div className={styles.reviewWrap}>
      <div className={styles.swiperleft}>
        <Swiper
          slidesPerView={mobile ? 1.02 : 1.6}
          spaceBetween={mobile ? 10 : 10}
          pagination={{ clickable: true }}
          grabCursor={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
          }}
          autoPlay={true}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.imgP}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Alumni+Images/binit.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Binit Kumar Swalsingh</h5>
                </div>
                <div>
                  <p className={styles.para}>
                  "I've been with this org since Jan 4, 2023, studying
                            Full Stack Software Development. If you have
                            ambition and need a mentor to show you the right
                            path to success with the right knowledge, I highly
                            recommend this org."
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.imgP}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Alumni+Images/swarup.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Swarup Halder</h5>
                </div>
                <div>
                  <p className={styles.para}>
                  "I have enrolled in Software Development course. I
                            had basic knowledge of DSA and since then it has
                            been a wonderful learning experience. The teacher
                            does an excellent job of explaining the concepts in
                            a way that is easy to understand."
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.imgP}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Alumni+Images/karanveer.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Karanveer Bansal</h5>
                </div>
                <div>
                  <p className={styles.para}>
                  "I enrolled in Learnbay's full stack program. I
                            already completed basic DSA and the live sessions
                            were clear, with good teaching pace. They offer an
                            easy and simple EMI option for course fees."
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.imgP}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Alumni+Images/Gowthaman.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Gowthaman Jeganathan</h5>
                </div>
                <div>
                  <p className={styles.para}>
                  "I'm currently enrolled in the Full Stack course and
                            have completed the DSA and System Design modules.
                            The trainers' teaching method has been enlightening
                            for me as a beginner. Highly recommend Learnbay for
                            upskilling."
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.imgP}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Alumni+Images/Abhishek+Pakhide.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Abhishek Pakhide</h5>
                </div>
                <div>
                  <p className={styles.para}>
                  "I recently finished Learnbay's Basic DSA Course
                            online. The course is well-structured, taught by
                            knowledgeable trainers with a focus on interview
                            preparation and data structure concepts. It benefits
                            both novices and experts."
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CareerImpact;
