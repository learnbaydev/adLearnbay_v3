import styles from "./Certificate.module.css";
import CertificateTabAdvance from "./CertificateTabAdvance";

const Certificate = ({
  NoCertificate,
  data,
  singlecertificate,
  cyber,
  ecMicro
}) => {
  return NoCertificate ? (
    ""
  ) : (
    <div className={`${styles.Certificate}`}>
      <h4 className={styles.infop}>Globally Recognized Program</h4>
      <CertificateTabAdvance
      singlecertificate={singlecertificate}
        degreeCertificate={data.degreeCertificate}
        projectCertificate={data.projectCertificate}
        microCertificate={data.microCertificate}
        data={data}
        cyber={cyber}
        ecMicro={ecMicro}
      />
    </div>
  );
};
export default Certificate;
