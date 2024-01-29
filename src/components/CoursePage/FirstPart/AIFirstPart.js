import dynamic from "next/dynamic";
import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { ThirdSectionData } from "@/Data/ThirdSectionData";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
import Navbar from "@/components/Global/NavbarHome/Navbar";
import { CloudAndDevOpsCourseData } from "@/Data/CloudAndDevOpsCourse";
import Gethire from "../Cloud&Devops/DevOpsSecondSection/DevOpsSecondSection";
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
const AIFirstPart = ({ SecondSectionData, TestimonialData }) => {
  const DsSecond = {
    title1: "Domain Specialization",
    image1:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-one.webp",
    points: [
      "Leverage your prior work experience for  relevant career transition",
      "Aim for higher salary hikes.",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Sr. ML Engineer ",
        salary: " 33 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Sr. AI Engineer ",
        salary: " 20.9 LPA",
      },
      { icon: <BsPersonGear />, role: "NLP Engineer ", salary: "13 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-768-min.webp",
    image4:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask+group+(10).webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "8-10 Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    
    ],
    formbl: [
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
      <CloudDevopsecond data={DsSecond} />
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
