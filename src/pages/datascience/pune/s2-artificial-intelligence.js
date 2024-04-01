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
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import GetHire from "@/components/Home/GetHire/GetHire";
import ProjectSection from "@/components/Home/ProjectSection/ProjectSection";
import EightSection from "@/components/MastersCourse/EightSection/EightSection";
import S2SecondSection from "@/components/S2SecondSection/SecondSection";
import Head from "next/head";
import { useState } from "react";
import { parseJSONData } from "../../../Util/JsonConvertor";
import SyllabusNew from "../../../components/CoursePage/Syllabus/MasterSyllabus";

function Blockchain({ AIMLDataScienceCourseDataJson }) {
  const AIMLDataScienceCourseData = parseJSONData(
    AIMLDataScienceCourseDataJson
  );

  const [popupData, setPopupData] = useState([]);

  return (
    <>
      <Head>
        <title>AI & ML Course Generic - Learnbay</title>
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
          href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
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
          cityParaCont="With demanding industry projects, you can acquire the most advanced technical expertise possible. Be a master even without a master's degree."
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ai-ml-main.webp"
          firstToparaImg="Pune"
          firstHeading="Artificial Intelligence Course in "
          firstTopPara="Boost Your Professional Growth To a Whole New Level"
          idss="YWxTtvb3x-U"
          softwareBtnHide={true}
        />
        <SecondSection />
        <S2SecondSection />
        <WhoIsProgram
          first="Bachelor's degree with consistent good academic"
          second="Minimum 1 Year of IT/Non-IT work experience"
          third="Early to mid-career professionals interested in AI & ML "
          forth="Developing skills in AI & ML for future opportunities"
        />
        <ProjectSection interstedInHide={true} formotp={true} ADS={true} />
        <GetHire />
        <SyllabusNew
          interstedInHide={true}
          formotp={true}
          ADS={true}
          masterSyllabusMobile={
            AIMLDataScienceCourseData.AIMLDataScienceCourseData[0]
              .masterSyllabusMobile
          }
          onebtn={true}
        />
        <Certificate
          data={
            AIMLDataScienceCourseData.AIMLDataScienceCourseData[0].Certificate
          }
        />
        <FeeSection
          Fee="₹ 1,10,000"
          FeeEmi="₹  7,211/month"
          weekdaybatch="Weekday Batch"
          weekendbatch="Weekday  Batch"
          weekday="MON - FRI"
          weekend="MON - FRI"
          WeekdayDate="APR 12th"
          WeekendDate="APR 19th"
          WeekdayTime="8.00PM - 10.00PM"
          WeekendTime="8.00AM - 10.00AM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          interstedInHide={true}
          formotp={true}
          ADS={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program.pdf"
          // <EMI POPUP
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹1,10,000"
          monthlyPayment1="₹7,211"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹1,10,000"
          monthlyPayment2="₹10,817"
        />
        <Testimonial
          redirectDS={true}
          heading=""
          Testimonial={
            AIMLDataScienceCourseData.AIMLDataScienceCourseData[0]
              .testimonialgenric
          }
        />
        <MentorsSection />
        <NewProjectSection
          interstedInHide={true}
          formotp={true}
          ADS={true}
          projectSection={
            AIMLDataScienceCourseData.AIMLDataScienceCourseData[0]
              .projectSection
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
  const data = await import("../../../Data/AIMLDataScienceCourse");
  function getAIMLDataScienceCourseDataJSON(AIMLDataScienceCourseData) {
    return JSON.stringify(AIMLDataScienceCourseData);
  }
  const AIMLDataScienceCourseDataJson = getAIMLDataScienceCourseDataJSON(data);
  return { props: { AIMLDataScienceCourseDataJson } };
}
