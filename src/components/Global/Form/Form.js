import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./Form.module.css";
import {
  getEndPoint,
  getFormFields,
  getValidation,
  redirectionThankYou,
} from "./formFunction";

const Form = ({
  popup,
  setTrigger,
  downloadBrochure,
  radio,
  event,
  dataScience,
  fullStack,
  google,
  referrals,
  syllabus,
  learning,
  dataScienceCounselling,
  dataScienceGeneric,
  interstedInHide,
  promoCode,
  CTC,
  OS,
}) => {
  const router = useRouter();

  const [formFields, setFormFields] = useState(
    getFormFields(radio, google, referrals, interstedInHide, promoCode, CTC)
  );

  const [value, setValue] = useState();
  const [error, setError] = useState();
  const [alertMSG, setAlertMSG] = useState("");
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState({
    name: "",
    PromoCode: "",
    CTC: "",
    email: "",
    phone: "",
    upskillPlanning: "",
    upskillingObjective: "",
    platform: "",
    workExperience: "",
    Brief: "",
    dateTime: "",
    WAdropdown: "",
    currentOrganization: "",
    currentDesignation: "",
    interstedin: "",
    CountryCode: "",
    url: router.asPath,
  });

  const [submitting, setSubmitting] = useState(false); // State to track form submission

  useEffect(() => {
    setQuery({ ...query, phone: value });
    jsCookie.set("CARD", query.email, { expires: 14, secure: true });
  }, [value]);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const redirection = async () => {
    const myTimeout = setTimeout(() => {
      router.push("/Thank-you");
    }, 500);
  };

  let btnText = "Apply For Counselling";
  if (event) {
    btnText = "Register Now";
  }

  if (learning) {
    btnText = "Download Resources";
  }

  // Form Submit function
  const formSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting state to true
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const locationData = await fetchLocation();
      formData.append("country", locationData.country);
      formData.append("city", locationData.city);
      formData.append("region", locationData.region);
    } catch (error) {
      console.error("Error fetching location:", error.message);
    }

    try {
      const endPoint = getEndPoint(router.pathname, event);
      const pushPath = redirectionThankYou(
        router.pathname,
        fullStack,
        event,
        dataScience,
        dataScienceGeneric,
        dataScienceCounselling,
        redirection
      );

      setError(getValidation(radio, interstedInHide, query, CTC));
      const validation = getValidation(radio, interstedInHide, query, CTC);

      if (validation === false) {
        const sendData = await fetch(endPoint, {
          method: "POST",
          body: formData,
        });
        setQuery({
          name: "",
          PromoCode: "",
          CTC: "",
          email: "",
          phone: "",
          upskillPlanning: "",
          upskillingObjective: "",
          jobDescription: "",
          platform: "",
          workExperience: "",
          dateTime: "",
          WAdropdown: "",
          currentOrganization: "",
          currentDesignation: "",
          interstedin: "",
          country: "",
          region: "",
          city: "",
          url: router.asPath,
        });

        if (popup) {
          const off = () => {
            setTrigger(false);
          };
          off();
        }
        if (sendData.status === 200) {
          router.push(pushPath);
        }
      }
      setSubmitting(false); // Set submitting state to false after form submission
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const fetchLocation = async () => {
    const response = await fetch("https://ipinfo.io/json?token=a0d76b66419a6c");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch location: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log("API Response:", data);
    const { country, region, city } = data;
    return { country, region, city };
  };

  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        {formFields.map(
          (field) =>
            field.showField && ( // Only render the field if showField is true
              <div key={field.name} className={styles.formWrapper}>
                <label htmlFor={field.name}>
                  {field.label}
                  {field.required && (
                    <span className={styles.spanLabel}>*</span>
                  )}
                </label>
                {field.type === "phone" ? (
                  <>
                    {router.pathname === "/OS" || router.pathname === "/datascience/OS/s2-data-science-generic" ? (
                      <PhoneInput
                        inputStyle={field.inputStyle}
                        containerStyle={field.containerStyle}
                        name={field.name}
                        inputProps={field.inputProps}
                        country={"ae"}
                        onlyCountries={["ae"]}
                        placeholder={field.placeholder}
                        value={value}
                        onChange={(phone) => setValue(phone)}
                        required={field.required}
                      />
                    ) : (
                      <>
                        {router.pathname ===
                          "/datascience/OS/s2-masters-in-data-science-and-ai" ||
                        router.pathname ===
                          "/datascience/OS/sp/s2-artificial-intelligence-machine-learning-generic" ||
                        router.pathname ===
                          "/datascience/OS/sp/s2-data-analytics-generic" ||
                        router.pathname ===
                          "/datascience/OS/sp/s2-data-science-generic" ? (
                          // <div className={styles.osDiv}>
                          //   <input
                          //     type="type"
                          //     name="CountryCode"
                          //     className={styles.EmailInputs}
                          //     required={field.required}
                          //     placeholder="+CC"
                          //     value={query.CountryCode}
                          //     onChange={handleParam(value)}
                          //     style={{ width: "25%" }}
                          //   />
                          //   <input
                          //     type="phone"
                          //     name="phone"
                          //     className={styles.EmailInputs}
                          //     required={field.required}
                          //     placeholder="Phone Number"
                          //     value={query.phone}
                          //     onChange={handleParam(value)}
                          //   />
                          // </div>
                          <PhoneInput
                            inputStyle={field.inputStyle}
                            containerStyle={field.containerStyle}
                            name={field.name}
                            inputProps={field.inputProps}
                            onlyCountries={["eg"]}
                            country={"eg"}
                            placeholder={field.placeholder}
                            value={value}
                            onChange={(phone) => setValue(phone)}
                            required={field.required}
                          />
                        ) : (
                          <PhoneInput
                            inputStyle={field.inputStyle}
                            containerStyle={field.containerStyle}
                            name={field.name}
                            inputProps={field.inputProps}
                            country="in"
                            placeholder={field.placeholder}
                            value={value}
                            onChange={(phone) => setValue(phone)}
                            required={field.required}
                          />
                        )}
                      </>
                    )}
                  </>
                ) : field.type === "select" ? (
                  <select
                    name={field.name}
                    required={field.required}
                    value={query[field.name]}
                    className=""
                    onChange={handleParam(field.name)}
                  >
                    {field.options.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        hidden={option.hidden}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    className={styles.EmailInputs}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={query[field.name]}
                    onChange={handleParam(field.name)}
                  />
                )}
              </div>
            )
        )}
        <input name="country" value={query.country} type="hidden" />
        <input name="region" value={query.region} type="hidden" />
        <input name="city" value={query.city} type="hidden" />
        {error && (
          <p className={styles.errorMsg}>
            Please fill all the fields marked with *
          </p>
        )}
        {popup && (
          <input type="hidden" id="url" name="url" value={router.asPath} />
        )}
        <div>{toggle ? "" : <p className={styles.alert}>{alertMSG}</p>}</div>
        {OS ? (
          <div className={styles.bottomWrap}>
            <p className={styles.FormText}>
              By submitting the form, you agree to our Terms and Conditions and
              our Privacy Policy.
            </p>
            <button
              type="submit"
              className={styles.button}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Apply for Consultation"}
              {/* {"Apply for Consultation"} */}
            </button>
          </div>
        ) : (
          <>
            {syllabus ? (
              <div className={styles.bottomWrap}>
                <p className={styles.FormText}>
                  By submitting the form, you agree to our Terms and Conditions
                  and our Privacy Policy.
                </p>
                <button
                  type="submit"
                  className={styles.button}
                  disabled={submitting}
                >
                  {submitting
                    ? "Submitting..."
                    : downloadBrochure
                    ? "Download Now"
                    : btnText}
                  {/* {downloadBrochure ? "Download Now" : btnText}{" "} */}
                </button>
              </div>
            ) : (
              <>
                <p className={styles.FormText}>
                  By submitting the form, you agree to our Terms and Conditions
                  and our Privacy Policy.
                </p>
                <button
                  type="submit"
                  className={styles.button}
                  disabled={submitting}
                >
                  {submitting
                    ? "Submitting..."
                    : downloadBrochure
                    ? "Download Now"
                    : btnText}
                  {/* {downloadBrochure ? "Download Now" : btnText}{" "} */}
                </button>
              </>
            )}
          </>
        )}
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
      </form>
    </div>
  );
};

export default Form;
