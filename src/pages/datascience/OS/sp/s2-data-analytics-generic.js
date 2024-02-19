import FeeSection from "@/components/CoursePage/FeeSection/FeeSection";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
import WhoIsProgram from "@/components/CoursePage/WhoIsProgram/WhoIsProgram";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Certificate from "@/components/Global/Certificate/Certificate";
import MentorsSection from "@/components/Global/MentorsSection/MentorsSection";
import NewProjectSection from "@/components/Global/NewProjectSection/NewProjectSection";
import OfferPopup from "@/components/Global/OfferPopup/OfferPopup";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
import Testimonial from "@/components/Global/Testimonial/Testimonial";
import TrainerSection from "@/components/Global/TrainerSection/TrainerSection";
import GetHire from "@/components/Home/GetHire/GetHire";
import ProjectSection from "@/components/Home/ProjectSection/ProjectSection";
import S2SecondSection from "@/components/S2SecondSection/SecondSection";
import Head from "next/head";
import { useState } from "react";
import { parseJSONData } from "../../../../Util/JsonConvertor";
import SyllabusNew from "../../../../components/CoursePage/Syllabus/MasterSyllabus";

import EightSection from "@/components/MastersCourse/EightSection/EightSection";
import MyCookieConsent from "@/components/Global/CookieConsent/CookieConstent";

function Blockchain({ DataAnalyticsdataJson, projectSection }) {
  const DataAnalyticsdata = parseJSONData(DataAnalyticsdataJson);

  const [popupData, setPopupData] = useState([]);

  return (
    <>
      <Head>
        <title>Data Analytics Generic - Learnbay</title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Artificial Intelligence and Data Science Skills, Techniques by enrolling into the Learnbay's Advanced Data Science Course."
        />
        <meta name="robots" content="index, nofollow" />
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
        <Navbar HideInterest={true} OS={true} ADS={true} />
        <FirstSection
          HideInterest={true}
          OS={true}
          ADS={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
          cityParaCont="Training based on real-time projects specially designed for working professionals who aspire of having a lucrative career.          "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/dahead.webp"
          firstToparaImg="for Working Professionals "
          firstHeading="Data Analytics Course "
          firstTopPara="Self-Paced Online Course"
          softwareBtnHide={true}
          ibmOnly={true}
          AnimationHide={true}
        />

        <SecondSection OS={true}/>
        <S2SecondSection />
        <WhoIsProgram
          first="Bachelor's degree with consistent good academic"
          second="Minimum 6 Months of IT/Non-IT work experience"
          third="Early to mid-career professionals interested in Data analytics"
          forth="Developing skills in Data analytics for future opportunities"
        />
        <GetHire OS={true}/>

        <SyllabusNew
          HideInterest={true}
          OS={true}
          ADS={true}
          masterSyllabusMobile={
            DataAnalyticsdata.DADataScienceCourseData[0].masterSyllabusMobile
          }
          onebtn={true}
        />

        <Certificate
          data={DataAnalyticsdata.DADataScienceCourseData[0].Certificate}
        />
        <FeeSection
          Fee="$499"
          FeeEmi="₹ 5,244/month"
           weekdaybatch="Weekend Batch"
        weekendbatch="Weekday  Batch"
        weekday="SAT - SUN"
        weekend="MON - FRI"
        WeekdayDate="FEB 18th"
        WeekendDate="MAR 8th"
        WeekdayTime="9.30AM - 1.00PM"
        WeekendTime="8.00PM - 10.00PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          HideInterest={true}
          OS={true}
          ADS={true}

            // EMI POPUPDATA
        emiType = "NO COST EMI"
        duration1 = "18 Months"
        totalAmount1 = "₹80,000"
        monthlyPayment1 = "₹5,244"
        greenDown1 = "Standard Intrest rate Applicable"
        duration2 = "12 Months"
        totalAmount2 = "₹80,000"
        monthlyPayment2 = "₹7,866"
        />
        <TrainerSection plainimg={true} iimgchmbl={true} />
        <Testimonial
          redirectDS={true}
          videotest={true}
          heading=""
          Testimonial={
            DataAnalyticsdata.DADataScienceCourseData[0].testimonialgenric
          }
        />
        <MentorsSection />
        <NewProjectSection
          HideInterest={true}
          OS={true}
          ADS={true}
          projectSection={
            DataAnalyticsdata.DADataScienceCourseData[0].projectSection
          }
        />
        <SeventhSection />
        <EightSection HideInterest={true} OS={true} ADS={true} />
        <MyCookieConsent />
        <BottomBar HideInterest={true} OS={true} ADS={true} />
        {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../../../Data/DataAnalyticsData");
  function getDataAnalyticsdataJSON(DataAnalyticsdata) {
    return JSON.stringify(DataAnalyticsdata);
  }
  const DataAnalyticsdataJson = getDataAnalyticsdataJSON(data);
  return { props: { DataAnalyticsdataJson } };
}
