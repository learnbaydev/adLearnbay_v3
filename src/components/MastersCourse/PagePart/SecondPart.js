import dynamic from "next/dynamic";
// import BottomBar from "../../global/BottomBar/BottomBar";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
const GetHire = dynamic(() => import("../GetHire/GetHire"));

const SyllabusNew = dynamic(() =>
  import("../../CoursePage/Syllabus/MasterSyllabus")
);
const ToolsCovered = dynamic(() =>
  import("../../CoursePage/ToolsCovered/ToolsCovered")
);

const Certificate = dynamic(() => import("../Certificate/Certificate"));
const FeeSection = dynamic(() =>
  import("../../CoursePage/FeeSection/FeeSection")
);
const MentorsSection = dynamic(() =>
  import("../../Global/MentorsSection/MentorsSection")
);
const SliderTabs = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));

const NewProjectSection = dynamic(() =>
  import("../../Global/NewProjectSection/NewProjectSection")
);
const SeventhSection = dynamic(() =>
  import("../../Global/SeventhSection/SeventhSection")
);

const EighgtSection = dynamic(() => import("../EightSection/EightSection"));

const SecondPart = ({
  CertificateData,
  masterSyllabusMobile,
  projectSection,
  Organic,
  buttonHide,
  hideAds,
}) => {
  return (
    <>
      <GetHire />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        buttonHide={buttonHide}
        titleCourse="Masters in Computer Science: Data Science and AI"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters+in+CS+Data+Science+%26+AI.pdf"
      />
      {hideAds ? (
        ""
      ) : (
        <ToolsCovered
          deskImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Tools-Logo.png"
          mobImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Mobile-Tools-Covered.png"
        />
      )}
      <Certificate data={CertificateData} />
      <FeeSection
        Fee="₹ 3,25,000"
        FeeEmi="15,980/month."
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekday Batch"
        weekday="MON-WED-FRI"
        weekend="MON-FRI"
        WeekdayDate="AUG 19th"
        WeekendDate="SEP 13th"
        WeekendTime="08:00 PM - 10:00 PM"
        WeekdayTime="08:00 PM - 10:00 PM"
        CutFee="₹ 3,25,000/-"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        dataScience={true}
        // EMI POPUPDATA
        emiType="NO COST EMI"
        duration1="24 Months"
        totalAmount1="₹3,25,000"
        monthlyPayment1="₹15,980"
        greenDown1="Standard Intrest rate Applicable"
        duration2="18 Months"
        totalAmount2="₹3,25,000"
        monthlyPayment2="₹21,306"
      />
      <MentorsSection />
      {hideAds ? "" : <SliderTabs />}

      <NewProjectSection
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters+in+CS+Data+Science+%26+AI.pdf"
        projectSection={projectSection}
      />
      {/* <FAQNew FAQNewData={DataScienceMastersinCS[0].faq} /> */}
      <SeventhSection />
      {Organic ? "" : <EighgtSection />}
      {Organic ? <Footer /> : ""}
      <BottomBar masterdegree={true} />
      {hideAds ? "" : <WhatsappFloat chat360code1={true} />}
    </>
  );
};

export default SecondPart;
