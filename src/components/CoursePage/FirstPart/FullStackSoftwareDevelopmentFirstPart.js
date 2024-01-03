import dynamic from "next/dynamic";
import React from "react";
import Navbar from "../../Global/NavbarHome/Navbar";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
const FullStackSecondSection = dynamic(() =>
  import("../FullStackSecondSection/FullStackSecondSection")
);
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const WhoIsProgram = dynamic(() =>
  import("../WhoIsProgram/WhoIsProgram")
);

const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);

const FullStackSoftwareDevelopmentFirstPart = ({ SecondSectionData }) => {
  return (
    <div>
      <Navbar
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />
      <FirstSection
        
        ThirdTyped="Live Interactive Classes"
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Software Development Certification Program"
        cityParaCont="Upskill and switch from service-based to product-based companies"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/fullhead.webp"
        firstToparaImg=""
        firstHeading="Software Development Certification Program"
        firstTopPara="Crack Interview in Top MNCs"
        idss="bfl64ANfSV0"
        softwareBtnHide={true}
      />
      <SecondSection SecondSectionData={SecondSectionData} />
      {/* <WhoProgram
          dataScience={true}
          leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
          ThirdSectionData={FSSPDataScienceCourseData[0].thirdSection}
        /> */}
      <TrainerSection idss="eautK0odE7Q" />
      <FullStackSecondSection />

      <WhoIsProgram
        first="Bachelor's degree with consistent good academics"
        second="1+ year(s) experience in IT domain"
        third="Students pursuing B.Tech and B.Sc. in computer science"
        forth="For individuals seeking software development skills"
      />
      <GetHire />
      <ContactConsellor
        titleCourse="Software Development Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />
    </div>
  );
};

export default React.memo(FullStackSoftwareDevelopmentFirstPart);
