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

export default function DataScienceEvent({ eventData }) {
  const [mobile, setMobile] = useState(false);

  const today = new Date();
  const eventDateInfo = new Date(eventData.mainData.eventDate);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 481);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{eventData.metaInfo.title}</title>
        <meta name="description" content={eventData.metaInfo.desc} />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/event" />
      </Head>
      <Navbar fullstackEvent={true} webinarLink={eventData.eventFeatureData.webinarLink} HideButton={true} eventDateInfo={eventDateInfo} />
      <div>
        <EventHeader
          deskimg={eventData.headImg.deskimg}
          mobimg={eventData.headImg.mobimg}
        />
      </div>
      <div className={today >= eventDateInfo ? styles.Pages : styles.Page2}>
        <div>
          <div className={styles.left}>
            <div className={styles.prgrmFeature}>
              <EventFeature
                event={eventData.eventFeatureData.event}
                eventFullStack={eventData.eventFeatureData.eventFullStack}
                domainDataD={true}
                reviewsDataD={eventData.eventFeatureData.reviewsDataD}
                interstedInHide={true}
                data={eventData.eventFeatureData}
                eventDateInfo={eventDateInfo}
                dataScience={true}
                google={true}
                fullstackEvent={eventData.eventFeatureData.fullstackEvent}
              />
            </div>
          </div>
        </div>
        <div>
          <RightDomain
            eventData={eventData}
            webinarDate={eventData.eventFeatureData.webinarDate}
            event={eventData.eventFeatureData.event}
            eventFullStack={eventData.eventFeatureData.eventFullStack}
            fullstackEvent={eventData.eventFeatureData.fullstackEvent}
        fullstackEventD ={true}
        webinarLink={eventData.eventFeatureData.webinarLink}
        Duration={eventData.mainData. Duration}
        register={eventData.mainData.register}
        likes={eventData.mainData.likes}
        eventTime={eventData.mainData.eventTime}
        eventDate={eventData.mainData.eventDate}
          />
        </div>
      </div>
      <Footer />
      <WBotomLine
        interstedInHide={true}
        dataScience={true}
        event={eventData.eventFeatureData.event}
        eventFullStack={eventData.eventFeatureData.eventFullStack}
        webinarLink={eventData.eventFeatureData.webinarLink}
        fullstackEvent={eventData.eventFeatureData.fullstackEvent}
      />

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
      eventData: eventData.data, // Pass the entire data as a single object
    },
  };
}
