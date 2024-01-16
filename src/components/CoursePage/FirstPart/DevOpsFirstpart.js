import dynamic from "next/dynamic";
import React from "react";
import CloudDevopsecond from "../Cloud&Devops/DevOpsSecondSection/DevOpsSecondSection";
import { FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { TbCloudComputing } from "react-icons/tb";
import { PiInfinity } from "react-icons/pi";
// import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
const SecondNavbar = dynamic(() => import("../SecondNavbar/SecondNavbar"));
const WhoProgram = dynamic(() => import("../WhoProgram/ThirdSection"));
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("../Cloud&Devops/CloudDevopstestimonial/Clouddevoptestimonials")
);
const WhoIsProgram = dynamic(() => import("../WhoIsProgram/WhoIsProgram"));
const WhyLearnbay = dynamic(() => import("../WhyLearnbay/WhyLearnbay"));
const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);
const CloudDevopstestimonials = dynamic(() =>
  import("../Cloud&Devops/CloudDevopstestimonial/Clouddevoptestimonials")
);

const FirstPart = ({ SecondSectionData, TestimonialData }) => {
  const clouddevops = {
    title1: "Project-Based Learning",
    image1:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-logo-sec.webp",
    points: [
      "Work in an industry like environment and gain practical hands-on experience",
      "4 Real-World Capstone Projects",
    ],
    image10:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-devops-min.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <TbCloudComputing />,
        role: "Cloud Engineer",
        salary: "12.5 LPA",
      },
      { icon: <PiInfinity />, role: "DevOps Engineer", salary: "7.6 LPA" },
      { icon: <BsPersonGear />, role: "Solutions Architect", salary: "27 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-gam-min.webp",
    image11:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-infi-min.webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "Unlimited Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    ],
    formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };
  return (
    <>
      <CloudDevopsecond data={clouddevops} showimg={true} shoimgtwo={true} />

      <SecondNavbar
        dataScienceCounselling={true}
        dataScience={true}
        // interstedInHide={true}
        brochureLink="https://learnbay-s3.s3.us-east-2.amazonaws.com/web/s3_main/cloud-computing/Cloud-and-syllab.pdf"
        titleCourse="Advance Data Science & AI Program with Domain Specialization"
      />
      {/* <WhoProgram
        dataScience={true}
        leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
        ThirdSectionData={ThirdSectionData}
      /> */}
      <TrainerSection idss="eautK0odE7Q" />
      <CloudDevopstestimonials />
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 6 Months of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in Cloud & DevOps"
        forth="Achieving higher career growth in Cloud & DevoOps        "
      />
      <WhyLearnbay idss="ZPOTy4PEnNU" targetjobs={true} />
      <GetHire />

      <ContactConsellor
        dataScienceCounselling={true}
        dataScience={true}
        // interstedInHide={true}
        titleCourse="Advance Data Science & AI Program with Domain Specialization"
        brochureLink="https://learnbay-s3.s3.us-east-2.amazonaws.com/web/s3_main/cloud-computing/Cloud-and-syllab.pdf"
      />
    </>
  );
};

export default React.memo(FirstPart);
