// formFunctions.js

const getEndPoint = (pathname, ADS) => {
  let endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  if (ADS) {
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
  }
  return endPoint;
};

const redirectionThankYou = (pathname) => {
  let routerPath = "/Thank-you";
  return routerPath;
};

const getValidation = (interstedin, query, HideInterest) => {
  if (query.phone === "" || query.phone === undefined) {
    return true;
  }
  if (!HideInterest) {
    if (interstedin === "" || interstedin === "Select an option") {
      return true;
    }
  } else if (query.Domain === "") {
    return true;
  } else if (query.Domain === "Select Domain") {
    return true;
  }
};

const getFormFields = (HideInterest, btnHide, radio, Domain) => {
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
      name: "interstedin",
      label: "Interested In",
      type: "select",
      options: [
        { value: "Select an option", label: "Select an option", hidden: true },
        { value: "Master degree program", label: "Master degree program" },
        { value: "Certification Program", label: "Certification Program" },
      ],
      required: true, // Conditionally required
      showField: !HideInterest, // Conditionally render the field
    },
    {
      name: "WorkExperience",
      label: "Select Work Experience",
      type: "select",
      options: [
        {
          value: "Select Work Experience",
          label: "Select Work Experience",
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
          value: "2-5 years",
          label: "2-5 years",
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
      required: Domain, // Conditionally required
      showField: Domain, // Conditionally render the field
    },
    {
      name: "Domain",
      label: "Select Domain",
      type: "select",
      options: [
        { value: "Select Domain", label: "Select Domain", hidden: true },
        {
          value: "Banking and Finance (BFSI) and IT",
          label: "Banking and Finance (BFSI) and IT",
        },
        {
          value: "Supplychain, Retail and Ecommerce",
          label: "Supplychain, Retail and Ecommerce",
        },
        {
          value: "Healthcare and Pharma",
          label: "Healthcare and Pharma",
        },
        {
          value: "Manufacturing and Automotive",
          label: "Manufacturing and Automotive",
        },
        {
          value: "Human Resource (HR)",
          label: "Human Resource (HR)",
        },
        {
          value: "Marketing and Sales",
          label: "Marketing and Sales",
        },
        {
          value: "Others",
          label: "Others",
        },
      ],
      required: Domain, // Conditionally required
      showField: Domain, // Conditionally render the field
    },
    {
      name: "HighestQualification",
      label: "Highest Qualification",
      type: "text",
      required: true,
      placeholder: "Enter your Highest Qualification",
      showField: true,
      required: Domain, // Conditionally required
      showField: Domain, // Conditionally render the field
    },
    {
      name: "LatestTechnology",
      label: "Latest technology you worked on",
      type: "text",
      required: true,
      placeholder: "Enter your Latest technology you worked on",
      showField: true,
      required: Domain, // Conditionally required
      showField: Domain, // Conditionally render the field
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
      required: true, // Conditionally required
      showField: radio, // Conditionally render the field
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
  ];
};

export { getEndPoint, getFormFields, getValidation, redirectionThankYou };
