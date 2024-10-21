import Navbar from "@/components/Global/AdsNavbar/Navbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import FestiveOffer from "@/components/CoursePage/festiveOffer/FestiveOffer";

function Counselling() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 481);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Festive Offer - Learnbay</title>
        <meta name="description" content="Festive Offer - Learnbay" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <Navbar upSkillingHide={true} />
      <FestiveOffer />
    </>
  );
}

export default Counselling;
