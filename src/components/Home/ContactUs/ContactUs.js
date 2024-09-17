import Image from "next/image";
import FormInline from "../../Global/FormSection/FormInline";
import styles from "./ContactUs.module.css";
import FormOtp from "@/components/Global/FormSection/FormOtp";

function ContactUs({
  dataScience,
  dataScienceCounselling,
  radio,
  upSkillingHide,
  interstedInHide,
  formotp,
  ADS,
  DomainInput,
  HideInterest,
}) {
  return (
    <section className={styles.ContactUs}>
      <div className={styles.LeftSide}>
        <h2 className={styles.h1}>
          Get Ahead with Industry-Leading Courses <br />
        </h2>

        <div className={styles.conpara}>
          <p>
            <span className={styles.paraspan}>“</span>
            <br />I had a great learning experience at Learnbay. The faculties
            here are top notch. Right from enrollment to getting a good job,
            they keep putting enormous efforts for each and every candidate.
            Thanks to all the trainers, backend team, the HR team and to the
            directors for making this journey smooth.
          </p>
        </div>

        <div className={styles.leftpaerson}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/preksha-home.png"
            width={50}
            height={50}
            loading="lazy"
            alt="review"
          />

          <p>
            Preksha Mishra
            <br />
            <span>Working at HCL</span>
          </p>
        </div>
      </div>

      <div className={styles.RightSide}>
        <p className={styles.NormalPForm}>
          Apply for <span className={styles.span}>Career Counselling</span>
        </p>
        {formotp ? (
          <FormOtp
            popup={true}
            upSkillingHide={true}
            radio={radio}
            dataScience={dataScience}
            interstedInHide={interstedInHide}
            ADS={ADS}
            DomainInput={DomainInput}
            HideInterest={HideInterest}
          />
        ) : (
          <FormInline
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            radio={radio}
            upSkillingHide={upSkillingHide}
            interstedInHide={interstedInHide}
          />
        )}
      </div>
    </section>
  );
}

export default ContactUs;