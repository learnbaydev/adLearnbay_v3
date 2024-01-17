import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const FeeSection = dynamic(() => import("../FeeSection/FeeSection"));
const OfferPopup = dynamic(() => import("../../Global/OfferPopup/OfferPopup"));
const MentorsSection = dynamic(() =>
  import("../../Global/MentorsSection/MentorsSection")
);
const SliderTab = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));
const PlacementCall = dynamic(() =>
  import("../../Global/PlacementCall/PlacementCall")
);
const FAQNew = dynamic(() => import("../FAQNew/FAQNew"));

const FullStackSoftwareDevelopmentSecondPart = ({
  masterSyllabusMobile,
  FAQNewData,
}) => {
  const [popupData, setPopupData] = useState([]);
  // console.log(popupData);
  useEffect(() => {
    // console.log("inside UseEFFect");
    const fetchPopup = async () => {
      const data = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        // console.log(popData, "get data");
        if (popData == []) {
          setPopupData([]);
        }

        popData.map((data, i) => {
          // console.log(data);
          data.page.map((popupData, i) => {
            // console.log(popData);
            if (popupData === "Full Stack Developer course") {
              setPopupData(data);
              // console.log(popupData);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);
  return (
    <div>
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Software Development Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
        buttonHide={true}
      />
      {/* <Certificate data={FSSPDataScienceCourseData[0].Certificate} /> */}
      <FeeSection
        Fee="₹ 1,15,000"
        FeeEmi="₹ 7,538/month"
        weekendbatch="Weekday Evening (DSA BATCHES)"
        weekdaybatch="Weekday Evening (DSA BATCHES)"
        weekday="MON-WED-FRI"
        weekend="MON-WED-FRI"
        WeekendDate="JAN 26th"
        WeekdayDate="JAN 10th "
        WeekendTime="08:00PM - 10:00PM"
        WeekdayTime="08:00PM - 10:00PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Software Development Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
      />
      <MentorsSection />
      <SliderTab />
      <PlacementCall />
      <FAQNew FAQNewData={FAQNewData} />
      <SeventhSection organic={true} />
      <Footer />
      <BottomBar />
      <WhatsappFloat chat360code1={true} />
      {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
    </div>
  );
};

export default FullStackSoftwareDevelopmentSecondPart;
