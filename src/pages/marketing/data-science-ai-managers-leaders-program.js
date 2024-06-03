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

function Blockchain({ DataScienceCourseDataJson, projectSection }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  const [popupData, setPopupData] = useState([]);

  return (
    <>
      <Head>
        <title>
          Data Science & AI Certification Program For Managers and Leaders -
          Learnbay
        </title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Artificial Intelligence and Data Science Skills, Techniques by enrolling into the Learnbay's Data Science & AI Certification Program."
        />
        <meta
          name="keywords"
          content="Data Science & AI Certification Program For Managers and Leaders"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/s2-data-science-ai-managers-leaders-program"
        />
      </Head>
      <main>
        <Navbar interstedInHide={true} dataScience={true} />
        <FirstSection
          interstedInHide={true}
          dataScience={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
          cityParaCont="Empowering Leaders with AI & Data Science Expertise"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
          firstToparaImg=" For Managers and Leaders"
          firstHeading="Data Science & AI Certification Program"
          firstTopPara="Gen-AI for Business Leaders"
          softwareBtnHide={true}
        />

        <SecondSection />
        <S2SecondSection
          p1="IBM Certified"
          p11="Capstone Projects"
          p2="5-star"
          p22="Industry-standard Training"
          p3="3-year"
          p33="Subscription Model"
          p4="1:1 Support"
          p44="Dedicated Program"
        />
        <WhoIsProgram
          first="Bachelor's degree with consistent good academic"
          second="Minimum 5 years of IT/Non-IT work experience"
          third="Working professionals interested in Data Science & AI"
          forth="Developing skills in data science for future opportunities"
        />
        <ProjectSection interstedInHide={true} dataScience={true} />
        <GetHire />

        <SyllabusNew
          interstedInHide={true}
          dataScience={true}
          masterSyllabusMobile={
            DataScienceCourseData.DataScienceCourseData[0].masterSyllabusMobile
          }
          onebtn={true}
        />

        <Certificate
          data={DataScienceCourseData.DataScienceCourseData[0].Certificate}
        />
        <FeeSection
          Fee="₹ 1,15,000"
          FeeEmi="₹7,539/month"
          weekdaybatch="Weekday Batch"
          weekendbatch="Weekday Batch"
          weekday="MON - FRI"
          weekend="MON - FRI"
          WeekdayDate="June 14th"
          WeekendDate="June 7th"
          WeekdayTime="8:00 AM - 10:00 AM"
          WeekendTime="8:00 PM - 10:00 PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          interstedInHide={true}
          dataScience={true}
          // <EMI POPUP
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹1,15,000"
          monthlyPayment1="₹7,539"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹1,15,000"
          monthlyPayment2="₹11,308"
        />
        <TrainerSection plainimg={true} iimgchmbl={true} />
        <Testimonial
          redirectDS={true}
          videotest={true}
          heading="Hear it from our Alumni"
          Testimonial={
            DataScienceCourseData.DataScienceCourseData[0].testimonialgenric
          }
        />
        <MentorsSection />
        <NewProjectSection
          interstedInHide={true}
          dataScience={true}
          projectSection={
            DataScienceCourseData.DataScienceCourseData[0].projectSection
          }
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
  const data = await import("../../Data/ManagersDataScienceCourse");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
