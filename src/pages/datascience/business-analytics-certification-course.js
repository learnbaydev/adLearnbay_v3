import { parseJSONData } from "@/Util/JsonConvertor";
import BAFirstPart from "@/components/CoursePage/FirstPart/BAFirstPart";
import BASecondPart from "@/components/CoursePage/FirstPart/BASecondPart";
import Head from "next/head";
import { useEffect, useState } from "react";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  const [popupData, setPopupData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popupResponse = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (popupResponse.status === 200) {
        const { popData } = await popupResponse.json();
        const foundPopup = popData.find((data) =>
          data.page.includes("Adv Data Science and AI")
        );
        if (foundPopup) {
          setPopupData(foundPopup);
        }
      }
    };

    fetchData();
  }, []);

  // const [batchDateData, setBatchDateData] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Fetch Popup Data
  //     const popupResponse = await fetch("/api/Popup/popupGenerate", {
  //       method: "GET",
  //     });
  //     if (popupResponse.status === 200) {
  //       const { popData } = await popupResponse.json();
  //       const foundPopup = popData.find((data) =>
  //         data.page.includes("Adv Data Science and AI")
  //       );
  //       if (foundPopup) {
  //         setPopupData(foundPopup);
  //       }
  //     }

  //     // Fetch Batch Data
  //     const batchResponse = await fetch("/api/BatchDetails/getBatchDetails", {
  //       method: "POST",
  //       body: JSON.stringify("Data Science and AI"),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (batchResponse.status === 200) {
  //       const { batchDate } = await batchResponse.json();
  //       setBatchDateData(batchDate);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>Businesss Analytics Certification Program - Learnbay</title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Business Analytics Skills and Techniques by enrolling into the Learnbay's Business Analaytics certification Course.          "
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="business analytics course, business analytics certification course, business analytics certification, business analyst training, hr analytics course, business analyst course online, marketing analytics course, business analyst certification course, best business analyst course, best business analyst certification          "
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/business-analytics-certification-course"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "Course",
            "name": "Businesss Analytics Certification Program",
            "description": "Upskill yourself with cutting edge Business Analytics Skills and Techniques by enrolling into the Learnbay's Business Analaytics certification Course.",
            "url": "https://www.learnbay.co/datascience/business-analytics-certification-course",
            "offers": {
              "@type": "Offer",
              "price": 90000,
              "priceCurrency": "INR",
              "category": "Educational"
            },
             "provider": {
                  "@type": "Organization",
                  "name": "Learnbay",
                  "Url": "https://www.learnbay.co/"
                },
            "coursePrerequisites": "There are no prerequisites for this Business Analytics certification course as all modules are beginner-friendly and are taught from scratch. ",
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "courseMode": "Online",
                "courseWorkload": "P10W",
                "courseFee": {
                  "@type": "PriceSpecification",
                  "price": "₹ 90,000 + 18% GST",
                  "priceCurrency": "INR"
                }
              }
            ]



          }`,
          }}
        />
      </Head>
      <main>
        <BAFirstPart
          SecondSectionData={
            DataScienceCourseData.BADataScienceCourseData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.BADataScienceCourseData[0].testimonial
          }
        />
        <BASecondPart
          masterSyllabusMobile={
            DataScienceCourseData.BADataScienceCourseData[0]
              .masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.BADataScienceCourseData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.BADataScienceCourseData[0].projectSection
          }
          FAQNewData={DataScienceCourseData.BADataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/BusinessAnalyticsData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
