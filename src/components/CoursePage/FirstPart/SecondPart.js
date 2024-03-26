import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));
const Certificate = dynamic(() =>
  import("@/components/CoursePage/Certificate/Certificate")
);
const OfferPopup = dynamic(() => import("../../Global/OfferPopup/OfferPopup"));
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
        FeeEmi="₹ 6,490/month"
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekday  Batch"
        weekday="MON - FRI"
        weekend="MON - FRI"
        WeekdayDate="APR 12th"
        WeekendDate="APR 19th"
        WeekdayTime="8.00PM - 10.00PM"
        WeekendTime="8.00AM - 10.00AM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program.pdf"
        // <EMI POPUP
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹99,000"
        monthlyPayment1="₹6,490"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹99,000"
        monthlyPayment2="₹9,735"
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
      <OfferPopup
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
      />
    </div>
  );
};

export default SecondPart;
