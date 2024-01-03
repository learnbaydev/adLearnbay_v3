import PopupContent from "@/components/Global/PopupContent/PopupContent";
import React, { useState } from "react";
import VideoPopup from "../VideoPopup/VideoPopup";
import FirstContent from "./FirstContent";

function FirstSection({
  dataScience,
  softwareBtnHide,
  idss,
  interstedInHide,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  formotp,
  ADS,
  dataScienceCounselling,
  ibmOnly,
  cityParaCont,
  bannerbtnwhite,
  HideInterest,
}) {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);

  return (
    <>
      {ADS ? (
        <PopupContent
          popups={popups}
          setPopups={setPopups}
          heading="Apply for counselling"
          dataScience={true}
          interstedInHide={interstedInHide}
          upSkillingHide={true}
          ADS={ADS}
          formotp={formotp}
          HideInterest={HideInterest}
        />
      ) : (
        <PopupContent
          popups={popups}
          setPopups={setPopups}
          heading="Download Brochure"
          dataScience={true}
          downloadBrochure
          interstedInHide={interstedInHide}
          upSkillingHide={true}
          ADS={ADS}
          formotp={formotp}
          HideInterest={HideInterest}
        />
      )}
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />

      <FirstContent
        dataScience={dataScience}
        softwareBtnHide={softwareBtnHide}
        firstToparaImg={firstToparaImg}
        firstHeading={firstHeading}
        FirstRightImg={FirstRightImg}
        firstTopPara={firstTopPara}
        ibmOnly={ibmOnly}
        ADS={ADS}
        cityParaCont={cityParaCont}
        setPopups={setPopups}
        setVideo={setVideo}
        HideInterest={HideInterest}
      />
    </>
  );
}
export default React.memo(FirstSection);
