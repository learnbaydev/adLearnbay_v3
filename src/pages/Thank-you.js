import Navbar from "@/components/Global/AdsNavbar/Navbar";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ThankYou.module.css";

import FooterThankYou from "@/components/Global/Footer/FooterThankYou";
import CourseThankYou from "@/components/Home/Course/ThankYouNew";
import cookies from "next-cookies";

const ThankYou = ({ initialName }) => {
  const email = JSON.stringify(initialName);
  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Thank you!</title>
          <meta name="description" content="Thank you!" />
          <link
            rel="icon"
            href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'event': 'form_complete',
            'enhanced_conversion_data': {
              "email": ${email}
            }
          });
      `,
            }}
          />
        </Head>
        <Navbar />

        <section className={styles.mains}>
          <div className={styles.Back}>
            <h4 className={styles.thankh4}>
              Thank you!
              <br />
              <span className={styles.thankspan}>
                We Received your request and look forward to getting in touch
                soon.
              </span>
            </h4>
            <div>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/thank-header.png"
                width="522"
                height="380"
                layout="intrinsic"
              />
            </div>
          </div>
          <CourseThankYou />
        </section>
        <FooterThankYou />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function (botId) {
        var s = document.createElement("script");
        s.async = true;
        s.type = 'text/javascript';
        s.src = "https://app.chat360.io/widget/chatbox/common_scripts/script.js";
        s.onload = function () {
          window.loadChat360Bot(botId);
        };
        s.onerror = function (err) {
          console.error(err);
        };
        document.body.appendChild(s);
      })("4f4d2e98-0778-4fb7-a9c3-af6fd1bedad8");
  `,
        }}
      />
    </>
  );
};

export default ThankYou;

ThankYou.getInitialProps = async (ctx) => {
  return {
    initialName: cookies(ctx).CARD || "",
  };
};
