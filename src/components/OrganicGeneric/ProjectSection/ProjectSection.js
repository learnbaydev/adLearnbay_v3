import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./ProjectSection.module.css";
const ProjectContent = dynamic(() => import("./ProjectContent"));
const PopupContent = dynamic(() =>
  import("../../Global/PopupContent/PopupContent")
);

const Form = dynamic(() => import("../../Global/Form/Form"));
const Popup = dynamic(() => import("../../Global/Popup/Popup"));
const ProjectSection = ({
  ids,
  dataScience,
  radio,
  fullStack,
  dataScienceCounselling,
  adPage,
  dataScienceGeneric,
  interstedInHide,
  formotp,
  nolinkO,
  linkomb,
  ADS,
}) => {
  const [popups, setPopups] = useState(false);

  return (
    <section className={styles.container} id="ProjectLab">
      <PopupContent
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
        radio={radio}
        interstedInHide={interstedInHide}
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
      />
      <ProjectContent
        ids={ids}
        nolinkO={nolinkO}
        linkomb={linkomb}
        popup={true}
        setTrigger={setPopups}
        radio={radio}
        fullStack={fullStack}
        dataScience={dataScience}
        dataScienceGeneric={dataScienceGeneric}
        dataScienceCounselling={dataScienceCounselling}
        upSkillingHide={true}
        interstedInHide={interstedInHide}
        adPage={adPage}
        formotp={formotp}
        ADS={ADS}
      />
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
        </div>
      </Popup>
    </section>
  );
};

export default ProjectSection;
