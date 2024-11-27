
import styles from "../../../styles/DataScienceEvent.module.css";
import Form from "@/components/Global/Form/Form";
import WebinarCountdown from "../webinarCountdown/WebinarCountdown";

const RightDomain = ({ dataScience, webinarDate }) => {
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
    <section
      className={styles.formDomain}
    //   ref={sectionRef}
    //   onMouseMove={handleMouseMove}
    //   onMouseLeave={handleMouseLeave}
    >
<div className={styles.topForm}>      <h2>Register NOW!</h2> <div><WebinarCountdown webinarDate={webinarDate}/> </div></div>
      <Form
        dataScience={true}
        interstedInHide={true}
        upSkillingHide={true}
        event={true}
      />
    </section>
  );
};

export default RightDomain;
