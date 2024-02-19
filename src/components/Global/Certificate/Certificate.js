import React from "react";
import styles from "./Certificate.module.css";
import CertificateTabAdvance from "./CertificateTabAdvance";
const Certificate = ({ NoCertificate, data, Degree }) => {
  return NoCertificate ? (
    ""
  ) : (
    <div className={`${styles.Certificate}`} id="Degree">
      {Degree ? ("") : (
      <h4 className={styles.infop}>Globally Recognized Program</h4>
      )}
      <CertificateTabAdvance data={data} />
    </div>
  );
};
export default Certificate;
