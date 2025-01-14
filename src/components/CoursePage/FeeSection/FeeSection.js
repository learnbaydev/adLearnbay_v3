import PopupContent from "@/components/Global/PopupContent/PopupContent";
import { useState } from "react";
import FeeContent from "./FeeContent";
import PopupContenttest from "@/components/Global/PopupContent/PopupContenttest";

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
  HideThird,
  // EMIPOPUP
  emiPopupProps,
  emiType,
  duration1,
  totalAmount1,
  monthlyPayment1,
  greenDown1,
  duration2,
  totalAmount2,
  monthlyPayment2,
  greenDown2,
  OS,
  CutFee,
  crmTest,
}) => {
  const [popups, setPopups] = useState(false);

  return (
    <div id="Fees">
    {
      crmTest ? (  <PopupContenttest
        popups={popups}
        setPopups={setPopups}
        heading={OS ? ("Apply for Consultation") : ("Apply for counselling")}
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        ADS={ADS}
        formotp={formotp}
        HideInterest={HideInterest}
        OS={OS}
      />):(  <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading={OS ? ("Apply for Consultation") : ("Apply for counselling")}
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        ADS={ADS}
        formotp={formotp}
        HideInterest={HideInterest}
        OS={OS}
      />)
    }
      <FeeContent
        dataScience={dataScience}
        WeekdayDate={WeekdayDate}
        WeekendDate={WeekendDate}
        WeekdayTime={WeekdayTime}
        WeekendTime={WeekendTime}
        CutFee={CutFee}
        FeeEmi={FeeEmi}
        Fee={Fee}
        weekday={weekday}
        weekend={weekend}
        weekdaybatch={weekdaybatch}
        weekendbatch={weekendbatch}
        setPopups={setPopups}
        devopfee={devopfee}
        OS={OS}
        HideThird={HideThird}
        // EMIPOPUp
        emiPopupProps = {emiPopupProps} 
     emiType ={ emiType }
     duration1 ={duration1}
     totalAmount1 ={totalAmount1}
     monthlyPayment1 = {monthlyPayment1}
     greenDown1 ={ greenDown1}
     duration2 ={duration2}
     totalAmount2 ={totalAmount2}
     monthlyPayment2 ={monthlyPayment2}
     greenDown2 ={greenDown2}
      />
    </div>
  );
};

export default FeeSection;
