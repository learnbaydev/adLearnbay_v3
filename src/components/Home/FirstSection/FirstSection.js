import dynamic from "next/dynamic";
import React, { useState } from "react";
const PopupContent = dynamic(() =>
  import("../../Global/PopupContent/PopupContent")
);
const FirstSectionContent = dynamic(() => import("./FirstSectionContent"));

const FirstSection = ({
  dataScience,
  radio,
  dataScienceCounselling,
  interstedInHide,
  Osaplybtn,
  OS,
  ADS,
}) => {
  const [popups, setPopups] = useState(false);
  return (
    <>
      <PopupContent
        dataScience={dataScience}
        radio={radio}
        dataScienceCounselling={dataScienceCounselling}
        popups={popups}
        setPopups={setPopups}
        interstedInHide={interstedInHide}
        OS={OS}
        ADS={ADS}
        heading={OS ? "Apply for Consultation" : "Apply for counselling"}
      />
      <FirstSectionContent
        setPopups={setPopups}
        Osaplybtn={Osaplybtn}
        OS={OS}
        ADS={ADS}
      />
    </>
  );
};
export default React.memo(FirstSection);
