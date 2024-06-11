import React from "react";
import styles from "./Certificate.module.css";
import CertificateTabAdvance from "./CertificateTabAdvance";
const Certificate = ({
  NoCertificate,
  data,
  Degree,
  singlecertificate,
  projectWithCertificate,
}) => {
  return NoCertificate ? (
    ""
  ) : (
    <div className={`${styles.Certificate}`} id="Degree">
      {Degree ? (
        ""
      ) : (
        <h4 className={styles.infop}>Globally Recognized Program</h4>
      )}
      <CertificateTabAdvance
        data={data}
        singlecertificate={singlecertificate}
        projectWithCertificate={projectWithCertificate}
      />
    </div>
  );
};
export default Certificate;
