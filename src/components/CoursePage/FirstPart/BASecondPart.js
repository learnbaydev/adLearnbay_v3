import BottomBar from "@/components/Global/BottomBar/BottomBar";
import dynamic from "next/dynamic";
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));
const WhatsappFloat = dynamic(() =>
  import("@/components/Global/WhatappsFloat/WhatsappFloat")
);
const Certificate = dynamic(() => import("../Certificate/Certificate"));

const FeeSection = dynamic(() => import("../FeeSection/FeeSection"));

const MentorsSection = dynamic(() =>
  import("../../Global/MentorsSection/MentorsSection")
);

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

const SecondPart = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  FAQNewData,
}) => {
  return (
    <div>
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
        buttonHide={true}
        interstedInHide={true}
      />
      <ToolsCovered />
      <Certificate data={CertificateData} />
      <FeeSection
        Fee="₹ 90,000"
        FeeEmi="₹ 5,900/month"
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekend Batch"
        weekday="MON-FRI"
        weekend="SAT-SUN"
        WeekdayDate="APR 12th"
        WeekendDate="MAR 10th"
        WeekendTime="09:30 AM - 1:00 PM"
        WeekdayTime="8.00 PM - 10.00 PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        interstedInHide={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
        dataScience={true}
        // EMI POPUPDATA
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹90,000"
        monthlyPayment1="₹5,900"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹90,000"
        monthlyPayment2="₹8,850"
      />
      <MentorsSection />
      <SliderTab />
      <PlacementCall />
      <NewProjectSection
        dataScience={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
        projectSection={projectSection}
        interstedInHide={true}
      />
      <FAQNew FAQNewData={FAQNewData} />
      <SeventhSection organic={true} />
      <Footer />
      <BottomBar />
      <WhatsappFloat chat360code1={true} />
    </div>
  );
};

export default SecondPart;
