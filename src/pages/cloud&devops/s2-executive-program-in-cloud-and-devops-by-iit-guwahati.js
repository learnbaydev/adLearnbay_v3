import ContactCounsellor from "@/components/CoursePage/ContactCounsellor/ContactCounsellor";
import FirstSection from "@/components/CoursePage/NewSections/FirstSection/FirstSection";
import LJourney from "@/components/CoursePage/NewSections/LJourney/LJourney";

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
import DSAFeeSection from "@/components/CoursePage/dsaFee/DSAFeeSection";
import NewTools from "@/components/CoursePage/newTools/NewTools";
import Certificate from "@/components/CoursePage/Certificate/Certificate";
import AnimationGEN from "@/components/CoursePage/AnimationDsa/AnimationGEN";
import GenAIProject from "@/components/CoursePage/genAiProject/GenAIProject";

function Blockchain({ DataScienceCourseDataJson }) {
    const JobData = {
        title: "Program outcome: What’s in it for you?",
        points: [
          {
            imgSrc:
              "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/adobe_illustrator+(1).webp",
            imgAlt: "",
            title: "Full stack Cloud Mastery For Professionals ",
            description:
              "Learn  AWS, GCP, and Azure with end-to-end real projects. Mastering these skills helps you to manage, deploy, and scale cloud-based applications",
          },
          {
            imgSrc:
              "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/generated_photos+(1).webp",
            imgAlt: "",
            title:
              "Master GenAI Skills for Cloud and Devops",
            description:
              "By integrating GenAI into our programs, we ensure that our learners are well-prepared to lead and innovate in their respective fields.",
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
          src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cloud_iit_jobs.webp",
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
        <title>Executive Course in Cloud & DevOps | IITG Certification</title>
        <meta
          name="description"
          content="Learn advanced skills in Cloud & DevOps with Learnbay's Executive Program. Learn cutting-edge tools and strategies to excel in the tech field."
        />

        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="advanced certification in cloud computing & devops, advanced certification in devops & cloud computing, executive course in cloud & devops, executive cloud & devops course from iit guwahati, cloud & devops iit guwahati course, advanced cloud & devops course by iit guwahati"
        />

        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cloud&devops/executive-program-in-cloud-and-devops-by-iit-guwahati"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/cloud&devops/executive-program-in-cloud-and-devops-by-iit-guwahati"
        />
        <meta
          property="og:title"
          content="Executive Course in Cloud & DevOps | IITG Certification"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Learn advanced skills in Cloud & DevOps with Learnbay's Executive Program. Learn cutting-edge tools and strategies to excel in the tech field."
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
          content="Executive Course in Cloud & DevOps | IITG Certification"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Learn advanced skills in Cloud & DevOps with Learnbay's Executive Program. Learn cutting-edge tools and strategies to excel in the tech field."
        />
        <meta
          name="twitter:description"
          content="Learn advanced skills in Cloud & DevOps with Learnbay's Executive Program. Learn cutting-edge tools and strategies to excel in the tech field."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />

      </Head>
      <main>
        <Navbar interstedInHide={true}  dataScience={true} ADS={true}  />
        <FirstSection
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          noImg={true}
          dataScienceCounselling={true}

  
          radio={true}
          upSkillingHide={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="Executive Certification in "
          cityParaCont="Future-Ready Leadership Starts with Generative AI Mastery"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
          firstToparaImg="Cloud and Devops"
          firstHeading="Executive Certification in  "
          firstTopPara="For Tech Professionals & Developers"
          softwareBtnHide={true}
          DSA={true}
          backgorunimg={true}
          backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cloud-iit.webp"
          GenAI={true}
          cyber={true}
          devopsIIt={true}
        />
    
        <PSummaryAD
          summaryData={DataScienceCourseData.IITCloudDevopsData[0].summarySection}
        />
        {/* <MasterSecondSection data={seconddata} /> */}
        <JobAbroad

          data={JobData}
          dataScience={true}
          interstedInHide={true}

          ADS={true}
        />
                <AnimationGEN         whyChooseData={DataScienceCourseData.IITCloudDevopsData[0].whyChooseData} />
        <TrainerSection plainimg={true} iimgchmbl={true} />


        <FullStackSecondSection />
        

        <GetHire />

        <ContactCounsellor
          noWt={true}
          dataScience={true}
          interstedInHide={true}


          ADS={true}
        />
        <LJourney />
        <NewTools toolsData={ DataScienceCourseData.IITCloudDevopsData[0].toolsData} />

        <SyllabusNew
          buttonHide={true}
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          dataScienceCounselling={true}
      
          genAIIIT={true}

          masterSyllabusMobile={
            DataScienceCourseData.IITCloudDevopsData[0].masterSyllabusMobile
          }
          onebtn={true}
        />
 <Certificate
          data={
            DataScienceCourseData.IITCloudDevopsData[0].Certificate
          }
          noTabs={true}
        />

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
        <GenAIProject  genAiData={
            DataScienceCourseData.IITCloudDevopsData[0].genAiData
          }  Duration={true}/>
        <SeventhSection />
        <EightSection interstedInHide={true}  dataScience={true} ADS={true}  />
        <WhatsappFloat />
        <BottomBar interstedInHide={true}  dataScience={true} ADS={true}  />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/IITCloudDevopsData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
