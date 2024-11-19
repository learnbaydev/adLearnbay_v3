import Footer from "@/components/Event/EventFooter/Footer";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import EventFeature from "@/components/WebinarPage/EventFeatures/EventFeature";
import { EventHeader } from "@/components/WebinarPage/EventHeaderFSD/EventHeader";
import { getAllPostIds, getPostData } from "@/lib/event";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import styles from "../../styles/DataScienceEvent.module.css";
import Link from "next/link";

export default function DataScienceEvent({ eventData, formotp }) {
  const [mobile, setMobile] = useState(false);

  let today = new Date();
  let eventDateInfo = new Date(eventData.data.mainData.eventDate);

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{eventData.data.metaInfo.title}</title>
        <meta name="description" content={eventData.data.metaInfo.desc} />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/event" />
      </Head>
      <Navbar HideButton={true} eventDateInfo={eventDateInfo} />
      <div>
        <EventHeader
          deskimg={eventData.data.headImg.deskimg}
          mobimg={eventData.data.headImg.mobimg}
        />
      </div>

      <div className={today >= eventDateInfo ? styles.Pages : styles.Page2}>
        <div>
          <div className={styles.left}>
            <div className={styles.prgrmFeature}>
              <EventFeature
                domainDataD={true}
                reviewsDataD={true}
                event={true}
                formotp={true}
                data={eventData.data.eventFeatureData}
                eventDateInfo={eventDateInfo}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.rightDomain}>
            <section className={styles.formDomain}>
              <div className={styles.headerDomain}>
                <h3>MASTERCLASS</h3>
              </div>
              <p>
                {eventData.data.mainData.Duration}
                <br />
                {eventData.data.mainData.register}
                <br />
                <span style={{ color: "#0072bc", fontWeight: "500" }}>
                  {eventData.data.mainData.likes}
                </span>
              </p>
              <div className={styles.iconsRegister}>
                <p className={styles.iconsRegisterp}>
                  <FaCalendarAlt
                    className={styles.IconDomain}
                    style={{ color: "#E24C32" }}
                  />
                  {eventData.data.mainData.eventDate}
                </p>
                <p className={styles.iconsRegisterp}>|</p>
                <p className={styles.iconsRegisterp}>
                  <FaClock
                    className={styles.IconDomain}
                    style={{ color: "#E24C32" }}
                  />
                  {eventData.data.mainData.eventTime}
                </p>
              </div>

              <div className={styles.centerBtn}>
              <Link href={eventData.data.mainData.webinarLink} >
          <button className="outLineBtn">
            Register NOW!
          </button>
          </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const eventData = getPostData(params.id);
  return {
    props: {
      eventData,
    },
  };
}
