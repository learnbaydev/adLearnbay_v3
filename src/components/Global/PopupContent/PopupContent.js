import React from "react";
import dynamic from "next/dynamic";
import FormOtp from "../FormOtp/FormOtp";
const Popup = dynamic(() => import("../Popup/Popup"));
const Form = dynamic(() => import("../Form/Form"));

const PopupContent = ({
  dataScience,
  radio,
  dataScienceCounselling,
  popups,
  setPopups,
  heading,
  downloadBrochure,
  fullStack,
  upSkillingHide,
  titleCourse,
  brochureLink,
  dataScienceGeneric,
  interstedInHide,
  formotp,
  ADS,
  adPage,
  HideInterest,
  OS,
}) => {
  return (
    <Popup
      trigger={popups}
      setTrigger={setPopups}
      className="popupModal"
      popup={true}
    >
      <div className="leftPopup">
        <div
          className="whiteP"
          style={{ width: "340px", height: "400px" }}
        ></div>
      </div>
      <div className="RightPopup">
        <h5>{heading}</h5>
        {formotp ? (
            <FormOtp
            popup={true}
            downloadBrochure={downloadBrochure}
            upSkillingHide={true}
            radio={radio}
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            dataScienceGeneric={dataScienceGeneric}
            interstedInHide={interstedInHide}
            ADS={ADS}
          />
          ) : (
        <Form
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
          radio={radio}
          downloadBrochure={downloadBrochure}
          fullStack={fullStack}
          titleCourse={titleCourse}
          brochureLink={brochureLink}
          dataScienceGeneric={dataScienceGeneric}
          upSkillingHide={upSkillingHide}
          interstedInHide={interstedInHide}
          adPage={adPage}
          HideInterest={HideInterest}
          OS={OS}
        />
          )}
      </div>
    </Popup>
  );
};

export default React.memo(PopupContent);
