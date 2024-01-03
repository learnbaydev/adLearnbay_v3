import dynamic from "next/dynamic";
import React from "react";
import CloudDevopsecond from "../Cloud&Devops/DevOpsSecondSection/DevOpsSecondSection";

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
  return (
    <>
      <CloudDevopsecond />

      <SecondNavbar
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
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
        interstedInHide={true}
        titleCourse="Advance Data Science & AI Program with Domain Specialization"
        brochureLink="https://learnbay-s3.s3.us-east-2.amazonaws.com/web/s3_main/cloud-computing/Cloud-and-syllab.pdf"
      />
    </>
  );
};

export default React.memo(FirstPart);
