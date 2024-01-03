import dynamic from "next/dynamic";
import React from "react";

import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
import Navbar from "../../Global/NavbarHome/Navbar";
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
      <SecondSection SecondSectionData={SecondSectionData} />
      <SecondNavbar
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
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
