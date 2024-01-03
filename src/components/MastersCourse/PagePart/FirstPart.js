import Navbar from "@/components/Global/NavbarHome/Navbar";
import FirstSection from "@/components/MastersCourse/FirstSection/FirstSection";
import dynamic from "next/dynamic";
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
}) => {
  return (
    <>
      {" "}
      <Navbar dataScienceCounselling={true} dataScience={true} />
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
      <JobAbroad />
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
      <WhyLearnbay dataScienceCounselling={true} dataScience={true} />
    </>
  );
};

export default FirstPart;
