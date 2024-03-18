import Head from "next/head";
import Navbar from "../components/Global/AdsNavbar/Navbar";
import Scholarship from "../components/Scholarship/scholarship";
import FooterThankYou from "@/components/Global/Footer/FooterThankYou";

function scholarship() {
  return (
    <>
      <div>
        <Head>
          <title>Learnbay Scholarship</title>
          <meta name="description" content="Learnbay Scholarship" />
          <link
            rel="icon"
            href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
          />
        </Head>
        <Navbar HideButton={true} ADS={true}/>
        <Scholarship reactPhone={true} reactEmail={true}/>
        <FooterThankYou />
      </div>
    </>
  );
}

export default scholarship;
