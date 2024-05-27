import { useEffect } from "react";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ThankYou.module.css";

import FooterThankYou from "@/components/Global/Footer/FooterThankYou";
import CourseThankYou from "@/components/Home/Course/ThankYouNew";
import cookies from "next-cookies";
import Button from "@/components/Global/Button/Button";
import { FaMap } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";
import { IoIosPin } from "react-icons/io";
import WalkIn from "@/components/WalkIn/walkIn";

const setCookie = (name, value, days, domain) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;domain=${domain}`;
};

const ThankYou = ({ initialName, initialPhone}) => {
  const email = JSON.stringify(initialName);
  const phone = JSON.stringify(initialPhone);
  console.log(email); // Log the email to the console

  useEffect(() => {
    // Set the cookie with a domain that allows cross-origin access
    setCookie('yourCookieName', initialName, 30, '.learnbay.co');
    setCookie('yourCookieName', initialPhone, 30, '.learnbay.co');
  }, [initialName, initialPhone]);

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
                    "email": ${email},
                    "phone": ${phone},
                  }
                });
              `,
            }}
          />
        </Head>
        <Navbar HideButton={true}/>
        <WalkIn />
        <FooterThankYou />
      </div>
    </>
  );
};

ThankYou.getInitialProps = async (ctx) => {
  return {
    initialName: cookies(ctx).CARD || "",
    initialPhone: cookies(ctx).CARDPHONE || "",
  };
};

export default ThankYou;
