import React, { useState } from "react";
import Styles from "./TrainerSection.module.css";
import Image from "next/image";
import VideoPopup from "../VideoPopup/VideoPopup";


function TrainerSection({ plainimg, iimgchmbl, idss }) {

  const videoSHow = () => {
    setVideo(true);
  };
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);

  // const el = useRef(null);
 

  const images = [
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/alu1.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/alu2.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/alu3.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/alu4.webp",
  ];

  return (
    <>
      <section className={Styles.container}>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
        <h4>Hear it from our Alumni</h4>
        <div className={Styles.First}>
          <div className={Styles.reviewMain}>
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  width={300}
                  height={100}
                  quality={40}
                  loading="lazy"
                  alt="trainer data"
                />
              </div>
            ))}
          </div>

          <div className={Styles.mobileView}>
            <h2>Alumni Spotlight</h2>
            {iimgchmbl ? (
              <div className="imgWrapper">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/alumini-mbl.webp"
                  loading="lazy"
                  width="350"
                  height="100"
                  alt="trainer mobile"
                />
              </div>
            ) : (
              <div className="imgWrapper">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/tariner_sec.webp"
                  loading="lazy"
                  width="350"
                  height="100"
                  alt="trainer mobile"
                  onClick={() => videoSHow(popups)}
                />
              </div>
            )}
          </div>

          <div className={Styles.proImgWrap}>
            <h2>Alumni Spotlight</h2>
            {plainimg ? (
              <div className={`imgWrapper ${Styles.imgwraps}`}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/alumini.webp"
                  loading="lazy"
                  quality={100}
                  width="358"
                  height="100"
                  alt="profile-Img"
                 
                />
              </div>
            ) : (
              <div className="imgWrapper">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-review.webp"
                  loading="lazy"
                  quality={100}
                  width="358"
                  height="100"
                  alt="profile-Img"
                  onClick={() => videoSHow(popups)}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default TrainerSection;
