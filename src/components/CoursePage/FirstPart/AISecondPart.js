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
        interstedInHide={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
        buttonHide={true}
      />
      <ToolsCovered />
      <Certificate data={CertificateData} />
      <FeeSection
        Fee="₹ 1,15,000"
        FeeEmi="₹7,539/ Month"
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekday Batch"
        weekday="MON - FRI"
        weekend="MON - FRI"
        WeekdayDate="August 16th"
        WeekendDate="August 2nd"
        WeekendTime="8:00 PM - 10:00 PM"
        WeekdayTime="8:00 AM - 10:00 AM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
        // <EMI POPUP
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹1,15,000"
        monthlyPayment1="₹7,539"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹1,15,000"
        monthlyPayment2="₹11,308"
      />

      <MentorsSection />
      <SliderTab />
      <PlacementCall />

      <NewProjectSection
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
        projectSection={projectSection}
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />

      <FAQNew FAQNewData={FAQNewData} />
      <SeventhSection organic={true} />
      <Footer />
      <WhatsappFloat chat360code1={true} />
      <BottomBar />
    </div>
  );
};

export default SecondPart;
