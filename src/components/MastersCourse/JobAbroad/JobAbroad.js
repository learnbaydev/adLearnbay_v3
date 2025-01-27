// JobAbroad.js
import Image from "next/image";
import React, { useState } from "react";
import Styles from "./JobAbroad.module.css";
import Link from "next/link";
import Form from "../../Global/Form/Form";
import Popup from "../../Global/Popup/Popup";
import FormOtp from "@/components/Global/FormOtp/FormOtp";
const JobAbroad = ({
  data,
  WolfLink,
  formbtn,
  dataScience,
  dataScienceCounselling,
  interstedInHide,
  titleCourse,
  brochureLink,
  formotp,
  ADS,
  demoSessionButton
}) => {
  const { title, points, bannerImage } = data;
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <div className={Styles.JobAbroadMain}>
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          popup={true}
          // radio={radio}
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
        >
          <div className="leftPopup">
            <div
              className="whiteP"
              // style={{ width: "340px", height: "400px" }}
            ></div>
          </div>
          <div className="RightPopup">
{

demoSessionButton ? (            <h5>Book Demo Session</h5>):(            <h5>Apply For Counselling</h5>)
}
            {formotp ? (
              <FormOtp
                popup={true}
                upSkillingHide={true}
                dataScience={dataScience}
                dataScienceCounselling={dataScienceCounselling}
                interstedInHide={interstedInHide}
                ADS={ADS}
              />
            ) : (
              <Form
                titleCourse={titleCourse}
                brochureLink={brochureLink}
                dataScience={dataScience}
                interstedInHide={interstedInHide}
                dataScienceCounselling={dataScienceCounselling}
                upSkillingHide={true}
                // radio={radio}
              />
            )}
          </div>
        </Popup>

        <h2>{title}</h2>

        <div className={Styles.JobAbroadHead}>
          <div className={Styles.JobAbroadleft}>
            {points.map((point, index) => (
              <div key={index} className={Styles.leftpoints}>
                <div className={Styles.imgBox}>
                  <Image
                    src={point.imgSrc}
                    width={90}
                    height={90}
                    loading="lazy"
                    alt={point.imgAlt}
                  />
                </div>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
            {formbtn ? (
              <div className={Styles.consbtn1}>
                <Link href="/master-application">
                  <button className={Styles.consbtn}>
                    Start Your Application
                  </button>
                </Link>
              </div>
            ) : (
              <>
              
              {

demoSessionButton ? (<Link href="https://docs.google.com/forms/d/1055DeqdBGx5dljVVWISdWf_CA59cPLeoQ8dt1hwhRKY/viewform"><div className={Styles.consbtn1} >
  {
demoSessionButton ? (<button className={Styles.consbtn}>
Book Demo Session
</button>):(<button className={Styles.consbtn}>
Apply For Counselling
</button>)

  }
 </div></Link>):(<div className={Styles.consbtn1} onClick={popupShow}>
  {
demoSessionButton ? (<button className={Styles.consbtn}>
Book Demo Session
</button>):(<button className={Styles.consbtn}>
Apply For Counselling
</button>)

  }
 </div>)
}</>
            )}

            <>
              {WolfLink ? (
                <p className={Styles.woolfText}>
                  Learnbay Excelversity is a constituent college affiliated with{" "}
                  <a href="https://woolf.university/academics/college-membership/bb43ed7d-edff-4e25-b530-2e950496519c">
                    <span className={Styles.spanWoolf}>
                      Woolf University, EU
                    </span>
                  </a>
                </p>
              ) : (
                ""
              )}
            </>
          </div>

          <div className={Styles.JobAbroadRight}>
            <Image
              src={bannerImage.src}
              width={bannerImage.width}
              height={bannerImage.height}
              priority={bannerImage.priority}
              quality={bannerImage.quality}
              alt={bannerImage.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAbroad;
