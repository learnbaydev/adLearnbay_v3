import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./EventHeader.module.css";

export const EventHeader = ({ deskimg, mobimg }) => {
  const [isMobile, setIsMobile] = useState(null); // Initially null to avoid flicker

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 481);
    };


    handleResize();


    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {

    return null;
  }

  return (
    <div>
      <section className={styles.wrapper}>
        {isMobile ? (
          <Image
            src={mobimg}
            alt="Learnbay"
            layout="responsive"
            width={375} // Adjust based on your mobile image dimensions
            height={400} // Adjust based on your mobile image dimensions
            priority={true}
          />
        ) : (
          <Image
            src={deskimg}
            alt="Learnbay"
            layout="responsive"
            width={1920} // Adjust based on your desktop image dimensions
            height={1080} // Adjust based on your desktop image dimensions
            priority={true}
          />
        )}
      </section>
    </div>
  );
};
