import PopupContent from "@/components/Global/PopupContent/PopupContent";
import { useState } from "react";
import FeeContent from "./FeeContent";

const FeeSection = ({
  Fee,
  dataScience,
  WeekdayDate,
  WeekendDate,
  WeekdayTime,
  WeekendTime,
  ADS,
  formotp,
  dataScienceCounselling,
  FeeEmi,
  weekday,
  weekend,
  weekdaybatch,
  weekendbatch,
  interstedInHide,
  devopfee,
  HideInterest,
}) => {
  const [popups, setPopups] = useState(false);

  return (
    <div id="Fees">
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        ADS={ADS}
        formotp={formotp}
        HideInterest={HideInterest}
      />
      <FeeContent
        dataScience={dataScience}
        WeekdayDate={WeekdayDate}
        WeekendDate={WeekendDate}
        WeekdayTime={WeekdayTime}
        WeekendTime={WeekendTime}
        FeeEmi={FeeEmi}
        weekday={weekday}
        weekend={weekend}
        weekdaybatch={weekdaybatch}
        weekendbatch={weekendbatch}
        setPopups={setPopups}
        devopfee={devopfee}
      />
    </div>
  );
};

export default FeeSection;
