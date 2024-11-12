import FeeSection from "@/components/CoursePage/FeeSection/FeeSection";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
import WhoIsProgram from "@/components/CoursePage/WhoIsProgram/WhoIsProgram";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import MentorsSection from "@/components/Global/MentorsSection/MentorsSection";
import NewProjectSection from "@/components/Global/NewProjectSection/NewProjectSection";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
import Testimonial from "@/components/Global/Testimonial/Testimonial";
import TrainerSection from "@/components/Global/TrainerSection/TrainerSection";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import GetHire from "@/components/Home/GetHire/GetHire";
import ProjectSection from "@/components/Home/ProjectSection/ProjectSection";
import Certificate from "@/components/MastersCourse/Certificate/Certificate";
import S2SecondSection from "@/components/S2SecondSection/SecondSection";
import Head from "next/head";
import { useState } from "react";
import { parseJSONData } from "../../../Util/JsonConvertor";
import SyllabusNew from "../../components/CoursePage/Syllabus/MasterSyllabus";

import EightSection from "@/components/MastersCourse/EightSection/EightSection";

function Blockchain({ DataScienceMastersinCSJson, projectSection }) {
  const DataScienceMastersinCS = parseJSONData(DataScienceMastersinCSJson);

  const [popupData, setPopupData] = useState([]);

  return (
    <>
      <Head>
        <title>
          Learn Online Master in Artificial and Machine Learning - Learnbay
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
          href="https://www.learnbay.co/datascience/s2-masters-in-ai-and-ml"
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
          cityParaCont="Successfully transition careers through our courses & real-time capstone projects. All while making your previous work experience count!"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
          firstToparaImg=" With Domain Specialization "
          firstHeading="Master in Artificial and Machine Learning"
          firstTopPara="Be a master even without a master's degree          "
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
          second="Minimum 6 Months of IT/Non-IT work experience"
          third="Early to mid-career professionals interested in data science"
          forth="Developing skills in data science for future opportunities"
        />
        <ProjectSection interstedInHide={true} formotp={true} ADS={true} />
        <GetHire />

        <SyllabusNew
          interstedInHide={true}
          formotp={true}
          ADS={true}
          masterSyllabusMobile={
            DataScienceMastersinCS.DataScienceMastersinCS[0]
              .masterSyllabusMobile
          }
          onebtn={true}
        />

        <Certificate
          data={DataScienceMastersinCS.DataScienceMastersinCS[0].Certificate}
        />
        <FeeSection
          Fee="₹3,25,000"
          FeeEmi="15,980/month"
          weekdaybatch="Weekend Batch"
          weekendbatch="Weekday Batch"
          weekday="SAT-SUN"
          weekend="MON-FRI"
          WeekdayDate="DEC 29th"
          WeekendDate="SEP 13th"
          WeekendTime="08:00 PM - 10:00 PM"
          WeekdayTime="09:30 AM - 1 PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="10 days refund policy"
          FeeContent6="No additional cost"
          interstedInHide={true}
          formotp={true}
          ADS={true}
          // EMI POPUPDATA
          emiType="NO COST EMI"
          duration1="24 Months"
          totalAmount1="₹3,25,000"
          monthlyPayment1="₹15,980"
          greenDown1="Standard Intrest rate Applicable"
          duration2="18 Months"
          totalAmount2="₹3,25,000"
          monthlyPayment2="₹21,306"
        />
        <TrainerSection plainimg={true} iimgchmbl={true} />
        <Testimonial
          redirectDS={true}
          videotest={true}
          heading="Hear it from our Alumni"
          Testimonial={
            DataScienceMastersinCS.DataScienceMastersinCS[0].testimonialgenric
          }
        />
        <MentorsSection />
        <NewProjectSection
          interstedInHide={true}
          formotp={true}
          ADS={true}
          projectSection={
            DataScienceMastersinCS.DataScienceMastersinCS[0].projectSection
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
  const data = await import("../../Data/DataScienceAiMastersinCS");
  function getDataScienceMastersinCSJSON(DataScienceMastersinCS) {
    return JSON.stringify(DataScienceMastersinCS);
  }
  const DataScienceMastersinCSJson = getDataScienceMastersinCSJSON(data);
  return { props: { DataScienceMastersinCSJson } };
}
