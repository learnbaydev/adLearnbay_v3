import dynamic from "next/dynamic";
import React, { useState } from "react";
const PopupContent = dynamic(() =>
  import("../../Global/PopupContent/PopupContent")
);
import VideoPopup from "@/components/Global/VideoPopup/VideoPopup";
const FirstSectionContent = dynamic(() => import("./FirstSectionContent"));

const FirstSection = ({
  dataScience,
  radio,
  dataScienceCounselling,
  interstedInHide,
  idss,
  formotp,
  ADS,
  HideInterest,
  DomainInput,
}) => {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);
  return (
    <>
      <PopupContent
        dataScience={dataScience}
        radio={radio}
        dataScienceCounselling={dataScienceCounselling}
        popups={popups}
        setPopups={setPopups}
        interstedInHide={interstedInHide}
        heading="Apply For Counselling"
        formotp={formotp}
        ADS={ADS}
        HideInterest={HideInterest}
        DomainInput={DomainInput}
      />
       <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
      <FirstSectionContent    setPopups={setPopups}
        setVideo={setVideo}/>
    </>
  );
};
export default React.memo(FirstSection);
