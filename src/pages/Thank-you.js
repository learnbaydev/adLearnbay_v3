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
const SEATS_PER_DAY = 4;
const BASE_DATE = new Date("2026-03-24T00:00:00");
const DEADLINE = new Date("2026-03-31T23:59:59");

/* ─── Helpers ─── */
function setCookie(name, value, days, domain) {
  if (typeof document === "undefined") return;
  const date = new Date();
  date.setTime(date.getTime() + days * 86400000);
  document.cookie = `${name}=${value || ""};expires=${date.toUTCString()};path=/;domain=${domain}`;
}

function getRemainingSeats() {
  const daysPassed = Math.floor((new Date() - BASE_DATE) / 86400000);
  const remaining = TOTAL_SEATS - daysPassed * SEATS_PER_DAY;
  return Math.max(remaining, 1);
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
  // null = not yet mounted; avoids server/client mismatch
  const [timeLeft, setTimeLeft] = useState(null);
  const [remainingSeats, setRemainingSeats] = useState(null);

  const progressPercent =
    remainingSeats === null
      ? 0
      : Math.min(
          Math.round(((TOTAL_SEATS - remainingSeats) / TOTAL_SEATS) * 100),
          100,
        );

  /* Set cookies once on mount */
  useEffect(() => {
    setCookie("yourCookieName", initialName, 30, ".learnbay.co");
    setCookie("yourCookieName", initialPhone, 30, ".learnbay.co");
  }, [initialName, initialPhone]);

  /* Initialise client-only values after first render to prevent hydration mismatch */
  useEffect(() => {
    setRemainingSeats(getRemainingSeats());
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  /* Safely stringify for GTM */
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

        {/* Decorative orbs */}
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />

        <section className={styles.mains}>
          {/* ── Hero ── */}
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

          {/* ── Main Card ── */}
          <div className={styles.mainCard}>
            {/* Scholarship band */}
            <div className={styles.scholBand}>
              <div className={styles.scholGlow} />
              <div className={styles.scholTop}>
                <div className={styles.scholLeft}>
                  <div className={styles.pctCircle}>30%</div>
                  <div>
                    <div className={styles.scholLabel}>Scholarship Offer</div>
                    <div className={styles.scholSub}>
                      Available on all AI programs
                    </div>
                  </div>
                </div>

                <div className={styles.scholRight}>
                  <div className={styles.validLabel}>Valid till</div>
                  <div className={styles.validDate}>31st March</div>
                </div>
              </div>

              <div className={styles.divider} />

              <div className={styles.feeNote}>
                Fees will increase from{" "}
                <span className={styles.feeHighlight}>1st April 2026</span>
              </div>
            </div>

            {/* Countdown timer */}
            <div className={styles.timerStrip}>
              <div className={styles.timerLabel}>Offer expires in</div>
              <div className={styles.timerBoxes}>
                <div className={styles.tBox}>
                  <div className={styles.tNum}>{timeLeft?.d ?? "--"}</div>
                  <div className={styles.tLbl}>Days</div>
                </div>
                <span className={styles.tSep}>:</span>
                <div className={styles.tBox}>
                  <div className={styles.tNum}>{timeLeft?.h ?? "--"}</div>
                  <div className={styles.tLbl}>Hours</div>
                </div>
                <span className={styles.tSep}>:</span>
                <div className={styles.tBox}>
                  <div className={styles.tNum}>{timeLeft?.m ?? "--"}</div>
                  <div className={styles.tLbl}>Mins</div>
                </div>
                <span className={styles.tSep}>:</span>
                <div className={styles.tBox}>
                  <div className={styles.tNum}>{timeLeft?.s ?? "--"}</div>
                  <div className={styles.tLbl}>Secs</div>
                </div>
              </div>
            </div>

            {/* Seats */}
            <div className={styles.seatsSection}>
              <div className={styles.seatsTop}>
                <div className={styles.seatsLabel}>
                  <span className={styles.fire}>🔥</span> Seats filling fast
                </div>
                <div className={styles.seatsCount}>
                  Only {remainingSeats ?? "..."} left
                </div>
              </div>

              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${progressPercent}%` }}
                />
                Seats filling fast
              </div>

              <div className={styles.progressLabels}>
                <span>Seats claimed</span>
                <span>
                  {remainingSeats === null
                    ? "..."
                    : `${progressPercent}% filled`}
                </span>
              </div>
            </div>

            {/* IBM bar */}
            <div className={styles.ibmBar}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/ibm-microsoft+(1).webp"
                alt="IBM & Microsoft"
                width={120}
                height={40}
                className={styles.logoImg}
              />
              <span className={styles.ibmSep}>|</span>
              <span className={styles.ibmText}>
                Industry-certified program · Placement support
              </span>
            </div>
          </div>

          {/* Course cards */}
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

      {/* Chat360 bot */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(botId) {
              var s = document.createElement("script");
              s.async = true;
              s.type = "text/javascript";
              s.src = "https://app.chat360.io/widget/chatbox/common_scripts/script.js";
              s.onload = function() { window.loadChat360Bot(botId); };
              s.onerror = function(err) { console.error(err); };
              document.body.appendChild(s);
            })("4f4d2e98-0778-4fb7-a9c3-af6fd1bedad8");
          `,
        }}
      />
    </>
  );
};

ThankYou.getInitialProps = async (ctx) => ({
  initialName: cookies(ctx).CARD || "",
  initialPhone: cookies(ctx).CARDPHONE || "",
});

export default ThankYou;
