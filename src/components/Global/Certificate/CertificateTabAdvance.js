import React, { useState } from "react";
import styles from "./Certificate.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
function CertificateTab({ data, singlecertificate, projectWithCertificate }) {
  const [MActive, setMActive] = useState(false);
  const [IActive, setIActive] = useState(true);
  const [IBCActive, setIBCActive] = useState(false);
  return (
    <section className={styles.CertificateTab}>
      <div className={styles.header}>
        <div className={styles.pWrap}>
          <p
            onClick={() => {
              setIActive(true);
              setMActive(false);
              setIBCActive(false);
            }}
            className={IActive ? styles.activeP : styles.inactiveP}
          >
            IBM
          </p>
          {singlecertificate ? (
            ""
          ) : (
            <>
              {" "}
              <p
                onClick={() => {
                  setIActive(false);
                  setMActive(true);
                  setIBCActive(false);
                }}
                className={MActive ? styles.activeP : styles.inactiveP}
              >
                Microsoft
              </p>
              <p
                onClick={() => {
                  setIActive(false);
                  setMActive(false);
                  setIBCActive(true);
                }}
                className={IBCActive ? styles.activeP : styles.inactiveP}
              >
                Project Certificate
              </p>
            </>
          )}
          {projectWithCertificate ? (
            <>
            <p
                onClick={() => {
                  setIActive(false);
                  setMActive(false);
                  setIBCActive(true);
                }}
                className={IBCActive ? styles.activeP : styles.inactiveP}
              >
                Project Certificate
              </p>
          </>
          ) : (
            ""
          )}
        </div>
      </div>

      {IActive ? (
        <div className={styles.MicroCert}>
          <div className={styles.rightSide}>
            <h6>{data.degreeCertificate.title}</h6>
            {data.degreeCertificate.para.map((data, i) => {
              return (
                <p key={i}>
                  <BsCheckCircle className={styles.checkCircle} />
                  {data}
                </p>
              );
            })}
          </div>
          <div className={styles.leftSide}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/cert-arrow.webp"
              alt="arrow"
              width={100}
              height={50}
              className={styles.arrowImg}
              style={{ position: "relative", top: "160px" }}
              loading="lazy"
              quality={40}
            />
            <div className={`${styles.CertificateDiv} imgWrapper`}>
              <Image
                src={data.degreeCertificate.img}
                alt="Certificate"
                loading="lazy"
                quality={100}
                width={1150}
                height={800}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {MActive ? (
        <div className={styles.MicroCert}>
          <div className={styles.rightSide}>
            <h6>{data.microCertificate.title}</h6>
            {data.microCertificate.para.map((data, i) => {
              return (
                <p key={i}>
                  <BsCheckCircle className={styles.checkCircle} />
                  {data}
                </p>
              );
            })}
          </div>
          <div className={styles.leftSide}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/cert-arrow.png"
              alt="arrow"
              quality={100}
              width={100}
              height={50}
              className={styles.arrowImg}
              style={{ position: "relative", top: "160px" }}
            />
            <div className={`${styles.CertificateDiv} imgWrapper`}>
              <Image
                src={data.microCertificate.img}
                alt="Certificate"
                width={1150}
                height={800}
                loading="lazy"
                quality={100}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {IBCActive ? (
        <div className={styles.MicroCert}>
          <div className={styles.rightSide}>
            <h6>{data.projectCertificate.title}</h6>
            {data.projectCertificate.para.map((data, i) => {
              return (
                <p key={i}>
                  <BsCheckCircle className={styles.checkCircle} />
                  {data}
                </p>
              );
            })}
          </div>
          <div className={styles.leftSide}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/cert-arrow.webp"
              alt="arrow"
              width={100}
              height={50}
              className={styles.arrowImg}
              style={{ position: "relative", top: "160px" }}
              loading="lazy"
              quality={60}
            />
            <div className={`${styles.CertificateDiv} imgWrapper`}>
              <Image
                src={data.projectCertificate.img}
                alt="Certificate"
                width={1150}
                height={800}
                loading="lazy"
                quality={100}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
export default CertificateTab;
