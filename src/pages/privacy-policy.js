import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import Footer from "@/components/Global/Footer/Footer";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Navbar from "@/components/Global/NavbarHome/Navbar";
import Privacy from "@/components/CoursePage/privacy/privacy";

function privacy() {
  return (
    <div>
      <Head>
        <title>Learnbay - Privacy Policies</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learn about Learnbay's privacy policies, which ensure the security of your personal information."
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/privacy-policy" />
      </Head>
      <main>
        {" "}
        <Navbar radio={true} interstedInHide={true} dataScience={true} />
        <Privacy />
        <Footer />
        <WhatsappFloat chat360code1={true} />
        <BottomBar dataScience={true} radio={true} interstedInHide={true} />
      </main>
    </div>
  );
}

export default privacy;
