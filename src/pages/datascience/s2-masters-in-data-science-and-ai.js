import CloudDevopsecond from "@/components/CoursePage/Cloud&Devops/DevOpsSecondSection/DevOpsSecondSection";
import FeeSection from "@/components/CoursePage/FeeSection/FeeSection";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import MentorsSection from "@/components/Global/MentorsSection/MentorsSection";
import NewProjectSection from "@/components/Global/NewProjectSection/NewProjectSection";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
import SliderTabs from "@/components/Global/SliderTabs/SliderTabs";
import Testimonial from "@/components/Global/Testimonial/Testimonial";
import TrainerSection from "@/components/Global/TrainerSection/TrainerSection";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import GetHire from "@/components/Home/GetHire/GetHire";
import ProjectSection from "@/components/Home/ProjectSection/ProjectSection";
import Certificate from "@/components/MastersCourse/Certificate/Certificate";
import JobAbroad from "@/components/MastersCourse/JobAbroad/JobAbroad";
import MasterSecondSection from "@/components/MastersCourse/MasterSecondSection/MasterSecondSection";
import S2SecondSection from "@/components/S2SecondSection/SecondSection";
import Head from "next/head";
import { useState } from "react";
import { AiOutlineContainer } from "react-icons/ai";
import { BsDisplay, BsPeople, BsPersonGear } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { parseJSONData } from "../../../Util/JsonConvertor";
import SyllabusNew from "../../components/CoursePage/Syllabus/MasterSyllabus";

import EightSection from "@/components/MastersCourse/EightSection/EightSection";

function Blockchain({ DataScienceMastersinCSJson, projectSection }) {
  const DataScienceMastersinCS = parseJSONData(DataScienceMastersinCSJson);

  const [popupData, setPopupData] = useState([]);

  const DsSecond = {
    title1: "Domain Specialization",
    image1:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-one.webp",
    points: [
      "Leverage your prior work experience for  relevant career transition",
      "Aim for higher salary hikes.",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Sr. Data Scientist: ",
        salary: " 27 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Sr. Data Analyst:",
        salary: " 15 LPA",
      },
      { icon: <BsPersonGear />, role: "ML Engineer: ", salary: "14 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-768-min.webp",
    image4:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask+group+(10).webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "Unlimited Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    ],
    formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };

  const JobData = {
    title: "Fast-Track Your Career in AI   ",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Comprehensive Mastery of AI and Data Science:     ",
        description:
          "Gain in-depth knowledge and practical skills in AI and Data Science     ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Complimentary Advance Gen-AI Module     ",
        description:
          "Tailored for career transformation in a tech-driven era      ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "3 years of Job and Placement support     ",
        description: "Online and flexible, ideal for busy professionals:      ",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/guwati-job.webp",
      width: 410,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };

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
        <Navbar HideInterest={true} formotp={true} ADS={true} />
        <FirstSection
          HideInterest={true}
          formotp={true}
          ADS={true}
          woolfUniversity={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
          cityParaCont="Successfully transition careers through our courses & real-time capstone projects. All while making your previous work experience count!"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
          firstToparaImg="Data Science and AI  "
          firstHeading="Master's in Computer Science:   "
          firstTopPara="Learnbay Excelvarsity"
          softwareBtnHide={true}
        />

        <MasterSecondSection />
        <CloudDevopsecond data={DsSecond} />
        <JobAbroad
          data={JobData}
          dataScienceCounselling={true}
          interstedInHide={true}
        />

        {/* <SecondSection /> */}
        <S2SecondSection MastersPage={true} />
        {/* <WhoIsProgram
          first="Bachelor's degree with consistent good academic"
          second="Minimum 6 Months of IT/Non-IT work experience"
          third="Early to mid-career professionals interested in data science"
          forth="Developing skills in data science for future opportunities"
        /> */}
        <ProjectSection HideInterest={true} formotp={true} ADS={true} />
        <GetHire />

        <SyllabusNew
          HideInterest={true}
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
          Fee="₹ 3,25,000"
          FeeEmi="15,980/month"
          weekdaybatch="Weekday Batch"
        weekendbatch="Weekday Batch"
        weekday="MON - FRI"
        weekend="MON - FRI"
        WeekdayDate="JULY 12th"
        WeekendDate="JULY 5th"
        WeekendTime="8:00 PM - 10:00 PM"
        WeekdayTime="8:00 AM - 10:00 AM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          HideInterest={true}
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
        <SliderTabs />
        <NewProjectSection
          HideInterest={true}
          formotp={true}
          ADS={true}
          projectSection={
            DataScienceMastersinCS.DataScienceMastersinCS[0].projectSection
          }
        />
        <SeventhSection />
        <EightSection HideInterest={true} formotp={true} ADS={true} />
        <WhatsappFloat />
        <BottomBar HideInterest={true} formotp={true} ADS={true} />
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
