import dynamic from "next/dynamic";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import EightSection from "@/components/MastersCourse/EightSection/EightSection";
const ReviewSlider = dynamic(() =>
  import("@/components/newCoursePage/reviewSlider/reviewSlider")
);
import SyllabusSection from "@/components/newCoursePage/syllabusSection/SyllabusSection";
const ProjectSection = dynamic(() =>
  import("@/components/newCoursePage/projectSection/ProjectSection")
);
const FeeSection = dynamic(() =>
  import("@/components/newCoursePage/feeSection/feeSection")
);
import ToolsSection from "@/components/newCoursePage/toolsSection/ToolsSection";
import CertificateSection from "@/components/newCoursePage/certificateSection/CertificateSection";
import NewSevenSection from "@/components/Global/SeventhSectionNew/NewSevenSection";
const MentorsSection = dynamic(() =>
  import("@/components/newCoursePage/MentorsSection/MentorsSection")
);
const JobReadySection = dynamic(() =>
  import("@/components/newCoursePage/jobReadySection/jobReadySection")
);
const StructuredSection = dynamic(() =>
  import("@/components/newCoursePage/structuredSection/structuredSection")
);
const UpskillingSection = dynamic(() =>
  import("@/components/newCoursePage/upskillingSection/upskillingSection")
);
const WhatsappFloat = dynamic(() =>
  import("@/components/Global/WhatappsFloat/WhatsappFloat")
);
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const UpskillMbl = dynamic(() =>
  import("@/components/newCoursePage/upskillingSection/UpskillMbl")
);

const DSSecondPartN = ({
  sections, 
  certificateNew
}) => {
  return (
    <div>
      <ReviewSlider />
      <MentorsSection />
      <UpskillMbl/>
<UpskillingSection/>
      <ProjectSection interstedInHide={true} ADS={true} dataScience={true} />
      <SyllabusSection
        sections={sections}
        interstedInHide={true} ADS={true} dataScience={true}
      />
      <ToolsSection />
      <CertificateSection certificateNew={certificateNew}/>
      <FeeSection
        emiType="Live online classes"
        duration1="12 Months"
        totalAmount1="₹1,90,000"
        monthlyPayment1="₹14,094"
        greenDown1="Hybrid Classes"
        duration2="12 Months"
        totalAmount2="₹2,10,000"
        monthlyPayment2="₹12,455"
        dataScienceCounselling={true}
        iitGuwatiGen={true}
      />
      <JobReadySection />
      <StructuredSection />
      <NewSevenSection/>
      <EightSection interstedInHide={true} ADS={true} dataScience={true} />
      <WhatsappFloat />
      <BottomBar interstedInHide={true} ADS={true} dataScience={true} />
    </div>
  );
};

export default DSSecondPartN;
