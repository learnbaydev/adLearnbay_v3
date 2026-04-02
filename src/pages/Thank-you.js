import { useEffect, useState } from "react";
import Navbar from "@/components/Global/NavbarHome/NavbarThankYou";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ThankYou.module.css";
import FooterThankYou from "@/components/Global/Footer/FooterThankYou";
import CourseThankYou from "@/components/Home/Course/ThankYouNew";
import { certificationCourses } from "@/components/Home/Course/CertificationCard/Data/CertificationCardData";
import cookies from "next-cookies";
import CertificationCard from "@/components/Home/Course/CertificationCard/CertificationCard";
import SuccessPage from "../components/ThankYouNew/SuccessPage";

/* ─── Constants ─── */
const TOTAL_SEATS = 24;
const BASE_DATE = new Date("2026-03-24T00:00:00");
const DEADLINE = new Date("2026-03-31T23:59:59");

/* ─── Helpers ─── */
function setCookie(name, value, days, domain) {
  if (typeof document === "undefined") return;
  const date = new Date();
  date.setTime(date.getTime() + days * 86400000);
  document.cookie = `${name}=${value || ""};expires=${date.toUTCString()};path=/;domain=${domain}`;
}

/* ✅ Smart seats logic (never below 4) */
function getRemainingSeats() {
  const now = new Date();

  const totalDuration = DEADLINE - BASE_DATE;
  const elapsed = now - BASE_DATE;

  const progress = Math.min(elapsed / totalDuration, 1);

  const calculatedSeats = Math.floor(TOTAL_SEATS - progress * TOTAL_SEATS);

  return Math.max(calculatedSeats, 4); // 👈 never go below 4
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = DEADLINE - new Date();
  if (diff <= 0) return { d: "00", h: "00", m: "00", s: "00" };
  return {
    d: pad(Math.floor(diff / 86400000)),
    h: pad(Math.floor((diff % 86400000) / 3600000)),
    m: pad(Math.floor((diff % 3600000) / 60000)),
    s: pad(Math.floor((diff % 60000) / 1000)),
  };
}

/* ─── Component ─── */
const ThankYou = ({ initialName, initialPhone }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [remainingSeats, setRemainingSeats] = useState(null);

  /* ✅ Progress capped at 96% */
  const progressPercent =
    remainingSeats === null
      ? 0
      : Math.max(
          Math.min(
            Math.round(((TOTAL_SEATS - remainingSeats) / TOTAL_SEATS) * 100),
            96,
          ),
          80, // keeps it looking filled
        );

  /* Set cookies */
  useEffect(() => {
    setCookie("yourCookieName", initialName, 30, ".learnbay.co");
    setCookie("yourCookieName", initialPhone, 30, ".learnbay.co");
  }, [initialName, initialPhone]);

  /* Init client-only values */
  useEffect(() => {
    setRemainingSeats(getRemainingSeats());
    setTimeLeft(getTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
      setRemainingSeats(getRemainingSeats()); // 👈 keeps it dynamic
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const emailJson = JSON.stringify(initialName || "");
  const phoneJson = JSON.stringify(initialPhone || "");

  return (
    <>
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
                event: 'form_complete',
                enhanced_conversion_data: {
                  email: ${emailJson},
                  phone: ${phoneJson}
                }
              });
            `,
          }}
        />
      </Head>

      <div className={styles.main}>
        <Navbar HideButton={true} />

        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />

        <section className={styles.mains}>
          <div style={{ marginTop: "30px" }}>
            <SuccessPage
              option1={"Call scheduled"}
              option2={"Your Enquiry Is Successfully Registered"}
            />
            <CourseThankYou />
          </div>
        </section>

        <FooterThankYou />
      </div>
    </>
  );
};

ThankYou.getInitialProps = async (ctx) => ({
  initialName: cookies(ctx).CARD || "",
  initialPhone: cookies(ctx).CARDPHONE || "",
});

export default ThankYou;
