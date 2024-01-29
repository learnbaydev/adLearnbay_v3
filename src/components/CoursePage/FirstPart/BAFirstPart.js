import dynamic from "next/dynamic";
import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { BAThirdSectionData } from "@/Data/ThirdSectionData";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
import Navbar from "../../Global/NavbarHome/Navbar";
import CloudDevopsecond from "../Cloud&Devops/DevOpsSecondSection/DevOpsSecondSection";
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
  const BASecond = {
    title1: "Domain Specialization",
    image1:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-two.webp",
    points: [
      "Work in an industry like environment and gain practical hands-on experienc",
      "12 Real-World + 4 Capstone Projects",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/BA.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <TbBrandGoogleAnalytics/>,
        role: "Business Analyst   ",
        salary: " 27 LPA",
      },
      { icon: <LuBrainCircuit/>, role: "BI Engineer ", salary: "  20 LPA" },
      { icon: <FaReact />, role: "Data Scientist ", salary: " 17 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-768-min.webp",
    image4:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask+group+(10).webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "Unlimited Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    
    ],
    formbl : [
      { icon: <BsPeople />, text: "Mock Interview Sessions" },
    ],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };
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
       <CloudDevopsecond data={BASecond} />
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
