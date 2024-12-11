import { BAThirdSectionData } from "@/Data/ThirdSectionData";
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
import { AiOutlineContainer } from "react-icons/ai";
import { BsDisplay, BsPeople } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { parseJSONData } from "../../../Util/JsonConvertor";
import SyllabusNew from "../../components/CoursePage/Syllabus/MasterSyllabus";

function Blockchain({ BusinessAnalyticsDataJson }) {
  const BusinessAnalyticsData = parseJSONData(BusinessAnalyticsDataJson);

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
  const BASecond = {
    title1: "Domain Specialization",
    image1:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-two.webp",
    points: [
      "Work in an industry like environment and gain practical hands-on experienc",
      "12 Real-World + 4 Capstone Projects",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/BA.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Business Analyst   ",
        salary: " 27 LPA",
      },
      { icon: <LuBrainCircuit />, role: "BI Engineer ", salary: "  20 LPA" },
      { icon: <FaReact />, role: "Data Scientist ", salary: " 17 LPA" },
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
    title: "Business Decisions Empowered by Analytics    ",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Lead with Data-Driven Decisions   ",
        description:
          "Learn to drive business growth by making informed business strategies.   ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Flexible Learning at your Convenience        ",
        description:
          "Designed for professionals aiming to upskill without quitting their job         ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "Fast-Track to Higher Earnings    ",
        description:
          "Get significant salary increases in the business analytics domain.",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BA-min.webp",
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
        <title>Best Business Analyst Course with Placement Support</title>
        <meta
          name="description"
          content="Get the best Business Analytics & Analyst Course with placement support. Top certification & training for online classes. Enrol now for better career options."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="  business analytics course, business analyst course with placement, business analyst classes online, business analyst course with placement guarantee, best business analyst course, best business analysis course, best business analyst training, top business analyst certification, business analytics course with placement, business analysis training and placement, best business analyst course with placement,      "
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://course.learnbay.co/datascience/s2-business-analytics-generic"
        />
      </Head>
      <main>
        <Navbar interstedInHide={true}  dataScience={true} ADS={true} />
        <FirstSection
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          softwareBtnHide={true}
          dataScienceCounselling={true}
  
          radio={true}
          upSkillingHide={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
          cityParaCont="Training based on real-time projects specially designed for working professionals who aspire of having a lucrative career.          "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BA-min.webp"
          firstToparaImg="for Working Professionals "
          firstHeading="Business Analytics Course  "
          firstTopPara="Acquire practical skills you can apply immediately          "
        />

        <MasterSecondSection data={seconddata} />
        <CloudDevopsecond data={BASecond} dataScience={true} />
        <JobAbroad
          data={JobData}
          dataScience={true}
          interstedInHide={true}

          ADS={true}
        />

        <WhoProgram
          dataScience={true}
          interstedInHide={true}

          ADS={true}
          leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
          ThirdSectionData={BAThirdSectionData}
        />
        <Realstory />
        <TrainerSection plainimg={true} iimgchmbl={true} />
        <div style={{ marginTop: "100px" }}>
          <WhoIsProgram
            first="Bachelor's degree with consistent good academic"
            second="Minimum 6 Month of IT/Non-IT work experience"
            third="Early to mid-career professionals interested in Business analytics"
            forth="Developing skills in Business analytics for future opportunities"
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
          buttonHide={true}
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          dataScienceCounselling={true}

          masterSyllabusMobile={
            BusinessAnalyticsData.BADataScienceCourseData[0]
              .masterSyllabusMobile
          }
          onebtn={true}
        />
        <ToolsCovered />

        <Certificate
          data={BusinessAnalyticsData.BADataScienceCourseData[0].Certificate}
        />
        <FeeSection
          Fee="₹ 95,000"
          FeeEmi="₹ 6,228/month"
          weekdaybatch="Weekday Batch"
          weekendbatch="Weekend Batch"
          weekday="MON-FRI"
          weekend="SAT- SUN"
          WeekdayDate=" Dec 13th"
          WeekendDate="Nov 17th"
          WeekendTime="9:30 AM - 1:00 PM"
          WeekdayTime="8:00 PM - 10:30 PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="10 days refund policy"
          FeeContent6="No additional cost"
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          // <EMI POPUP
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹95,000"
          monthlyPayment1="₹6,228"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹95,000"
          monthlyPayment2="₹9,342"
        />
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
            BusinessAnalyticsData.BADataScienceCourseData[0].projectSection
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
  const data = await import("../../Data/BusinessAnalyticsData");
  function getBusinessAnalyticsDataJSON(BusinessAnalyticsData) {
    return JSON.stringify(BusinessAnalyticsData);
  }
  const BusinessAnalyticsDataJson = getBusinessAnalyticsDataJSON(data);
  return { props: { BusinessAnalyticsDataJson } };
}
