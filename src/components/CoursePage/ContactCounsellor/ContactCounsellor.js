import React from "react";
import styles from "../ContactCounsellor/ContactCounsellor.module.css";
import { MdOutlineCall, MdOutlineWhatsapp } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import Popup from "@/components/Global/Popup/Popup";
import Form from "@/components/Global/Form/Form";
import FormOtp from "@/components/Global/FormOtp/FormOtp";
import Link from "next/link";

const ContactCounsellor = ({
  dataScience,
  dataScienceCounselling,
  interstedInHide,
  titleCourse,
  brochureLink,
  noWt,
  formotp,
  ADS,
  demoSessionButton
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+917795687988"; // Replace with the desired WhatsApp phone number
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };
  const handleCall = () => {
    window.location.href = "tel:+916364939404";
  };
  // const sendEmailViaApi = () => {
  //   // Replace with the API endpoint that triggers the email
  //   const apiEndpoint = "https://example.com/send-email";

  //   fetch(apiEndpoint, {
  //     method: "POST", // Adjust the HTTP method as needed
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // You can send any necessary data in the request body
  //     body: JSON.stringify({
  //       to: "contacts@learnbay.co",
  //       subject: "Your email subject",
  //       message: "Your email message",
  //     }),
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         // If the API responds with a success status, open the email client
  //         window.location.href = "mailto:contacts@learnbay.co";
  //       } else {
  //         // Handle API error here
  //         console.error("API error:", response.statusText);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Fetch error:", error);
  //     });
  // };

  const sendEmail = () => {
    const recipient = "contacts@learnbay.co";
    const subject = "";
    const body = "";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    // Open Gmail link in a new tab or window
    window.open(gmailLink, "_blank");
  };
  return (
    <div className={styles.consmain}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
        // radio={radio}
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            // style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
{demoSessionButton ? (          <h5>Book Demo Session</h5>):(          <h5>Apply For Counselling</h5>)}
          {formotp ? (
            <FormOtp
              titleCourse={titleCourse}
              brochureLink={brochureLink}
              dataScience={dataScience}
              interstedInHide={interstedInHide}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
              formotp={formotp}
              ADS={ADS}
              // radio={radio}
            />
          ) : (
            <Form
              titleCourse={titleCourse}
              brochureLink={brochureLink}
              dataScience={dataScience}
              interstedInHide={interstedInHide}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
              formotp={formotp}
              ADS={ADS}
              // radio={radio}
            />
          )}
        </div>
      </Popup>
      <div>
        <h4>Can’t decide which program to opt for?</h4>
        <p className={styles.botText}>
          Don’t worry, our expert counsellor is there to guide you,{" "}
          <b> make the right career choice</b>
        </p>

        {noWt ? (
          <>
            <div className={styles.onlycall}>
              <button onClick={handleCall} className={styles.inf}>
                <MdOutlineCall className={styles.conicon} />
                (+91) 6364939404
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.conbtn}>
              <button onClick={openWhatsApp} className={styles.inf}>
                <MdOutlineWhatsapp className={styles.conicon} />
                (+91) 77956 87988
              </button>
              <button onClick={sendEmail} className={styles.inf}>
                <AiOutlineMail className={styles.conicon} />{" "}
                contacts@learnbay.co
              </button>
            </div>
          </>
        )}


        {

demoSessionButton ? (<Link href="https://docs.google.com/forms/d/1055DeqdBGx5dljVVWISdWf_CA59cPLeoQ8dt1hwhRKY/viewform"><div className={styles.consbtn1}>
            {
   demoSessionButton ? (<button className={styles.consbtn} onClick={null}>
     Book Demo Session
     </button>):(<button className={styles.consbtn} onClick={null}>
   Apply for counselling
   </button>)
   
            }
           </div></Link>):(<div className={styles.consbtn1} onClick={popupShow}>
            {
   demoSessionButton ? (<button className={styles.consbtn} onClick={null}>
     Book Demo Session
     </button>):(<button className={styles.consbtn} onClick={null}>
   Apply for counselling
   </button>)
   
            }
           </div>)
        }
      </div>
      <div className={styles.conimg}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/masterPage/contact-counseller.webp"
          width={300}
          height={200}
          alt="contact-counseller"
        />
      </div>
    </div>
  );
};

export default ContactCounsellor;
