import dynamic from "next/dynamic";
import React from "react";

import { ThirdSectionData } from "@/Data/ThirdSectionData";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
import Navbar from "@/components/Global/NavbarHome/Navbar";
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
const AIFirstPart = ({ SecondSectionData, TestimonialData }) => {
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
      <SecondSection SecondSectionData={SecondSectionData} />
      <SecondNavbar
        titleCourse="AI & ML Program for tech professionals"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />
      <WhoProgram
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
        ThirdSectionData={ThirdSectionData}
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
        second="Minimum 1 year of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in data analytics"
        forth="Developing skills in data analytics for future opportunities"
      />
      <WhyLearnbay
        idss="ZPOTy4PEnNU"
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />
      <GetHire />
      <ContactConsellor
        titleCourse="AI & ML Program for tech professionals"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />
    </>
  );
};

export default React.memo(AIFirstPart);
