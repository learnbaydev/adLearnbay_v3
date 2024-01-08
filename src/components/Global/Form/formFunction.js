// formFunctions.js

const getEndPoint = (pathname, event) => {
  let endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  if (event) {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }

  if (pathname === "/organic") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
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
  if (pathname === "/resume-builder") {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }
  if (
    pathname ===
    "/cloud&devops/s3-cloud-computing-and-devOps-certification-program"
  ) {
    endPoint = "https://getform.io/f/785b3539-e7ce-497c-a975-0dc288c3286c";
  }

  if (
    pathname ===
    "/apply-for-counselling-email-marketing"
  ) {
    endPoint = "https://getform.io/f/94c74039-f505-4ebf-922e-b4728bd793e3";
  }
  return endPoint;
  // ... (Logic to determine the endpoint based on the router)
};

const redirectionThankYou = (
  pathname,
  fullStack,
  event,
  dataScience,
  dataScienceGeneric,
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
  if (dataScience) {
    routerPath = "/Thank-you";
  }
  if (dataScienceGeneric) {
    redirection();
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
    pathname === "/scholarship"
  ) {
    routerPath = "/Thank-you";
  }

  if (
    pathname === "/marketing/data-science-ai-masters-program"
  ) {
    routerPath = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters%2Bin%2BCS%2BData%2BScience%2B%2526%2BAI.pdf";
  }
  if (pathname === "/Thank-you") {
    setToggle(false);
    setAlertMSG("Form Submitted successfully");
  }
  return routerPath;
};

const getValidation = (radio, interstedInHide, query, CTC) => {
  if (query.phone === "" || query.phone === undefined) {
    console.log("1");
    return true;
  } else if (radio === true && interstedInHide === true) {
    console.log("2");
    if (query.interstedin === "Interested In") {
      return true;
    } else if (query.interstedin === "") {
      return true;
    } else if (query.platform === "Select an option") {
      return true;
    } else if (query.platform === "") {
      return true;
    } else {
      return false;
    }
  } else if (
    interstedInHide === true &&
    (radio === undefined || radio === false)
  ) {
    console.log("3");
    if (query.interstedin === "Interested In") {
      return true;
    } else if (query.interstedin === "") {
      return true;
    } else return false;
  } else if (
    interstedInHide === false ||
    interstedInHide === undefined ||
    radio === false ||
    radio === undefined
  ) {
    console.log("4");
    if (CTC) {
      if (query.CTC === "Interested In") {
        return true;
      } else if (query.CTC === "") {
        return true;
      } else return false;
    } else return false;
  } else if (
    interstedInHide === false ||
    interstedInHide === undefined ||
    radio === false ||
    radio === undefined
  ) {
    console.log("5");
    return false;
  }
};
const getFormFields = (
  radio,
  google,
  referrals,
  interstedInHide,
  promoCode,
  CTC
) => {
  return [
    // ... (previous form fields)
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter your Full Name",
      showField: true,
    },
    {
      name: "email",
      label: "E-Mail",
      type: "email",
      required: true,
      placeholder: "Enter your Email",
      showField: true,
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
        required: true,
      },
      required: true,
      placeholder: "Enter Phone Number",
      showField: true,
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
    {
      name: "interstedin",
      label: "Interested In",
      type: "select",
      options: [
        { value: "Interested In", label: "Interested In", hidden: true },
        {
          value: "Master Degree Program",
          label: "Master Degree Program",
        },
        {
          value: "Certification Program",
          label: "Certification Program",
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
      label: "Course Preference",
      type: "select",
      options: [
        { value: "Select an option", label: "Select an option", hidden: true },
        {
          value: "Data Science & AI Courses",
          label: "Data Science & AI Courses",
        },
        {
          value: "Cloud Computing & DevOps ",
          label: "Cloud Computing & DevOps ",
        },
        {
          value: "Master in CS: Data Science and AI",
          label: "Master in CS: Data Science and AI",
        },
      ],
      required: radio, // Conditionally required
      showField: radio, // Conditionally render the field
    },
  ];
};

export { getEndPoint, redirectionThankYou, getValidation, getFormFields };
