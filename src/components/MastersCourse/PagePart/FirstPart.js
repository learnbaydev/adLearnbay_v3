import CloudDevopsecond from "@/components/CoursePage/Cloud&Devops/DevOpsSecondSection/DevOpsSecondSection";
import AdsNavbar from "@/components/Global/AdsNavbar/Navbar";
import Navbar from "@/components/Global/NavbarHome/Navbar";
import FirstSection from "@/components/MastersCourse/FirstSection/FirstSection";
import dynamic from "next/dynamic";
import { AiOutlineContainer } from "react-icons/ai";
import { BsDisplay, BsPeople, BsPersonGear } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import JobAbroad from "../JobAbroad/JobAbroad";
import MasterSecondSection from "../MasterSecondSection/MasterSecondSection";
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
  const seconddata = [
    {
      boldText: "60+",
      normalText: "Countries Recognition",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp",
    },
    {
      CboldText: "90+",
      normalText: "Transferrable ECTS Credits",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review2.webp",
    },
    { boldText: "35K+", normalText: "Trusted Learners" },
  ];
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
      { icon: <BsDisplay />, text: "Unlimited Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    ],
    formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };
  const JobData = {
    title: "Master’s Degree that gets you Job Abroad   ",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Earn a Degree Without Pausing Your Career        ",
        description:
          "Flexible online degrees from LearnBay's ExcelVarsity for working pros.       ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Skill Up for Swift Promotions       ",
        description:
          "Curriculum designed for rapid career advancement and leadership roles.       ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "Step into High-Value Research Careers        ",
        description:
          "Degree for prestigious research jobs and institutional collaborations.        ",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job1.webp",
      width: 500,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  return (
    <>
      {" "}
      {Marketing ? (
        <AdsNavbar
          dataScienceCounselling={true}
          dataScience={true}
          ADS={true}
        />
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
      <MasterSecondSection data={seconddata} />
      <CloudDevopsecond data={DsSecond} />
      <JobAbroad
          data={JobData}
          dataScienceCounselling={true} dataScience={true}
        />
      {adsCont ? (
        <>
          <TrainerSection plainimg={true} iimgchmbl={true} />
          <Testimonial
            redirectDS={true}
            videotest={true}
            heading="Hear it from our Alumni"
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
