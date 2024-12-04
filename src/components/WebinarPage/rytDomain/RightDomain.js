import styles from "../../../styles/DataScienceEvent.module.css";
import Form from "@/components/Global/Form/Form";
import WebinarCountdown from "../webinarCountdown/WebinarCountdown";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import Link from "next/link";

const RightDomain = ({
  dataScience,
  webinarDate,
  eventFullStack,
  event,
  fullstackEventD,
  Duration,
  register,
  likes,
  eventTime,
  eventDate,
  webinarLink,
}) => {
  //   const sectionRef = useRef(null);

  //   const handleMouseMove = (e) => {
  //     const section = sectionRef.current;
  //     const rect = section.getBoundingClientRect();
  //     const x = e.clientX - rect.left; // Mouse X relative to the section
  //     const y = e.clientY - rect.top; // Mouse Y relative to the section

  //     const xCenter = rect.width / 2; // Center X of the section
  //     const yCenter = rect.height / 2; // Center Y of the section

  //     const rotateX = ((y - yCenter) / yCenter) * 10; // Tilt based on Y movement
  //     const rotateY = ((x - xCenter) / xCenter) * -10; // Tilt based on X movement

  //     section.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  //   };

  //   const handleMouseLeave = () => {
  //     if (sectionRef.current) {
  //       sectionRef.current.style.transform = "rotateX(0) rotateY(0)";
  //     }
  //   };

  return (
    <>
      {fullstackEventD ? (
           <div className={styles.rightDomain}>
           <section className={styles.formDomain}>
             <div className={styles.headerDomain}>
               <h3>MASTERCLASS</h3>
             </div>
             <p>
               {Duration}
               <br />
               {register}
               <br />
               <span style={{ color: "#0072bc", fontWeight: "500" }}>
                 {likes}
               </span>
             </p>
             <div className={styles.iconsRegister}>
               <p className={styles.iconsRegisterp}>
                 <FaCalendarAlt
                   className={styles.IconDomain}
                   style={{ color: "#E24C32" }}
                 />
                 {eventDate}
               </p>
               <p className={styles.iconsRegisterp}>|</p>
               <p className={styles.iconsRegisterp}>
                 <FaClock
                   className={styles.IconDomain}
                   style={{ color: "#E24C32" }}
                 />
                 {eventTime}
               </p>
             </div>

             <div className={styles.centerBtn}>
              <Link href={webinarLink}>
               <button className="outLineBtn">Register NOW!</button>
               </Link>
             </div>
           </section>
         </div>
      ) : (
        <section
          className={styles.formDomain}
          //   ref={sectionRef}
          //   onMouseMove={handleMouseMove}
          //   onMouseLeave={handleMouseLeave}
        >
          <div className={styles.topForm}>
            {" "}
            <h2>Register NOW!</h2>{" "}
            <div>
              <WebinarCountdown webinarDate={webinarDate} />{" "}
            </div>
          </div>
          <Form
            dataScience={true}
            interstedInHide={true}
            upSkillingHide={true}
            event={event}
            eventFullStack={eventFullStack}
          />
        </section>
      )}
    </>
  );
};

export default RightDomain;
