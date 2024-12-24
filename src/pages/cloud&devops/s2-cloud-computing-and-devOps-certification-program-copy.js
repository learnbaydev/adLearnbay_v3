import { useEffect } from "react";
import Head from "next/head";
import FirstSection from "@/components/CoursePage/Cloud&Devops/Devopsfirstsection/DevopFirstSection";
import FeeSection from "@/components/CoursePage/FeeSection/FeeSection";
import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
import WhoIsProgram from "@/components/CoursePage/WhoIsProgram/WhoIsProgram";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Certificate from "@/components/Global/Certificate/Certificate";
import MentorsSection from "@/components/Global/MentorsSection/MentorsSection";
import NewProjectSection from "@/components/Global/NewProjectSection/NewProjectSection";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
import Testimonial from "@/components/Global/Testimonial/Testimonial";
import TrainerSection from "@/components/Global/TrainerSection/TrainerSection";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import GetHire from "@/components/Home/GetHire/GetHire";
import S2SecondSection from "@/components/S2SecondSection/SecondSection";
import { parseJSONData } from "../../../Util/JsonConvertor";
import SyllabusNew from "../../components/CoursePage/Syllabus/MasterSyllabus";
import EightSection from "@/components/MastersCourse/EightSection/EightSection";
import styles from "../../styles/Counseling.module.css"

function Blockchain({ CloudAndDevOpsCourseDataJson, projectSection }) {
  const CloudAndDevOpsCourseData = parseJSONData(CloudAndDevOpsCourseDataJson);

  // Automatically trigger CRM form load on component mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    script.type = "text/javascript";
    script.async = true;
  
    script.onload = () => {
      // Check if CRM widget is available and add custom field
      const crmForm = document.querySelector(".npf_wgts");
      if (crmForm) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "referrerPage";
        input.value = window.location.pathname; // Dynamically set page path
        crmForm.appendChild(input);
      } else {
        console.error("CRM form widget not found.");
      }
    };
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>
          Master Cloud Computing and DevOps with Advanced Certification Programs
          - Learnbay
        </title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Artificial Intelligence and Data Science Skills, Techniques by enrolling into the Learnbay's Advanced Data Science Course."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Data Science Generic" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cloud&devops/s2-cloud-computing-and-devOps-certification-program"
        />
      </Head>
      <main>
        <Navbar interstedInHide={true} dataScience={true} ADS={true} />
        <FirstSection
          interstedInHide={true}
          dataScience={true}
          ADS={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
          cityParaCont="Successfully transition careers through our courses & real-time capstone projects. All while making your previous work experience count!"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-first-devops-min.webp"
          firstToparaImg=" Certification Program  "
          firstHeading="Cloud Computing & DevOps"
          firstTopPara="Crack Interview in top MNCs  "
          softwareBtnHide={true}
        />
        <SecondSection />
        <S2SecondSection />
        <WhoIsProgram
          first="Bachelor's degree with consistent good academic "
          second="Minimum 6 Months of IT/Non-IT work experience"
          third="Early to mid-career professionals interested in Cloud & DevOps"
          forth="Achieving higher career growth in Cloud & DevoOps"
        />
        <GetHire />
        <SyllabusNew
          interstedInHide={true}
          dataScience={true}
          ADS={true}
          masterSyllabusMobile={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0]
              .masterSyllabusMobile
          }
          onebtn={true}
        />
        <Certificate
          data={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].Certificate
          }
        />
        <FeeSection
          Fee=" ₹80,000"
          FeeEmi="₹5,244/month"
          weekdaybatch="Weekend Batch"
          weekendbatch="Weekday Batch"
          weekday="SAT - SUN"
          weekend="MON - FRI"
          WeekdayDate="Oct 27th"
          WeekendDate="Nov 22nd"
          WeekendTime="8:00 PM - 10:00 PM"
          WeekdayTime="9:30 AM - 1 PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="10 days refund policy"
          FeeContent6="No additional cost"
          interstedInHide={true}
          dataScience={true}
          ADS={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program.pdf"
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹ 80,000"
          monthlyPayment1="₹ 5,244"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹ 80,000"
          monthlyPayment2="₹ 7,866"
        />
        <TrainerSection plainimg={true} iimgchmbl={true} />
        <Testimonial
          redirectDS={true}
          videotest={true}
          heading="Hear it from our Alumni"
          Testimonial={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0]
              .testimonialgenric
          }
        />
        <MentorsSection />
        <NewProjectSection
          interstedInHide={true}
          dataScience={true}
          ADS={true}
          projectSection={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].projectSection
          }
        />
        <SeventhSection />
        <EightSection interstedInHide={true} dataScience={true} ADS={true} />
        <WhatsappFloat OS={true} />
        <BottomBar interstedInHide={true} dataScience={true} ADS={true} />

      {/* Custom CRM Form Embed */}
<div
  style={{
    margin: "2rem auto",
    padding: "1.5rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "1rem",
    }}
  >
    Enroll Now - Get Started with Your Journey!
  </h2>
  <p
    style={{
      fontSize: "1.2rem",
      color: "#555",
      marginBottom: "1.5rem",
    }}
  >
    Fill out the form below and let us know from which page you are visiting.
  </p>

  {/* Hidden Input Field for Page Tracking */}
  <div className="npf_wgts" data-height="500px" data-w="10fa3854ed723ad6abac72856e751fc1">
    {/* Example Form with Hidden Field */}

  </div>
</div>

      </main>
    </>
  );
}

export default Blockchain;

export async function getStaticProps() {
  const data = await import("../../Data/CloudAndDevOpsCourse");
  function getCloudAndDevOpsCourseDataJSON(CloudAndDevOpsCourseData) {
    return JSON.stringify(CloudAndDevOpsCourseData);
  }
  const CloudAndDevOpsCourseDataJson = getCloudAndDevOpsCourseDataJSON(data);
  return { props: { CloudAndDevOpsCourseDataJson } };
}
