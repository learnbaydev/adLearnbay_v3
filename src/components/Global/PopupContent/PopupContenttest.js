import React from "react";
import dynamic from "next/dynamic";

const Popup = dynamic(() => import("../Popup/PopupTest")); // Popup component
const CrmForm = dynamic(() => import("../Form/CrmForm/CrmForm")); // CRM Form component

const PopupContentCrm = ({ popups, setPopups, heading }) => {
  return (
    <Popup
      trigger={popups}
      setTrigger={setPopups}
      className="popupModal"
      popup={true}
    >
      <div className="leftPopup">
        <div className="whiteP"></div>
      </div>
      <div className="RightPopup">
        <h5>{heading}</h5>
        <CrmForm /> {/* Only show the CRM form */}
      </div>
    </Popup>
  );
};

export default React.memo(PopupContentCrm);
