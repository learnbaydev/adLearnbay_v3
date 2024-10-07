import FirstSection from "@/components/newCoursePage/heroSection/HeroSection";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import dynamic from "next/dynamic";
import React from "react";
import Practical from "@/components/newCoursePage/Practical/Practical";
const ProgramSection = dynamic(() =>
  import("@/components/newCoursePage/programSection/programSection")
);
const WhyChooseSection = dynamic(() =>
  import("@/components/newCoursePage/whyChoose/WhyChooseNew")
);
const PSummary = dynamic(() =>
  import("@/components/newCoursePage/PSummaryD/PSummaryAD")
);
const OutcomeSection = dynamic(() =>
  import("@/components/newCoursePage/outcomeSection/outcomeSection")
);
const DSFirstPartN = () => {
  return (
    <>
      <Navbar interstedInHide={true} ADS={true} dataScience={true} />
      <FirstSection
        thumbnailurl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/managers_YT.webp"
        spanTag="Project-based learning"
        spanIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ada_AI_icon.webp"
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true} ADS={true} dataScience={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
        title="Advanced Data Science & AI Program with"
        orgTitle=" Domain Specialization"
        descrption="Unlock the power of data with our comprehensive program, featuring hands-on learning, real-world projects, and domain specialization in fields like BFSI, healthcare, and retail."
        noIIt={true}
        applicationIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/blue_Bots.webp"
        ProgramIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/blue_Cal_bots.webp"
        trainingIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/build_bots.webp"
        CloseDes="Program Eligibility "
        CloseBotDate="Min 1 year"
        DurationBot="Program Duration"
        DurationBotDate="11 Months"
        TrainingBot="Training Format"
        BotWidth={70}
        BotHeight={56}
        backgroundGradient="radial-gradient(circle at 10% 10%, rgba(6, 59, 92, 0.9) 1%, transparent 30%), radial-gradient(circle at 90% 80%, rgba(254, 122, 54, 0.3) 1%, transparent 40%), #212121"
     
  showRightForm={true}
     />
      <PSummary />
      <Practical />
      <ProgramSection
        mid="Early to Mid"
        yearExp="1+ Years of Experience"
        PointOne="Data Analyst "
        pointTwo="Non-Techies"
        PointOneIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_Datas.webp"
        pointTwoIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_ytwos.webp"
        rightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ryt_programImg+(2).webp"
        interstedInHide={true} ADS={true} dataScience={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
      />
      <OutcomeSection />
      <WhyChooseSection />
    </>
  );
};

export default React.memo(DSFirstPartN);
