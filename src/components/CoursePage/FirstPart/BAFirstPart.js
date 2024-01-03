import dynamic from "next/dynamic";
import React from "react";

import { BAThirdSectionData } from "@/Data/ThirdSectionData";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
import Navbar from "../../Global/NavbarHome/Navbar";
const SecondNavbar = dynamic(() => import("../SecondNavbar/SecondNavbar"));
const WhoProgram = dynamic(() => import("../WhoProgram/ThirdSection"));
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("../../Global/Testimonial/Testimonial")
);
const WhoIsProgram = dynamic(() => import("../WhoIsProgram/WhoIsProgram"));
const WhyLearnbay = dynamic(() => import("../WhyLearnbay/WhyLearnbay"));
const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);
const BusinessAnalyticsFirstPart = ({ SecondSectionData, TestimonialData }) => {
  return (
    <>
      <Navbar
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />
      <FirstSection
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        ThirdTyped="Live Interactive Classes"
        titleCourse="Business Analytics Certification Program"
        cityParaCont="Elevate your tech career with our programs"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BA-min.webp"
        firstToparaImg=""
        firstHeading="Business Analytics Certification Program"
        firstTopPara="Get real-world experience with capstone projects"
        idss="CHut_wm-P2s"
      />
      <SecondSection SecondSectionData={SecondSectionData} />
      <SecondNavbar
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />
      <WhoProgram
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
        ThirdSectionData={BAThirdSectionData}
      />
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial
        redirectDS={true}
        heading=""
        Testimonial={TestimonialData}
        popupvnone={true}
      />
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 6 Month of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in Business analytics"
        forth="Developing skills in Business analytics for future opportunities"
      />
      <WhyLearnbay
        idss="ZPOTy4PEnNU"
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />
      <GetHire />
      <ContactConsellor
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Businesss Analytics Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
      />
    </>
  );
};

export default React.memo(BusinessAnalyticsFirstPart);
