import Navbar from "@/components/Global/NavbarHome/Navbar";
import AdsNavbar from "@/components/Global/AdsNavbar/Navbar";
import FirstSection from "@/components/MastersCourse/FirstSection/FirstSection";
import dynamic from "next/dynamic";
import JobAbroad from "../JobAbroad/JobAbroad";
import MasterSecondSection from "../MasterSecondSection/MasterSecondSection";
import CloudDevopsecond from "@/components/CoursePage/Cloud&Devops/DevOpsSecondSection/DevOpsSecondSection";
import { FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("../../Global/Testimonial/Testimonial")
);
const WhyLearnbay = dynamic(() => import("../WhyLearnbay/WhyLearnbay"));

const FirstPart = ({
  TestimonialData,
  plainimg,
  iimgchmbl,
  videoPopupHide,
  Marketing,
  adsCont,
}) => {
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
        role: "Sr. Data Scientist: ",
        salary: " 27 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Sr. Data Analyst:",
        salary: " 15 LPA",
      },
      { icon: <BsPersonGear />, role: "ML Engineer: ", salary: "14 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-768-min.webp",
    image4:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask+group+(10).webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "Mock Interview Sessions" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    ],
    formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };
  return (
    <>
      {" "}
      {Marketing ? (
        <AdsNavbar dataScienceCounselling={true} dataScience={true} />
      ) : (
        <Navbar dataScienceCounselling={true} dataScience={true} />
      )}
      <FirstSection
        ThirdTyped="Live Interactive Classes"
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        cityParaCont="Elevate your tech career with our Master's programs"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters+in+CS+Data+Science+%26+AI.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/coursepageB.webp"
        firstToparaImg="with domain specialization"
        firstHeading="Advanced Data Science and AI Program"
      />
      <MasterSecondSection />
      <CloudDevopsecond data={DsSecond} />
      <JobAbroad />
      {adsCont ? (
        <>
          <TrainerSection plainimg={true} iimgchmbl={true} />
          <Testimonial
            redirectDS={true}
            videotest={true}
            heading=""
            Testimonial={TestimonialData}
          />
        </>
      ) : (
        <>
          <TrainerSection
            idss="eautK0odE7Q"
            plainimg={plainimg}
            iimgchmbl={iimgchmbl}
          />
          <Testimonial
            redirectDS={true}
            Testimonial={TestimonialData}
            videoPopupHide={videoPopupHide}
            popupvnone={true}
          />
        </>
      )}
      <WhyLearnbay dataScienceCounselling={true} dataScience={true} />
    </>
  );
};

export default FirstPart;
