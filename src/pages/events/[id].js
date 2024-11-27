import Footer from "@/components/Event/EventFooter/Footer";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import EventFeature from "@/components/WebinarPage/EventFeatures/EventFeature";
import { EventHeader } from "@/components/WebinarPage/EventHeaderFSD/EventHeader";
import { getAllPostIds, getPostData } from "@/lib/event";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../styles/DataScienceEvent.module.css";
import RightDomain from "@/components/WebinarPage/rytDomain/RightDomain";
import WBotomLine from "@/components/WebinarPage/botomLine/WBotomLine";
import BottomBar from "@/components/Global/BottomBar/BottomBar";

export default function DataScienceEvent({ eventData, webinarDate, reviewsDataD }) {
  const [mobile, setMobile] = useState(false);

  let today = new Date();
  let eventDateInfo = new Date(eventData.data.mainData.eventDate);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 481);
    };

    handleResize(); // Set the initial state on component mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

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
                event={true}
                domainDataD={true}
                reviewsDataD={reviewsDataD}
                interstedInHide={true}
                data={eventData.data.eventFeatureData}
                eventDateInfo={eventDateInfo}
                dataScience={true}
                google={true}
              />
            </div>
          </div>
        </div>
        <div>
          <RightDomain eventData={eventData} webinarDate={webinarDate} />
        </div>
      </div>

      <Footer />
      <WBotomLine interstedInHide={true} dataScience={true} event={true} />
      {/* <BottomBar interstedInHide={true} dataScience={true} event={true} /> */}
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
  const webinarDate = eventData.data.eventFeatureData.webinarDate;

  // Handle undefined for reviewsDataD
  const reviewsDataD = eventData.data.eventFeatureData.reviewsDataD || null; // Default to null if undefined

  return {
    props: {
      eventData,
      webinarDate,
      reviewsDataD, // Will be null if undefined
    },
  };
}
