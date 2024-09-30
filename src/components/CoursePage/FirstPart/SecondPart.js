import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));
const Certificate = dynamic(() =>
  import("@/components/CoursePage/Certificate/Certificate")
);

const FeeSection = dynamic(() =>
  import("@/components/CoursePage/FeeSection/FeeSection")
);
const MentorsSection = dynamic(() =>
  import("@/components/Global/MentorsSection/MentorsSection")
);
const SliderTab = dynamic(() =>
  import("@/components/Global/SliderTabs/SliderTabs")
);
const PlacementCall = dynamic(() =>
  import("@/components/Global/PlacementCall/PlacementCall")
);
const NewProjectSection = dynamic(() =>
  import("@/components/Global/NewProjectSection/NewProjectSection")
);

const FAQNew = dynamic(() => import("@/components/CoursePage/FAQNew/FAQNew"));

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
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
        buttonHide={true}
      />
      <ToolsCovered />
      <Certificate data={CertificateData} />
      <FeeSection
        Fee="₹ 1,25,000"
        FeeEmi="₹6,883/month"
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekend Batch"
        weekday="MON - THU"
        weekend="SAT - SUN"
        WeekdayDate="Oct 11th"
        WeekendDate="Oct 27th"
        WeekendTime="9:30 AM - 1 PM"
        WeekdayTime="8:00 PM - 10:30 PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="10 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program.pdf"
        // <EMI POPUP
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹1,05,000"
        monthlyPayment1="₹6,883"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹1,05,000"
        monthlyPayment2="₹10,325"
      />

      <MentorsSection />
      <SliderTab />
      <PlacementCall />

      <NewProjectSection
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
        projectSection={projectSection}
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
