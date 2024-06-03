import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import dynamic from "next/dynamic";
import React from "react";
import { AiOutlineContainer } from "react-icons/ai";
import { BsDatabaseUp, BsDisplay, BsPeople } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
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
const DataAnlyticsFirstPart = ({
  SecondSectionData,
  TestimonialData,
  ibmOnly,
}) => {
  const DsSecond = {
    title1: "Project-Based Learning",
    image1: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group+773.webp",
    points: [
      "Work in an industry like environment and gain practical hands-on experience",
      "8 Real-World + 1 Capstone Projects",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask-group-_32_-min.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Sr. Data Analyst ",
        salary: " 15 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "BI Developer ",
        salary: " 10 LPA",
      },
      { icon: <BsDatabaseUp />, role: "Database Admin ", salary: "13 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-770-min.webp",
    image4:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask+group+(10).webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "8-10 Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    ],
    formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
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
        cityParaCont="Upskill yourself to the top within 6 months with curriculum designed by industry experts"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/dahead.webp"
        firstToparaImg=""
        firstHeading="Data Analytics Certification Program"
        firstTopPara="Curriculum designed by industry experts"
        idss="y_0IdhFKJKM"
        ibmOnly={ibmOnly}
      />
      <CloudDevopsecond data={DsSecond} />
      <SecondNavbar
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial
        redirectDS={true}
        heading="Hear it from our Alumni"
        Testimonial={TestimonialData}
        popupvnone={true}
      />
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 6 Month of IT/Non-IT work experience"
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
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />
    </>
  );
};

export default React.memo(DataAnlyticsFirstPart);
