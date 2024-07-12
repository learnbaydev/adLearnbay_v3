import { ThirdSectionData } from "@/Data/ThirdSectionData";
import CloudDevopsecond from "@/components/CoursePage/Cloud&Devops/DevOpsSecondSection/DevOpsSecondSection";
import ContactCounsellor from "@/components/CoursePage/ContactCounsellor/ContactCounsellor";
import FeeSection from "@/components/CoursePage/FeeSection/FeeSection";
import FirstSection from "@/components/CoursePage/NewSections/FirstSection/FirstSection";
import LJourney from "@/components/CoursePage/NewSections/LJourney/LJourney";
import MobileTestimonial from "@/components/CoursePage/NewSections/MobileTestimonial/MobileTestimonial";
import Realstory from "@/components/CoursePage/NewSections/Realstory/Realstory";
import WhoProgram from "@/components/CoursePage/NewSections/WhoProgram/ThirdSection";
import ToolsCovered from "@/components/CoursePage/ToolsCovered/ToolsCovered";
import WhoIsProgram from "@/components/CoursePage/WhoIsProgram/WhoIsProgram";
import WhyLearnbay from "@/components/CoursePage/WhyLearnbay/WhyLearnbay";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Certificate from "@/components/Global/Certificate/Certificate";
import MentorsSection from "@/components/Global/MentorsSection/MentorsSection";
import NewProjectSection from "@/components/Global/NewProjectSection/NewProjectSection";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
import SliderTabs from "@/components/Global/SliderTabs/SliderTabs";
import TrainerSection from "@/components/Global/TrainerSection/TrainerSection";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import GetHire from "@/components/Home/GetHire/GetHire";
import EightSection from "@/components/MastersCourse/EightSection/EightSection";
import JobAbroad from "@/components/MastersCourse/JobAbroad/JobAbroad";
import MasterSecondSection from "@/components/MastersCourse/MasterSecondSection/MasterSecondSection";
import Head from "next/head";
import { useState } from "react";
import { AiOutlineContainer } from "react-icons/ai";
import { BsDisplay, BsPeople, BsPersonGear } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { parseJSONData } from "../../../Util/JsonConvertor";
import SyllabusNew from "../../components/CoursePage/Syllabus/MasterSyllabus";

function Blockchain({ AIMLDataScienceCourseDataJson, projectSection }) {
  const AIMLDataScienceCourseData = parseJSONData(
    AIMLDataScienceCourseDataJson
  );

  const [popupData, setPopupData] = useState([]);
  const seconddata = [
    {
      boldText: "IBM",
      normalText: "Certified Capstone",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp",
    },
    {
      CboldText: "175%",
      normalText: "Average Salary Hike",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review2.webp",
    },
    { boldText: "35K+", normalText: "Trusted Learners" },
  ];
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
        role: "Sr. ML Engineer ",
        salary: " 33 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Sr. AI Engineer ",
        salary: " 20.9 LPA",
      },
      { icon: <BsPersonGear />, role: "NLP Engineer ", salary: "13 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-768-min.webp",
    image4:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask+group+(10).webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "8-10 Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    ],
    formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };
  const JobData = {
    title: "Mastering the Future: Advanced ML    ",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Gain cutting-edge skills in Machine Learning        ",
        description:
          "Expert crafted curriculum that readies you for advanced ML job roles        ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Maximize Your Earning Potential        ",
        description:
          "Gain skills and earn higher salaries in the booming ML industry        ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "Curriculum inclusive of Gen-AI        ",
        description:
          "Tailored for career transformation in a tech-driven era        ",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ai-ml-main.webp",
      width: 500,
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
          Master ML with Learnbay's Advanced Certification Program - Learnbay
        </title>
        <meta
          name="description"
          content="Unlock the future with Learnbay's Advanced ML Certification Program. Gain expertise in machine learning through our comprehensive and hands-on training. Elevate your career today!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="ml course, machine learning course, ml courses, online course, ml course, machine learning course, certificate course, ml courses online, best ml courses"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://course.learnbay.co/datascience/s2-machine-learning-generic"
        />
      </Head>
      <main>
        <Navbar interstedInHide={true} formotp={true} ADS={true} />
        <FirstSection
          interstedInHide={true}
          formotp={true}
          ADS={true}
          softwareBtnHide={true}
          dataScienceCounselling={true}
          dataScience={true}
          radio={true}
          upSkillingHide={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="Machine Learning Course"
          cityParaCont="Successfully transition careers through our courses & real-time capstone projects. All while making your previous work experience count!"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ai-ml-main.webp"
          firstToparaImg="for Working Professionals"
          firstHeading="Machine Learning Course "
          firstTopPara="Boost Your Professional Growth To a Whole New Level"
        />

        <MasterSecondSection data={seconddata} />
        <CloudDevopsecond data={DsSecond} dataScience={true} />
        <JobAbroad
          data={JobData}
          dataScience={true}
          interstedInHide={true}
          formotp={true}
          ADS={true}
        />

        <WhoProgram
          dataScience={true}
          interstedInHide={true}
          formotp={true}
          ADS={true}
          leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
          ThirdSectionData={ThirdSectionData}
        />
        <Realstory />
        <TrainerSection plainimg={true} iimgchmbl={true} />
        <div style={{ marginTop: "100px" }}>
          <WhoIsProgram
            first="Bachelor's degree with consistent good academic"
            second="Minimum 1 year of IT/Non-IT work experience"
            third="Early to mid-career professionals interested in ML"
            forth="Developing skills in ML for future opportunities"
          />
        </div>

        <WhyLearnbay
          projectInno={true}
          adsHide={true}
          dataScience={true}
          interstedInHide={true}
          formotp={true}
          ADS={true}
        />
        <GetHire />

        <ContactCounsellor
          noWt={true}
          dataScience={true}
          interstedInHide={true}
          formotp={true}
          ADS={true}
        />
        <LJourney />

        <SyllabusNew
          buttonHide={true}
          interstedInHide={true}
          formotp={true}
          ADS={true}
          dataScienceCounselling={true}
          dataScience={true}
          masterSyllabusMobile={
            AIMLDataScienceCourseData.AIMLDataScienceCourseData[0]
              .masterSyllabusMobile
          }
          onebtn={true}
        />
        <ToolsCovered />

        <Certificate
          data={
            AIMLDataScienceCourseData.AIMLDataScienceCourseData[0].Certificate
          }
        />
        <FeeSection
          Fee="₹ 1,15,000"
          FeeEmi="₹ 7,539/ Month"
          weekdaybatch="Weekend Batch"
          weekendbatch="Weekday Batch"
          weekday="SAT - SUN"
          weekend="MON - FRI"
          WeekdayDate="July 14th"
          WeekendDate="August 2nd"
          WeekendTime="8:00 PM - 10:00 PM"
          WeekdayTime="9:30 AM - 1:00 PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          interstedInHide={true}
          formotp={true}
          ADS={true}
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
        <MentorsSection />
        <SliderTabs WithoutService={true} />
        <MobileTestimonial
          dataScience={true}
          interstedInHide={true}
          formotp={true}
          ADS={true}
        />
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
  const data = await import("../../Data/AIMLDataScienceCourse");
  function getAIMLDataScienceCourseDataJSON(AIMLDataScienceCourseData) {
    return JSON.stringify(AIMLDataScienceCourseData);
  }
  const AIMLDataScienceCourseDataJson = getAIMLDataScienceCourseDataJSON(data);
  return { props: { AIMLDataScienceCourseDataJson } };
}
