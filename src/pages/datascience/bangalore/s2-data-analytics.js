import FeeSection from "@/components/CoursePage/FeeSection/FeeSection";
import CloudDevopsecond from "@/components/CoursePage/Cloud&Devops/DevOpsSecondSection/DevOpsSecondSection";
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
import SyllabusNew from "../../../components/CoursePage/Syllabus/MasterSyllabus";

import EightSection from "@/components/MastersCourse/EightSection/EightSection";
import FirstSection from "@/components/CoursePage/NewSections/FirstSection/FirstSection";
import MasterSecondSection from "@/components/MastersCourse/MasterSecondSection/MasterSecondSection";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { BsDatabaseUp, BsDisplay, BsPeople } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import JobAbroad from "@/components/MastersCourse/JobAbroad/JobAbroad";
import Realstory from "@/components/CoursePage/NewSections/Realstory/Realstory";
import WhyLearnbay from "@/components/CoursePage/WhyLearnbay/WhyLearnbay";
import ContactCounsellor from "@/components/CoursePage/ContactCounsellor/ContactCounsellor";
import LJourney from "@/components/CoursePage/NewSections/LJourney/LJourney";
import ToolsCovered from "@/components/CoursePage/ToolsCovered/ToolsCovered";
import SliderTabs from "@/components/Global/SliderTabs/SliderTabs";
import MobileTestimonial from "@/components/CoursePage/NewSections/MobileTestimonial/MobileTestimonial";

function Blockchain({ DataAnalyticsdataJson, projectSection }) {
  const DataAnalyticsdata = parseJSONData(DataAnalyticsdataJson);

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
      title1: "Project-Based Learning",
      image1: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group+773.webp",
      points: [
        "Work in an industry like environment and gain practical hands-on experience",
        "8 Real-World + 1 Capstone Projects",
      ],
      image2:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask-group-_32_-min.webp",
      title2: "Job Roles You Can Target",
      jobRoles: [
        {
          icon: <FaReact />,
          role: "Sr. Data Analyst ",
          salary: " 15 LPA",
        },
        {
          icon: <TbBrandGoogleAnalytics />,
          role: "BI Developer ",
          salary: " 10 LPA",
        },
        { icon: <BsDatabaseUp />, role: "Database Admin ", salary: "13 LPA" },
      ],
      image3:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-770-min.webp",
      image4:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask+group+(10).webp",
      title3: "Assured Job Assistance",
      jobAssistance: [
        { icon: <BsDisplay />, text: "8-10 Interview Calls" },
        { icon: <AiOutlineContainer/>, text: "Resume Building Session" },
        { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
      ],
      formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
      image5:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
    };

    const JobData = {
      title: "Data-Driven Brilliance    ",
      points: [
        {
          imgSrc:
            "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
          imgAlt: "",
          title: "From Beginner to Data Master        ",
          description:
            "Become an expert data professional & gain in-demand analytics skills.",
        },
        {
          imgSrc:
            "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
          imgAlt: "",
          title: "Flexible Learning at your Convenience        ",
          description:
            "Designed for professionals aiming to upskill without quitting their job        ",
        },
        {
          imgSrc:
            "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
          imgAlt: "",
          title: "Achieve Your Dream Role        ",
          description:
            "Get your dream salary package in your dream company        ",
        },
      ],
      bannerImage: {
        src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/dahead.webp",
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
        <title>Data Analytics Generic - Learnbay</title>
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
          href="https://www.learnbay.co/datascience/s2-data-analytics-generic"
        />
      </Head>
      <main>
        <Navbar interstedInHide={true}  dataScience={true} ADS={true} />
       <FirstSection
                 interstedInHide={true}
       
                 ADS={true}
                 softwareBtnHide={true}
                 dataScienceCounselling={true}
                 dataScience={true}
                 radio={true}
                 upSkillingHide={true}
                 ThirdTyped="Live Interactive Classes"
                 titleCourse="Advance Data Science & AI Program with Domain Specialization"
                 cityParaCont="Training based on real-time projects specially designed for working professionals who aspire of having a lucrative career."
                 brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
                 FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
                 firstToparaImg="Bangalore "
                 firstHeading="Data Analytics Course in "
                 firstTopPara="Get ahead of the competition with popular skill sets"
                 ibmOnly={true}
               />
        <MasterSecondSection data={seconddata} />
        <CloudDevopsecond data={DsSecond} dataScience={true} />
        <S2SecondSection />

        <JobAbroad
          data={JobData}
          dataScience={true}
          interstedInHide={true}
     
          ADS={true}
        />
                <Realstory />
                <TrainerSection plainimg={true} iimgchmbl={true} />
                <div>
          <WhoIsProgram
            first="Bachelor's degree with consistent good academic"
            second="Minimum 6 Month of IT/Non-IT work experience"
            third="Early to mid-career professionals interested in data analytics"
            forth="Developing skills in data analytics for future opportunities"
          />
        </div>

        <WhyLearnbay
          projectInno={true}
          adsHide={true}
          dataScience={true}
          interstedInHide={true}

          ADS={true}
        />
        <GetHire />

        <ContactCounsellor
          noWt={true}
          dataScience={true}
          interstedInHide={true}

          ADS={true}
        />
        <LJourney />

        <SyllabusNew
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          masterSyllabusMobile={
            DataAnalyticsdata.DADataScienceCourseData[0].masterSyllabusMobile
          }
          onebtn={true}
        />
                <ToolsCovered />

        <Certificate
          data={DataAnalyticsdata.DADataScienceCourseData[0].Certificate}
          projectWithCertificate={true}
          singlecertificate={true}
        />
        <FeeSection
          Fee="₹ 85,000"
          FeeEmi="₹5,572/month"
          weekdaybatch="Weekday Batch"
          weekendbatch="Weekend Batch"
          weekday="MON - THU"
          weekend="SAT - SUN"
          WeekdayDate="Dec 6th"
          WeekendDate="Nov 24th"
          WeekendTime="9:30 AM - 1 PM"
          WeekdayTime="8:00 PM - 10:30 PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="10 days refund policy"
          FeeContent6="No additional cost"
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program.pdf"
          // EMI POPUPDATA
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹85,000"
          monthlyPayment1="₹5,572"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹85,000"
          monthlyPayment2="₹8,358"
        />
        {/* <Testimonial
          redirectDS={true}
          videotest={true}
          heading="Hear it from our Alumni"
          Testimonial={
            DataAnalyticsdata.DADataScienceCourseData[0].testimonialgenric
          }
        /> */}
        <MentorsSection />
        <SliderTabs WithoutService={true} />
        <MobileTestimonial
          dataScience={true}
          interstedInHide={true}
     
          ADS={true}
        />
        <NewProjectSection
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          projectSection={
            DataAnalyticsdata.DADataScienceCourseData[0].projectSection
          }
        />
        <SeventhSection />
        <EightSection interstedInHide={true}  dataScience={true} ADS={true} />
        <WhatsappFloat />
        <BottomBar interstedInHide={true}  dataScience={true} ADS={true} />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../../Data/DataAnalyticsData");
  function getDataAnalyticsdataJSON(DataAnalyticsdata) {
    return JSON.stringify(DataAnalyticsdata);
  }
  const DataAnalyticsdataJson = getDataAnalyticsdataJSON(data);
  return { props: { DataAnalyticsdataJson } };
}
