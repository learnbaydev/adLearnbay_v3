import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import FirstSection from "@/components/Home/FirstSection/FirstSection";
import HomeLine from "@/components/Home/HomeLine/HomeLine";
import dynamic from "next/dynamic";
import Head from "next/head";
const Course = dynamic(() => import("@/components/Home/OSCourse/Course"));

import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import MasterSecondSection from "@/components/MastersCourse/MasterSecondSection/MasterSecondSection";
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
  import("@/components/CoursePage/Cloud&Devops/DevOpsSecondSection/DevOpsSecondSection")
);
const MentorsSection= dynamic(() =>
  import("@/components/Global/MentorsSection/MentorsSection")
);
const NewProjectSection= dynamic(() =>
  import("@/components/Global/NewProjectSection/NewProjectSection")
);
const EightSection = dynamic(() => import("@/components/MastersCourse/EightSection/EightSection"));
import { parseJSONData } from "../Util/JsonConvertor";
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
import { FaReact, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsPersonGear, BsDisplay, BsPeople } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import JobAbroad from "@/components/MastersCourse/JobAbroad/JobAbroad";
import Certificate from "@/components/MastersCourse/Certificate/Certificate";
import SliderTabs from "@/components/Global/SliderTabs/SliderTabs";

import CookieConsent from "@/components/Global/CookieConsent/CookieConstent"
export default function Home({ DataScienceMastersinCSJson}) {
    const DataScienceMastersinCS = parseJSONData(DataScienceMastersinCSJson);
 
 
  
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
      { icon: <BsDisplay />, text: "Real Time Projects" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    
    ],
    formbl: [
      { icon: <BsPeople />, text: "Mock Interview Sessions" },
    ],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
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
      <Navbar HideInterest={true} ADS={true} dataScience={true} OS={true} radio={true}  />
        <FirstSection dataScience={true} radio={true} HideInterest={true} OS={true}  Osaplybtn={true} />
        <HomeLine />
        <Course  dataScience={true}
        radio={true}
        organicADS={true}
        newDesign={true}
        dataScienceGeneric={true}/>
        <MasterSecondSection/>
        <CloudDevopsecond data={DsSecond} />
        <JobAbroad/>
 
        <ProjectSection
          dataScience={true}
          radio={true}
          HideInterest={true}
        />
       <Certificate
          data={DataScienceMastersinCS.DataScienceMastersinCS[0].Certificate}
        />
    <MentorsSection/>
    <SliderTabs OSserviced={true}/>
    <NewProjectSection
          HideInterest={true}
          radio={true}
          ADS={true}
          projectSection={
            DataScienceMastersinCS.DataScienceMastersinCS[0].projectSection
          }
        />
     
        {/* <ContactUs dataScience={true} radio={true} HideInterest={true} /> */}
        <SeventhSection organic={true} />
        <EightSection HideInterest={true}  ADS={true} radio={true} />
        <WhatsappFloat chat360code1={true} />
        <BottomBar dataScience={true} radio={true} HideInterest={true} />
        <CookieConsent/>
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
  
