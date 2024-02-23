import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import Footer from "@/components/Global/Footer/Footer";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Navbar from "@/components/Global/NavbarHome/Navbar";
import Refund from "@/components/CoursePage/refund/refund";

function refund() {
  return (
    <div>
      <Head>
        <title>Learnbay - Refund and Cancellations Policies</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learn more about Learnbay's refund policy and cancellation conditions. Your satisfaction is our top priority."
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/refund-cancellation-policy"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        {" "}
        <Navbar radio={true} interstedInHide={true} dataScience={true} />
        <Refund />
        <Footer />
        <WhatsappFloat chat360code1={true} />
        <BottomBar dataScience={true} radio={true} interstedInHide={true} />
      </main>
    </div>
  );
}

export default refund;
