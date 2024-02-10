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
export default function Home({ DataScienceMastersinCSJson}) {
    const DataScienceMastersinCS = parseJSONData(DataScienceMastersinCSJson);
  const testimonial = [
    {
      id: 1,
      name: "Preksha Mishra",
      working: "HCL",
      link: "vSjfKdIzUjY",
      proImg:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/preksha-testimonial.webp",
      sDesc:
        "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
      lDesc:
        "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
      complogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/hcl.webp",
      statLogo: "140% Hike",
    },
    {
      id: 2,
      name: "Shubham Kumar",
      working: "Cendrol Technology",
      link: "JoKquvfAhZU",
      proImg:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Shubham-kumar-thumb+.webp",
      sDesc:
        "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech...",
      lDesc:
        "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world. Their mock interviews also prepared me for job interviews, and I got a data analyst job at Cendrol. This course really helped me change my career.",
      complogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/cendrol.webp",
      statLogo: "  210% Hike",
    },
    {
      id: 4,
      name: "Arvind Kumar",
      working: "The Math Company",
      link: "hewBtR_WoDM",
      proImg:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/aravind-k-thumb.webp",
      sDesc:
        "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that...",
      lDesc:
        "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.",
      complogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/themath.webp",
      statLogo: " 150% Hike",
    },
    {
      id: 5,
      name: "Jaya sinha",
      working: "Amazon",
      link: "A-BkcEM0rQM",
      proImg:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/jaya-sinha-thumb.webp",
      sDesc:
        "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's...",
      lDesc:
        "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable. Post-completion, I had received two offers, one from Amazon and other from Infosys for the role of senior data analyst. Highly recommend for anyone stepping into data science.",
      complogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/amazon.webp",
      statLogo: " 150% Hike",
    },
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
  
