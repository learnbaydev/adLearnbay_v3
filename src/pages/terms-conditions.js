import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import Footer from "@/components/Global/Footer/Footer";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Navbar from "@/components/Global/NavbarHome/Navbar";
import Terms from "../components/CoursePage/terms/terms";

function terms() {
  return (
    <div>
      <Head>
        <title>Learnbay - Terms and Conditions</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay's terms and conditions are clear and concise for your peace of mind. Explore more information for a smooth learning experience. Come join us today!"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/terms-conditions" />
      </Head>
      <main>
      <Navbar radio={true} interstedInHide={true} dataScience={true} />
        <Terms />

        <Footer />
        <WhatsappFloat chat360code1={true} />
        <BottomBar dataScience={true} radio={true} interstedInHide={true} />
      </main>
    </div>
  );
}

export default terms;
