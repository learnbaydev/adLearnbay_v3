import Image from "next/image";
import React from "react";
import FormOtp from "../Global/Form/Form";
import Styles from "./scholarship.module.css";

function Scholarship({ Offer, reactEmail, reactPhone }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.image}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/popup-left.webp"
          width={400}
          height={470}
          alt="Scholarship"
        />
      </div>
      <div className={Styles.FormDiv}>
        {reactPhone ? (
          <>
          <h4>Apply for Scholarship</h4>
          <FormOtp dataScience={true} />
        </>
        ) : (
          <>
            {reactEmail ? (
              <>
                <h4>Apply for Scholarship</h4>
                <FormOtp dataScience={true} PhoneHidden={true} />
              </>
            ) : (
              <>
                {Offer ? (
                  <>
                    <h4>Apply for Offer</h4>
                    <FormOtp
                      upSkillingHide={true}
                      s2dataScience={true}
                      HideInterest={true}
                      promoCode={true}
                    />
                  </>
                ) : (
                  <>
                    <h4>Apply for Scholarship</h4>
                    <FormOtp
                      upSkillingHide={true}
                      CTC={true}
                      s2dataScience={true}
                      HideInterest={true}
                    />
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Scholarship;
