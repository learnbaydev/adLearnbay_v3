// formFunctions.js

const getEndPoint = (pathname, event, eventFullStack) => {
  let endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  if (event) {
    endPoint = "https://getform.io/f/a0a0fb5b-0cba-4b29-9d35-03c35d0e0d28";
  }

  if (eventFullStack) {
    endPoint = "https://getform.io/f/69076866-e1f7-4cf3-a7d2-12603819a5a4";
  }

  // if (
  //   pathname === "/cloud&devops/cloud-computing-and-devOps-certification-program" ||
  //   pathname === "/cloud&devops/s2-cloud-computing-and-devOps-certification-program"
  // ) {
  //   endPoint = "https://getform.io/f/785b3539-e7ce-497c-a975-0dc288c3286c";
  // }
  if (
    pathname === "/datascience/OS/s2-masters-in-data-science-and-ai" ||
    pathname === "/datascience/s2-data-science-ai-masters-program" ||
    pathname === "/OS" ||
    pathname ===
      "/datascience/OS/sp/s2-artificial-intelligence-machine-learning-generic" ||
    pathname === "/events/datascience" ||
    pathname === "/datascience/OS/s2-data-science-generic" ||
    pathname === "/datascience/s3-data-science-generic" ||
    pathname === "/datascience/s2-data-science-generic" ||
    pathname === "/datascience/s2-ai-ml-course-generic" ||
    pathname === "/datascience/s2-artificial-intelligence-generic" ||
    pathname ===
      "/datascience/s2-artificial-intelligence-job-assistance-generic" ||
    pathname ===
      "/datascience/s2-artificial-intelligence-job-assistance-generic" ||
       pathname === "/cloud&devops/s2-cloud-computing-and-devOps-certification-program" ||
       pathname === "/cloud&devops/cloud-computing-and-devOps-certification-program" ||
    pathname === "/datascience/s2-ai-ml-course-generic" ||
    pathname === "/datascience/OS/sp/s2-data-analytics-generic" ||
    pathname === "/datascience/bangalore/s2-artificial-intelligence" ||
    pathname === "/datascience/bangalore/s2-business-analytics" ||
    pathname === "/datascience/bangalore/s2-data-analytics" ||
    pathname === "/datascience/bangalore/s2-data-science" ||
    pathname === "/datascience/bangalore/s2-machine-learning" ||
    pathname === "/datascience/s2-business-analytics-generic" ||
    pathname === "/datascience/s2-data-analytics-generic" ||
    pathname === "/datascience/s2-data-science-generic" ||
    pathname === "/datascience/pune/s2-artificial-intelligence" ||
    pathname === "/datascience/pune/s2-business-analytics" ||
    pathname === "/datascience/pune/s2-data-analytics" ||
    pathname === "/datascience/pune/s2-data-science" ||
    pathname === "/datascience/pune/s2-machine-learning" ||
    pathname === "/datascience/s2-artificial-intelligence-generic" ||
    pathname ===
      "/datascience/s2-artificial-intelligence-job-assistance-generic" ||
      pathname === "/datascience/s2-executive-program-in-data-science-and-ai-by-iit-guwahati" ||
      pathname === "/cyber-security/s2-executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee"||
    pathname === "/datascience/s2-deep-learning-generic" ||
    pathname === "/datascience/s2-business-analytics-job-assistance-generic" ||
    pathname === "/datascience/s2-data-analytics-job-assistance-generic" ||
    pathname === "/datascience/s2-data-science-job-assistance-generic" ||
    pathname === "/datascience/s2-machine-learning-job-assistance-generic" ||
    pathname === "/datascience/s2-data-analytics-training-generic" ||
    pathname === "/datascience/s2-data-analytics-syllabus-generic" ||
    pathname === "/datascience/s2-artificial-intelligence-syllabus-generic" ||
    pathname === "/datascience/s2-artificial-intelligence-training-generic" ||
    pathname === "/datascience/s2-business-analytics-syllabus-generic" ||
    pathname === "/datascience/s2-business-analytics-training-generic" ||
    pathname === "/datascience/s2-machine-learning-syllabus-generic" ||
    pathname === "/datascience/s2-machine-learning-training-generic" ||
    pathname === "/datascience/s2-data-science-banking" ||
    pathname === "/datascience/s2-hr-analytics" ||
    pathname === "/datascience/s2-masters-in-data-science-and-analytics" ||
    pathname === "/datascience/s2-masters-in-ai-and-ml" ||
    pathname === "/datascience/s2-data-science-advance-generic" ||
    pathname === "/datascience/s2-masters-in-ai-and-ml" ||
    pathname === "/datascience/s2-data-science-master" ||
    pathname === "/ads/generic" ||
    pathname === "/datascience/hyderabad/s2-machine-learning" ||
    pathname === "/datascience/hyderabad/s2-artificial-intelligence" ||
    pathname === "/datascience/hyderabad/s2-data-science" ||
    pathname === "/datascience/hyderabad/s2-data-analytics" ||
    pathname === "/datascience/hyderabad/s2-business-analytics" ||
    pathname === "/datascience/chennai/s2-artificial-intelligence" ||
    pathname === "/datascience/chennai/s2-machine-learning" ||
    pathname === "/datascience/chennai/s2-data-science" ||
    pathname === "/datascience/chennai/s2-data-analytics" ||
    pathname === "/datascience/chennai/s2-business-analytics" ||
    pathname === "/fullstack/s2-dsa-and-system-design" ||
    pathname === "/scholarship-ads" ||
    pathname === "/walk-in-counselling" ||
    pathname === "/ads/generic" ||
    pathname === "/ads/s3-generic" ||
    pathname === "/datascience/s2-apply-for-counselling-data-science" ||
    pathname === "/" ||
    pathname === "/datascience/data-science-certification-courses" ||
    pathname === "/fullstack/fssd" ||
    pathname === "/datascience/advance-ai-ml-certification" ||
    pathname === "/datascience/data-science-ai-masters-program" ||
    pathname === "/datascience/business-analytics-certification-course" ||
    pathname === "/datascience/data-analytics-certification-course" ||
    pathname === "/apply-for-counselling-offer" ||
    pathname === "/datascience/OS/sp/s2-data-science-generic"
  ) {
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
  }

  if (pathname === "/generic") {
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
  }

  if (
    pathname === "/apply-for-counselling" ||
    pathname === "/organic/generic"
  ) {
    endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
  }

  if (pathname === "/referrals") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }

  if (
    pathname === "/learning-learnbay" ||
    pathname === "/learning-learnbay-select"
  ) {
    endPoint = "https://getform.io/f/fd68bf82-a911-435e-9719-7c134a89a731";
  }
  if (
    pathname === "/resume-builder" ||
    pathname === "/marketing/walk-in-counselling"
  ) {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }

  if (pathname === "/apply-for-counselling-email-marketing") {
    endPoint = "https://getform.io/f/94c74039-f505-4ebf-922e-b4728bd793e3";
  }
  if (pathname === "/google") {
    endPoint = "https://getform.io/f/1cfd5db8-ec05-4d26-b05f-6b73a81ebf89";
  }

  return endPoint;
  // ... (Logic to determine the endpoint based on the router)
};

const redirectionThankYou = (
  pathname,
  fullStack,
  event,
  eventFullStack,
  dataScience,
  dataScienceCounselling,
  redirection
) => {
  let routerPath = "";
  if (pathname === "/learning-learnbay") {
    routerPath = "/learning-learnbay-select";
  }
  if (pathname === "/learning-learnbay-select") {
    routerPath = "/Thank-you";
  }
  if (pathname === "resume-builder") {
    routerPath = "/Thank-you";
  }
  if (fullStack) {
    routerPath = "/Thank-you-fsd";
  }
  if (event) {
    routerPath = "/event/Thank-You-event";
  }
  if (eventFullStack) {
    routerPath = "/event/Thank-You-event";
  }
  if (dataScience) {
    routerPath = "/Thank-you";
  }

  if (pathname === "/datascience/OS/s2-data-science-generic") {
    routerPath = "/Thank-you";
  }

  
  if (
    pathname === "/walk-in-counselling" ||
    pathname === "/marketing/walk-in-counselling"
  ) {
    routerPath = "/Thank-you-directions";
  }

  if (
    pathname === "/datascience/OS/sp/s2-data-science-generic" ||
    pathname ===
      "/datascience/OS/sp/s2-artificial-intelligence-machine-learning-generic" ||
    pathname === "/datascience/OS/sp/s2-data-analytics-generic"
  ) {
    routerPath = "/Thank-you-sp";
  }

  if (dataScienceCounselling) {
    routerPath = "/Thank-you";
  }
  if (
    pathname === "/organic" ||
    pathname === "/referrals" ||
    pathname === "/marketing" ||
    pathname === "/offer" ||
    pathname === "/google" ||
    pathname === "/apply-for-counselling-data-science-marketing" ||
    pathname === "/apply-for-counselling-offer" ||
    pathname === "/datascience/s2-apply-for-counselling-data-science" ||
    pathname === "/scholarship"
  ) {
    routerPath = "/Thank-you";
  }

  if (pathname === "/marketing/data-science-ai-masters-program") {
    routerPath =
      "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters%2Bin%2BCS%2BData%2BScience%2B%2526%2BAI.pdf";
  }
  if (pathname === "/Thank-you") {
    setToggle(false);
    setAlertMSG("Form Submitted successfully");
  }
  return routerPath;
};

const getValidation = (radio, interstedInHide, query, CTC, PhoneHidden) => {
  console.log("radio trrue", radio);
  // Check if the phone number is hidden and missing
  if (
    (PhoneHidden === false || PhoneHidden === undefined) &&
    (query.phone === "" || query.phone === undefined)
  ) {
    console.log("1");
    return true;
  }

  // Check if both radio and interestedInHide are true and validate WorkExperience and platform fields
  if (radio === true && interstedInHide === true) {
    console.log("2");
    console.log("worrrr", query.WorkExperience);
    if (
      query.WorkExperience === "Select Work Experience *" ||
      query.WorkExperience === undefined ||
      (query.WorkExperience === "" &&
        query.platform === "Course Preference *") ||
      query.platform === ""
    ) {
      return true;
    }
    return false;
  }

  if (radio === true || query.name === "") {
    if (
      (query.name === "" && query.platform === "Course Preference *") ||
      query.platform === ""
    ) {
      return true;
    }
    return false;
  }

  // Check if interestedInHide is true and radio is false or undefined, then validate WorkExperience field
  if (interstedInHide === true && (radio === undefined || radio === false)) {
    console.log("3");
    if (
      query.WorkExperience === "Select Work Experience *" ||
      query.WorkExperience === undefined ||
      query.WorkExperience === ""
    ) {
      return true;
    }
    return false;
  }

  // Check if interestedInHide is false or undefined or radio is false or undefined, then validate CTC field
  if (
    interstedInHide === false ||
    interstedInHide === undefined ||
    radio === false ||
    radio === undefined
  ) {
    console.log("4");
    if (CTC) {
      if (query.CTC === "Interested In" || query.CTC === "") {
        return true;
      }
      return false;
    }
    return false;
  }

  // Default return false if none of the conditions are met
  return false;
};

const getFormFields = (
  radio,
  google,
  referrals,
  interstedInHide,
  promoCode,
  CTC,
  PhoneHidden,
  emailHidden
) => {
  return [
    // ... (previous form fields)
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter your Full Name *",
      showField: true,
    },
    {
      name: "email",
      label: "E-Mail",
      type: "email",
      required: emailHidden ? false : true,
      placeholder: "Enter your Email *",
      showField: emailHidden ? false : true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "phone",
      inputStyle: {
        borderRadius: "6px",
        border: "0",
      },
      containerStyle: {
        borderRadius: "6px",
        border: "1px solid #D3D3D3",
      },
      inputProps: {
        name: "phone",
        required: PhoneHidden ? false : true,
      },
      required: PhoneHidden ? false : true,
      placeholder: "Enter Phone Number",
      showField: PhoneHidden ? false : true,
    },
    {
      name: "WAdropdown",
      label: "WAdropdown",
      type: "select",
      options: [
        { value: "Select One", label: "Select One", hidden: true },
        { value: "Calls", label: "Calls" },
        { value: "WhatsApp", label: "WhatsApp" },
        { value: "Referral", label: "Referral" },
        // { value: "Walk-In", label: "Walk-In" },
        // { value: "Krishna Sir", label: "Krishna Sir" },
      ],
      required: google, // Conditionally required
      showField: google, // Conditionally render the field
    },
    {
      name: "WAdropdown",
      label: "WAdropdown",
      type: "select",
      options: [
        { value: "Referral", label: "Referral" },
        { value: "Krishna Sir", label: "Krishna Sir" },
      ],
      required: referrals, // Conditionally required
      showField: referrals, // Conditionally render the field
    },
    // {
    //   name: "interstedin",
    //   label: "Interested In",
    //   type: "select",
    //   options: [
    //     { value: "Interested In", label: "Interested In", hidden: true },
    //     {
    //       value: "Master Degree Program",
    //       label: "Master Degree Program",
    //     },
    //     {
    //       value: "Certification Program",
    //       label: "Certification Program",
    //     },
    //   ],
    //   required: interstedInHide, // Conditionally required
    //   showField: interstedInHide, // Conditionally render the field
    // },

    {
      name: "currentDesignation",
      label: "Job Title",
      type: "text",
      placeholder: "Current Designation *",
      required: interstedInHide, // Conditionally required
      showField: interstedInHide, // Conditionally render the field
    },

    {
      name: "WorkExperience",
      label: "Select Work Experience *",
      type: "select",
      options: [
        {
          value: "Select Work Experience *",
          label: "Select Work Experience *",
          hidden: true,
        },
        {
          value: "Freshers",
          label: "Freshers",
        },
        {
          value: "1-3 years",
          label: "1-3 years",
        },
        {
          value: "3-5 years",
          label: "3-5 years",
        },
        {
          value: "5-7 years",
          label: "5-7 years",
        },
        {
          value: "7+ years",
          label: "7+ years",
        },
      ],
      required: interstedInHide, // Conditionally required
      showField: interstedInHide, // Conditionally render the field
    },

    {
      name: "PromoCode",
      label: "Enter Promo Code",
      type: "text",
      placeholder: "Enter Promo Code",
      showField: promoCode,
    },

    {
      name: "CTC",
      label: "CTC",
      type: "select",
      options: [
        { value: "Select an option", label: "Select an option", hidden: true },
        {
          value: "1LPA - 4LPA",
          label: "1LPA - 4LPA",
        },
        {
          value: "4LPA - 8LPA",
          label: "4LPA - 8LPA",
        },
        {
          value: "8LPA - 12LPA",
          label: "8LPA - 12LPA",
        },
        {
          value: "12LPA - 16LPA",
          label: "12LPA - 16LPA",
        },
        {
          value: "16LPA+",
          label: "16LPA+",
        },
      ],
      showField: CTC, // Conditionally render the field
      required: true,
    },

    {
      name: "platform",
      label: "Course Preference *",
      type: "select",
      options: [
        {
          value: "Course Preference *",
          label: "Course Preference *",
          hidden: true,
        },
        {
          value: "Data Science & AI Courses",
          label: "Data Science & AI Courses",
        },
        {
          value: "Cloud Computing & DevOps ",
          label: "Cloud Computing & DevOps ",
        },
        {
          value: "Data Structure Algorithms & System Design",
          label: "Data Structure Algorithms & System Design",
        },
        {
          value: "Cyber Security & Ethical Hacking",
          label: "Cyber Security & Ethical Hacking",
        },
        
      ],
      required: radio, // Conditionally required
      showField: radio, // Conditionally render the field
    },
  ];
};

export { getEndPoint, getFormFields, getValidation, redirectionThankYou };
