import MobileTestimonial from "@/components/CoursePage/NewSections/MobileTestimonial/MobileTestimonial";
import Realstory from "@/components/CoursePage/NewSections/Realstory/Realstory";
import Navbar from "@/components/Global/AdsNavbar/Navbar";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import TrainerSection from "@/components/Global/TrainerSection/TrainerSection";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import GetHire from "@/components/Home/GetHire/GetHire";
import WhyLearnbay from "@/components/Home/WhyLearnbay/WhyLearnbay";
import EightSection from "@/components/MastersCourse/EightSection/EightSection";
import CareerHome from "@/components/OrganicGeneric/CareerHome/CareerHome";
import FirstSection from "@/components/OrganicGeneric/FirstSection/FirstSection";
import Media from "@/components/OrganicGeneric/Media/Media";
import dynamic from "next/dynamic";
import Head from "next/head";
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const Course = dynamic(() =>
  import("@/components/Home/Course/CourseNewDesign/Course")
);

export default function Home() {
  const data = [
    {
      id: 1,
      domain:
        "Learnbay achieves 300% surge; to expand workforce amidst impressive job market recognition",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/image+2-min.webp",
      SDesc: "12th JULY",
      url: "https://www.financialexpress.com/education-2/learnbay-goes-offline-with-brick-and-mortar-centres-ends-fy22-with-a-net-profit-of-rs-3-2-crore/2590829/",
    },
    {
      id: 2,
      domain: "How data science can disrupt the fintech industry?",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/dataquest.webp",
      SDesc: "13th January",
      url: "https://www.dqindia.com/how-data-science-can-disrupt-the-fintech-industry/",
    },
    {
      id: 3,
      domain:
        "Professional Upskilling Startup Learnbay Launches Three New Cutting-Edge Domain Courses",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/PM-Logo.webp",
      SDesc: "2and August",
      url: "https://thepeoplemanagement.com/the-future-of-hr-will-be-defined-by-a-blended-workforce-nisha-kumari-md-learnbay/",
    },
    {
      id: 4,
      domain:
        "Learnbay introduces domain specialisation programme for sustainable career transition",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/image+2-min.webp",
      SDesc: "1st August",
      url: "https://www.financialexpress.com/jobs-career/education-learnbay-introduces-domain-specialisation-programme-for-sustainable-career-transition-2613104/",
    },
    {
      id: 5,
      domain: "Metaverse in Education: A New Mainstay or a Passing Trend??",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/express+computer.webp",
      SDesc: "21st August",
      url: "https://www.expresscomputer.in/artificial-intelligence-ai/metaverse-in-education-a-new-mainstay-or-a-passing-trend/102446/",
    },
    {
      id: 6,
      domain:
        "Augmented Intelligence: How Humans and Machines Team Up in Future Data Science",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/CXO+today.webp",
      SDesc: "25th September",
      url: "https://cxotoday.com/specials/augmented-intelligence-how-humans-and-machines-team-up-in-future-data-science/",
    },

    {
      id: 7,
      domain: "The Rising Horizon: Data Science and AI in the EdTech 2.0 Era",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/mt-Logo.webp",
      SDesc: "25th May",
      url: "https://www.manufacturingtodayindia.com/sectors/smart-manufacturing-roles-for-data-professionals",
    },
    {
      id: 8,
      domain:
        "Learnbay Collaborates with Woolf to Launch Master's Degree in Computer Science & Data Science Specializations",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/business-standard-logo.webp",
      SDesc: "20th November",
      url: "https://www.business-standard.com/content/press-releases-ani/learnbay-collaborates-with-woolf-to-launch-master-s-degree-in-computer-science-data-science-specializations-123112000350_1.html",
    },
    // {
    //   id: 9,
    //   domain:
    //     "How healthcare professionals can transition to data science career        ",
    //   CLogo:
    //     "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/business-standard-logo.webp",
    //   SDesc: "20th April",
    //   url: "https://www.expresshealthcare.in/news/how-healthcare-professionals-can-transition-to-data-science-career/438946/",
    // },
    // {
    //   id: 10,
    //   domain:
    //     "Krishna Kumar, Founder and CEO, Learnbay, Providing Comprehensive Data Science, AI,& ML Education With Career Advancement Support ",
    //   CLogo:
    //     "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/business-standard-logo.webp",
    //   SDesc: "7th Feb",
    //   url: "https://startuptalky.com/krishna-kumar-learnbay-edtech-industry-recap22/",
    // },
  ];
  return (
    <>
      <Head>
        <title>Online IT Certification Courses and Professional Programs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
        />
        <link rel="canonical" href="https://www.learnbay.co/" />
        <meta
          name="keywords"
          content="data science course, data science training , data science institute in India, best data science institute, data scientist course ,data scientist certification, data science training institute , advanced data science course , data science course with Placement Assistance, data science course with IBM certification"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <Navbar
        // formotp={true}
        HideInterest={true}
        dataScience={true}
        ADS={true}
        interstedInHide={true}
        // DomainInput={true}
      />

      <FirstSection
        first="Tools"
        second="Tips"
        third="Technology"
        HideInterest={true}
        dataScience={true}
        organicADS={true}
        interstedInHide={true}
        // formotp={true}
        ADS={true}
        // DomainInput={true}
      />
      <Course
        dataScience={true}
        HideInterest={true}
        organicADS={true}
        newDesign={true}
        dataScienceGeneric={true}
        interstedInHide={true}
        // formotp={true}
        ADS={true}
        // DomainInput={true}
      />
      <WhyLearnbay />
      <CareerHome
        HideInterest={true}
        dataScience={true}
        organicADS={true}
        interstedInHide={true}
        // formotp={true}
        ADS={true}
        // DomainInput={true}
      />
      <div className="realstory">
        <Realstory />
      </div>

      <TrainerSection plainimg={true} iimgchmbl={true} />
      <ContactUs
        HideInterest={true}
        dataScience={true}
        organicADS={true}
        interstedInHide={true}
        // formotp={true}
        ADS={true}
        // DomainInput={true}
      />

      <GetHire />

      <MobileTestimonial
        dataScience={true}
        // formotp={true}
        ADS={true}
        HideInterest={true}
        interstedInHide={true}
        // DomainInput={true}
      />
      <Media projectData={data} />
      {/* <ContactUs popup={true} dataScienceGeneric={true} HideInterest={true} /> */}
      <SeventhSection />
      <EightSection
        HideInterest={true}
        interstedInHide={true}
        dataScience={true}
        // formotp={true}
        ADS={true}
        // DomainInput={true}
      />
      <BottomBar
        // formotp={true}
        HideInterest={true}
        interstedInHide={true}
        dataScience={true}
        ADS={true}
        // DomainInput={true}
      />
    </>
  );
}
