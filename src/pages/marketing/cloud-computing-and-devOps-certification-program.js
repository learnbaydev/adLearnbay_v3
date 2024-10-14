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
import Head from "next/head";
import { useState } from "react";
import { parseJSONData } from "../../../Util/JsonConvertor";
import SyllabusNew from "../../components/CoursePage/Syllabus/MasterSyllabus";

import EightSection from "@/components/MastersCourse/EightSection/EightSection";

function Blockchain({ CloudAndDevOpsCourseDataJson, projectSection }) {
  const CloudAndDevOpsCourseData = parseJSONData(CloudAndDevOpsCourseDataJson);

  const [popupData, setPopupData] = useState([]);

  return (
    <>
      <Head>
        <title>
          {" "}
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
        <Navbar interstedInHide={true} dataScience={true} />
        <FirstSection
          interstedInHide={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
          cityParaCont="Successfully transition careers through our courses & real-time capstone projects. All while making your previous work experience count!"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-first-devops-min.webp"
          firstToparaImg=" Certification Program  "
          firstHeading="Cloud Computing & DevOps"
          firstTopPara="Crack Interview in top MNCs  "
          softwareBtnHide={true}
          dataScience={true}
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
          masterSyllabusMobile={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0]
              .masterSyllabusMobile
          }
          onebtn={true}
          dataScience={true}
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
        WeekendDate="Nov 8th"
          WeekendTime="8:00 PM - 10:00 PM"
          WeekdayTime="9:30 AM - 1 PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="10 days refund policy"
          FeeContent6="No additional cost"
          interstedInHide={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program.pdf"
          // <EMI POPUP
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹ 80,000"
          monthlyPayment1="₹ 5,244"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹ 80,000"
          monthlyPayment2="₹ 7,866"
          dataScience={true}
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
          projectSection={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].projectSection
          }
          dataScience={true}
        />
        <SeventhSection />
        <EightSection interstedInHide={true} dataScience={true} />
        <WhatsappFloat />
        <BottomBar interstedInHide={true} dataScience={true} />
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
