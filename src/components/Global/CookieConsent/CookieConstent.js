
import CookieConsent from "react-cookie-consent";

const MyCookieConsent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="myCookieConsent"
      style={{
        background: "#212121",
        display: "flex",
        justifyContent: "center",
        flex: "0",

      }}
      buttonStyle={{ color: "#fff", fontSize: "13px" }}
      expires={150}
    >
      <div>
      This website uses cookies to enhance the user experience.</div>
    </CookieConsent>
  );
};

export default MyCookieConsent;