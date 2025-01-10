import PopupContent from "@/components/Global/PopupContent/PopupContent";
import VideoPopup from "@/components/Global/VideoPopup/VideoPopup";
import React, { useState } from "react";
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
  titleCourse,
  brochureLink,
  dataScienceCounselling,
  ibmOnly,
  cityParaCont,
  thumbnailUrl,
  videoId,
  youtubeEmbedUrl,
  S3RightImage,
  animationHide,
  topHide,
  IBMGl,
  fresher,
  upSkillingHide,
  dataScienceGeneric,
  noImg,
  downloadBrochure,
  fullStack,
  DSWolf,
  backgorunimg,
  isSpecialPage,
  isGuwahati,
  backgroundImage,
  formotp,
  ADS,
  DSA,
  cyber,
  microsoftOnly,
  workingPro,
  demoSessionButton,
}) {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);

  return (
    <>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading={demoSessionButton ? "Book Demo Session" : "Download Syllabus"}
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        titleCourse={titleCourse}
        brochureLink={brochureLink}
        formotp={formotp}
        ADS={ADS}
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
        DSWolf={DSWolf}
        cityParaCont={cityParaCont}
        setPopups={setPopups}
        setVideo={setVideo}
        videoId={videoId}
        thumbnailUrl={thumbnailUrl}
        youtubeEmbedUrl={youtubeEmbedUrl}
        S3RightImage={S3RightImage}
        animationHide={animationHide}
        interstedInHide={interstedInHide}
        upSkillingHide={upSkillingHide}
        topHide={topHide}
        IBMGl={IBMGl}
        fresher={fresher}
        isSpecialPage={isSpecialPage}
        backgorunimg={backgorunimg}
        isGuwahati={isGuwahati}
        backgroundImage={backgroundImage}
        ibmOnly={ibmOnly}
        formotp={formotp}
        ADS={ADS}
        noImg={noImg}
        DSA={DSA}
        microsoftOnly={microsoftOnly}
        cyber={cyber}
        workingPro={workingPro}
        demoSessionButton={ demoSessionButton}
      />
    </>
  );
}
export default React.memo(FirstSection);
