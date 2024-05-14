import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./FormOtp.module.css";
import {
  getEndPoint,
  getFormFields,
  getValidation,
  redirectionThankYou,
} from "./formFunction";

function FormOtp({
  popup,
  event,
  downloadBrochure,
  ADS,
  upSkillingHide,
  HideInterest,
  radio,
}) {
  const router = useRouter();
  const [btnHide, setBtnHide] = useState(false);
  const [radioBtn, setRadioBtn] = useState(0);
  const [sendOtpBtnHide, setSendOtpBtnHide] = useState(false);
  const [value, setValue] = useState();
  const [updateMobileNumber, setupdateMobileNumber] = useState();
  const [alertMSG, setAlertMSG] = useState("");
  const [toggle, setToggle] = useState(true);
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [formFields, setFormFields] = useState(
    getFormFields(HideInterest, btnHide, radio)
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    platform: "",
    otp: "",
    url: router.asPath,
    phone: "",
    interstedin: "",
    country: "",
    region: "",
    city: "",
  });

  const [submitting, setSubmitting] = useState(false); // State to track form submission

  useEffect(() => {
    setForm({ ...form, phone: value });
    jsCookie.set("CARD", form.email, { expires: 14, secure: true });
  }, [value]);

  useEffect(() => {
    const formattedPhone = `+${value}`;
    setForm((prevState) => ({ ...prevState, phone: value })); // Update the phone number in the form state
    jsCookie.set("CARDPHONE", formattedPhone, { expires: 14, secure: true }); // Set the phone number as the value of the "CARDPHONE" cookie
  }, [value]);

  const handleForm = () => (e) => {
    const name = e.target.name;
    console.log(e.target.name);
    const value = e.target.value;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let endPoint = getEndPoint(router.pathname, ADS);

  const ThankYou = redirectionThankYou();

  const Validation = getValidation(form.interstedin, form, HideInterest);

  let btnTxt = "Apply for  Counseliing";
  if (event) {
    btnTxt = "Register Now";
  }

  const sendOtp = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting state to true

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
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
      if (Validation) {
        setError(true);
      } else {
        setError(false);
        const mobileNumber = form.phone;
        const name = form.name;
        const email = form.email;
        // console.log(mobileNumber)

        if (mobileNumber !== undefined && name !== "" && email !== "") {
          const regex = /(\+91)/g;
          const str = mobileNumber.toString();
          const subst = `\$1-`;
          const result = str.replace(regex, subst);
          // console.log(result)
          const num = result.split("-")[0];
          console.log(num);
          const mobileNumber1 = result.split("-")[1];
          // console.log(mobileNumber1)

          if (num === "+91") {
            setupdateMobileNumber(mobileNumber1);
            const data = fetch(`${"/api/Authentication/sendOtp"}`, {
              method: "POST",
              body: JSON.stringify({ mobileNumber: mobileNumber1 }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((response) => {
                // console.log("Response", response)
                if (response.msg == "OTP Sent Successfully") {
                  setToggle(false);
                  setAlertMSG("OTP Sent Successfully");
                  setSendOtpBtnHide(true);
                  setBtnHide(true);
                } else if (response.msg == "OTP Sending Failed Through API") {
                  setSendOtpBtnHide(false);
                  setBtnHide(false);
                } else if (
                  response.msg == "Mobile Number is Not Match from DataBase"
                ) {
                  setSendOtpBtnHide(false);
                  setBtnHide(false);
                } else if (response.msg == "Invalid Phone Number") {
                  setToggle(false);
                  setAlertMSG("Invalid Phone Number");
                  setSendOtpBtnHide(false);
                  setBtnHide(false);
                } else {
                  console.log("API IS NOT WORKING");
                }
              })
              .catch((err) => {
                console.log("API IS NOT WORKING");
                console.log(err);
              });
          } else {
            fetch(endPoint, {
              method: "POST",
              body: formData,
            }).then(() =>
              setForm({
                name: "",
                email: "",
                platform: "",
                otp: "",
                url: router.asPath,
                phone: "",
                interstedin: "",
              })
            );

            setDisable(true);
            router.push(ThankYou);
          }
        } else {
          setToggle(false);
          setAlertMSG("Please Enter Empty Fields");
        }
      }
      setSubmitting(false);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const sendOtpDownload = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting state to true
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
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
      console.log("vdhjgvdghwgdg", "sendOtp");
      console.log("vhello", form.interstedin);

      const mobileNumber = form.phone;
      console.log(form.phone);
      const name = form.name;
      const email = form.email;
      if (mobileNumber !== undefined && name !== "" && email !== "") {
        const strippedPhoneNumber = mobileNumber.replace(/^91/, "");
        // console.log(result)
        const isIndianPhoneNumber = (phoneNumber) => {
          const indianPhoneNumberRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
          return indianPhoneNumberRegex.test(phoneNumber);
        };
        const checkNumber = isIndianPhoneNumber(mobileNumber);

        // console.log(mobileNumber1)

        if (checkNumber) {
          console.log("inside");
          setupdateMobileNumber(strippedPhoneNumber);
          const data = fetch(`${"/api/Authentication/sendOtp"}`, {
            method: "POST",
            body: JSON.stringify({ mobileNumber: strippedPhoneNumber }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((response) => {
              // console.log("Response", response)
              if (response.msg == "OTP Sent Successfully") {
                setToggle(false);
                setAlertMSG("OTP Sent Successfully");
                setSendOtpBtnHide(true);
                setBtnHide(true);
              } else if (response.msg == "OTP Sending Failed Through API") {
                setSendOtpBtnHide(false);
                setBtnHide(false);
              } else if (
                response.msg == "Mobile Number is Not Match from DataBase"
              ) {
                setSendOtpBtnHide(false);
                setBtnHide(false);
              } else if (response.msg == "Invalid Phone Number") {
                setToggle(false);
                setAlertMSG("Invalid Phone Number");
                setSendOtpBtnHide(false);
                setBtnHide(false);
              } else {
                console.log("API IS NOT WORKING");
              }
            })
            .catch((err) => {
              console.log("API IS NOT WORKING");
              console.log(err);
            });
        } else {
          fetch(`${endPoint}`, {
            method: "POST",
            body: formData,
          }).then(() =>
            setForm({
              name: "",
              email: "",
              platform: "",
              otp: "",
              url: router.asPath,
              phone: "",
              interstedin: "",
              country: "",
              region: "",
              city: "",
            })
          );

          setDisable(true);
          router.push(ThankYou);
        }
      } else {
        setToggle(false);
        setAlertMSG("Please Enter Empty Fields");
        // console.log("please enter number")
      }
      setSubmitting(false);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting state to true
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
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
      if (Validation) {
        setError(true);
      } else {
        setError(false);
        setSendOtpBtnHide(true);
        setBtnHide(true);
        const mobileNumber = updateMobileNumber;
        const otp = form.otp;

        const data = fetch(`${"/api/Authentication/matchOtp"}`, {
          method: "POST",
          body: JSON.stringify({ mobileNumber: mobileNumber, otp: otp }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            // console.log("Response", response)

            if (response.msg == "OTP Validated Successfully") {
              setToggle(false);
              setAlertMSG("OTP Validated Successfully");
              setSendOtpBtnHide(false);
              setBtnHide(false);

              fetch(`${endPoint}`, {
                method: "POST",
                body: formData,
              });
              setDisable(true);
              router.push(ThankYou);

              setSendOtpBtnHide(true);
              setBtnHide(true);
            } else if (response.msg == "OTP Not Validate") {
              setToggle(false);
              setAlertMSG("OTP Not Validate");
              setSendOtpBtnHide(true);
              setBtnHide(true);
            } else if (response.msg == "OTP Expired") {
              setSendOtpBtnHide(false);
              setBtnHide(false);
            } else if (response.msg == "Invalid Phone Number") {
              setToggle(false);
              setAlertMSG("Invalid Phone Number");
              setSendOtpBtnHide(false);
              setBtnHide(false);
            } else {
              console.log("API IS NOT WORKING");
            }
          })
          .catch((err) => {
            console.log("API IS NOT WORKING");
            console.log(err);
          });
      }
      setSubmitting(false);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        "https://ipinfo.io/json?token=a0d76b66419a6c"
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch location: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      console.log("API Response:", data);
      const { country, region, city } = data;
      // If city is not available, provide a default value or placeholder
      const finalCity = city ? city : "Unknown";
      return { country, region, city: finalCity };
    } catch (error) {
      console.error("Error fetching location:", error.message);
      // If there's an error fetching location data, return default or placeholder values
      return {
        country: "Country Undefined",
        region: "Region Undefined",
        city: "City Undefined",
      };
    }
  };

  return (
    <>
      <section className={styles.App}>
        <form autoComplete="false" onSubmit={formSubmit} method="POST">
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
                  ) : field.type === "select" ? (
                    <select
                      name={field.name}
                      required={field.required}
                      value={form[field.name]}
                      className=""
                      onChange={handleForm(field.name)}
                    >
                      {field.options.map((option) => (
                        <option
                          name={field.name}
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
                      value={form[field.name]}
                      onChange={handleForm(field.name)}
                    />
                  )}
                </div>
              )
          )}
          {btnHide ? (
            <div className={styles.formWrapper}>
              <label htmlFor="OTP">
                OTP
                <span className={styles.spanLabel}>*</span>
              </label>
              <input
                className={styles.EmailInputs}
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleForm("otp")}
                required={true}
                placeholder="Enter OTP"
                maxLength={4}
                minLength={4}
              />
            </div>
          ) : (
            ""
          )}
          <input name="country" value={form.country} type="hidden" />
          <input name="region" value={form.region} type="hidden" />
          <input name="city" value={form.city} type="hidden" />
          {error ? (
            <p
              style={{
                margin: "0px 0px 5px 0px",
                color: "#0072bc",
                fontSize: "18px",
              }}
            >
              Please select a valid option
            </p>
          ) : (
            ""
          )}
          <div>{toggle ? "" : <p className={styles.alert}>{alertMSG}</p>}</div>
          <p className={styles.FormText} style={{ fontSize: "10px" }}>
            By submitting the form, you agree to our Terms and Conditions and
            our Privacy Policy.
          </p>

          {sendOtpBtnHide ? (
            ""
          ) : (
            <button
              className={styles.button}
              disabled={submitting}
              onClick={upSkillingHide ? sendOtpDownload : sendOtp}
            >
              {submitting
                ? "Sending..."
                : downloadBrochure
                ? "Download Now"
                : "Apply Now"}
            </button>
          )}

          {btnHide ? (
            <>
              {disable ? (
                <div className={styles.ring}>
                  <div className={styles.ldsring}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              ) : (
                <button className={styles.button} disabled={submitting}>
                  {submitting
                    ? "Submitting..."
                    : downloadBrochure
                    ? "Download Now"
                    : "Apply Now"}
                </button>
              )}
            </>
          ) : (
            ""
          )}

          {popup ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <input
                type="hidden"
                id="url"
                name="url"
                value={router.asPath}
              ></input>
            </div>
          ) : (
            ""
          )}

          <input type="hidden" id="zc_gad" name="zc_gad" value="" />
        </form>
      </section>
    </>
  );
}

export default FormOtp;
