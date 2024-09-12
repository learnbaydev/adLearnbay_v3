
import Head from "next/head";
import { parseJSONData } from "../../../Util/JsonConvertor";
import ManagersFirstPartN from "@/components/CoursePage/FirstPart/ManagersFirstPartN";
import ManagersSecondPartN from "@/components/CoursePage/FirstPart/ManagersSecondPartN";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>
          Data Science & AI Certification Program For Managers and Leaders
        </title>
        <meta
          name="description"
          content="Lead with data-driven excellence! Learnbay offers a Data Science & AI Certification Program for Managers and Leaders. Elevate your leadership strategic skills          "
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data science and ai course, Data Science and AI Program For Managers and Leaders course, data science and ai, ai and data science course, artificial intelligence and data science course, advanced certification in data science and ai"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://course.learnbay.co/datascience/s2-data-science-ai-managers-leaders-program"
        />
      </Head>
      <main>
        <ManagersFirstPartN />
        <ManagersSecondPartN sections={DataScienceCourseData.DataScienceCourseData[0].sections} />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/ManagersDataScienceCourse");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}