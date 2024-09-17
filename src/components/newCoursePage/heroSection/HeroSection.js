import { useState } from "react";
import HeroSectionContent from "./HeroSectionContent";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import VideoPopup from "@/components/Global/VideoPopup/VideoPopup";

const HeroSection = ({
  brochureLink,
  brochurePdf,
  idss,
  videoId,
  interstedInHide,
  upSkillingHide,
  dataScience,
  dataScienceCounselling,
  radio,
  noIIt,
  ADS,
  formotp,
  spanTag,
  thumbnailurl,
}) => {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);
  return (
    <div>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        radio={radio}
        ADS={ADS}
        formotp={formotp}
      />
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
      <HeroSectionContent
        thumbnailurl={thumbnailurl}
        spanTag={spanTag}
        setPopups={setPopups}
        setVideo={setVideo}
        videoId={videoId}
        interstedInHide={interstedInHide}
        dataScience={dataScience}
        upSkillingHide={upSkillingHide}
        dataScienceCounselling={dataScienceCounselling}
        radio={radio}
        noIIt={noIIt}
        ADS={ADS}
        formotp={formotp}
      />
    </div>
  );
};

export default HeroSection;