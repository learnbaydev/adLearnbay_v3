/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./DemoCardCls.module.css"

const SyllDemoCard = () => {
  return (
    <div>
       <div className={styles.desktopryt}>  <div className={styles.rytSide}>
        <div className={styles.rytConteiner}>
          <div className={styles.greenTag}>
            <svg
              height="36"
              width="70"
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
    </div>
  )
}

export default SyllDemoCard
