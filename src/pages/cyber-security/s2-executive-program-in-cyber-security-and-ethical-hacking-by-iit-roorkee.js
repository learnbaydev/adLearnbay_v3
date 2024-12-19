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

import { parseJSONData } from "../../../Util/JsonConvertor";
import FullStackSecondSection from "../../components/CoursePage/FullStackSecondSection/FullStackSecondSection";
import SyllabusNew from "../../components/CoursePage/Syllabus/MasterSyllabus";
import PSummaryAD from "@/components/CoursePage/pSummary/PSummaryAD";
import AnimationDSA from "@/components/CoursePage/AnimationDsa/AnimationDSA";
import NewCertificateSection from "@/components/CoursePage/newCertificate/NewCertificate";
import DSAFeeSection from "@/components/CoursePage/dsaFee/DSAFeeSection";
import AnimationGEN from "@/components/CoursePage/AnimationDsa/AnimationGEN";
import NewTools from "@/components/CoursePage/newTools/NewTools";
import Certificate from "@/components/CoursePage/Certificate/Certificate";
import IHubAboutIIT from "@/components/CoursePage/iHubAbout/IHubAboutIIT";

function Blockchain({ DataScienceCourseDataJson, whyChooseData }) {
  const JobData = {
    title: "Program outcome: What’s in it for you?",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/generated_photos+(1).webp",
        imgAlt: "",
        title: "Full stack Cybersecurity Certification",
        description:
          "Learn Cybersecurity and Ethical Hacking with real-world projects. Mastering these skills helps to protect and secure system against threats.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/adobe_illustrator+(1).webp",
        imgAlt: "",
        title: "Master GenAI Skills for Cybersecurity",
        description:
          "By integrating GenAI into our programs, we ensure that our learners are well-prepared to lead and innovate in their respective fields.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/smart_upscaler+(1).webp",
        imgAlt: "",
        title: "Accelerate Your Career Growth",
        description:
          "Leverage advanced GenAI knowledge to drive business success, enhancing career prospects and salary growth.",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cyber-jobs.webp",
      width: 350,
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
        <title>
          Best Cyber Security & Ethical Hacking Course | IITR Certification
        </title>
        <meta
          name="description"
          content="Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats."
        />

        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="cyber security and ethical hacking course, cyber security and ethical hacking, cyber hacking course, cyber security ethical hacking course, cyber security and hacking courses, cyber security ethical hacking certification"
        />

        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cyber-security/executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/generative-ai-course-for-professionals"
        />
        <meta
          property="og:title"
          content="Best Cyber Security & Ethical Hacking Course | IITR Certification"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats."
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Best Cyber Security & Ethical Hacking Course | IITR Certification"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats."
        />
        <meta
          name="twitter:description"
          content="Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />

        {/* <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "Data Structures Algorithms and System Design Course",
      "description": "Elevate your tech skills through our Data Structures Algorithms and System Design Course and switch from service-based to product-based companies. Earn globally recognized IBM and Microsoft Certifications.",
      "url": "https://www.learnbay.co/fullstack/dsa-system-design",
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
    }`
  }}
/> */}
      </Head>
      <main>
        <Navbar interstedInHide={true} dataScience={true} ADS={true} />
        <FirstSection
          interstedInHide={true}
          dataScience={true}
          ADS={true}
          noImg={true}
          dataScienceCounselling={true}
          radio={true}
          upSkillingHide={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="DSA & System Design Program for working professionals"
          cityParaCont=""
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cyber-Security-IIT.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
          firstToparaImg="Cyber Security & Ethical Hacking"
          firstHeading="Executive Certification in"
          firstTopPara="Curriculum Inclusive of Gen-AI"
          softwareBtnHide={true}
          backgorunimg={true}
          cyber={true}
          fresher={true}
          backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/dsa_backgrounds.webp"
          microsoftOnly={true}
          workingPro={true}
        />
        <PSummaryAD
          summaryData={
            DataScienceCourseData.IITCyberSecurityData[0].summarySection
          }
        />
        {/* <MasterSecondSection data={seconddata} /> */}
        <JobAbroad
          data={JobData}
          dataScience={true}
          interstedInHide={true}
          ADS={true}
        />
        <AnimationGEN
          whyChooseData={
            DataScienceCourseData.IITCyberSecurityData[0].whyChooseData
          }
          cyber={true}
        />
        <TrainerSection plainimg={true} iimgchmbl={true} />

        <WhoIsProgram
          first="Graduation or Masters with Work experience."
          second="Minimum 1 year of IT work experience"
          third="Entry to Mid Level Professionals with 1+ Years of Experience"
          forth="Achieving higher career growth in cyber security"
        />

        <GetHire />

        <ContactCounsellor
          noWt={true}
          dataScience={true}
          interstedInHide={true}
          ADS={true}
        />
        <LJourney />
        <NewTools
          toolsData={DataScienceCourseData.IITCyberSecurityData[0].toolsData}
        />
        <SyllabusNew
          buttonHide={true}
          interstedInHide={true}
          dataScience={true}
          ADS={true}
          dataScienceCounselling={true}
          masterSyllabusMobile={
            DataScienceCourseData.IITCyberSecurityData[0].masterSyllabusMobile
          }
          onebtn={true}
        />
        <Certificate
      
data={DataScienceCourseData.IITCyberSecurityData[0].Certificate}
          cyber={true}
        />
        {/* <NewCertificateSection
          certificateNew={
            DataScienceCourseData.IITCyberSecurityData[0].certificateNew
          }
        /> */}

        <DSAFeeSection
          Fee="₹1,10,000"
          FeeEmi="₹ 7,211/month"
          weekendbatch="Weekday Evening"
          weekdaybatch="Weekday Evening"
          weekday="MON-WED-FRI"
          weekend="MON-WED-FRI"
          WeekendDate="JAN 26th"
          WeekdayDate="JAN 10th "
          WeekendTime="08:00PM - 10:00PM"
          WeekdayTime="08:00PM - 10:00PM"
          FeeContent3="Flexible payment"
          // <EMI POPUP
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹1,10,000"
          monthlyPayment1="₹7,211"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹1,10,000"
          monthlyPayment2="₹10,816"
        />

        <SliderTabs WithoutService={true} />
        <IHubAboutIIT/>
        <SeventhSection />
        <EightSection interstedInHide={true} dataScience={true} ADS={true} />
        <WhatsappFloat />
        <BottomBar interstedInHide={true} dataScience={true} ADS={true} />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/CyberSecurityData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
