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
import MentorsSection from "@/components/Global/MentorsSection/MentorsSection";
import NewProjectSection from "@/components/Global/NewProjectSection/NewProjectSection";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
import SliderTabs from "@/components/Global/SliderTabs/SliderTabs";
import TrainerSection from "@/components/Global/TrainerSection/TrainerSection";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import GetHire from "@/components/Home/GetHire/GetHire";
import Certificate from "@/components/MastersCourse/Certificate/Certificate";
import EightSection from "@/components/MastersCourse/EightSection/EightSection";
import JobAbroad from "@/components/MastersCourse/JobAbroad/JobAbroad";
import MasterSecondSection from "@/components/MastersCourse/MasterSecondSection/MasterSecondSection";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AiOutlineContainer } from "react-icons/ai";
import { BsDisplay, BsPeople, BsPersonGear } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { parseJSONData } from "../../../Util/JsonConvertor";
import SyllabusNew from "../../components/CoursePage/Syllabus/MasterSyllabus";

function Blockchain({ ExcutiveProgramAIDSJson, projectSection }) {
  const ExcutiveProgramAIDS = parseJSONData(ExcutiveProgramAIDSJson);

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
      "Leverage your prior work experience for  relevant career transition.",
      "Aim for higher salary hikes.",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Sr. Data Scientist ",
        salary: " 27 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Sr. Data Analyst",
        salary: " 15 LPA",
      },
      { icon: <BsPersonGear />, role: "ML Engineer ", salary: "14 LPA" },
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check screen size on initial load
    checkScreenSize();

    // Add event listener to check screen size on resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      <Head>
        <title>
          Executive program in Data Science and AI | IITG Certification
        </title>
        <meta
          name="description"
          content="Advance your career with Learnbay's Executive Program in Data Science and AI. Gain advanced skills and become E&ICT Academy of IIT Guwahati certified Data Scientist."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="iit data science course, iit data science certification, data science course from iit, data science course iit, iit data science course for working professionals, iit data science course fees, iit data scientist course, executive program in data science, executive data science program"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://learnbay.co/datascience/executive-program-in-data-science-and-ai-by-iit-ghwahati"
        />
      </Head>
      <main>
        <Navbar interstedInHide={true} formotp={true} ADS={true} />
        <FirstSection
          interstedInHide={true}
          formotp={true}
          ADS={true}
          cityParaCont="Successfully transition careers through our courses & real-time capstone projects. All while making your previous work experience count!"
          softwareBtnHide={true}
          dataScienceCounselling={true}
          dataScience={true}
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          titleCourse="AI & ML Program for tech professionals"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/iit-Guwahati/Executive+program+in+Data+Science+%26+AI-+IIT_compress.pdf"
          idss="KcQfbuwJBmU"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ai-ml-main.webp"
          firstToparaImg="Data Science & AI"
          firstHeading="Executive program in  "
          firstTopPara="Expand beyond technology        "
          // thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ai-f-one.webp"
          // videoId="KcQfbuwJBmU"
          radio={true}
          upSkillingHide={true}
          fullStack={true}
          backgorunimg={true}
          isSpecialPage={true}
          isGuwahati={true}
          backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/excutive-bg.webp"
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
        <div style={{ marginTop: isMobile ? "0px" : "100px" }}>
          <WhoIsProgram
            first="Bachelor's degree with consistent good academic"
            second="Minimum 6 Months of IT/Non-IT work experience"
            third="Early to mid-career professionals interested in data science"
            forth="Developing skills in data science for future opportunities"
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
          masterSyllabusMobile={
            ExcutiveProgramAIDS.ExcutiveProgramAIDS[0].masterSyllabusMobile
          }
          onebtn={true}
        />
        <ToolsCovered />

        <Certificate
          data={ExcutiveProgramAIDS.ExcutiveProgramAIDS[0].Certificate}
          Imgno={true}
          isGuwahati={true}
        />
        <FeeSection
          Fee="₹ 1,25,000"
          FeeEmi="12,455/month          "
          weekdaybatch="Weekday Batch"
          weekendbatch="Weekday Batch"
          weekday="MON - FRI"
          weekend="MON - FRI"
          WeekdayDate="Sep 29th"
          WeekendDate="Aug 16th"
          WeekdayTime="9:30 AM - 01:00 PM"
          WeekendTime="8:00 PM - 10:00 PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="10 days refund policy"
          FeeContent6="No additional cost"
          interstedInHide={true}
          formotp={true}
          ADS={true}
          // <EMI POPUP
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹1,90,000"
          monthlyPayment1="₹12,456"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹1,90,000"
          monthlyPayment2="₹18,683"
        />

        {/* <Testimonial
          redirectDS={true}
          videotest={true}
          heading="Hear it from our Alumni"
          Testimonial={
            ExcutiveProgramAIDS.ExcutiveProgramAIDS[0].testimonialgenric
          }
        /> */}
        <MentorsSection />
        <SliderTabs WithoutService={true} />
        <MobileTestimonial
          interstedInHide={true}
          formotp={true}
          ADS={true}
          dataScience={true}
          upSkillingHide={true}
        />
        <NewProjectSection
          interstedInHide={true}
          formotp={true}
          x
          ADS={true}
          dataScienceCounselling={true}
          dataScience={true}
          projectSection={
            ExcutiveProgramAIDS.ExcutiveProgramAIDS[0].projectSection
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
  const data = await import("../../Data/ExecutiveCourseData");
  function getExcutiveProgramAIDSJSON(ExcutiveProgramAIDS) {
    return JSON.stringify(ExcutiveProgramAIDS);
  }
  const ExcutiveProgramAIDSJson = getExcutiveProgramAIDSJSON(data);
  return { props: { ExcutiveProgramAIDSJson } };
}
