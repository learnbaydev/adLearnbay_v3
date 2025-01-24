import ContactCounsellor from "@/components/CoursePage/ContactCounsellor/ContactCounsellor";
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
            title: "Master GenAI Tools + Frameworks",
            description:
              "Learn OpenAI APIs, LangChain, Hugging Face, and more to build intelligent applications effortlessly.",
          },
          {
            imgSrc:
              "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/generated_photos+(1).webp",
            imgAlt: "",
            title:
              "Real-World GenAI Project Portfolio",
            description:
              "Work on live projects like chatbot creation, workflow automation, and RAG-powered assistants to showcase your expertise.",
          },
          {
            imgSrc:
              "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/smart_upscaler+(1).webp",
            imgAlt: "",
            title: "Higher Earning Potential",
            description:
              "Leverage advanced GenAI knowledge to drive business success, enhancing career prospects and salary growth.",
          },
        ],
        bannerImage: {
          src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/genAI_DEV+(1).webp  ",
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
          Advance Gen AI Course For Managers & Tech Leaders - Learnbay
        </title>
        <meta
          name="description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="generative ai for managers, gen ai for managers, generative ai course for managers, gen ai course for managers"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/generative-ai-course-for-managers"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/generative-ai-course-for-managers"
        />
        <meta
          property="og:title"
          content="Advance Gen AI Course For Managers & Tech Leaders - Learnbay"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
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
          content="Advance Gen AI Course For Managers & Tech Leaders - Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
        />
        <meta
          name="twitter:description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
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
          titleCourse="DSA & System Design Program for working professionals"
          cityParaCont="Future-Ready Leadership Starts with Generative AI Mastery"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
          firstToparaImg="For Managers & Tech Leaders"
          firstHeading="GenAI Certification "
          firstTopPara="Curriculum Inclusive of Gen-AI"
          softwareBtnHide={true}
          DSA={true}
          backgorunimg={true}
          backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/SyllabusIcon/iitGen_ones.webp"
          GenAI={true}
        />
    
        <PSummaryAD
          summaryData={DataScienceCourseData.GENAIManagersLeadersCourseData[0].summarySection}
        />
        {/* <MasterSecondSection data={seconddata} /> */}
        <JobAbroad

          data={JobData}
          dataScience={true}
          interstedInHide={true}

          ADS={true}
        />
                <AnimationGEN         whyChooseData={DataScienceCourseData.GENAIManagersLeadersCourseData[0].whyChooseData} />
        <TrainerSection plainimg={true} iimgchmbl={true} />
        <WhoIsProgram
        first="For Project Managers, Technical Leaders, and Team Leads in tech."
        second="4+ year of  work experience is required"
        third="Mid-career professionals interested in data science & AII"
        forth="Achieving higher career growth in data science and AI "
        
      />
        <FullStackSecondSection />
        

        <GetHire />

        <ContactCounsellor
          noWt={true}
          dataScience={true}
          interstedInHide={true}


          ADS={true}
        />
        <LJourney />
        <NewTools toolsData={ DataScienceCourseData.GENAIManagersLeadersCourseData[0].toolsData} />

        <SyllabusNew
          buttonHide={true}
          interstedInHide={true}
           dataScience={true}
          ADS={true}
          dataScienceCounselling={true}
     // onlyGENAIPage={true}
     GenAIMangersOnly={true}
     genAIIIT={true}

          masterSyllabusMobile={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0].masterSyllabusMobile
          }
          onebtn={true}
        />
 <Certificate
          data={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0].Certificate
          }
          noTabs={true}
        />

        <DSAFeeSection
              Fee="₹ 90,000"
              FeeEmi="₹ 5,900/month"
              weekendbatch="Weekday Evening"
              weekdaybatch="Weekday Evening "
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
               totalAmount1="₹90,000"
               monthlyPayment1=" ₹5,900"
               greenDown1="Standard Intrest rate Applicable"
               duration2="12 Months"
               totalAmount2="₹90,000"
               monthlyPayment2=" ₹8,850"
          />

        <SliderTabs WithoutService={true} />
        <GenAIProject  genAiData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0].genAiData
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
  const data = await import("../../Data/generativeManagersLeaderscourseData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
