import Navbar from "@/components/Global/AdsNavbar/Navbar";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import FirstSection from "@/components/Home/FirstSection/FirstSection";
import HomeLine from "@/components/Home/HomeLine/HomeLine";
import dynamic from "next/dynamic";
import Head from "next/head";
const Course = dynamic(() => import("@/components/Home/OSCourse/Course"));

import SliderTabsDomain from "@/components/CoursePage/SliderTab/SliderTabs";
import SliderTabs from "@/components/Global/SliderTabs/SliderTabs";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Certificate from "@/components/MastersCourse/Certificate/Certificate";
import JobAbroad from "@/components/MastersCourse/JobAbroad/JobAbroad";
import MasterSecondSection from "@/components/MastersCourse/MasterSecondSection/MasterSecondSection";
import { AiOutlineContainer } from "react-icons/ai";
import { BsDisplay, BsPeople, BsPersonGear } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { parseJSONData } from "../Util/JsonConvertor";
const ProjectSection = dynamic(() =>
  import("@/components/Home/ProjectSection/ProjectSection")
);

const ContactUs = dynamic(() =>
  import("@/components/Home/ContactUs/ContactUs")
);
const GetHire = dynamic(() => import("@/components/Home/GetHire/GetHire"));

const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const CloudDevopsecond = dynamic(() =>
  import(
    "@/components/CoursePage/Cloud&Devops/DevOpsSecondSection/DevOpsSecondSection"
  )
);
const MentorsSection = dynamic(() =>
  import("@/components/Global/MentorsSection/MentorsSection")
);
const NewProjectSection = dynamic(() =>
  import("@/components/Global/NewProjectSection/NewProjectSection")
);
const EightSection = dynamic(() =>
  import("@/components/MastersCourse/EightSection/EightSection")
);
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));

import CookieConsent from "@/components/Global/CookieConsent/CookieConstent";
export default function Home({ DataScienceMastersinCSJson }) {
  const DataScienceMastersinCS = parseJSONData(DataScienceMastersinCSJson);

  const seconddata = [
    {
      boldText: "60+",
      normalText: "Countries Recognition",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp",
    },
    {
      CboldText: "90+",
      normalText: "Transferrable ECTS Credits",
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
    title: "Master’s Degree that gets you Job Abroad   ",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Earn a Degree Without Pausing Your Career        ",
        description:
          "Flexible online degrees from LearnBay's ExcelVarsity for working pros.       ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Skill Up for Swift Promotions       ",
        description:
          "Curriculum designed for rapid career advancement and leadership roles.       ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "Step into High-Value Research Careers        ",
        description:
          "Degree for prestigious research jobs and institutional collaborations.        ",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job1.webp",
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
        <title>Online IT Certification Courses and Professional Programs</title>
        <meta
          name="description"
          content="Enhance your skills with Learnbay&#x27;s comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        <Navbar
          interstedInHide={true}
          ADS={true}
          OS={true}
          radio={true}
          dataScience={true}
        />
        <FirstSection
          OS={true}
          radio={true}
          interstedInHide={true}
          Osaplybtn={true}
          dataScience={true}
        />
        <HomeLine />
        <Course
          OS={true}
          radio={true}
          organicADS={true}
          newDesign={true}
          dataScience={true}
        />
        <MasterSecondSection data={seconddata} />
        <CloudDevopsecond data={DsSecond} />
        <JobAbroad
          interstedInHide={true}
          ADS={true}
          OS={true}
          radio={true}
          data={JobData}
          dataScience={true}
        />

        {/* <ProjectSection
          OS={true}
          radio={true}
          interstedInHide={true}
          dataScience={true}
        /> */}
        <SliderTabsDomain />
        <Certificate
          data={DataScienceMastersinCS.DataScienceMastersinCS[0].Certificate}
        />
        <MentorsSection />
        <SliderTabs OSserviced={true} />
        <NewProjectSection
          interstedInHide={true}
          radio={true}
          ADS={true}
          OS={true}
          projectSection={
            DataScienceMastersinCS.DataScienceMastersinCS[0].projectSection
          }
          dataScience={true}
        />

        {/* <ContactUs OS={true} radio={true} interstedInHide={true} /> */}
        <SeventhSection />
        <EightSection
          interstedInHide={true}
          ADS={true}
          radio={true}
          OS={true}
          dataScience={true}
        />
        <WhatsappFloat OS={true} />
        <BottomBar
          OS={true}
          radio={true}
          interstedInHide={true}
          dataScience={true}
        />
        <CookieConsent />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = await import("../Data/DataScienceAiMastersinCS");
  function getDataScienceMastersinCSJSON(DataScienceMastersinCS) {
    return JSON.stringify(DataScienceMastersinCS);
  }
  const DataScienceMastersinCSJson = getDataScienceMastersinCSJSON(data);
  return { props: { DataScienceMastersinCSJson } };
}
