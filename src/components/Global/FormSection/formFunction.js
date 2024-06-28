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
  }
};

const getFormFields = (HideInterest, btnHide, radio) => {
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
