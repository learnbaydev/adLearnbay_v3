import { parseJSONData } from "@/Util/JsonConvertor";
import FirstSection from "@/components/CoursePage/Cloud&Devops/Devopsfirstsection/DevopFirstSection";
import FirstPart from "@/components/CoursePage/FirstPart/DevOpsFirstpart";
import SecondPart from "@/components/CoursePage/FirstPart/DevopsSecondPart";
import Head from "next/head";
import Navbar from "../../components/Global/NavbarHome/Navbar";

function Blockchain({ CloudAndDevOpsCourseDataJson }) {
  const CloudAndDevOpsCourseData = parseJSONData(CloudAndDevOpsCourseDataJson);

  return (
    <>
      <Head>
        <title>Cloud Computing & DevOps Certification Program - Learnbay</title>
        <meta
          name="description"
          content="Elevate your career with an advanced Cloud Computing and DevOps certification program, and explore the latest techniques in AWS, Google Cloud Platform, and AZURE."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="cloud computing certification , aws training and certification, google cloud computing certification, cloud engineering certification, cloud computing online courses, amazon aws training, azure devops certification, microsoft azure cloud computing"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cloud&devops/cloud-computing-and-devOps-certification-program"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "Cloud Computing & DevOps Certification Program",
      "description": "Elevate your career with an advanced Cloud Computing and DevOps certification program, and explore the latest techniques in AWS, Google Cloud Platform, and AZURE.",
      "url": "https://www.learnbay.co/cloud&devops/cloud-computing-and-devOps-certification-program",
      "offers": {
       "@type": "offer",
        "price": "110000",
        "pricecurrency": "INR",
        "category": "Educational"
      },
       "provider": {
            "@type": "Organization",
            "name": "Learnbay",
            "Url": "https://www.learnbay.co/"
          },
      "coursePrerequisites": "There are no prerequisites for Cloud Computing and Devops Certification Program, as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for non-IT/Non-Programmers. However, basic knowledge of applied Mathematics/Statistics is a must.",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "P10W",
          "courseFee": {
            "@type": "PriceSpecification",
            "price": "₹ 1,10,000 + 18% GST",
            "priceCurrency": "INR"
          }
        }
      ]
    }`,
          }}
        />
      </Head>
      <main>
        <Navbar
          dataScienceCounselling={true}
          dataScience={true}
          // interstedInHide={true}
        />
        <FirstSection
          dataScienceCounselling={true}
          dataScience={true}
          // interstedInHide={true}
          ThirdTyped="Live Interactive Classes"
          titleCourse="Adavance Cloud Computing & DevOps Certification Program"
          cityParaCont="Elevate your career to a Cloud Solution Architect or DevOps Engineer"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-first-devops-min.webp"
          firstToparaImg=""
          firstHeading="Cloud Computing & DevOps Certification Program"
          firstTopPara="Crack Interview in top MNCs "
          idss="gaQYhVPCudQ"
        />
        <FirstPart
          SecondSectionData={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].secondSection
          }
        />
      </main>
      <main>
        <SecondPart
          masterSyllabusMobile={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0]
              .masterSyllabusMobile
          }
          devops={true}
          mbldevops={true}
          CertificateData={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].Certificate
          }
          devopfee={true}
          projectSection={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].projectSection
          }
          FAQNewData={CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/CloudAndDevOpsCourse");
  function getCloudAndDevOpsCourseDataJSON(CloudAndDevOpsCourseData) {
    return JSON.stringify(CloudAndDevOpsCourseData);
  }
  const CloudAndDevOpsCourseDataJson = getCloudAndDevOpsCourseDataJSON(data);
  return { props: { CloudAndDevOpsCourseDataJson } };
}
