import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./CrmForm.module.css";

const CrmForm = () => {
  const [formHeight, setFormHeight] = useState(500); // Default height
  const router = useRouter();

  // Update form height on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setFormHeight(620); // Adjust for mobile
      } else {
        setFormHeight(500); // Default height for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial render

    const script = document.createElement("script");
    script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      console.log("Script loaded successfully.");

      const crmForm = document.querySelector(".npf_wgts");

      if (crmForm) {
        console.log("CRM form widget found.");

        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "referrerPage";
        input.value = window.location.pathname;
        crmForm.appendChild(input);

        crmForm.addEventListener("submit", (e) => {
          e.preventDefault(); 

          const formSubmitPath = window.location.pathname;
          console.log("Form submitted from:", formSubmitPath);

          // Optionally send this data to your analytics or backend here

          console.log("Form submitted, redirecting to thank you page...");

          setTimeout(() => {
            router.push("/thank-you");
          }, 500);
        });
      } else {
        console.error("CRM form widget not found.");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("resize", handleResize);
    };
  }, [router]);

  return (
    <div className={styles.crmFormWrapper}>
      <div
        className="npf_wgts"
        data-height={formHeight} 
        data-w="10fa3854ed723ad6abac72856e751fc1"
      ></div>
    </div>
  );
};

export default React.memo(CrmForm);
