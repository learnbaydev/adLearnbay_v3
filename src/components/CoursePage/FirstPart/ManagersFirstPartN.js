import FirstSection from "@/components/newCoursePage/heroSection/HeroSection";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import dynamic from "next/dynamic";
import React from "react";
const ProgramSection = dynamic(() =>
  import("@/components/newCoursePage/programSection/programSection")
);
const WhyChooseSection = dynamic(() =>
  import("@/components/newCoursePage/whyChooseSection/whyChooseSection")
);
const PSummary = dynamic(() =>
  import("@/components/newCoursePage/pSummary/ProgramSummary")
);
const OutcomeSection = dynamic(() =>
  import("@/components/newCoursePage/outcomeSection/outcomeSection")
);
const ManagersFirstPartN = () => {
  return (
    <>
      <Navbar interstedInHide={true} formotp={true} ADS={true} />
      <FirstSection
        spanTag="Curriculum Inclusive of Gen-AI"
        interstedInHide={true}
        formotp={true}
        ADS={true}
        dataScienceCounselling={true}
        dataScience={true}
        isSpecialPage={true}
        isGuwahati={true}
        noIIt={true}
        FirstTyped="Guaranteed Interview Calls"
        SecondTyped="Capstone Project Certificate"
        ThirdTyped="Live Interactive Classes"
        titleCourse="AI & ML Program for tech professionals"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
        idss="qxwIns6z2Bc"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ai-ml-main.webp"
        firstToparaImg="for Tech Professionals"
        firstHeading="Advance AI & ML Certification Program "
        firstTopPara="Expand beyond technology"
      />
      <PSummary />
      <ProgramSection interstedInHide={true}
        formotp={true}
        ADS={true}
        dataScienceCounselling={true}
        dataScience={true} />
      <OutcomeSection />
      <WhyChooseSection />
    </>
  );
};

export default React.memo(ManagersFirstPartN);
