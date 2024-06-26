import PopupContent from "@/components/Global/PopupContent/PopupContent";
import { useState } from "react";
import FirstSectionContent from "./FirstSectionContent";

function FirstSection({
  dataScience,
  fullStack,
  dataScienceCounselling,
  titleCourse,
  brochureLink,
  interstedInHide,
}) {
  const [popups, setPopups] = useState(false);

  return (
    <>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        downloadBrochure
        dataScience={dataScience}
        titleCourse={titleCourse}
        brochureLink={brochureLink}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        heading="Download Syllabus"
      />

      <FirstSectionContent
        dataScienceCounselling={dataScienceCounselling}
        interstedInHide={interstedInHide}
        fullStack={fullStack}
        dataScience={dataScience}
        setPopups={setPopups}
      />
    </>
  );
}

export default FirstSection;
