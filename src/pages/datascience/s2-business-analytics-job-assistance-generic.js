import FeeSection from "@/components/CoursePage/FeeSection/FeeSection";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
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
import ProjectSection from "@/components/Home/ProjectSection/ProjectSection";
import S2SecondSection from "@/components/S2SecondSection/SecondSection";
import Head from "next/head";
import { useState } from "react";
import { parseJSONData } from "../../../Util/JsonConvertor";
import SyllabusNew from "../../components/CoursePage/Syllabus/MasterSyllabus";

import EightSection from "@/components/MastersCourse/EightSection/EightSection";

function Blockchain({ BusinessAnalyticsDataJson, projectSection }) {
  const BusinessAnalyticsData = parseJSONData(BusinessAnalyticsDataJson);

  const [popupData, setPopupData] = useState([]);

  return (
    <>
      <Head>
        <title>Business Analytics Job Assistance generic - Learnbay</title>
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
          href="https://www.learnbay.co/datascience/s2-business-analytics-job-assistance-generic"
        />
      </Head>
      <main>
        <Navbar interstedInHide={true} formotp={true} ADS={true} />
        <FirstSection
          interstedInHide={true}
          formotp={true}
          ADS={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
          cityParaCont="Training based on real-time projects specially designed for working professionals who aspire of having a lucrative career.          "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BA-min.webp"
          firstToparaImg="for Working Professionals "
          firstHeading="Business Analytics Course  "
          firstTopPara="Acquire practical skills you can apply immediately          "
          softwareBtnHide={true}
        />

        <SecondSection />
        <S2SecondSection />
        <WhoIsProgram
          first="Bachelor's degree with consistent good academic"
          second="Minimum 6 Months of IT/Non-IT work experience"
          third="Early to mid-career professionals interested in Business analytics"
          forth="Developing skills in Business analytics for future opportunities"
        />
        <ProjectSection interstedInHide={true} formotp={true} ADS={true} />
        <GetHire />

        <SyllabusNew
          interstedInHide={true}
          formotp={true}
          ADS={true}
          masterSyllabusMobile={
            BusinessAnalyticsData.BADataScienceCourseData[0]
              .masterSyllabusMobile
          }
          onebtn={true}
        />

        <Certificate
          data={BusinessAnalyticsData.BADataScienceCourseData[0].Certificate}
        />
        <FeeSection
          Fee="₹ 1,25,000"
          FeeEmi="₹6,228/month"
          weekdaybatch="Weekday Batch"
          weekendbatch="Weekend Batch"
          weekday="MON-FRI"
          weekend="SAT- SUN"
          WeekdayDate=" Oct 18th"
          WeekendDate="Sept 15th"
          WeekendTime="9:30 AM - 1:00 PM"
          WeekdayTime="8:00 PM - 10:30 PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="10 days refund policy"
          FeeContent6="No additional cost"
          interstedInHide={true}
          formotp={true}
          ADS={true}
          // EMI POPUPDATA
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹95,000"
          monthlyPayment1="₹6,228"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹95,000"
          monthlyPayment2="₹11,308"
        />
        <TrainerSection plainimg={true} iimgchmbl={true} />
        <Testimonial
          redirectDS={true}
          videotest={true}
          heading="Hear it from our Alumni"
          Testimonial={
            BusinessAnalyticsData.BADataScienceCourseData[0].testimonialgenric
          }
        />
        <MentorsSection />
        <NewProjectSection
          interstedInHide={true}
          formotp={true}
          ADS={true}
          projectSection={
            BusinessAnalyticsData.BADataScienceCourseData[0].projectSection
          }
        />
        <SeventhSection />
        <EightSection interstedInHide={true} formotp={true} ADS={true} />
        <WhatsappFloat />
        <BottomBar interstedInHide={true} formotp={true} ADS={true} />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/BusinessAnalyticsData");
  function getBusinessAnalyticsDataJSON(BusinessAnalyticsData) {
    return JSON.stringify(BusinessAnalyticsData);
  }
  const BusinessAnalyticsDataJson = getBusinessAnalyticsDataJSON(data);
  return { props: { BusinessAnalyticsDataJson } };
}
