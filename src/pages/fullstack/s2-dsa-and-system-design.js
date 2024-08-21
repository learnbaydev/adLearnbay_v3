import ContactCounsellor from "@/components/CoursePage/ContactCounsellor/ContactCounsellor";
import FeeSection from "@/components/CoursePage/FeeSection/FeeSection";
import FirstSection from "@/components/CoursePage/NewSections/FirstSection/FirstSection";
import LJourney from "@/components/CoursePage/NewSections/LJourney/LJourney";
import ToolsCovered from "@/components/CoursePage/ToolsCovered/ToolsCovered";
import WhoIsProgram from "@/components/CoursePage/WhoIsProgram/WhoIsProgram";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
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
import { BsDatabaseUp, BsDisplay, BsPeople } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { parseJSONData } from "../../../Util/JsonConvertor";
import FullStackSecondSection from "../../components/CoursePage/FullStackSecondSection/FullStackSecondSection";
import SyllabusNew from "../../components/CoursePage/Syllabus/MasterSyllabus";

function Blockchain({ DataScienceCourseDataJson }) {
  const seconddata = [
    {
      boldText: "250+",
      normalText: "Hiring Partner",
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
    title1: "Project-Based Learning",
    image1: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group+773.webp",
    points: [
      "Work in an industry like environment and gain practical hands-on experience",
      "10 Real-World + 2 Capstone Projects",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask-group-_32_-min.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Predictive Analyst",
        salary: " 12-15 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Medical Data Scientist",
        salary: " 12-20 LPA",
      },
      {
        icon: <BsDatabaseUp />,
        role: "Telemedicine Analyst",
        salary: " 20-25 LPA",
      },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/health-bottom.webp",
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
    title: "Code Your Career Path To Success",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Transform with Top Tech Skills",
        description: "Learn from industry experts and crack top MNC interviews",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Practise Real-time projects in industry setting",
        description:
          "Dive into real-time projects that solve real-world problems",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "From Novice to Expert",
        description:
          "Learn from basics to advanced DSA & System Design Techniques",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/health-right-side.webp",
      width: 414,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Software Development Certification Program - Learnbay</title>
        <meta
          name="description"
          content="Elevate your tech skills through our Software development Certification Program and switch from service-based to product-based companies. Earn globally recoganized IBM and Microsoft Certifications.          "
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="software development course, software development program, software engineering course, software engineer certification, software developer certifications, software developer training, software engineer online course          "
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/full-stack-software-development-program"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "Software Development Certification Program",
      "description": "Elevate your tech skills through our Software Development Certification Program and switch from service-based to product-based companies. Earn globally recognized IBM and Microsoft Certifications.",
      "url": "https://www.learnbay.co/fullstack/full-stack-software-development-program",
      "offers": {
        "@type": "Offer",
        "price": 115000,
        "priceCurrency": "INR",
        "category": "Educational"
      },
      "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "url": "https://www.learnbay.co/"
      },
      "coursePrerequisites": "Nothing but basic coding knowledge is required to start with this course.",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "P10W",
          "courseFee": {
            "@type": "PriceSpecification",
            "price": "₹ 1,15,000 + 18% GST",
            "priceCurrency": "INR"
          }
        }
      ]
    }`,
          }}
        />
      </Head>
      <main>
        <Navbar interstedInHide={true} formotp={true} ADS={true} />
        <FirstSection
          interstedInHide={true}
          formotp={true}
          ADS={true}
          noImg={true}
          dataScienceCounselling={true}
          dataScience={true}
          radio={true}
          upSkillingHide={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="DSA & System Design Program for working professionals"
          cityParaCont="Successfully transition careers through our courses & real-time capstone projects. All while making your previous work experience count!"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
          firstToparaImg=" Working Professionals"
          firstHeading="DSA & System Design Program for"
          firstTopPara="Crack Interview in Top Product Companies"
          softwareBtnHide={true}
        />
        <MasterSecondSection data={seconddata} />
        <JobAbroad
          data={JobData}
          dataScience={true}
          interstedInHide={true}
          formotp={true}
          ADS={true}
        />
        <TrainerSection plainimg={true} iimgchmbl={true} />
        <FullStackSecondSection />
        <WhoIsProgram
          first="Bachelor’s degree with consistent good academic"
          second="1+ year(s) experience in IT domain"
          third="For working professionals with technical experience"
          forth="For professionals seeking DSA & System Design skills"
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
            DataScienceCourseData.DsaSystemDesign[0].masterSyllabusMobile
          }
          onebtn={true}
        />

        <ToolsCovered />

        <FeeSection
          Fee="₹85,000"
          FeeEmi="₹5,572/month"
          weekdaybatch="Weekend Batch"
          weekendbatch="Weekday Batch"
          weekday="SAT - SUN"
          weekend="MON - THU"
          WeekdayDate="August 25th"
          WeekendDate="Sept 15th"
          WeekendTime="8:00 PM - 10:30 PM"
          WeekdayTime="9:30 AM - 1 PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          interstedInHide={true}
          formotp={true}
          ADS={true}
          HideThird={true}
          // <EMI POPUP
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹85,000"
          monthlyPayment1="₹5,572"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹85,000"
          monthlyPayment2="₹8,358"
        />

        <SliderTabs WithoutService={true} />
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
  const data = await import("../../Data/DsaSystemDesign");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
