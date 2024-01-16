import PopupContent from "@/components/Global/PopupContent/PopupContent";
import VideoPopup from "@/components/Global/VideoPopup/VideoPopup";
import React, { useState } from "react";
import FirstContent from "./DevopFirstContent";

function FirstSection({
  dataScience,
  softwareBtnHide,
  idss,
  interstedInHide,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  ADS,
  formotp,
  dataScienceCounselling,
  ibmOnly,
  cityParaCont,
  HideInterest,
}) {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);

  return (
    <>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        ADS={ADS}
        formotp={formotp}
        HideInterest={HideInterest}
      />
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
      <FirstContent
        dataScience={dataScience}
        softwareBtnHide={softwareBtnHide}
        firstToparaImg={firstToparaImg}
        firstHeading={firstHeading}
        FirstRightImg={FirstRightImg}
        firstTopPara={firstTopPara}
        dataScienceCounselling={dataScienceCounselling}
        ibmOnly={ibmOnly}
        cityParaCont={cityParaCont}
        setPopups={setPopups}
        setVideo={setVideo}
      />
    </>
  );
}
export default React.memo(FirstSection);
