import ContactCounsellor from "@/components/CoursePage/ContactCounsellor/ContactCounsellor";
import FeeSection from "@/components/CoursePage/FeeSection/FeeSection";
import FirstSection from "@/components/CoursePage/NewSections/FirstSection/FirstSection";
import LJourney from "@/components/CoursePage/NewSections/LJourney/LJourney";
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
import Head from "next/head";
import { AiOutlineContainer } from "react-icons/ai";
import { BsDatabaseUp, BsDisplay, BsPeople } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { parseJSONData } from "../../../Util/JsonConvertor";
import FullStackSecondSection from "../../components/CoursePage/FullStackSecondSection/FullStackSecondSection";
import SyllabusNew from "../../components/CoursePage/Syllabus/MasterSyllabus";
import PSummaryAD from "@/components/CoursePage/pSummary/PSummaryAD";
import AnimationDSA from "@/components/CoursePage/AnimationDsa/AnimationDSA";
import NewCertificateSection from "@/components/CoursePage/newCertificate/NewCertificate";
import DSAFeeSection from "@/components/CoursePage/dsaFee/DSAFeeSection";

function Blockchain({ DataScienceCourseDataJson }) {
  
  const JobData = {
    title: "Decode Your Tech Carer Path to Competitive Success",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/adobe_illustrator+(1).webp",
        imgAlt: "",
        title: "Transform with Coding Expertise",
        description:
          "Build a highly desired software developer/engineer role with our multifaceted training.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/generated_photos+(1).webp",
        imgAlt: "",
        title: "Elevate Your Coding Skills with Real-World Projects",
        description:
          "Exhibit real-time coding mastery to tackle algorithmic ordeals.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/smart_upscaler+(1).webp",
        imgAlt: "",
        title: "From Novice to Specialist",
        description:
          "Master, from basics to advanced DSA concepts to specify your reign in the tech field. ",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/dsa-job-lefts.webp",
      width: 360,
      height: 350,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
      <title>Data Structures Algorithms and System Design Course - Learnbay</title>
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
        <Navbar interstedInHide={true}  dataScience={true} ADS={true} bookDemoSeesion={true} />
        <FirstSection
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          noImg={true}
          dataScienceCounselling={true}
          demoSessionButton={true}
  
          radio={true}
          upSkillingHide={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="DSA & System Design Program for working professionals"
          cityParaCont="with Gen-AI for Software Developers"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
          firstToparaImg="Algorithms & System Design"
          firstHeading="Data Structure"
          firstTopPara="Ace PRODUCT-BASED interviews in Top MNCs"
          softwareBtnHide={true}
          DSA={true}
          backgorunimg={true}
          backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/dsa_backgrounds.webp"
          microsoftOnly={true}
          workingPro={true}
        />
        <WhoIsProgram
          first="Bachelor’s degree with consistent good academic"
          second="1+ year(s) experience in IT domain"
          third="For working professionals with technical experience"
          forth="For professionals seeking DSA & System Design skills"
        />
        <PSummaryAD
          summaryData={DataScienceCourseData.DsaSystemDesign[0].summarySection}
        />
        {/* <MasterSecondSection data={seconddata} /> */}
        <JobAbroad
        demoSessionButton={true}
          data={JobData}
          dataScience={true}
          interstedInHide={true}

          ADS={true}
        />
        <TrainerSection plainimg={true} iimgchmbl={true} />
        <FullStackSecondSection />
        
        <AnimationDSA />
        <GetHire />

        <ContactCounsellor
          noWt={true}
          dataScience={true}
          interstedInHide={true}
          demoSessionButton={true}

          ADS={true}
        />
        <LJourney />

        <SyllabusNew
          buttonHide={true}
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          dataScienceCounselling={true}
          demoSessionButton ={true}

          masterSyllabusMobile={
            DataScienceCourseData.DsaSystemDesign[0].masterSyllabusMobile
          }
          onebtn={true}
        />

        <NewCertificateSection
          certificateNew={
            DataScienceCourseData.DsaSystemDesign[0].certificateNew
          }
        />

        <DSAFeeSection
          Fee="₹ 95,000"
          FeeEmi="₹ 6,228/month"
          weekendbatch="Weekday Evening (DSA BATCHES)"
          weekdaybatch="Weekday Evening (DSA BATCHES)"
          weekday="MON-WED-FRI"
          weekend="MON-WED-FRI"
          WeekendDate="JAN 26th"
          WeekdayDate="JAN 10th "
          WeekendTime="08:00PM - 10:00PM"
          WeekdayTime="08:00PM - 10:00PM"
          FeeContent3="Flexible payment"
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          HideThird={true}

          // <EMI POPUP
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹95,000"
          monthlyPayment1="₹9,342"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹95,000"
          monthlyPayment2="₹9,342"
          />

        <SliderTabs WithoutService={true} />
        <SeventhSection />
        <EightSection interstedInHide={true}  dataScience={true} ADS={true}  demoSessionButton={true}/>
        <WhatsappFloat />
        <BottomBar interstedInHide={true}  dataScience={true} ADS={true} demoSessionButton={true} />
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
