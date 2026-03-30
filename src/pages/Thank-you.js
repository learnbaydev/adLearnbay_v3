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
          {/* HERO */}
          <div className={styles.hero}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Enquiry Successfully Registered
            </div>

            <h1 className={styles.heroTitle}>
              Avail Financial Year End <br />
              <span className={styles.gradGreen}>Scholarship</span>
            </h1>

            <p className={styles.heroSub}>
              Our expert will call you shortly. Lock your scholarship before it
              expires.
            </p>
          </div>

          {/* MAIN CARD */}
          <div className={styles.mainCard}>
            {/* TIMER */}
            <div className={styles.timerStrip}>
              <div className={styles.timerLabel}>Offer expires in</div>
              <div className={styles.timerBoxes}>
                {["d", "h", "m", "s"].map((key, i) => (
                  <div key={i} className={styles.tBox}>
                    <div className={styles.tNum}>{timeLeft?.[key] ?? "--"}</div>
                    <div className={styles.tLbl}>
                      {key === "d"
                        ? "Days"
                        : key === "h"
                          ? "Hours"
                          : key === "m"
                            ? "Mins"
                            : "Secs"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SEATS */}
            <div className={styles.seatsSection}>
              <div className={styles.seatsTop}>
                <div className={styles.seatsLabel}>🔥 Seats filling fast</div>
                <div className={styles.seatsCount}>
                  Only {remainingSeats ?? "..."} left
                </div>
              </div>

              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className={styles.progressLabels}>
                <span>Seats claimed</span>
                <span>{progressPercent}% filled</span>
              </div>
            </div>

            {/* IBM */}
            <div className={styles.ibmBar}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/ibm-microsoft+(1).webp"
                alt="IBM and Microsoft"
                width={120}
                height={40}
              />
              <span className={styles.ibmSep}>|</span>
              <span className={styles.ibmText}>
                Industry-certified program · Placement support included
              </span>
            </div>

            {/* NOTE */}
            <div className={styles.ctaSection}>
              <p className={styles.ctaNote}>
                Note: Scholarships are limited and offered on a first-come,
                first-served basis. Check your eligibility during the counseling
                session.
              </p>
            </div>
          </div>

          {/* COURSES */}
          <div className={styles.cardwrapper}>
            {certificationCourses.map((course, index) => (
              <CertificationCard
                key={index}
                data={course}
                download={true}
                isThankYou={true}
              />
            ))}
          </div>

          <CourseThankYou />
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
