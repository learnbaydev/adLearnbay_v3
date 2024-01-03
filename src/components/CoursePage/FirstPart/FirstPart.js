import dynamic from "next/dynamic";
import React from "react";

import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
import { ThirdSectionData } from "@/Data/ThirdSectionData";
const SecondNavbar = dynamic(() =>
  import("@/components/CoursePage/SecondNavbar/SecondNavbar")
);
const WhoProgram = dynamic(() =>
  import("@/components/CoursePage/WhoProgram/ThirdSection")
);
const TrainerSection = dynamic(() =>
  import("@/components/Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("@/components/Global/Testimonial/Testimonial")
);
const WhoIsProgram = dynamic(() => import("../WhoIsProgram/WhoIsProgram"));
const WhyLearnbay = dynamic(() => import("../WhyLearnbay/WhyLearnbay"));
const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);

const FirstPart = ({ SecondSectionData, TestimonialData }) => {
  return (
    <>
      <SecondSection SecondSectionData={SecondSectionData} />

      <SecondNavbar
        interstedInHide={true}
        dataScience={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
        titleCourse="Advance Data Science & AI Program with Domain Specialization"
      />
      <WhoProgram
        dataScience={true}
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
        second="Minimum 6 Months of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in data science"
        forth="Developing skills in data science for future opportunities"
      />
      <WhyLearnbay
        idss="ZPOTy4PEnNU"
        jobroles={true}
        dataScience={true}
        interstedInHide={true}
      />
      <GetHire />
      <ContactConsellor
        dataScience={true}
        interstedInHide={true}
        titleCourse="Advance Data Science & AI Program with Domain Specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
      />
    </>
  );
};

export default React.memo(FirstPart);
