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
const MentorsSection = dynamic(() =>
  import("@/components/newCoursePage/MentorsSection/MentorsSection")
);
const JobReadySection = dynamic(() =>
  import("@/components/newCoursePage/jobReadySection/jobReadySection")
);
const UpskillingSection = dynamic(() =>
  import("@/components/newCoursePage/upskillingSection/upskillingSection")
);
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));
const WhatsappFloat = dynamic(() =>
  import("@/components/Global/WhatappsFloat/WhatsappFloat")
);
const Certificate = dynamic(() => import("../Certificate/Certificate"));

const SliderTab = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));

const PlacementCall = dynamic(() =>
  import("../../Global/PlacementCall/PlacementCall")
);

const NewProjectSection = dynamic(() =>
  import("../../Global/NewProjectSection/NewProjectSection")
);

const FAQNew = dynamic(() => import("../FAQNew/FAQNew"));
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);

const ManagersSecondPartN = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  FAQNewData,
  sections,
}) => {
  return (
    <div>
      <ReviewSlider />
      <MentorsSection />
      <UpskillingSection />
      <ProjectSection interstedInHide={true} formotp={true} ADS={true} />
      <SyllabusSection
        sections={sections}
        interstedInHide={true}
        formotp={true}
        ADS={true}
      />
      <CertificateSection />
      <ToolsSection />
      <FeeSection
        // EMIPOPUP
        emiType="Live online classes"
        duration1="18 Months"
        totalAmount1="₹1,50,000"
        monthlyPayment1="₹11,472"
        greenDown1="Hybrid Classes"
        duration2="18 Months"
        totalAmount2="₹1,75,000"
        monthlyPayment2="₹9,833"
        dataScienceCounselling={true}
        iitGuwatiGen={true}
      />
      <JobReadySection />
      <SeventhSection />
      <EightSection interstedInHide={true} formotp={true} ADS={true} />
      <WhatsappFloat />
      <BottomBar interstedInHide={true} formotp={true} ADS={true} />
    </div>
  );
};

export default ManagersSecondPartN;
